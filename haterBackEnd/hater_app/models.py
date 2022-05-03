from django.db import models
from django.contrib.auth.models import User


class Hate(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.CharField(max_length=120)

    def __str__(self):
        return self.body


class Criticism(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    hate_id = models.ForeignKey(Hate, on_delete=models.CASCADE)
    c_body = models.CharField(max_length=120)

    def __str__(self):
        return self.body


class Dislike(models.Model):
    hater_id = models.ForeignKey(User, on_delete=models.CASCADE)
    hate_id = models.ForeignKey(Hate, on_delete=models.CASCADE)
    criticism_id = models.ForeignKey(Criticism, on_delete=models.CASCADE)


class Follower(models.Model):
    hater_being_followed_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="followed", default=1)
    hater_following_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="following", default=1)
