from django.test import TestCase
from . import models
from wagtail.core.models import Site
import pytest

from graphene_django.utils.testing import graphql_query


@pytest.fixture
def gql_query(client):
    def func(*args, **kwargs):
        return graphql_query(*args, **kwargs, client=client)

    return func


# Create your tests here.
@pytest.fixture
def example_site(transactional_db):
    pass


@pytest.mark.django_db(transaction=True)
def test_graphql_query(example_site, gql_query):
    pass