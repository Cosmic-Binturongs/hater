from rest_framework import serializers
from .models import Criticism, User_profile, Hates
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
class User_profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_profile
        fields = '__all__'


class HatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hates
        fields = '__all__'
        

class CriticismSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criticism
        fields = '__all__'

class CommentSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
      return {
        'id': instance.id,
        'comment': instance.c_body,
        'hater_id': instance.hater.id,
        'hater_id': instance.hater.name,
        'hate_id': instance.hate.id,
        'hate_content': instance.hate.h_body,
      }
class TestSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
      return {
        'hate': instance.h_body,
        'hater': instance.haters.name,
        'tag': instance.haters.tag
      }