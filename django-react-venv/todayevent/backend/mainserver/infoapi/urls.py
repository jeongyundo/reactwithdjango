from django.urls import path
from infoapi import views

urlpatterns = [
    path('infoapi/', views.infoapi_list),
    path('infoapi/<int:pk>/', views.infoapi_detail),
]