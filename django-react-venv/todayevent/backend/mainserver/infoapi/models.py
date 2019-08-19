from django.db import models

# Create your models here.


class infoapi(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=300)
    content = models.TextField(max_length=5000)
    image = models.ImageField()
    date = models.DateTimeField()
    website = models.URLField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']

    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)
    highlighted = models.TextField()
    