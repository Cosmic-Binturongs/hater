from rest_framework import serializers
from .models import Criticism, User_profile, hates, Dislike, Follower
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class hatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = hates
        fields = '__all__'


class DislikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dislike
        fields = '__all__'


class FollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follower
        fields = '__all__'


class CriticismProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criticism
        fields = '__all__'


class User_profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_profile
        fields = '__all__'
