Django Mogo
==============

Starter kit for Django 1.8 projects.
This is a bunch of stuff put thogether to make a good starting base for new projects.

Features
--------------

This quick start kit installs the following Django modules and others:

- [django-allauth](https://github.com/pennersr/django-allauth) for authentication
- [django-reversion](https://github.com/etianen/django-reversion) for version control
- [django-admin-bootstraped](https://github.com/django-admin-bootstrapped/django-admin-bootstrapped) for the admin interface
- [django-debug-toolbar](https://github.com/django-debug-toolbar/django-debug-toolbar) for debug
- [ipyhton](https://github.com/ipython/ipython) for a confortable shell
- [django-nose](https://github.com/django-nose/django-nose) for tests
- [django-alapage](https://github.com/synw/django-alapage) for pages management
- [django-jssor](https://github.com/synw/django-jssor) for slideshows management
- [django-zongo](https://github.com/synw/django-zongo) for responsive presentations

Batteries are included:

- Jquery
- Font Awesome icons
- Base valid Xhtml 1.0 Strict templates using Bootstrap.
- Some usefull generic css classes

Install
--------------

	mkdir my_project
	cd my_project
	wget https://raw.githubusercontent.com/synw/django-mogo/master/install.sh &&chmod a+x install.sh && ./install.sh my_project && rm install.sh
	
	source bin/activate
	cd my_project
	python manage.py check
	python manage.py collectstatic
	python manage.py syncdb
	python manage.py makemigrations
	python manage.py migrate
	python manage.py runserver

It's ready: go to `/admin` and start creating pages



