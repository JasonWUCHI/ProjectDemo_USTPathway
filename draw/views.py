# chat/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'draw/index.html')

def questions(request):
    return render(request, 'draw/questions.html')

def registration(request):
    return render(request, 'draw/registration.html')

def result(request):
    return render(request, 'draw/result.html')

def new_result(request):
    return render(request, 'draw/new_result.html')

def join(request):
    return render(request, 'draw/join.html')



