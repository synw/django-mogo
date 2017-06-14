import sys
import os


alapage_url = "urlpatterns.append(url(r'^',include('alapage.urls')))"

project_name = sys.argv[1:][0]
base_dir = sys.argv[1:][1]
extralines_str = sys.argv[1:][2]
extra_import = None
try:
    extra_import = sys.argv[1:][3]
except:
    pass
project_dir = base_dir+'/'+project_name
xlines = extralines_str.split('#!#')

def lines_generator(f, extralines):
    for line in f.readlines():
        yield line
        if "# !extra_imports!" in line:
            if extra_import == "instant":
                yield "from instant.views import instant_auth\n"
        if "# !extra_urls!" in line:
            for url in extralines:
                if url not in ["alapage"]:
                    yield '\t'+url+"\n"


filepath=project_dir+'/'+project_name+'/urls.py'
filepathtmp=project_dir+'/'+project_name+'/tmp.py'
f = open(filepath, "r")
f2 = open(filepathtmp, "w+")
lines = lines_generator(f, xlines)
for line in lines:
    f2.write(line)
if "alapage" in xlines:
    f2.write("\n\n"+alapage_url)
f.close()
f2.close()
os.remove(filepath)
os.rename(filepathtmp, filepath)
