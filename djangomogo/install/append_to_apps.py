# -*- coding: utf-8 -*-

import sys
import os


project_name = sys.argv[1:][0]
base_dir = sys.argv[1:][1]
extralines_str = sys.argv[1:][2]
project_dir = base_dir+'/'+project_name
xlines = extralines_str.split(',')

def lines_generator(f, extralines):
    for line in f.readlines():
        yield line
        if "# !extra_apps!" in line:
            for app in extralines:
                yield '    "'+app+'",\n'

filepath=project_dir+'/'+project_name+'/settings.py'
filepathtmp=project_dir+'/'+project_name+'/tmp.py'
f = open(filepath, "r")
f2 = open(filepathtmp, "w+")
lines = lines_generator(f, xlines)
for line in lines:
    f2.write(line)
f.close()
f2.close()
os.remove(filepath)
os.rename(filepathtmp, filepath)