from collections import namedtuple
from enum import auto
from typing import Type
from django import setup
from django.test import TestCase
from faker import Faker
from . import models
from .. import factories
from wagtail.core.models import Site, Locale
from wagtail.tests.utils import WagtailPageTests
import pytest
from django.core.management import call_command
from graphene_django.utils.testing import graphql_query, GraphQLTestCase
from django.db import IntegrityError, transaction

@pytest.fixture
def gql_query(client):
    def func(*args, **kwargs):
        return graphql_query(*args, **kwargs, client=client)

    return func


# Create your tests here.
@pytest.fixture
def example_site(transactional_db, faker: Faker):
    Locale.objects.get_or_create(language_code='en-us')
    call_command('loaddata', 'sample_sites.json', '')


@pytest.mark.django_db(transaction=True)
def test_query_preview_page(example_site, gql_query):
    url_path = example_site['root_page'].slug
    resp = gql_query('''
    query Preview($urlPath: String){
        page(urlPath: $urlPath) {
            id
            title
        }
    }
    ''',
                     variables={'urlPath': '/'})
    assert 200 <= resp.status_code < 300
    data = resp.json()['data']
    assert data['page']['title'] == example_site['root_page'].title


class TestBlogBranding(WagtailPageTests):
    faker: Faker
    gql_query: Type[graphql_query]

    @classmethod
    def setUpTestData(cls) -> None:
        f = Faker()
        cls.root_page = models.BlogLandingPage.add_root(title=f.sentence(),
                                                        slug=f.slug())
        cls.site_a = Site.objects.create(hostname=f.unique.hostname(),
                                         port=f.port_number(),
                                         root_page=cls.root_page)
        cls.site_b = Site.objects.create(hostname=f.unique.hostname(),
                                         port=f.port_number(),
                                         root_page=cls.root_page)
        cls.site_c = Site.objects.create(hostname=f.unique.hostname(),
                                         port=f.port_number(),
                                         root_page=cls.root_page,
                                         is_default_site=True)
        cls.branding_a = models.BlogBranding.objects.create(title=f.unique.sentence())
        cls.branding_b = models.BlogBranding.objects.create(title=f.unique.sentence())

    @pytest.fixture(autouse=True)
    def setup(self, faker: Faker, gql_query):
        self.faker = faker
        self.gql_query = gql_query

    def test_default_site_branding(self):
        branding_a = self.branding_a
        branding_b = self.branding_b

        
        branding_a.sites.add(self.site_a)
        with transaction.atomic():
            with pytest.raises(IntegrityError):
                    branding_b.sites.add(self.site_a)   
        branding_b.sites.add(self.site_b)
        branding_a.sites.add(self.site_c)
        assert set(branding_a.sites.values_list('id', flat=True)) == {self.site_a.id, self.site_c.id}
        assert set(branding_b.sites.values_list('id', flat=True)) == {self.site_b.id}

    def test_site_reverse_relation(self):
        self.branding_a.sites.add(self.site_a)
        self.branding_b.sites.add(self.site_b)
        self.branding_a.sites.add(self.site_c)

        self.site_a.refresh_from_db()
        self.site_b.refresh_from_db()
        assert self.site_a.site_branding.branding == self.branding_a
        assert self.site_c.site_branding.branding == self.branding_a
        assert self.site_b.site_branding.branding == self.branding_b


@pytest.fixture
def setup_branding_data(transactional_db, faker: Faker):
    root_page = models.BlogLandingPage.add_root(title=faker.sentence(),
                                                        slug=faker.slug())
    site_a = Site.objects.create(hostname=faker.unique.hostname(),
                                            port=faker.port_number(),
                                         root_page=root_page)
    brand_a = models.BlogBranding.objects.create(title=faker.unique.sentence())
    return namedtuple('SetupBrandingData', ['site_a', 'brand_a'])(site_a, brand_a=brand_a)

@pytest.mark.django_db(transaction=True)
def test_gql_fetch_site_branding(gql_query, setup_branding_data):
    site_a, brand_a = setup_branding_data
    brand_a.sites.add(site_a)
    resp = gql_query("""
    query GetSiteBranding($siteId: ID){
        site(id: $siteId) {
            id
        }
        branding(siteId: $siteId) {
            id
        }
    }
    """, variables={'siteId': site_a.id})

    data = resp.json()
    assert data['data']['site']['id'] == str(site_a.id)
    assert data['data']['branding']['id'] == str(brand_a.id)