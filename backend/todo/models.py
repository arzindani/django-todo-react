from django.db import models

# Create your models here.

class Todo(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    title = models.CharField(max_length=120, default="")
    label = models.CharField(max_length=120, default="")
    description = models.TextField(blank=True)
    category = models.CharField(max_length=120, default="")
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    archived = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title