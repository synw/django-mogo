# -*- coding: utf-8 -*-

import sys
import os
import subprocess
from string import lower

path = os.path.abspath(__file__)
modpath = os.path.dirname(path)
base_dir =  os.getcwd()
install_mode = 'init'
install_real_time = False
if len(sys.argv) > 1:
	if sys.argv[1] == 'init':
		install_mode = 'init'
	elif sys.argv[1] == 'dev':
		install_mode = 'dev'
	elif sys.argv[1] == 'skipmain':
		install_mode = 'skipmain'
	# extra
	if "-rt" in sys.argv:
		install_real_time = True
msg = 'What is the name of the project? > '
user_input = raw_input(msg)
if user_input == "":
	print "You must provide a project name"
	sys.exit()
project_name = user_input
bscript = modpath+'/install/init/install.sh'
print "Starting install ..."
if not install_mode == 'skipmain':
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
if install_mode != 'init':
	# pages
	msg = 'Install the pages management package? [Y/n] > '
	user_input = raw_input(msg)
	if user_input == "" or lower(user_input) == 'y':
		bscript = modpath+'/install/pages/install.sh'
		subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
	else:
		print ""
	# users
	bscript = modpath+'/install/users/install.sh'
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
	# blog
	bscript = modpath+'/install/blog/install.sh'
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
	# forum
	bscript = modpath+'/install/forum/install.sh'
	subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
	# real time
	if install_real_time is True:
		bscript = modpath+'/install/real_time/install.sh'
		subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
# end
bscript = modpath+'/install/end/install.sh'
subprocess.call([bscript, project_name, base_dir, install_mode, modpath])