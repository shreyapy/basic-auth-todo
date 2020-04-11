from django.urls import path
from .views import homePage, addTodo, deleteTodos

urlpatterns = [
    path('', homePage, name='home'),
    path('add-todo', addTodo, name='add-todo'),
    path('delete-todos', deleteTodos, name='delete-todos')
]