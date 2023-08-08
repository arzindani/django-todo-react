from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', # 'label', 'category', 
                    'description',
                    # 'start_date', 'end_date', 'archived',
                    'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)