# -*- coding: utf-8 -*-

import xadmin
from alapage.models import Page
from jssor.models import Slide, Slideshow


class BaseSetting(object):
    enable_themes = False
    use_bootswatch = True
xadmin.site.register(views.BaseAdminView, BaseSetting)


class GlobalSetting(object):
    global_search_models = []
    global_models_icon = {
        Slide: 'fa fa-photo',
        Slideshow: 'fa fa-sliders',
        Page: 'fa fa-file-code-o',      
    }
    menu_style = 'default'
    
xadmin.site.register(views.CommAdminView, GlobalSetting)