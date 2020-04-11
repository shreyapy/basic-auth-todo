from django.db import models

class Todo(models.Model):
    task = models.CharField(max_length=50)
    date_created = models.DateField()
    due_date = models.DateField()
    category = models.CharField(max_length=30)