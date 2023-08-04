from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    label = models.TextField()
    description = models.TextField()
    category = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    archived = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title