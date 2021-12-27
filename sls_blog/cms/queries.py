# re-implementation of grapple schema
# for easier extension

import graphene
from graphene import relay

from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from django.contrib.auth import get_user_model
from grapple.types.pages import Page, PageInterface, PagesQuery
from wagtail.core.models import Page as WagtailPage
User = get_user_model()

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


class AuthQuery(graphene.ObjectType):
    users = DjangoFilterConnectionField(UserType)
    user = relay.Node.Field(UserType)

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
