from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from .models import Secao

def index(request):
    return render (request, 'index.html')

def sobre(request):
    return render (request, 'sobre.html')

def etica_compliance(request):
    return render (request, 'etica_compliance.html')

def segmentos_clientes(request):
    return render (request, 'segmentos_clientes.html')

def login(request):

    if request.method == 'POST':
        return redirect('dashboard')
    
    return render(request, 'login.html')
        

def dashboard(request):
    secoes = Secao.objects.all()
    return render(request, "dashboard.html", {"secoes": secoes})