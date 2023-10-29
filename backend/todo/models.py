from django.db import models

# Create your models here.

class Todo(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    title = models.CharField(max_length=120, default="", blank=True, null=True)
    label = models.CharField(max_length=120, default="", blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=120, default="", blank=True, null=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    archived = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title