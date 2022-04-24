from typing import List
from wagtail.core import hooks
from wagtail.core.rich_text import *
from grapple.types.pages import PagesQuery
from wagtail.contrib.modeladmin.options import (ModelAdmin,
                                                modeladmin_register)
import grapple.wagtail_hooks

from sls_blog.cms.models import BlogBranding
from .queries import AuthQuery, SiteQueryExt
from grapple.types.sites import SitesQuery


@hooks.register('register_schema_query')
def register_gql_queries(query_mixins: List):
    query_mixins[:] = [i for i in query_mixins if i != SitesQuery()]
    query_mixins.append(SiteQueryExt)
    query_mixins.insert(0, AuthQuery)
    breakpoint()

    pass


class BlogBrandingAdmin(ModelAdmin):
    model = BlogBranding
    menu_label = "Blog Site Branding"
    list_display = ("title", 'is_live')


modeladmin_register(BlogBrandingAdmin)