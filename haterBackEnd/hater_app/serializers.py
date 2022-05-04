from rest_framework import serializers
from .models import Criticism, User_profile, Hates, Dislike, Follower
from django.contrib.auth.models import User


class User_profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_profile
        fields = '__all__'


class HatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hates
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
