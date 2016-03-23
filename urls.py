from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.conf.urls import patterns
from filebrowser.sites import site
from alapage.views import HomepageView, PageView

if settings.DEBUG_TOOLBAR:
    import debug_toolbar
    urlpatterns = patterns(
        '',
        url(r'^__debug__/', include(debug_toolbar.urls)),)

urlpatterns = patterns('',
    url(r'^admin/filebrowser/', include(site.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^account/', include('allauth.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    )

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
urlpatterns += url(r'^', include('alapage.urls')),