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

echo "Installing pages management app ..."
cd $project_dir
git clone https://github.com/synw/django-staticflatpages
mv django-staticflatpages/staticflatpages .
rm -rf django-staticflatpages
pip install -r $base_dir/djangomogo/install/pages/requirements.txt
#urls="alapage#!#url(r'^ckeditor/',include('ckeditor_uploader.urls')),#!#url(r'^graph/',include('mptt_graph.urls')),"
echo "Updating settings ..."
python3 $pyscript $project_name $base_dir staticflatpages

read -r -d '' extra_settings << EOM
MIDDLEWARE += ("staticflatpages.middleware.StaticFlatpageFallbackMiddleware",)

EOM

python3 $settingsscript $project_name $base_dir "$extra_settings"

#echo "Updating urls ..."
#python3 $urlscript $project_name $base_dir $urls alapage
check "Pages management app installed"

exit 0