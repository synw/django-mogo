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

option "Installing single page app ..."
pip install django-spages
pip install "git+git://github.com/nnseva/django-jsoneditor.git"
urls="spages#!#url(r'^ckeditor/',include('ckeditor_uploader.urls')),#!#url(r'^graph/',include('mptt_graph.urls')),"
echo "Updating settings ..."
python $pyscript $project_name $base_dir rest_framework,ckeditor,ckeditor_uploader,codemirror2,mptt_graph,jsoneditor,spages
echo "Updating urls ..."
python $urlscript $project_name $base_dir $urls
echo "Updating templates ..."
rm $project_dir/templates/mogo/head.html
cp $modpath/templates/tmp/spa/head.html $project_dir/templates/mogo
rm $project_dir/templates/mogo/navbar.html
cp $modpath/templates/tmp/spa/navbar.html $project_dir/templates/mogo
ok $green "Single page app installed"

exit 0