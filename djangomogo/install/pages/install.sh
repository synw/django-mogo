#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

source $modpath'/install/utils.sh'
source bin/activate

echo "Installing pages management modules ..."
pip install --no-deps django-ckeditor
pip install django-alapage django-codemirror2
pyscript=$modpath'/install/append_to_apps.py'
urlscript=$modpath'/install/append_to_urls.py'
settingsscript=$modpath'/install/append_to_settings.py'
urls="alapage#!#url(r'^ckeditor/',include('ckeditor_uploader.urls')),"
python $pyscript $project_name $base_dir codemirror2,ckeditor,ckeditor_uploader,mptt_graph,django_ajax,alapage
echo "Settings updated"
python $urlscript $project_name $base_dir $urls
echo "Urls updated"

read -r -d '' extra_settings << EOM

CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_JQUERY_URL = '/static/js/jquery-2.1.4.min.js'
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar':  [
                    ["Format", "Styles", "Bold", "Italic", "Underline", '-', 'RemoveFormat'],
                    ['NumberedList', 'BulletedList', "Indent", "Outdent", 'JustifyLeft', 'JustifyCenter','JustifyRight', 'JustifyBlock'],
                    ["Image", "Table", "Link", "Unlink", "Anchor", "SectionLink", "Subscript", "Superscript"], ['Undo', 'Redo'],
                    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],["Source", "Maximize"],
                    ],
        "removePlugins": "stylesheetparser",
        'width': '1150px',
        'height': '450px',
    },
}
EOM

python $settingsscript $project_name $base_dir "$extra_settings"

ok $green "Pages management modules installed"
