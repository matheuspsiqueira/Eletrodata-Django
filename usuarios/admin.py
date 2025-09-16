from django.contrib import admin
from .models import Secao

@admin.register(Secao)
class SecaoAdmin(admin.ModelAdmin):
    list_display = ("titulo", "ordem")
    list_editable = ("ordem",)
