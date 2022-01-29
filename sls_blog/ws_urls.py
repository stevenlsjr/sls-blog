from django.urls import include, path
from graphql_ws.django.routing import websocket_urlpatterns as gql_urlpatterns
websocket_urlpatterns = [] + gql_urlpatterns