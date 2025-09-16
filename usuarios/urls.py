from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sobre', views.sobre, name='sobre'),
    path('etica_compliance', views.etica_compliance, name='etica_compliance'),
    path('segmentos_clientes', views.segmentos_clientes, name='segmentos_clientes'),
    path('login', views.login, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
]