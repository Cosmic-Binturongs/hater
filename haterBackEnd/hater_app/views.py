from rest_framework import viewsets, permissions
from django.db.models import Count
from .serializers import CriticismProfileSerializer, User_profileSerializer, HatesSerializer, DislikeSerializer, FollowerSerializer
from .models import Criticism, User_profile, Hates, Dislike, Follower
from django.contrib.auth.models import User
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = User_profileSerializer


class User_profileViewSet(viewsets.ModelViewSet):
    queryset = User_profile.objects.all()
    # queryset = User_profile.objects.filter(name='evan').count()
    # queryset = len(User_profile.objects.filter(name='evan'))
    serializer_class = User_profileSerializer


class HatesViewSet(viewsets.ModelViewSet):
    queryset = Hates.objects.all()
    serializer_class = HatesSerializer


class CriticismViewSet(viewsets.ModelViewSet):
    queryset = Criticism.objects.all()
    serializer_class = CriticismProfileSerializer


class DislikeViewSet(viewsets.ModelViewSet):
    queryset = Dislike.objects.all()
    serializer_class = DislikeSerializer


class FollowerViewSet(viewsets.ModelViewSet):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer
