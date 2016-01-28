Django Mogo
==============

Starter kit for Django 1.8 projects.
This is a bunch of stuff put thogether to make a good starting base for new projects.

Features
--------------

This quick start kit installs the following Django modules:

- [django-allauth](https://github.com/pennersr/django-allauth) for authentication
- [django-alapage](https://github.com/synw/django-alapage) for pages management
- [django-jssor](https://github.com/synw/django-jssor) for slideshows management
- [django-zongo](https://github.com/synw/django-zongo) for responsive presentations
- [django-admin-bootstraped](https://github.com/django-admin-bootstrapped/django-admin-bootstrapped) for the admin interface

Base valid Xhtml 1.0 Strict templates using Bootstrap.
Some usefull generic css classes

Install
--------------

	mkdir my_project
	cd my_project
	virtualenv --no-site-packages . && source bin/activate
	wget https://raw.githubusercontent.com/synw/django-mogo/master/install.sh
	./install.sh my_project

Configure
--------------

Check the `sample_settings.py` file in the repository and tune your `settings.py`

	python manage.py collectstatic
	python manage.py migrate
	python manage.py createsuperuser
	python manage.py runserver

It's ready: go to `/admin` and start creating pages

Todo
--------------

- [ ] Package the whole thing in pip
- [x] Provide a base templates set
- [x] Provide default css generic classes

