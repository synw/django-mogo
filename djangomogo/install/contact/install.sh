#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

source $modpath'/install/utils.sh'
source bin/activate

pyscript=$modpath'/install/append_to_apps.py'
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'
templatesdir=$modpath'/templates'

cd $project_dir
echo "Installing contact form ..."
pip install django-qcf
echo "Updating settings ..."
python3 $pyscript $project_name $base_dir qcf
echo "Updating urls ..."
urls="url(r'^contact/',include('qcf.urls')),"
python3 $urlscript $project_name $base_dir $urls
check "Contact form installed"

exit 0