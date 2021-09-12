# chat/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('questions/', views.questions, name='questions'),
    path('registration/', views.registration, name='registration'),
    path('result/', views.result, name='result'),
    path('new_result/', views.new_result, name='new_result'),
    path('join/', views.join, name='join'),
]
