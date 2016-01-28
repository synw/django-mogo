#!/bin/bash

#~ project creation
echo "================== Installing Django" ==================
pip install django==1.8.7
echo "================== Creating Django project" ==================
django-admin startproject $1
cd $1

#~ pip stuff
echo "================== Installing python modules" ==================
pip install pillow django-debug-toolbar django-nose django-admin-bootstrapped django-bootstrap-form django-bootstrap3 django-mptt django-allauth pytz django-ckeditor django-codemirror2 django-reversion
git clone https://github.com/synw/django-jssor.git && mv django-jssor/jssor . && mkdir media && mkdir media/jssor && mkdir media/jssor/thumbnails && rm -rf django-jssor
git clone https://github.com/synw/django-zongo.git && mv django-zongo/zongo . && mkdir media/zongo && rm -rf django-zongo
git clone https://github.com/synw/django-alapage.git && mv django-alapage/alapage . && rm -rf django-alapage

#~ static stuff
echo "================== Installing static files" ==================
mkdir static && cd static && mkdir js && mkdir icons
cd js && wget http://code.jquery.com/jquery-2.1.4.min.js
cd ../icons && wget https://fortawesome.github.io/Font-Awesome/assets/font-awesome-4.5.0.zip
unzip font-awesome-4.5.0.zip && mv font-awesome-4.5.0 font-awesome && rm font-awesome-4.5.0.zip
cd ../..

#~ config
echo "================== Installing config files and templates" ==================
git clone https://github.com/synw/django-mogo.git
rm $1/urls.py && mv django-mogo/urls.py $1
mv django-mogo/static/css static
mv django-mogo/templates .
rm -rf django-mogo

echo ">>> Installation completed" 
