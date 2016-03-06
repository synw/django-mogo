# -*- coding: utf-8 -*-

import random
import sys

project_name=sys.argv[1:][0]

def secret_key():
    return ''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)') for i in range(50)])

file_content = """# -*- coding: utf-8 -*-

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '"""+secret_key()+"""'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
DEBUG_TOOLBAR = True

ALLOWED_HOSTS = ['127.0.0.1','localhost']

INSTALLED_APPS = (
    'django_admin_bootstrapped',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'django.contrib.flatpages',
    'braces',
    'bootstrap3',
    'bootstrapform',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'mptt',
    'sorl.thumbnail',
    'ckeditor',
    'codemirror2',
    'reversion',
    'dirtyedit',
    'jssor',
    'alapage',
    'zongo',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
)

ROOT_URLCONF = '"""+project_name+""".urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                #'allauth.account.context_processors.account',
                #'allauth.socialaccount.context_processors.socialaccount',
            ],
            'debug': True,
        },
    },
]

WSGI_APPLICATION = '"""+project_name+""".wsgi.application'

if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }

if not DEBUG or 'easy_thumbnails' in INSTALLED_APPS:
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
            'LOCATION': '127.0.0.1:11211',
        }
    }

LOCALE_PATHS = ( os.path.join(BASE_DIR, 'locale'), )

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'fr'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'
#STATIC_ROOT = os.path.join(BASE_DIR, 'static')

STATICFILES_DIRS = (
                    os.path.join(BASE_DIR, 'static'),
                    )

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

SITE_ID = 1

LOGIN_URL = '/account/login/'
LOGIN_REDIRECT_URL = '/'
LOGOUT_URL = "/account/logout/"

#~ Allauth settings
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
SOCIALACCOUNT_EMAIL_REQUIRED = False
SOCIALACCOUNT_EMAIL_VERIFICATION  = False
ACCOUNT_PASSWORD_MIN_LENGTH = 8
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = '/'
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = '/account/'

AUTHENTICATION_BACKENDS = (
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',
    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
)

#~ ckeditor settings
CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_JQUERY_URL = '/static/js/jquery-2.1.4.min.js'
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar':  [
                    ["Format", "Styles", "Bold", "Italic", "Underline", '-', 'RemoveFormat'],
                    ['NumberedList', 'BulletedList', "Indent", "Outdent", 'JustifyLeft', 'JustifyCenter','JustifyRight', 'JustifyBlock'],
                    ["Image", "Table", "Link", "Unlink", "Anchor", "SectionLink", "Subscript", "Superscript"], ['Undo', 'Redo'],
                    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],["Source", "Maximize"],
                    ]
    },
}

#~ debug
if DEBUG_TOOLBAR:
    MIDDLEWARE_CLASSES+=('debug_toolbar.middleware.DebugToolbarMiddleware',)
    INSTALLED_APPS+=('debug_toolbar',)
    JQUERY_URL = '/static/js/jquery-2.1.4.min.js'
if DEBUG:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

#~ tests    
TEST_RUNNER = 'django_nose.NoseTestSuiteRunner'
NOSE_ARGS = [
    '--with-coverage',
    #'--cover-package=alapage,jssor',
    '--nocapture',
    '--nologcapture',
]

# admin bootstraped
DAB_FIELD_RENDERER = 'django_admin_bootstrapped.renderers.BootstrapFieldRenderer'
from django.contrib import messages
MESSAGE_TAGS = {
            messages.SUCCESS: 'alert-success success',
            messages.WARNING: 'alert-warning warning',
            messages.ERROR: 'alert-danger error'
}

#~ sorl thumbnail
if DEBUG:
    THUMBNAIL_DEBUG = True
    import logging
    from sorl.thumbnail.log import ThumbnailLogHandler
    
    handler = ThumbnailLogHandler()
    handler.setLevel(logging.ERROR)
    logging.getLogger('sorl.thumbnail').addHandler(handler)
    
#~ django-filer
THUMBNAIL_HIGH_RESOLUTION = True
THUMBNAIL_PROCESSORS = (
    'easy_thumbnails.processors.colorspace',
    'easy_thumbnails.processors.autocrop',
    #'easy_thumbnails.processors.scale_and_crop',
    'filer.thumbnail_processors.scale_and_crop_with_subject_location',
    'easy_thumbnails.processors.filters',
)

#~ django-alapage
ALAPAGE_USE_REVERSION = True
ALAPAGE_USE_THEMES = True
ALAPAGE_USE_JSSOR = True
ALAPAGE_USE_PRESENTATIONS = True
ALAPAGE_THEMES = (
                  ('dark','Dark'),
                  ('light','Light'),
                  )

"""

filepath=project_name+'/settings.py'
filex = open(filepath, "w")
filex.write(file_content)
filex.close()

