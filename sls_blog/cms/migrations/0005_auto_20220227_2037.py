# Generated by Django 3.2.12 on 2022-02-27 20:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0066_collection_management_permissions'),
        ('slsblog_cms', '0004_auto_20211205_2109'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogBranding',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('is_live', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='SiteBlogBranding',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branding', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='branding', to='slsblog_cms.blogbranding')),
                ('site', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='site_branding', to='wagtailcore.site')),
            ],
        ),
        migrations.AddField(
            model_name='blogbranding',
            name='sites',
            field=models.ManyToManyField(through='slsblog_cms.SiteBlogBranding', to='wagtailcore.Site'),
        ),
    ]
