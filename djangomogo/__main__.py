# -*- coding: utf-8 -*-

import sys
import os
import subprocess
from string import lower

path = os.path.abspath(__file__)
modpath = os.path.dirname(path)
base_dir =  os.getcwd()
install_mode = 'normal'
install_real_time = False
install_spa = False
plus = False
if len(sys.argv) > 1:
	if '-django' in sys.argv[1]:
		install_mode = 'django'
	else:
		if '-dev' in sys.argv:
			install_mode = 'dev'
		if '-modules' in sys.argv:
			install_mode = 'modules'
		if '-plus' in sys.argv:
			plus = True
msg = 'What is the name of the project? > '
user_input = raw_input(msg)
if user_input == "":
	print "You must provide a project name"
	sys.exit()
project_name = user_input
bscript = modpath+'/install/init/install.sh'
print "Starting install ..."
if not install_mode == 'modules':
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
pages_installed = "n"
if install_mode != 'django':
	pages_installed = "y"
	msg = 'Install the pages management package? [Y/n] > '
	user_input = raw_input(msg)
	if user_input == "" or lower(user_input) == 'y':
		bscript = modpath+'/install/pages/install.sh'
		subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
	# contact
	bscript = modpath+'/install/contact/install.sh'
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
	# real time
	msg = 'Install the realtime modules? [y/N] > '
	rt = "n"
	user_input = raw_input(msg)
	if user_input == "y":
		rt = "y"
		bscript = modpath+'/install/real_time/install.sh'
		subprocess.call([bscript, project_name, base_dir, modpath])
	if plus is True:
		# users
		bscript = modpath+'/install/users/install.sh'
		subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
		# catalog
		bscript = modpath+'/install/catalog/install.sh'
		subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
# end
bscript = modpath+'/install/end/install.sh'
subprocess.call([bscript, project_name, base_dir, install_mode, modpath, rt, pages_installed])
