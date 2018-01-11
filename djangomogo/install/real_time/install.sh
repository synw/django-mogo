#!/bin/bash

project_name=$1
base_dir=$2
project_dir=$base_dir'/'$project_name
modpath=$3

source $modpath'/install/utils.sh'
source bin/activate

centrifugo_version="1.7.3"
centrifugo_fetch_url="https://github.com/centrifugal/centrifugo/releases/download/v"$centrifugo_version"/centrifugo-"$centrifugo_version"-linux-386.zip"
title $yellow "6." "Install the real time modules"

cd $base_dir
echo "Installing real time package ..."
pip install -r $modpath'/install/real_time/requirements.txt'
pyscript=$modpath'/install/append_to_apps.py'
pyconf=$modpath"/install/real_time/servers_config.py"
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'

urls="url(r'^centrifuge/auth/$',instant_auth,name='instant-auth'),#!#url('^instant/',include('instant.urls')),"
python3 $pyscript $project_name $base_dir instant,autoreloader
python3 $urlscript $project_name $base_dir $urls instant
echo "Urls updated"
cd $project_dir
chmod a+x $pylib/instant/go/publish
cp -Rv $modpath/templates/instant $project_dir/templates
echo "Templates updated"

read -r -d '' extra_settings << EOM

ARWL = ["static/js", "static/css", "templates"]
CENTRIFUGO_SECRET_KEY = "secret_key"

EOM

#python3 $pyconf $project_name $base_dir "noconf"
python3 $settingsscript $project_name $base_dir "$extra_settings"
echo "Settings updated"

echo "Installing the websockets server"
python3 manage.py installws

read -r -d '' extra_settings << EOM

INSTANT_SUPERUSER_CHANNELS = (
    ("\$autoreload",),
)

EOM

#python3 $pyconf $project_name $base_dir "noconf"
python3 $settingsscript $project_name $base_dir "$extra_settings"

ok $green "Real time package installed"
echo "Some documentation is available:"
echo "- https://fzambia.gitbooks.io/centrifugal/content/"
echo "- http://django-instant.readthedocs.io/en/latest/"
echo "Start websockets server with: python3 manage.py runws"

exit 0
