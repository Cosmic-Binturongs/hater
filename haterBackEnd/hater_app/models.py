from django.db import models
from django.contrib.auth.models import User


class User_profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, default=4)
    name = models.CharField(max_length=50)
    tag = models.CharField(max_length=50)


class Hates(models.Model):
    haters = models.ForeignKey(User_profile, on_delete=models.CASCADE)
    h_body = models.CharField(max_length=120)


class Criticism(models.Model):
    haters = models.ForeignKey(
        User_profile, on_delete=models.CASCADE, default=4)
    c_body = models.CharField(max_length=140)
    hates = models.ForeignKey(Hates, on_delete=models.CASCADE, default=4)


class Dislike(models.Model):
    haters = models.ForeignKey(
        User_profile, on_delete=models.CASCADE, default=1)
    hate = models.ForeignKey(Hates, on_delete=models.CASCADE, default=4)
    criticism = models.ForeignKey(
        Criticism, on_delete=models.CASCADE, default=4)


class Follower(models.Model):
    hater_being_followed = models.ForeignKey(
        User_profile, on_delete=models.CASCADE, related_name="followed", default=4)
    hater_following = models.ForeignKey(
        User_profile, on_delete=models.CASCADE, related_name="following", default=4)
