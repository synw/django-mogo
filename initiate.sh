#!/bin/bash

#~ usage:
#~ $ ./initiate.sh 

echo "====================================== Migrating database ====================================="
source ./bin/activate
python ./$1/manage.py makemigrations
python ./$1/manage.py migrate
python ./$1/manage.py createsuperuser
echo ">>> Installation completed: ready to runserver"