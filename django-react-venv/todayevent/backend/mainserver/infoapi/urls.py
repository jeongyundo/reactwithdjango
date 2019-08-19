from django.urls import path, include
from rest_framework.routers import DefaultRouter
from infoapi import views


router = DefaultRouter()
router.register(r'infoapis', views.infoapiViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]