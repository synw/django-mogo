# -*- coding: utf-8 -*-

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
    
project_name=sys.argv[1:][0]
base_dir=sys.argv[1:][1]
dbname=sys.argv[1:][2]
project_dir=base_dir+'/'+project_name

if dbname != 'Sqlite':
    msg = 'Database user > '
    dbuser = raw_input(msg)
    while not dbuser:
        print "Please provide a database user"
        dbuser = raw_input(msg)
    msg = 'Database password > '
    dbpwd = raw_input(msg)
    while not dbpwd:
        print "Please provide a database password"
        dbpwd = raw_input(msg)

msg = 'What is the timezone of your project? [UTC] > '
timezone = raw_input(msg)
if not timezone:
    timezone = 'UTC'
    
msg = 'What is the language code for your project? [en] > '
language_code = raw_input(msg)
if not language_code:
    language_code = 'en'

msg = 'Debug: [Y/n] > '
debug_msg = raw_input(msg)
debug = True
if debug_msg == 'n' or debug_msg == 'no':
    debug = False

msg = 'Editing mode: Wysiwig or Code [W/c] > '
edit_mode_msg = raw_input(msg)
edit_mode = 'html'
if edit_mode_msg == 'c':
    edit_mode = 'code'
    print option+" Code mode enabled"
if edit_mode == 'code':
    keymap_msg = raw_input(' |----> Editors keymap: None / Vim / Emacs [ N/v/e ] > ')
    keymap = None
    if keymap_msg == 'e':
        keymap = 'emacs'
    elif keymap_msg == 'v':
        keymap = 'vim'

msg = 'Use reversion [y/N] > '
reversion_msg = raw_input(msg)
use_reversion = False
if reversion_msg == '' or reversion_msg == 'n' or reversion_msg == 'no':
    use_reversion = False
else:
    print option+" Reversion enabled"

dbuser = ''
dbpwd = ''
databases = {
            'sqlite':"""DATABASES = {
                    'default': {
                        'ENGINE': 'django.db.backends.sqlite3',
                        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
                    }
                }""",
                'postgresql':"""DATABASES = {
                    'default': {
                        'ENGINE': 'django.db.backends.postgresql_psycopg2',
                        'NAME': '"""+project_name+"""',
                        'USER': '"""+dbuser+"""',
                        'PASSWORD': '"""+dbpwd+"""',
                        'HOST': 'localhost',
                        'PORT': '',
                    }
                }""",
                'mysql':"""DATABASES = {
                    'default': {
                        'ENGINE': 'django.db.backends.mysql',
                        'NAME': '"""+project_name+"""',
                        'USER': '"""+dbuser+"""',
                        'PASSWORD': '"""+dbpwd+"""',
                        'HOST': 'localhost',
                        'PORT': '3306',
                    }
                }""",
             }

if dbname == 'Postgresql':
    database = databases['postgresql']
elif dbname == 'Mysql':
    database = databases['mysql']
else:
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
    file_content += 'DEBUG_TOOLBAR = True\n'
else:
    file_content += 'DEBUG = False\n'
    file_content += 'DEBUG_TOOLBAR = False\n'
    
file_content += """

ALLOWED_HOSTS = ['127.0.0.1','localhost']

INSTALLED_APPS = (
    'filebrowser',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'django.contrib.flatpages',
    'django_extensions',
    'braces',
    'autofixture',
    'bootstrap3',
    'bootstrapform',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'django_comments',
    'mptt',
    'tagging',
    'zinnia_bootstrap',
    'zinnia',
    'sorl.thumbnail',
    'ckeditor',
    'ckeditor_uploader',
    'codemirror2',
    'dirtyedit',
    'reversion',
    'sysmon',
    'mbase',
    'mqueue',
    'alapage',
    'jssor',
    'qcf',
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
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'zinnia.context_processors.version', 
            ],
            'debug': True,
            'loaders': [
                'app_namespace.Loader',
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

APPEND_SLASH = True

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
    'mcat': {
        'toolbar':  [
                    ["Format", "Styles", "Bold", "Italic", "Underline", '-', 'RemoveFormat'],
                    ['NumberedList', 'BulletedList', "Indent", "Outdent", 'JustifyLeft', 'JustifyCenter','JustifyRight', 'JustifyBlock'],
                    ["Image", "Table", "Link", "Unlink", "Anchor", "SectionLink", "Subscript", "Superscript"], ['Undo', 'Redo'],
                    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],["Source", "Maximize"],
                    ],
        "removePlugins": "stylesheetparser",
        'width': '1150px',
        'height': '400px',
    },
}

#~ debug
if DEBUG_TOOLBAR:
    MIDDLEWARE_CLASSES+=('debug_toolbar.middleware.DebugToolbarMiddleware',)
    INSTALLED_APPS+=('debug_toolbar',)
    JQUERY_URL = '/static/js/jquery-2.1.4.min.js'

#~ logging to db
from mqueue.conf import LOGGING as LOGGING

#~ sorl thumbnail
if DEBUG:
    THUMBNAIL_DEBUG = True
    import logging
    from sorl.thumbnail.log import ThumbnailLogHandler
    
    handler = ThumbnailLogHandler()
    handler.setLevel(logging.ERROR)
    logging.getLogger('sorl.thumbnail').addHandler(handler)

#~ alapage & dirtyedit conf
"""
if use_reversion == True:
    file_content += 'ALAPAGE_USE_REVERSION = True\n'
else:
    file_content += 'ALAPAGE_USE_REVERSION = False\n'
    file_content += 'DIRTYEDIT_USE_REVERSION= False\n'
if edit_mode == 'code':
    file_content += "ALAPAGE_EDIT_MODE = 'code'\n"
    if keymap is not None:
        file_content += "ALAPAGE_CODEMIRROR_KEYMAP = '"+keymap+"'\n"
        file_content += "DIRTYEDIT_CODEMIRROR_KEYMAP = '"+keymap+"'\n"
file_content += "ALAPAGE_USE_JSSOR = True\n"

# generate settings
filepath=project_dir+'/'+project_name+'/settings.py'
filex = open(filepath, "w")
filex.write(file_content)
filex.close()
# ini file for pytest
file_content ="""[pytest]
DJANGO_SETTINGS_MODULE="""+project_name+'.settings'
filepath=project_dir+'/pytest.ini'
filex = open(filepath, "w")
filex.write(file_content)
filex.close()
# create .coveragerc file
file_content ="""[report]

omit =
    settings/*
    */migrations/*
    */test*
"""
filepath=project_dir+'/.coveragerc'
filex = open(filepath, "w")
filex.write(file_content)
filex.close()

