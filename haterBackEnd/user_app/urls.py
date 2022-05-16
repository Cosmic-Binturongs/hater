from django.urls import path
from .views import SignupView, LoginView, CheckAuthenticatedView, DeleteAccountView, GrabProfile
from knox import views as knox_views
urlpatterns = [
  path('authenticated', CheckAuthenticatedView.as_view()),
  path('register', SignupView.as_view()),
  path('login', LoginView.as_view()),
  path('logout', knox_views.LogoutView.as_view(), name='knox_logout'),
  path('delete', DeleteAccountView.as_view()),
  path('grabProfile', GrabProfile.as_view()),
]