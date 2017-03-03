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

read -n 1 -p "Install contact form [Y/n] ? > " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
    then
    	echo "Installing contact form ..."
    	pip install django-qcf
    	urls="url(r'^contact/',include('qcf.urls')),"
    	echo "Updating settings ..."
    	python $pyscript $project_name $base_dir qcf
    	echo "Updating urls ..."
    	python $urlscript $project_name $base_dir $urls
    	ok $green "Contact form installed"
	else
		echo ""
fi

read -n 1 -p "Install user profiles [Y/n] ? > " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
    then
    	echo "Installing user profiles ..."
    	pip install django-avatar django-braces
    	git clone https://github.com/synw/django-userprofiles.git
    	mv django-userprofiles/userprofiles $project_dir && rm -rf django-userprofiles
    	urls="url(r'^avatar/',include('avatar.urls')),#!#url(r'^profile/',include('userprofiles.urls')),"
    	echo "Creating media dirs ..."
    	mkdir media/userprofiles
    	mkdir media/userprofiles/avatars
    	echo "Updating settings ..."
    	python $pyscript $project_name $base_dir avatar,userprofiles
    	echo "Updating urls ..."
    	python $urlscript $project_name $base_dir $urls
    	echo "Copying templates ..."
    	cp -Rv $templatesdir/avatar $project_dir/templates
    	ok $green "User profiles installed"
    else
		echo ""
fi

exit 0