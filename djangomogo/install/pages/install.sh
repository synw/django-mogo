#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

source $modpath'/install/utils.sh'
source bin/activate

echo "Installing pages management modules ..."
pip install --no-deps django-ckeditor
pip install django-alapage
pyscript=$modpath'/install/append_to_apps.py'
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'
urls="alapage#!#url(r'^ckeditor/',include('ckeditor_uploader.urls')),"
python $pyscript $project_name $base_dir codemirror2,ckeditor,ckeditor_uploader,mptt_graph,django_ajax,alapage
echo "Settings updated"
python $urlscript $project_name $base_dir $urls
echo "Urls updated"

ok $green "Pages management modules installed"
