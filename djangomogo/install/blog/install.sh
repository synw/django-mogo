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
contextscript=$modpath'/install/append_to_context_processors.py'

read -n 1 -p "Install Zinnia blog [Y/n] ? > " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
    then
    	echo "Installing Zinnia blog ..."
    	pip install django-blog-zinnia zinnia-wysiwyg-ckeditor
		pip install git+https://github.com/django-blog-zinnia/zinnia-theme-bootstrap.git
    	urls="url(r'^blog/',include('zinnia.urls',namespace='zinnia'))#!#url(r'^comments/',include('django_comments.urls'))"
    	echo "Updating settings ..."
    	python $pyscript $project_name $base_dir django_comments,tagging,zinnia_bootstrap,zinnia
    	extra_context='zinnia.context_processors.version'
    	python $contextscript $project_name $base_dir $extra_context
    	echo "Updating urls ..."
    	python $urlscript $project_name $base_dir $urls
    	echo "Copying templates ..."
    	cp -R $base_dir/templates/zinnia $project_dir/templates
    	check "Blog installed"
fi

exit 0