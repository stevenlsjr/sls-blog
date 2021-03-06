"""
ASGI config for sls_blog project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from configurations import importer
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sls_blog.settings')
os.environ.setdefault('DJANGO_CONFIGURATION', 'BaseConfig')

importer.install()
application = get_asgi_application()
