from typing import List
from wagtail.core import hooks
from wagtail.core.rich_text import *
import grapple.wagtail_hooks
from .queries import AuthQuery

@hooks.register('register_schema_query')
def register_gql_queries(query_mixins: List):
    query_mixins.insert(0, AuthQuery)
    pass