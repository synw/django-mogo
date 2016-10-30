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

echo "Installing single page app ..."
pip install django-spages
urls="spages#!#url(r'^ckeditor/',include('ckeditor_uploader.urls')),"
echo "Updating settings ..."
python $pyscript $project_name $base_dir rest_framework,ckeditor,ckeditor_uploader,codemirror2,mptt_graph,spages
echo "Updating urls ..."
python $urlscript $project_name $base_dir $urls
ok $green "Single page app installed"

exit 0