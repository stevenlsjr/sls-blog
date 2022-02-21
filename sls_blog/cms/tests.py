from django.test import TestCase
from faker import Faker
from . import models
from .. import factories
from wagtail.core.models import Site, Locale
from wagtail.tests.utils import WagtailPageTests
import pytest
from django.core.management import call_command
from graphene_django.utils.testing import graphql_query


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

