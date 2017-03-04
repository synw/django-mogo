#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

source $modpath'/install/utils.sh'
source bin/activate

option "Installing real time package ..."
pip install -r $modpath'/install/real_time/requirements.txt'
pyscript=$modpath'/install/append_to_apps.py'
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'
templatescript=$modpath'/install/append_to_template.py'
urls="url(r'^centrifuge/auth/$',instant_auth,name='instant-auth'),#!#url('^instant/',include('instant.urls')),#!#url(r'^events/',include('mqueue_livefeed.urls')),"
python $pyscript $project_name $base_dir instant,mqueue_livefeed,presence
#echo "Generating django-presence config"
#python $project_dir/manage.py installpres
echo "Settings updated"
python $urlscript $project_name $base_dir $urls instant
echo "Urls updated"
cp -R $modpath/templates/instant $project_dir/templates
python $templatescript $project_name $base_dir '{% include "instant/messages.html" %}' 'topbar.html'
python $templatescript $project_name $base_dir '{% include "instant/client.html" %}' 'footer.html'
header='<div id="presence" class="visible-md visible-lg" style="display:inline-block !important;position:relative;top:33px;left:2em;color:white">\n{% include "presence/widget.html" %}\n</div>'
python $templatescript $project_name $base_dir $header 'header.html'
echo "Templates updated"

read -r -d '' extra_settings << EOM

SITE_SLUG = "site"
SITE_NAME = "Site"
CENTRIFUGO_SECRET_KEY = ""
CENTRIFUGO_HOST = 'http://localhost'
CENTRIFUGO_PORT = 8001

INSTANT_BROADCAST_WITH = 'go'
INSTANT_SUPERUSER_CHANNELS = ["\$mqfeed"]
EOM

python $settingsscript $project_name $base_dir "$extra_settings"
echo "Settings updated"

ok $green "Real time package installed"
important "an extra config step is required to install the websockets server:"
echo "1. Get and install Centrifugo
2. Generate Centrifugo config and update settings.py
3. Generate django-presence config
Please check django-instant and django-presence doc:
- http://django-instant.readthedocs.io/en/latest/src/install.html
- http://django-presence.readthedocs.io/en/latest/src/install.html"

exit 0