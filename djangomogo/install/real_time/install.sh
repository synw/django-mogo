#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

source $modpath'/install/utils.sh'
source bin/activate

echo "Installing real time package ..."
pip install -r $modpath'/install/real_time/requirements.txt'
pyscript=$modpath'/install/append_to_apps.py'
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'
urls="url(r'^centrifuge/auth/$',instant_auth,name='instant-auth'),\nurl('^instant/',include('instant.urls')),\nurl(r'^events/',include('mqueue_livefeed.urls')),\nurl(r'^presence/',include('presence.urls'))"
python $pyscript $project_name $base_dir instant,mqueue_livefeed,presence
#echo "Generating django-presence config"
#python $project_dir/manage.py installpres
echo "Settings updated"
python $urlscript $project_name $base_dir $urls instant
echo "Urls updated"
cp -R $modpath/templates/instant $project_dir/templates
rm $project_dir/templates/base.html
cp $modpath/templates/tmp/base.html $project_dir/templates
rm $project_dir/templates/mogo/topbar.html
cp $modpath/templates/tmp/topbar.html $project_dir/templates/mogo
rm $project_dir/templates/mogo/header_content.html
cp $modpath/templates/tmp/header_content.html $project_dir/templates/mogo
echo "Templates updated"

read -r -d '' extra_settings << EOM
\n\n
SITE_SLUG = "site"
SITE_NAME = "Site"
CENTRIFUGO_SECRET_KEY = ""
#CENTRIFUGO_HOST = 'http://localhost'
#CENTRIFUGO_PORT = 8001

INSTANT_BROADCAST_WITH = 'go'
INSTANT_SUPERUSER_CHANNELS = ["\$mqfeed"]
EOM

python $settingsscript $project_name $base_dir "$extra_settings"

check "Real time package installed: you still have to:\n
1. Get and install Centrifugo\n
2. Generate Centrifugo config and update settings.py\n
3. Generate django-presence config\n
Please check django-instant and django-presence doc:\n
- http://django-instant.readthedocs.io/en/latest/src/install.html\n
- http://django-presence.readthedocs.io/en/latest/src/install.html"

exit 0