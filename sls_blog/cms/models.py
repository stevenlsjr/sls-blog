from dataclasses import Field
from django.db import models
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.api import APIField
from wagtail.core import blocks, fields
from wagtail.core.fields import RichTextField
from wagtail.core.models import Site
from wagtail.images.fields import ImageField
from wagtail.images.blocks import ImageChooserBlock, ImageChooserBlockComparison
# Create your models here.
from wagtail.core.models import Page
from wagtail.search import index
from .blocks import RichTextBlock
from wagtail_headless_preview.models import HeadlessPreviewMixin

from grapple.helpers import register_query_field

from grapple.models import (
    GraphQLString,
    GraphQLStreamfield,
)


class BlogLandingPage(HeadlessPreviewMixin, Page):
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro', classname="full")
    ]

    graphql_fields = [
        GraphQLString("intro"),
    ]


DEFAULT_BLOCK_TYPES = [('rich_text', RichTextBlock()),
                       ('heading', blocks.CharBlock()),
                       ('image', ImageChooserBlock())]


class BlogPage(HeadlessPreviewMixin, Page):
    intro = models.CharField(max_length=250)
    body = fields.StreamField(DEFAULT_BLOCK_TYPES)

    api_fields = [APIField('intro'), APIField('body')]

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
        StreamFieldPanel('body'),
    ]
    graphql_fields = [GraphQLString("intro"), GraphQLStreamfield("body")]


class SiteBlogBranding(models.Model):
    site = models.OneToOneField(Site, on_delete=models.CASCADE, related_name='site_branding')
    branding = models.ForeignKey('BlogBranding', on_delete=models.CASCADE, related_name='branding')



@register_query_field("branding")
class BlogBranding(models.Model):
    sites = models.ManyToManyField(Site,
                                  through=SiteBlogBranding,
                                  blank=True )

    title = models.TextField()
    is_live = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    panels = [
        FieldPanel('title'),
        FieldPanel('is_live'),
        FieldPanel('sites')
    ]