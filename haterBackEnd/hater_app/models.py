from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class User_profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=4)
    name = models.CharField(max_length=50)
    tag = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Hates(models.Model):

    haters = models.ForeignKey(User_profile, on_delete=models.CASCADE)
    h_body = models.CharField(max_length=140)
    hate_count = models.IntegerField()
    rehate_count = models.IntegerField()
    crit_count = models.IntegerField()
    hate_date = models.DateTimeField(
        default=datetime.now().strftime("%Y-%m-%d %H:%M"))

    def __str__(self):
        return self.h_body


class Criticism(models.Model):
    hater = models.ForeignKey(
        User_profile, on_delete=models.CASCADE, default=4)
    c_body = models.CharField(max_length=140)
    hate = models.ForeignKey(Hates, on_delete=models.CASCADE, default=4)

    def __str__(self):
        return self.c_body
