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
templatesdir=$modpath'/templates'

echo "Installing pages management app ..."
cd $project_dir
git clone 'https://github.com/synw/django-vvpages.git'
mv django-vvpages/vvpages . && rm -rf django-vvpages
pip install -r $base_dir/djangomogo/install/pages/requirements.txt
git clone 'https://github.com/synw/django-graphql-utils.git'
mv django-graphql-utils/graphql_utils . && rm -rf django-graphql-utils
urls="url(r'^graphiql',GraphQLView.as_view(graphiql=True)),#!#url(r'^graphql',TGraphQLView.as_view()),#!#url(r'^pages/',include('vvpages.urls')),#!#url(r'^ckeditor/',include('ckeditor_uploader.urls')),#!#url(r'^graph/',include('mptt_graph.urls')),"
echo "Updating settings ..."
python3 $pyscript $project_name $base_dir graphene,graphene_django,graphql_utils,rest_framework,ckeditor,ckeditor_uploader,codemirror2,mptt_graph,vvpages
extralines="GRAPHENE={'SCHEMA':'$project_name.schema.schema'}"
python3 $settingsscript $project_name $base_dir $extralines
echo "Updating urls ..."
python3 $urlscript $project_name $base_dir $urls vvpages
check "Pages management app installed"

exit 0