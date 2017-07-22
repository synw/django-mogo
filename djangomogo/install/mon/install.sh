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
settingsscript=$modpath'/install/append_to_settings.py'

title $yellow "Option" "Install the monitoring tools"

cd $project_dir
echo "Installing contact monitoring tools ..."
pip install redis
git clone https://github.com/synw/django-hitsmon.git
cp -R django-hitsmon/hitsmon .
rm -rf django-hitsmon
git clone https://github.com/synw/django-watchtower.git
cp -R django-watchtower/watchtower .
rm -rf django-watchtower
echo "Updating settings ..."
python3 $pyscript $project_name $base_dir hitsmon,watchtower

read -r -d '' extra_settings << EOM
HITSMON_EXCLUDE = ("/centrifuge/auth/", "/admin/jsi18n/")
HITSMON_DEBUG = True

MQUEUE_HOOKS = {
 "redis": {
	"path": "mqueue.hooks.redis",
	"host": "localhost",
	"port": 6379,
	"db": 0,
 	}
}
WT_INFLUX = {
	"addr": "localhost:8086",
	"user": "admin",
	"password": "admin",
	"hits_db": "hits",
	"events_db": "events",
}
WT_REDIS = {
	"addr": "localhost:6379",
	"db": 0
}
EOM

python3 $settingsscript $project_name $base_dir "$extra_settings"

check "Monitoring tools installed"

exit 0