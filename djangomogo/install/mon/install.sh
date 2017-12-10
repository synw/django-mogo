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
pip install redis influxdb geoip2 django-user-agents
git clone https://github.com/synw/django-watchtower.git
cp -R django-watchtower/watchtower .
rm -rf django-watchtower
echo "Updating settings ..."
python3 $pyscript $project_name $base_dir django_user_agents,watchtower

read -r -d '' extra_settings << EOM
WT_EXCLUDE = ("/centrifuge/auth/", "/admin/jsi18n/")
WT_DEBUG = True

GEOIP_PATH = "/home/xxx/bin/geo"

MQUEUE_HOOKS = {
 "redis": {
	"path": "mqueue.hooks.redis",
	"host": "localhost",
	"port": 6379,
	"db": 0,
 	}
}

if "watchtower" in INSTALLED_APPS:
    DATABASES["hits"] = {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "hits.sqlite3"),
    }

WT_DATABASES = {
    "default": {
        "type": "django",
        "hits_db": "hits"
    },
}

# WT_COLLECTOR = False
DATABASE_ROUTERS = ['watchtower.router.HitsRouter']
EOM

python3 $settingsscript $project_name $base_dir "$extra_settings"

check "Monitoring tools installed"
echo "INFO: setup your GEOIP_PATH in settings.py to make this module work

exit 0