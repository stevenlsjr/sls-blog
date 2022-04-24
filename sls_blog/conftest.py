
import pytest
@pytest.fixture(scope='session')
def django_db_setup(django_db_setup, django_db_blocker):
    from wagtail.core.models import Locale
    with django_db_blocker.unblock():
        Locale.objects.get_or_create(language_code='en-us')