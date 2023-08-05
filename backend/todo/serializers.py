from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'label', 'category', 'description',
                    'start_date', 'end_date',
                    'archived', 'completed')