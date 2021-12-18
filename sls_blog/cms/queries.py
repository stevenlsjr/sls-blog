# re-implementation of grapple schema 
# for easier extension

import graphene
from graphene_django import DjangoObjectType

from django.contrib.auth import get_user_model

User = get_user_model()


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ('id','is_active', 'is_staff', 'username')

class UserIdentityType(DjangoObjectType):
    class Meta:
        model = User

class AuthQuery(graphene.ObjectType):
    users = graphene.List(UserType)
    user_by_id = graphene.Field(UserType, id=graphene.Int())

    user_identity = graphene.Field(UserIdentityType)

    def resolve_users(root, info, **kwargs):
        return User.objects.filter(is_active=True)

    def resolve_user_by_id(root, info, id):
        return User.objects.filter(is_active=True).get(pk=id)

    def resolve_user_identity(root, info, **kwargs):
        return info.context.user

class AuthMutations(graphene.ObjectType):
    pass
