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

read -n 1 -p "Install forum [Y/n] ? > " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
    then
    	echo "Installing forum ..."
    	pip install django-mgof
    	urls="url(r'^forum/',include('mgof.urls')),"
    	echo "Updating settings ..."
    	python $pyscript $project_name $base_dir mgof
    	echo "Updating urls ..."
    	python $urlscript $project_name $base_dir $urls
    	ok $green "Forum installed"
	else
		echo ""
fi

exit 0