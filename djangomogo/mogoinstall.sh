#!/bin/bash

black='\E[30m'
red='\E[31m'
green='\E[32m'
yellow='\E[33m'
blue='\e[36m'
magenta='\E[35m'
cyan='\E[36m'
white='\E[37m'
normal='\e[0m'
bold='\e[1m'

project_name=$1
base_dir=$2
install_mode=$3
project_dir=$base_dir'/'$project_name
mogo_dir=$base_dir
modpath=$4

title() {
		val=$1$bold$2$normal
		val+=' '
		val+=$3
		echo -e $val
	}

ok() {
		val='[ '$1$bold'Ok'$normal' ] '$2
		echo -e $val
	}

option(	) {
	val='[ '$blue'Option'$normal' ] '$1
	echo -e $val		
	}

check() {
	val='['$blue'x'$normal'] '$1
	echo -e $val		
	}

dot	( ) {
	val=$blue'# '$normal$1
	echo -e $val		
	}

error 	( ) {
	val='['$red' Error '$normal'] '$1
	echo -e $val		
	}

if 	[ $install_mode == 'dev' ]	
    then
    	check 'Dev mode is enabled'
fi

# create virtualenv 
title $yellow "1." "Create virtualenv"
echo "Creating virualenv ..."
virtualenv --no-site-packages . && source bin/activate
echo "Upgrading pip if necessary ..."
pip install --upgrade pip
source bin/activate
ok $green "Virtualenv setup"

# create project
title $yellow "2." "Install Django and create the project"
echo "Installing Django ..."
pip install  "django"
echo -e "Creating the project "$bold$project_name$normal
django-admin startproject $project_name
cd $project_name
ok $green "Project created"

# for debug
# if false
# then

# install modules
title $yellow "3." "Install the python modules"
dot "Installing Pillow image processing library ..."
pip install pillow
dot "Installing content management modules ..."
pip install django-ckeditor django-jssor django-alapage django-codemirror2 django-filebrowser-no-grappelli
dot "Installing Zinnia blog"
pip install django-blog-zinnia
pip install git+https://github.com/django-blog-zinnia/zinnia-theme-bootstrap.git
dot "Installing utilities ..."
pip install sorl-thumbnail ipython python-memcached bleach django-braces django-bootstrap-form django-bootstrap3 django-mptt django-debug-toolbar django-app-namespace-template-loader django-system-monitor django-extensions Werkzeug django-autofixture django-dirtyedit django-mqueue django-allauth django-reversion django-mbase
# reversion option
if 	[ $install_mode == 'dev' ]	
    then
		option "Install developpement modules"
       	pip install pytest-django pytest-cov coverage
        cd $base_dir
      	git clone https://github.com/synw/django-mbase.git && mv django-mbase/mbase . && rm -rf django-mbase
		git clone https://github.com/synw/django-qcf.git && mv django-qcf/qcf . && rm -rf django-qcf
fi 
ok $green "Python modules installed"

# get static files
title $yellow "4." "Get third party static files"
cd $project_dir
echo "Creating static directories ..."
mkdir static
cd static && mkdir js && mkdir icons
echo "Getting Jquery ..."
cd js && wget http://code.jquery.com/jquery-2.1.4.min.js
ok $green "External static files installed"

# install Mogo files
title $yellow "5." "Install Mogo staticfiles and templates"
cd $modpath
echo "Copying staticfiles ..."
cp -r static/* $project_dir"/static"
echo "Creating media directories ..."
cd $project_dir
mkdir media
mkdir media/uploads #~ for filebrowser
mkdir media/jssor
mkdir media/jssor/thumbnails
echo "Copying templates ..."
cd $modpath
cp -r  templates $project_dir
cd $base_dir
ok $green "Static files and templates installed"

# leave the rest to the python script and finish up
title $yellow "6." "Generate settings"
settings=$project_dir'/'$project_name'/settings.py'
rm $settings
sp=$modpath
# prompt for db
PS3='Database to use > '
options=("Sqlite" "Postgresql" "Mysql")
select dbname in "${options[@]}"
do
    case $dbname in
        "Sqlite")
            check "Sqlite database selected"
            break
            ;;
        "Postgresql")
            check "Postgresql database selected, installing python drivers ..."
            pip install psycopg2
            break
            ;;
        "Mysql")
            check "Mysql database selected, installing python drivers ..."
            pip install mysql-python
            break
            ;;
        *) error "Please select a database to use (1/2/3)";;
    esac
done	

# generate settings
sp+='/create_settings.py'
python  $sp $project_name $base_dir $dbname
echo "Generating settings ..."
echo "Copying urls ..."
cd $modpath
cp urls.py $project_dir'/'$project_name
cd $base_dir
ok $green "Settings and urls generated for project "$project_name
endit='[ '
endit+=$bold$yellow"Done"$normal 
endit+=' ]'
endit+=" Install completed"
echo -e $endit


