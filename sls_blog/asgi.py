"""
ASGI config for sls_blog project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

import configurations
from channels.http import AsgiHandler
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
from .ws_urls import websocket_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sls_blog.settings')
os.environ.setdefault('DJANGO_CONFIGURATION', 'BaseConfig')

configurations.setup()
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns))
    # Just HTTP for now. (We can add other protocols later.)
})