Django Mogo
==============

Starter kit for Django 1.8 projects [ ! *Work in progress* ].
Installs a set of django modules with batteries: provides default templates, css classes and some js libs to get a good starting base for new projects.

Features
--------------

This quick start kit installs the following Django modules:

- [django-allauth](https://github.com/pennersr/django-allauth) for authentication
- [django-alapage](https://github.com/synw/django-alapage) for pages management
- [django-jssor](https://github.com/synw/django-jssor) for slideshows management
- [django-admin-bootstraped](https://github.com/django-admin-bootstrapped/django-admin-bootstrapped) for the admin interface


Install
--------------

	pip install pillow django-debug-toolbar django-admin-bootstrapped django-bootstrap-form django-bootstrap3 django-allauth django-ckeditor django-crispy-forms django-reversion git+https://github.com/synw/django-alapage.git git+https://github.com/synw/django-jssor.git


Configure
--------------

Check the *sample_settings.py* file in the repository and tune your settings.py

Get the file *urls.py*

	python manage.py collectstatic

Get the static stuff from the static folder in the repository

Get the templates from the templates folder in the repository

	python manage.py migrate
	python manage.py createsuperuser
	python manage.py runserver

And go to _/admin_ and start creating pages


Todo
--------------

- [ ] Package the whole thing in pip
- [ ] Provide a base templates set
- [x] Provide default css generic classes
- [x] Provide default static files and js libs

