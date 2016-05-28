# Django Mogo

Starter kit for projects. This is a bunch of stuff put thogether to make a starting base.

This script installs Python and Django modules as well as usefull static stuff ( jquery, font-awesome ) and base templates. 
It also autogenerates a settings file.

## Features

This quick start kit installs the following Django modules:

#### Image processing

- [pillow](https://github.com/python-pillow/Pillow): standard image processing lib
- [sorl-thumbnail](https://github.com/mariocesar/sorl-thumbnail): generate thumbnails using cache

#### Authentication

- [django-allauth](https://github.com/pennersr/django-allauth) for authentication with social networks

#### Text editors

- [django-ckeditor](https://github.com/django-ckeditor/django-ckeditor): wysywig text editor
- [django-codemirror2](https://github.com/sk1p/django-codemirror2): code editor

#### Content management

- [django-filebrowser-no-grappelli](https://github.com/smacker/django-filebrowser-no-grappelli): files management
- [django-blog-zinnia](https://github.com/Fantomas42/django-blog-zinnia): blog
- [django-mgof](https://github.com/synw/django-mgof/): forums
- [django-alapage](https://github.com/synw/django-alapage) for pages management
- [django-jssor](https://github.com/synw/django-jssor) for slideshows management
- [django-qcf](https://github.com/synw/django-qcf): contact form

#### Utilities

- [ipython](http://ipython.org/) : powerfull python shell integrated with Django
- [pytz](http://pytz.sourceforge.net/): timezones
- [django-reversion](https://github.com/etianen/django-reversion) for version control
- [django-mptt](https://github.com/django-mptt/django-mptt): utility for working with trees
- [django-braces](https://github.com/brack3t/django-braces): usefull mixins
- [django-autofixture](https://github.com/gregmuellegger/django-autofixture): for generating test data
- [django-extensions](https://github.com/django-extensions/django-extensions) : usefull tools
- [django-mqueue](https://github.com/synw/django-mqueue): for logging app events 
- [django-system-monitor](https://github.com/hakanzy/django-system-monitor): for monitoring the system load
- [django-dirtyedit](https://github.com/synw/django-dirtyedit): uility for editing files in the admin interface

#### Bootstrap stuff

- [django-bootstrap-form](https://github.com/tzangms/django-bootstrap-form)
- [django-bootstrap3](https://github.com/dyve/django-bootstrap3)

#### Test / debug

- [django-debug-toolbar](https://github.com/django-debug-toolbar/django-debug-toolbar) for apps debug
- [pytest-django](https://github.com/pytest-dev/pytest-django): test suite
- [pytest-cov](https://github.com/pytest-dev/pytest-cov): coverage for pytest
- [coverage](https://bitbucket.org/ned/coveragepy): utility for test coverage reporting

#### Static files

Batteries are included:

- Jquery
- Font Awesome icons
- Base template set using Bootstrap
- Some usefull generic css classes

## Install

  ```bash
mkdir PROJECT_NAME
cd PROJECT_NAME
wget https://raw.githubusercontent.com/synw/django-mogo/master/install.sh
chmod a+x install.sh
./install.sh PROJECT_NAME
rm -f install.sh
  ```

Tweak the autogenerated `settings.py` to fit your needs.

Initiate the instance:

  ```bash
source bin/activate
cd PROJECT_NAME
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
  ```

It's ready: go to `/admin` , start creating pages and customizing the templates

## Todo

- [ ] Language option in the installer
- [ ] Better templates





