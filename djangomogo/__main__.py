# -*- coding: utf-8 -*-

import sys
import os
import inspect
import subprocess

path = os.path.abspath(__file__)
modpath = os.path.dirname(path)
base_dir =  os.getcwd()
dev_mode = '0'
if len(sys.argv) > 0:
	if sys.argv[0] == '-d':
		dev_mode = '1'
msg = 'What is the name of the project? > '
user_input = raw_input(msg)
if user_input == "":
	print "You must provide a project name"
	sys.exit()
project_name = user_input
bscript = modpath+'/mogoinstall.sh'
print "Starting install ..."
subprocess.call([bscript, project_name, base_dir, dev_mode, modpath])

