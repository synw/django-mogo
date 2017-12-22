#!/bin/bash

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4
venv=$5

source $modpath'/install/utils.sh'

# dev modules
if [ $venv == "y" ]
    then
		# create virtualenv 
		title $yellow "1." "Create virtualenv"
		echo "Creating virualenv ..."
		virtualenv -p python3 . 
		source bin/activate
		echo "Upgrading pip if necessary ..."
		pip install --upgrade pip
		ok $green "Virtualenv activated"
		source bin/activate
fi

# create project
title $yellow "2." "Install Django and create the project"
echo "Installing Django ..."
pip install 'django'
echo -e "Creating the project "$bold$project_name$normal
django-admin startproject $project_name
cd $project_name
pylib=$base_dir'/lib/python3.5/site-packages/'
ln -s $pylib "pylib"
ok $green "Project created"
sleep 1

# get static files
title $yellow "3." "Get third party static files"
echo "Copying staticfiles ..."
cp -R $modpath'/static' $project_dir
ok $green "Static files installed"
sleep 1

# install Mogo files
title $yellow "4." "Install Mogo templates and staticfiles"
cd $modpath
echo "Copying templates ..."
mkdir $project_dir"/templates"
templatesdir=$modpath'/templates'
cp -v $templatesdir/*.html $project_dir"/templates"
cp -rv $templatesdir'/admin' $project_dir"/templates"
cp -r $templatesdir'/avatar' $project_dir"/templates"
cp -r $templatesdir'/codemirror2' $project_dir"/templates"
cp -r $templatesdir'/instant' $project_dir"/templates"
cp -r $templatesdir'/reversion' $project_dir"/templates"

echo "Creating media directories ..."
cd $project_dir
mkdir media
mkdir media/uploads #~ for filer
ok $green "Media files installed"
sleep 1

# generate settings
title $yellow "5." "Generate settings"
settings=$project_dir'/'$project_name'/settings.py'
sp=$modpath'/install/init/create_settings.py'
echo "Generating settings ..."
python3  $sp $project_name $base_dir $dbname
echo "Copying urls ..."
cd $modpath
urlspath=$modpath'/install/urls.py'
cp $urlspath $project_dir'/'$project_name
ok $green "Settings and urls generated for project "$project_name

# install basic requirements
title $yellow "6." "Install basic requirements and tools"
echo "Installing requirements ..."
pip install rcssmin --install-option="--without-c-extensions"
pip install rjsmin --install-option="--without-c-extensions"
pip install django-compressor
pip install -r $modpath'/install/init/requirements.txt'
cd $project_dir

# dev modules
if [ $install_mode == 'dev' ]
    then
		option "Install developpement modules"
		check "Installing test tools"
       	pip install pytest-django pytest-cov coverage
		echo "[pytest]
		DJANGO_SETTINGS_MODULE=$project_name.settings" >> pytest.ini
		check "Installing assets pipeline"
		npm init
		echo "Installing Grunt"
		npm install grunt grunt-contrib-concat grunt-contrib-uglify grunt-contrib-cssmin
		cp -v $modpath'/static/Gruntfile.js' $project_dir
		ok $green "Dev modules installed"
fi

exit 0