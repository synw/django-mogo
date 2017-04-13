# -*- coding: utf-8 -*-

import graphene
from graphene_django.debug import DjangoDebug
import vvpages.schema as vvps


class Query(vvps.Query, graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Query)
