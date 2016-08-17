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
	val=$blue$bold'# '$normal$1
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

if [ $install_mode != 'noinstall' ]
	then
		# create virtualenv 
		title $yellow "1." "Create virtualenv"
		echo "Creating virualenv ..."
		virtualenv --no-site-packages . && source bin/activate
		echo "Upgrading pip if necessary ..."
		pip install --upgrade pip
		ok $green "Virtualenv setup"
fi
source bin/activate

# create project
title $yellow "2." "Install Django and create the project"
echo "Installing Django 1.9 ..."
pip install django==1.9.8
echo -e "Creating the project "$bold$project_name$normal
django-admin startproject $project_name
cd $project_name
pylib = $base_dir+'/lib/python2.7/site-packages/'
ln -s $pylib "pylib"
ok $green "Project created"

if [ $install_mode != 'noinstall' ]
	then
		# install modules
		title $yellow "3." "Install the python modules"
		dot "Installing Pillow image processing library ..."
		pip install pillow
		dot "Installing content management modules ..."
		pip install django-ckeditor django-jssor django-alapage django-codemirror2 django-filebrowser-no-grappelli django-qcf
		dot "Installing Zinnia blog"
		pip install django-blog-zinnia zinnia-wysiwyg-ckeditor
		pip install git+https://github.com/django-blog-zinnia/zinnia-theme-bootstrap.git
		dot "Installing utilities ..."
		pip install sorl-thumbnail ipython python-memcached bleach django-braces django-bootstrap-form django-bootstrap3 django-mptt django-debug-toolbar django-app-namespace-template-loader django-system-monitor django-extensions Werkzeug django-autofixture django-dirtyedit django-mqueue django-allauth django-reversion django-pygments django-mbase
		# dev modules
		if 	[ $install_mode == 'dev' ]
				    then
						option "Install developpement modules"
				       	pip install pytest-django pytest-cov coverage
				        cd $project_dir
		ok $green "Python modules installed"
	fi
fi 

# get static files
title $yellow "4." "Get third party static files"
echo "Creating static directories ..."
mkdir static
cd static && mkdir js && mkdir icons
echo "Getting Jquery ..."
if [ $install_mode != 'noinstall' ]
	then
		cd js && wget http://code.jquery.com/jquery-2.1.4.min.js
fi
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
            check "Using Sqlite"
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
sp=$modpath'/create_settings.py'
python  $sp $project_name $base_dir $dbname $install_mode
echo "Generating settings ..."
echo "Copying urls ..."
cd $modpath
cp urls.py $project_dir'/'$project_name
ok $green "Settings and urls generated for project "$project_name

# final steps
title $yellow "7." "Final step"
read -n 1 -p "Collect staticfiles (Y/n)? " answer
[ -z "$answer" ] && answer="default"
if 	[ $answer == 'default' ]
    then
    	settings=$project_dir'/'$project_name'/settings.py'
    	python $modpath'/statics.py' $settings 'collectstatic'
    	cd $project_dir
    	python manage.py collectstatic
    	python $modpath'/statics.py' $settings 'normal'
    else
    	echo ""
fi
ln -s ../lib/python2.7/site-packages/ pylib

# ending message
endit='[ '$bold$yellow"Done"$normal' ]'" Install completed"	

function activate_env {
    		set -e
			cd $base_dir
			source bin/activate
			cd $project_name
			echo -e $endit
		}

function runserver {
			set -e
			cd $project_dir
			echo -e $endit
			echo "Runing dev server ..."
			python manage.py runserver_plus
		}

read -n 1 -p "Make the migrations and init site (Y/n)? " migs
[ -z "$migs" ] && migs="default"
if 	[ $migs == 'default' ]
    then
    	cd $project_dir
    	echo "Making migrations ..."
    	python manage.py makemigrations
    	echo "Runing migrations ..."
    	python manage.py migrate
    	echo "Creating superuser ..."
    	python manage.py createsuperuser
    	echo "Creating homepage ..."
    	# load the homepage : tofix
		#python manage.py loaddata static/mogo/fixtures/home.json
		python manage.py create_homepage
    else
    	echo ""
    	trap activate_env EXIT
    	exit 0
fi

read -n 1 -p "Run the dev server (Y/n)? " gorunserver
[ -z "$gorunserver" ] && gorunserver="default"
if 	[ $gorunserver == 'default' ]
    then
		trap runserver EXIT
    else
    	echo ""
		trap activate_env EXIT
fi

exit 0
