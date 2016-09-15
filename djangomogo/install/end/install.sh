#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

source $modpath'/install/utils.sh'
source bin/activate

# final steps
title $yellow "7." "Final step"
read -n 1 -p "Collect staticfiles (Y/n)? " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
    then
    	settings=$project_dir'/'$project_name'/settings.py'
    	python $modpath'/install/statics.py' $settings 'collectstatic'
    	cd $project_dir
    	python manage.py collectstatic
    	python $modpath'/install/statics.py' $settings 'normal'
    else
    	echo "Staticfiles collected"
fi

# ending message
endit='[ '$bold$yellow"Done"$normal' ]'" Install completed"	

function activate_env {
    		set -e
			cd $base_dir
			source bin/activate
			cd $project_name
			echo -e $endit
		}

function runserver {
			set -e
			cd $project_dir
			echo -e $endit
			echo "Runing dev server ..."
			python manage.py runserver_plus
		}

read -n 1 -p "Make the migrations and init site (Y/n)? " migs
[ -z "$migs" ] && migs="default"
if 	[ $migs == 'default' ]
    then
    	cd $project_dir
    	echo "Making migrations ..."
    	python manage.py makemigrations
    	echo "Runing migrations ..."
    	python manage.py migrate
    	echo "Creating superuser ..."
    	python manage.py createsuperuser
    	echo "Creating homepage ..."
    	# load the homepage : tofix
		#python manage.py loaddata static/mogo/fixtures/home.json
		python manage.py create_homepage
    else
    	echo ""
    	trap activate_env EXIT
    	exit 0
fi

read -n 1 -p "Run the dev server (Y/n)? " gorunserver
[ -z "$gorunserver" ] && gorunserver="default"
if 	[ $gorunserver == 'default' ]
    then
		trap runserver EXIT
    else
    	echo ""
		trap activate_env EXIT
fi

exit 0
