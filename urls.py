from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.conf.urls import patterns
from alapage.views import HomepageView, PageView

import xadmin

from xadmin.plugins import xversion
xversion.register_models()

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = patterns(
        '',
        url(r'^__debug__/', include(debug_toolbar.urls)),)

urlpatterns = patterns('',
    url(r'^manage/', include(xadmin.site.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^comptes/', include('allauth.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^(?P<url>.*/)$', PageView.as_view()),
    url(r'^$', HomepageView.as_view()),
    )

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
