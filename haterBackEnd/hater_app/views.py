from rest_framework import viewsets, permissions
from .serializers import CriticismProfileSerializer, User_profileSerializer, hatesSerializer, DislikeSerializer, FollowerSerializer
from .models import Criticism, User_profile, hates, Dislike, Follower
from django.contrib.auth.models import User
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = User_profileSerializer


class User_profileViewSet(viewsets.ModelViewSet):
    queryset = User_profile.objects.all()
    serializer_class = User_profileSerializer

# old haters view set- replaced by Uservie
# class HatersViewSet(viewsets.ModelViewSet):
#     queryset = haters.objects.all()
#     serializer_class = HatersProfileSerializer


class hatesViewSet(viewsets.ModelViewSet):
    queryset = hates.objects.all()
    serializer_class = hatesSerializer


class CriticismViewSet(viewsets.ModelViewSet):
    queryset = Criticism.objects.all()
    serializer_class = CriticismProfileSerializer


class DislikeViewSet(viewsets.ModelViewSet):
    queryset = Dislike.objects.all()
    serializer_class = DislikeSerializer


class FollowerViewSet(viewsets.ModelViewSet):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer
