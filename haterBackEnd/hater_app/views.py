from rest_framework import viewsets, permissions
from django.db.models import Count
from .serializers import CriticismSerializer, User_profileSerializer, HatesSerializer, TestSerializer, UserSerializer,CommentSerializer, AllHatesSerializer
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
      return Response({'message':" (T⌓T) enter hateid in the url to reference what hate post comment section u want to view"})
class AllHates(APIView):
  def get(self,request, format=None):
    try:
      if not request.query_params:
          hates = Hates.objects.filter()
      else:
          hates = Hates.objects.filter(haters = request.query_params['haterid'])
      hates_json = AllHatesSerializer(hates, many=True)
      return Response(hates_json.data)
    except:
      return Response({'message':" ╥﹏╥ Something went wrong when retrieving raw hate posts"})
class AddDislike(APIView):
  def get(self,request, format=None):
    try:
      hate_id = request.query_params['hateid']
      sign = request.query_params['sign']
      hate_post = Hates.objects.get(id = hate_id)
      new_count = hate_post.hate_count  + int(sign)
      
      Hates.objects.filter(id = hate_id).update(hate_count = new_count)
      return Response({'old_dislike_count':sign})
    except:
      return Response({'message':"ಥ_ಥ error; you are most likely missing a 'hateid' param or that hate post id doesnt exist "})
class AddRehate(APIView):
  def get(self,request, format=None):
    try:
      hate_id = request.query_params['hateid']
      sign = request.query_params['sign']
      hate_post = Hates.objects.get(id = hate_id)
      new_count = hate_post.rehate_count + int(sign)
      Hates.objects.filter(id = hate_id).update(rehate_count = new_count)
      return Response({'old_rehate_count':hate_post.rehate_count})
    except:
      return Response({'message':"(╬ಠ益ಠ) error; you are most likely missing a 'hateid' / 'sign' param or that hate post id doesnt exist "})
class AddComment(APIView):
  def post(self,request, format=None):
    try:
      #increment comment count
      hate_id = request.query_params['hateid']
      hate_post = Hates.objects.get(id = hate_id)
      new_count = hate_post.crit_count + 1
      Hates.objects.filter(id = hate_id).update(crit_count = new_count)
      #create comment
      content = request.data["content"] 
      hater = User_profile.objects.get(id = request.data["hater_id"])
      hate_instance = Hates.objects.get(id = request.data["hater_id"])
      new_hate = Criticism.objects.create(c_body=content,hater=hater,hate = hate_instance)
      new_hate.save()
      return Response({
        'message':'Created new comment ! ʘᆽʘ',
        'old_crit_Count':hate_post.crit_count,
      })
    except:
      return Response({'message':"( ◔ ʖ̯ ◔ ) error; you are most likely messed up the body syntax or are missing a 'hateid' param or that hate post id doesnt exist "})
class EditHate(APIView):
  def put(self,request, format=None):
    try:
      hate_id = request.query_params['hateid']
      new_h_body = request.data['content']
      Hates.objects.filter(id = hate_id).update(h_body=new_h_body)
      return Response({'message':" ◕‿↼ Updated ! "})
    except:
      return Response({'message':"( ﾟДﾟ)b error; you are most likely missing a 'hateid' param or that hate post id doesnt exist "})
