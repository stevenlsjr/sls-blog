from configurations import Configuration, values
from pathlib import Path
from django.utils.functional import classproperty
from django.utils.translation import gettext_lazy as _


class BaseConfig(Configuration):
    DEBUG = values.BooleanValue(False)
    TEMPLATE_DEBUG = values.BooleanValue(DEBUG)
    DATABASES = values.DatabaseURLValue(
        'postgres://%2Fvar%2Flib%2Fpostgresql/sls_blog')
    SECRET_KEY = values.SecretValue()
    CACHES = values.CacheURLValue('locmem://default')

    # Build paths inside the project like this: BASE_DIR / 'subdir'.
    BASE_DIR = (Path(__file__).parent / '../..').resolve(strict=True)

    # Quick-start development settings - unsuitable for production
    # See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

    ALLOWED_HOSTS = ['localhost']
    AUTH_USER_MODEL = 'slsblog_auth.User'
    # Application definition

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'corsheaders',
        'wagtail.contrib.forms',
        'wagtail.contrib.redirects',
        "wagtail.contrib.search_promotions",
        "wagtail.contrib.modeladmin",
        'wagtail.embeds',
        'wagtail.sites',
        'wagtail.users',
        'wagtail.snippets',
        'wagtail.documents',
        'wagtail.images',
        'wagtail.search',
        'wagtail.admin',
        'wagtail.core',
        'modelcluster',
        'taggit',
        'wagtail.api.v2',
        'rest_framework',
        "channels",
        "graphql_ws.django",
        "graphene_django",
        "grapple",
        'sls_blog.auth',
        'sls_blog.cms',
        'wagtail_headless_preview',
    ]

    REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES':
        ['rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'],
        'DEFAULT_AUTHENTICATION_CLASSES': (
            'rest_framework.authentication.BasicAuthentication',
            'rest_framework.authentication.SessionAuthentication',
            'rest_framework_simplejwt.authentication.JWTAuthentication',
        )
    }
    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware',
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
        'wagtail.contrib.redirects.middleware.RedirectMiddleware',
    ]

    ROOT_URLCONF = 'sls_blog.urls'
    WAGTAIL_SITE_NAME = 'Stevenlsjr Blog'
    WAGTAILAPI_BASE_URL = values.Value(default=None)
    WAGTAIL_I18N_ENABLED = True
    LANGUAGES = WAGTAIL_CONTENT_LANGUAGES = [
    ('en-us', _("English (United States)")),
    ('en-gb', _("English (United Kingdom)")),
    ('es-es', _("Spanish (Spain)")),
    ('es-mx', _("Spanish (Mexico)")),
]

    CORS_ORIGIN_WHITELIST = values.ListValue(default=[])
    CORS_ORIGIN_ALLOW_ALL = values.BooleanValue(default=False)
    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]

    WSGI_APPLICATION = 'sls_blog.wsgi.application'
    # ASGI_APPLICATION = 'sls_blog.asgi.application'
    ASGI_APPLICATION = "graphql_ws.django.routing.application"

    # Password validation
    # https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

    AUTH_PASSWORD_VALIDATORS = [
        {
            'NAME':
            'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
        },
        {
            'NAME':
            'django.contrib.auth.password_validation.MinimumLengthValidator',
        },
        {
            'NAME':
            'django.contrib.auth.password_validation.CommonPasswordValidator',
        },
        {
            'NAME':
            'django.contrib.auth.password_validation.NumericPasswordValidator',
        },
    ]

    # Internationalization
    # https://docs.djangoproject.com/en/3.1/topics/i18n/

    LANGUAGE_CODE = 'en-us'

    TIME_ZONE = 'UTC'

    USE_I18N = True

    USE_L10N = True

    USE_TZ = True

    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/3.1/howto/static-files/

    DEFAULT_FILE_STORAGE = values.Value(
        'django.core.files.storage.FileSystemStorage')
    STATICFILES_STORAGE = values.Value(
        'django.contrib.staticfiles.storage.StaticFilesStorage')

    AZURE_ACCOUNT_NAME = values.Value(environ_required=False)
    AZURE_ACCOUNT_KEY = values.Value(environ_required=False)
    AZURE_CONTAINER = values.Value(environ_required=False)
    PUBLIC_AZURE_CONTAINER = values.Value(environ_required=False)
    AZURE_CONNECTION_STRING = values.Value(default=None,
                                           environ_required=False)
    AZURE_CUSTOM_CONNECTION_STRING = values.Value(default=None,
                                                  environ_required=False)
    PUBLIC_AZURE_CONTAINER = values.Value(environ_required=False)
    STATIC_URL = values.Value('/static/')
    MEDIA_URL = values.Value('/media/')
    STATIC_ROOT = values.PathValue(BASE_DIR / '.static')
    MEDIA_ROOT = values.PathValue(BASE_DIR / '.media')

    def GRAPHENE(self):
        cfg = {
            "SCHEMA": "grapple.schema.schema",
            "MIDDLEWARE": ["grapple.middleware.GrappleMiddleware"],
            "SUBSCRIPTION_PATH": "/subscriptions"
        }
        if self.DEBUG:
            cfg['MIDDLEWARE'].insert(
                0, 'graphene_django.debug.DjangoDebugMiddleware')
        return cfg

    GRAPPLE = {
        'APPS': {
            "slsblog_cms": ""
        },
        'EXPOSE_GRAPHIQL': values.BooleanValue(True)
    }

    BASE_URL = values.URLValue('http://localhost:8000')

    HEADLESS_PREVIEW_CLIENT_URLS = values.DictValue({
        'default':
        'http://localhost:3000/preview',
    })
    HEADLESS_PREVIEW_LIVE = values.BooleanValue(True)