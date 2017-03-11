# -*- coding: utf-8 -*-

import sys
import os


project_dir = sys.argv[1:][0]
extralines_str = sys.argv[1:][1]
template = sys.argv[1:][2]


filepath=project_dir+'/templates/'+template
f = open(filepath, "a")
f.write("\n"+extralines_str+"\n")
f.close()