# -*- coding: utf-8 -*-

import sys
import os
import subprocess
from string import lower

path = os.path.abspath(__file__)
modpath = os.path.dirname(path)
base_dir =  os.getcwd()
install_mode = 'init'
if len(sys.argv) > 1:
	if sys.argv[1] == 'init':
		install_mode = 'init'
	elif sys.argv[1] == 'dev':
		install_mode = 'dev'
msg = 'What is the name of the project? > '
user_input = raw_input(msg)
if user_input == "":
	print "You must provide a project name"
	sys.exit()
project_name = user_input
bscript = modpath+'/install/'+install_mode+'/install.sh'
print "Starting install ..."
subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
# pages
msg = 'Install the pages management package? [Y/n] > '
user_input = raw_input(msg)
if user_input == "" or lower(user_input) == 'y':
	bscript = modpath+'/install/pages/install.sh'
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
# users
bscript = modpath+'/install/users/install.sh'
subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
# end
bscript = modpath+'/install/end/install.sh'
subprocess.call([bscript, project_name, base_dir, install_mode, modpath])