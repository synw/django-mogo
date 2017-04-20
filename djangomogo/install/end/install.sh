#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4
rt=$5
pages=$6

source $modpath'/install/utils.sh'
source bin/activate

# final steps
title $yellow "7." "Final step"

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
			python3 manage.py runserver_plus
		}

cd $project_dir
python3 manage.py check
read -n 1 -p "Make the migrations and init site (Y/n)? " migs
[ -z "$migs" ] && migs="default"
if 	[ $migs == 'default' ]
    then
    	echo "Making migrations ..."
    	python3 manage.py makemigrations
    	echo "Runing migrations ..."
    	python3 manage.py migrate
    	echo "Creating superuser ..."
    	python3 manage.py createsuperuser
    	#echo "Creating homepage ..."
    	# load the homepage : tofix
		#python3 manage.py loaddata static/mogo/fixtures/home.json
		#python3 manage.py create_homepage
    else
    	echo ""
    	trap activate_env EXIT
    	exit 0
fi

#symlink templates
cd $project_dir
pwd
ls -l
mv 'templates' 'templates_'
ln -s 'templates_/alt' 'templates'

if 	[ $rt == "y" ]
    then
		echo "**************** Information about realtime modules ********************"
		echo "You have to start the servers in order for these modules to work:"
		echo "- Start the Centrifugo websockets server: "
		echo "cd centrifugo && ./centrifugo --config=config.json --port=8001"
		echo "- Start the presence worker: "
		echo "cd yourproject && ./centpres"
	else
		#fixtures
		cd $project_dir
		echo 'Loading fixtures ...'
		python3 manage.py loaddata $modpath'/install/init/fixtures/templates.json'
		python3 manage.py loaddata $modpath'/install/init/fixtures/homepage.json'
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
