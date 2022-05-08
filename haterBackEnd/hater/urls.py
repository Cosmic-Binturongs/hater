"""hater URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from hater_app.views import UserViewSet, User_profileViewSet, HatesViewSet, CriticismViewSet, CommentView
from hater_app.views import AllHates, AddDislike, AddComment, AddRehate, EditHate, CreateHate
router = routers.DefaultRouter()
#for testing this route exists make sure to remove the line below me 
router.register(r'user', UserViewSet)
router.register(r'user_Profile', User_profileViewSet)
router.register(r'hates', HatesViewSet)
router.register(r'Criticism', CriticismViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('comments', CommentView.as_view()),
    path('addDislike', AddDislike.as_view()),
    path('addRehate', AddRehate.as_view()),
    path('addComment', AddComment.as_view()),
    path('allHates', AllHates.as_view()),
    path('editHate', EditHate.as_view()),
    path('createHate', CreateHate.as_view()),
    path('user/', include('user_app.urls')),
    path('admin/', admin.site.urls),
]
