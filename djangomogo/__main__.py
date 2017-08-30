from __future__ import print_function
import sys
import os
import subprocess

path = os.path.abspath(__file__)
modpath = os.path.dirname(path)
base_dir = os.getcwd()
install_mode = 'normal'
plus = False
mon = False
venv = "y"
if len(sys.argv) > 1:
    if '-django' in sys.argv[1]:
        install_mode = 'django'
    elif '-dev' in sys.argv:
        install_mode = 'dev'
    elif '-modules' in sys.argv:
        install_mode = 'modules'
    elif "-q" is sys.argv:
        install_mode = "default"
    if '-plus' in sys.argv:
        plus = True
    if '-mon' in sys.argv:
        mon = True
    if '-noenv' is sys.argv:
        venv = "n"
msg = 'What is the name of the project? > '
if sys.version_info[:2] <= (2, 7):
    get_input = raw_input
else:
    get_input = input
user_input = get_input(msg)
if user_input == "":
    print("You must provide a project name")
    sys.exit()
project_name = user_input
bscript = modpath + '/install/init/install.sh'
print("Starting install ...")
if not install_mode == 'modules':
    subprocess.call([bscript, project_name, base_dir,
                     install_mode, modpath, venv])
pages_installed = "n"
if install_mode != 'django':
    bscript = modpath + '/install/pages/install.sh'
    subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
    # contact
    bscript = modpath + '/install/contact/install.sh'
    subprocess.call([bscript, project_name, base_dir, install_mode, modpath])
    if install_mode != "default":
        # real time
        msg = 'Install the realtime modules? [y/N] > '
        rt = "n"
        user_input = get_input(msg)
        if user_input == "y":
            rt = "y"
            bscript = modpath + '/install/real_time/install.sh'
            subprocess.call([bscript, project_name, base_dir, modpath])
        if plus is True:
            # users
            bscript = modpath + '/install/users/install.sh'
            subprocess.call(
                [bscript, project_name, base_dir, install_mode, modpath])
    if mon is True:
        bscript = modpath + '/install/mon/install.sh'
        subprocess.call(
            [bscript, project_name, base_dir, install_mode, modpath])

# end
bscript = modpath + '/install/end/install.sh'
subprocess.call([bscript, project_name, base_dir, install_mode, modpath, rt])
