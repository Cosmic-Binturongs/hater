from rest_framework import viewsets, permissions
from django.db.models import Count
from .serializers import CriticismSerializer, User_profileSerializer, HatesSerializer, TestSerializer, UserSerializer,CommentSerializer, RawSerializer
from .models import Criticism, User_profile, Hates
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core import serializers

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


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
    serializer_class = CriticismSerializer

class YourHatesView(APIView):
    def get(self, request, format=None):
      hates = Hates.objects.select_related('').all()
      hates_json = TestSerializer(hates, many=True)
      return Response(hates_json.data)
     
class CommentView(APIView):
  def get(self,request, format=None):
    try:
      hateid = request.query_params['hateid']
      crits = Criticism.objects.filter(hate = hateid)
      crits_json = CommentSerializer(crits, many=True)
      return Response(crits_json.data)
    except:
      return Response({'message':"Something went wrong when retrieving comments"})
class RawView(APIView):
  def get(self,request, format=None):
    try:
      if not request.query_params:
          hates = Hates.objects.filter()
      else:
          hates = Hates.objects.filter(haters = request.query_params['haterid'])
      hates_json = RawSerializer(hates, many=True)
      return Response(hates_json.data)
    except:
      return Response({'message':"Something went wrong when retrieving raw hate posts"})
