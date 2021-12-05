# Generated by Django 3.1.13 on 2021-12-05 21:09

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wagtailredirects', '0006_redirect_increase_max_length'),
        ('contenttypes', '0002_remove_content_type_name'),
        ('wagtailforms', '0004_add_verbose_name_plural'),
        ('wagtailcore', '0060_fix_workflow_unique_constraint'),
        ('slsblog_cms', '0003_auto_20201024_2125'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BlogIndexPage',
            new_name='BlogLandingPage',
        ),
    ]