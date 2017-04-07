from __future__ import print_function
import random
import sys


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    

option = '['+bcolors.OKBLUE+'x'+bcolors.ENDC+']'
    
project_name = sys.argv[1:][0]
base_dir = sys.argv[1:][1]
project_dir = base_dir+'/'+project_name

msg = 'What is the timezone of your project? [UTC] > '
timezone = input(msg)
if not timezone:
    timezone = 'UTC'
print("Timezone set to "+timezone)
    
msg = 'What is the language code for your project? [en] > '
language_code = input(msg)
if not language_code:
    language_code = 'en'
print("Language code set to "+language_code)

msg = 'Debug: [Y/n] > '
debug_msg = input(msg)
debug = True
if debug_msg == 'n' or debug_msg == 'no':
    debug = False
    print("Debug mode is disabled")
else:
    print("Debug mode is enabled")

databases = {
            'sqlite':"""DATABASES = {
                    'default': {
                        'ENGINE': 'django.db.backends.sqlite3',
                        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
                    }
                }""",
             }
database = databases['sqlite']

def secret_key():
    return ''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)') for i in range(50)])

file_content = """# -*- coding: utf-8 -*-

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '"""+secret_key()+"""'

# SECURITY WARNING: don't run with debug turned on in production!\n\n"""
if debug is True:
    file_content += 'DEBUG = True\n'
else:
    file_content += 'DEBUG = False\n'
file_content += 'DEBUG_TOOLBAR = False\n'
    
file_content += """

ALLOWED_HOSTS = ['127.0.0.1','localhost']

INTERNAL_IPS = ['127.0.0.1','localhost']

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'django_extensions',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    "dirtyedit",
    'reversion',
    "compressor",
    'mptt',
    'mbase',
    'mqueue',
    'bootstrap3',
    'bootstrapform',
    "easy_thumbnails",
    # !extra_apps!
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
)

ROOT_URLCONF = '"""+project_name+""".urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # !extra_context_processors!
            ],
            'debug': True,
            'loaders': [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ],
        },
    },
]

WSGI_APPLICATION = '"""+project_name+""".wsgi.application'

"""+database+"""

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
    }
}

SESSION_ENGINE = "django.contrib.sessions.backends.cache"

LOCALE_PATHS = ( os.path.join(BASE_DIR, 'locale'), )

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = '"""+language_code+"""'

TIME_ZONE = '"""+timezone+"""'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'
#STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [ os.path.join(BASE_DIR, 'static') ]
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    # other finders..
    'compressor.finders.CompressorFinder',
)

COMPRESS_ROOT = os.path.join(BASE_DIR, 'static')
COMPRESS_ENABLED = True

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

SITE_ID = 1

LOGIN_URL = '/account/login/'
LOGIN_REDIRECT_URL = '/'
LOGOUT_URL = "/account/logout/"

#~ Allauth settings
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = 'optional'
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

if DEBUG is True:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
else:
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST = 'localhost'
    EMAIL_PORT = 25
    EMAIL_HOST_USER = ''
    EMAIL_HOST_PASSWORD = ''
    EMAIL_USE_TLS = False

#~ debug
if DEBUG_TOOLBAR:
    MIDDLEWARE_CLASSES+=('debug_toolbar.middleware.DebugToolbarMiddleware',)
    INSTALLED_APPS+=('debug_toolbar',)
    JQUERY_URL = 'https://cdn.jsdelivr.net/jquery/3.1.1/jquery.min.js'

CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_JQUERY_URL = 'https://cdn.jsdelivr.net/jquery/3.1.1/jquery.min.js'
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar':  [
                    ["Format", "Styles", "Bold", "Italic", "Underline", '-', 'RemoveFormat'],
                    ['NumberedList', 'BulletedList', "Indent", "Outdent", 'JustifyLeft', 'JustifyCenter','JustifyRight', 'JustifyBlock'],
                    ["Image", "Table", "Link", "Unlink", "Anchor", "SectionLink", "Subscript", "Superscript"], ['Undo', 'Redo'],
                    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],["Source", "Maximize"],
                    ],
        "removePlugins": "stylesheetparser",
        'width': '1150px',
        'height': '450px',
    },
    'public': {
      'toolbar':  [
                  ["Bold", "Italic"],
                  ['NumberedList', 'BulletedList', "Indent", "Outdent", 'JustifyLeft', 'JustifyCenter'],
                  ["Link", "Unlink"], ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'], ['Undo', 'Redo'], ["Source", "Maximize"],
                  ],
      "removePlugins": "stylesheetparser",
  },
}

from mqueue.conf import DEV_LOGGING as LOGGING

MQUEUE_AUTOREGISTER = [
     #('app.module.model', registration level: 1=create+delete, 2=1+save),
     ('django.contrib.auth.models.User', 1),
]

MQUEUE_AUTOREGISTER.append(('dirtyedit.models.FileToEdit', 2))
if "vvpages" in INSTALLED_APPS:
    MQUEUE_AUTOREGISTER.append(('vvpages.models.Page', 2))
if "vvcontact" in INSTALLED_APPS:
    MQUEUE_AUTOREGISTER.append(('vvcontact.models.Email', 1))
if "vvcatalog" in INSTALLED_APPS:
    MQUEUE_AUTOREGISTER.append(('vvcatalog.models.Product', 2))
    MQUEUE_AUTOREGISTER.append(('vvcatalog.models.Category', 2))
    MQUEUE_AUTOREGISTER.append(('vvcatalog.models.Order', 2))

VVPAGES_CODE_MODE = True
"""

# generate settings
filepath=project_dir+'/'+project_name+'/settings.py'
filex = open(filepath, "w")
filex.write(file_content)
filex.close()

