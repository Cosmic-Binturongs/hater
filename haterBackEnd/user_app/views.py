from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.contrib import auth
from django.contrib.auth.models import User
from hater_app.models import User_profile
from hater_app.serializers import User_profileSerializer
from knox.models import AuthToken

class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        user = self.request.user
        print(user)
        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({"isAuthenticated": "success"})
            else:
                return Response({"isAuthenticated": "not authenticated"})

        except:
            return Response({"error": "Something went wrong when checking authentication status"})

class LoginView(APIView):
    permission_classes = [
      permissions.AllowAny
    ]


    def post(self, request):
        data = self.request.data

        username = data["username"]
        password = data["password"]

        try:
            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return Response({"success": "User authenticated",
                                 "token": AuthToken.objects.create(user)[1]})
            else:
                return Response({"error": "Error Authenticating"})
        except:
            return Response({"error": "Something went wrong when logging in"})

class SignupView(APIView):
    permission_classes = [
      permissions.AllowAny
    ]

    def post(self,request):
        data = self.request.data

        username = data["username"]
        password = data["password"]
        re_password = data["re_password"]
        tag = data["tag"]

        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({"error": "Username already exists"})
                else:
                    if len(password) < 6:
                        return Response({"error": "Password must be at least 6 characters"})
                    else:
                        user = User.objects.create_user(
                            username=username, password=password)
                        # user = User.objects.get(id=user.id)

                        user_profile = User_profile.objects.create(
                            user=user, name=username, tag=tag)

                        return Response({
                          "success": "User created successfully",
                          "token": AuthToken.objects.create(user)[1]
                                         })
            else:
                return Response({"error": "Passwords do not match"})
        except:
            return Response({"error": "Something went wrong signing up"})


class DeleteAccountView(APIView):
    def delete(self, request, format=None):
        user = self.request.user

        try:
            user = User.objects.filter(id=user.id).delete()

            return Response({"success": "User deleted successfully"})
        except:
            return Response({"error": "Something went wrong when trying to delete user"})



class GrabProfile(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            profile = User_profile.objects.get(user=user)
            profile_json = User_profileSerializer(profile)
            return Response({"profile": profile_json.data})
        except:
            return Response({"error": "( ﾟДﾟ)b error; make sure ur logged in "})