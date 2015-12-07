Django Allons
==============

Starter kit for Django 1.8 projects [ ! *Work in progress* ].
Installs a set of django modules with batteries: provides default templates, css classes and some js libs to get a good starting base for new projects.

Features
--------------

This quick start kit installs the following Django modules:

- [django-allauth](https://github.com/pennersr/django-allauth) for authentication
- [django-xadmin](https://github.com/sshwsfc/django-xadmin) for administration interface
- [django-alapage](https://github.com/synw/django-alapage) for pages management
- [django-jssor](https://github.com/synw/django-jssor) for slideshows management


Install
--------------

	pip install pillow django-debug-toolbar django-allauth django-ckeditor django-crispy-forms django-mptt django-filer django-reversion xlwt xlsxwriter git+https://github.com/sshwsfc/django-xadmin.git@django1.8 git+https://github.com/synw/django-alapage.git git+https://github.com/synw/django-jssor.git


Configure
--------------

Check the *sample_settings.py* file in the repository and tune your settings.py

Get the files *urls.py* and *adminx.py*

	python manage.py collectstatic

Get the static stuff from the static folder in the repository

Get the templates from the templates folder in the repository

	python manage.py migrate
	python manage.py createsuperuser
	python manage.py runserver

And go to _/manage_ to get the admin interface and start creating pages


Todo
--------------

- [ ] Package the whole thing in pip
- [ ] Provide a base templates set
- [x] Provide default css generic classes
- [x] Provide default static files and js libs

