#!/bin/bash

project_name=$1
base_dir=$2
project_dir=$base_dir'/'$project_name
modpath=$3

source $modpath'/install/utils.sh'
source bin/activate

centrifugo_filename="centrifugo-1.6.1-linux-386"
centrifugo_fetch_url="https://github.com/centrifugal/centrifugo/releases/download/v1.6.1/centrifugo-1.6.1-linux-386.zip"
title $yellow "6." "Install the real time modules"

cd $base_dir
echo "Installing real time package ..."
pip install -r $modpath'/install/real_time/requirements.txt'
pyscript=$modpath'/install/append_to_apps.py'
pyconf=$modpath"/install/real_time/servers_config.py"
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'

urls="url(r'^centrifuge/auth/$',instant_auth,name='instant-auth'),#!#url('^instant/',include('instant.urls')),#!#url(r'^events/',include('mqueue_livefeed.urls')),"
cp -R $modpath"/templates/instant" $project_dir"/templates"
python $pyscript $project_name $base_dir instant,mqueue_livefeed,presence,braces
echo "Settings updated"
python $urlscript $project_name $base_dir $urls instant
echo "Urls updated"
cp -Rv $modpath/templates/instant $project_dir/templates
echo "Templates updated"

read -n 1 -p "Install the Centrifugo websockets server (Y/n)? " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == "default" ]
    then
		cd $base_dir
		mkdir centrifugo
		cd centrifugo
		echo "Getting the server ..."
		wget $centrifugo_fetch_url
		echo "Installing the server ..."
		unzip $centrifugo_filename".zip"
		rm -f $centrifugo_filename".zip"
		mv $centrifugo_filename"/centrifugo" .
		echo "Generating server configuration ..."
		./centrifugo genconfig
		python $pyconf $project_name $base_dir "ok"
		check "Centrifugo config generated"
		sleep 1
		# presence
		echo "Generating config for django-presence ..."
		python $project_dir/manage.py installpres
else
read -r -d '' extra_settings << EOM

SITE_SLUG = "site"
SITE_NAME = "Site"
CENTRIFUGO_SECRET_KEY = ""
#CENTRIFUGO_HOST = 'http://localhost'
#CENTRIFUGO_PORT = 8001

INSTANT_BROADCAST_WITH = 'go'
INSTANT_SUPERUSER_CHANNELS = ["\$mqfeed"]
EOM
	
	python $settingsscript $project_name $base_dir "$extra_settings"
	echo "Settings updated"
	python $pyconf $project_name $base_dir "noconf"
fi

sleep 1

ok $green "Real time package installed"
echo "Some documentation is available:"
echo "- https://fzambia.gitbooks.io/centrifugal/content/"
echo "- http://django-instant.readthedocs.io/en/latest/"
echo "- http://django-presence.readthedocs.io/en/latest/"

exit 0
