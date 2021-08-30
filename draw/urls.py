# chat/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('questions/', views.questions, name='questions'),
    path('registration/', views.registration, name='registration'),
    path('big/', views.big, name='big'),
    path('result/', views.result, name='result'),
]
