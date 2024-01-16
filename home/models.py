from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length= 120)
    email = models.CharField(max_length= 120)
    message = models.TextField()