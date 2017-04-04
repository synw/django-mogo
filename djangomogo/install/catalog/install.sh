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

read -n 1 -p "Install product catalog [Y/n] ? > " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
	then
		cd $project_dir
		echo "Installing products catalog ..."
		pip install django-braces
		git clone https://github.com/synw/django-vvcatalog
		cp -R django-vvcatalog/vvcatalog . && rm -rf django-vvcatalog
		echo "Updating settings ..."
		python3 $pyscript $project_name $base_dir vvcatalog
		echo "Updating urls ..."
		urls="url(r'^catalog/',include('vvcatalog.urls')),"
		python3 $urlscript $project_name $base_dir $urls
		ok $green "Products catalog installed"
	else
		echo ""
fi

exit 0