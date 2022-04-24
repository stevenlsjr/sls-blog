# re-implementation of grapple schema
# for easier extension

from code import interact
import site
import django
import graphene
from graphene import relay

from graphene_django import DjangoListField, DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from django.contrib.auth import get_user_model
from grapple.types.pages import Page, PageInterface, PagesQuery
from grapple.types.sites import SitesQuery, SiteObjectType
from wagtail.core.models import Page as WagtailPage, Site
from grapple.types.structures import PositiveInt
import django_filters

from grapple.types.structures import QuerySetList

User = get_user_model()
from .models import BlogBranding


class PageNode(DjangoObjectType):
    class Meta:
        model = WagtailPage
        fields = ('id', )
        interfaces = (relay.Node, )


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ('id', 'is_active', 'email', 'is_staff', 'is_active',
                  'date_joined', 'username')
        filter_fields = {
            'username': ['iexact', 'icontains'],
            'email': ['iexact', 'icontains'],
            'is_staff': ['exact'],
            'is_active': ['exact'],
            'date_joined': ['exact', 'gt', 'lt', 'gte', 'lte'],
        }
        interfaces = (relay.Node, )


class UserIdentityType(DjangoObjectType):
    class Meta:
        model = User


class BlogBrandingFilterSet(django_filters.FilterSet):
    class Meta:
        model = BlogBranding
        fields = {'title': ['exact'], 'sites__id': ['in']}


class BlogBrandingObject(DjangoObjectType):
    class Meta:
        model = BlogBranding


class AuthQuery(graphene.ObjectType):
    users = DjangoFilterConnectionField(UserType)
    user = relay.Node.Field(UserType)

    branding = graphene.Field(BlogBrandingObject,
                              id=graphene.Argument(graphene.ID),
                              site_id=graphene.Argument(graphene.ID))

    current_site = graphene.Field(SiteObjectType,
                                  hostname=graphene.String(),
                                  port=PositiveInt())

    def resolve_current_site(root,
                             info,
                             *,
                             hostname=None,
                             port=None,
                             **kwargs):
        from wagtail.core.models import Site
        if hostname is None and port is None:
            return Site.find_for_request(info.context)
        else:
            site = Site.objects.filter(hostname=hostname, port=port).first()
            site = site or Site.objects.get(is_default_site=True)
            return site

    def resolve_brandings(root, info, *, id=None, site_id=None, is_live=False):
        qs = BlogBranding.objects.all()
        if is_live is not None:
            qs = qs.filter(is_live=is_live)
        if id is not None:
            qs = qs.filter(id=id)
        if site_id is not None:
            qs = qs.filter(sites__id__in=(site_id,))
        return qs

    def resolve_branding(root, info, *, id=None, site_id=None, is_live=False):
        qs = BlogBranding.objects.all()
        if is_live is not None:
            qs = qs.filter(is_live=is_live)
        if id is not None:
            qs = qs.filter(id=id)
        if site_id is not None:
            qs = qs.filter(sites__id__in=(site_id,))
        return qs.first()

    # pages_ext = DjangoFilterConnectionField(PageNode)
    # page_ext = relay.Node.Field(PageNode)

    # user_identity = graphene.Field(UserIdentityType)

    # def resolve_users(root, info, **kwargs):
    #     return User.objects.filter(is_active=True)

    # def resolve_user(root, info, id):
    #     return User.objects.filter(is_active=True).get(pk=id)

    # def resolve_user_identity(root, info, **kwargs):
    #     return info.context.user


class AuthMutations(graphene.ObjectType):
    pass


class SiteObjectTypeExt(SiteObjectType):
    branding = graphene.Field(BlogBrandingObject)
    def resolve_branding(self, info, **kwargs):
        breakpoint()
    class Meta:
        model = Site


class SiteQueryExt(SitesQuery()):
    site = graphene.Field(
        SiteObjectTypeExt, hostname=graphene.String(), id=graphene.ID()
    )
    sites = QuerySetList(
        graphene.NonNull(SiteObjectTypeExt), enable_search=True, required=True
    )