# -*- coding: utf-8 -*-

import sys
import os


project_name = sys.argv[1:][0]
base_dir = sys.argv[1:][1]
extralines_str = sys.argv[1:][2]
project_dir = base_dir+'/'+project_name


filepath=project_dir+'/'+project_name+'/settings.py'
f = open(filepath, "a")
f.write("\n"+extralines_str+"\n")
f.close()