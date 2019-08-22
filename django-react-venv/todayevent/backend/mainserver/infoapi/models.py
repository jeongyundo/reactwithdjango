from django.db import models

# Create your models here.


class Infoapi(models.Model):
    id = models.AutoField(primary_key=True)
    writer = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    content = models.TextField(max_length=5000)
    image = models.TextField(max_length=5000)
    date = models.DateTimeField()
    website = models.TextField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']

    owner = models.ForeignKey('auth.User', related_name='infoapis', on_delete=models.CASCADE)
    highlighted = models.TextField()
    