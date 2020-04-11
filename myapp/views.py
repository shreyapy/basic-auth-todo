from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Todo
from .forms import TodoForm

def homePage(req):
    todos = list(Todo.objects.all())
    todos.sort(key=lambda x: x.category, reverse=True)
    return render(req, 'index.html', {'todos': todos})

def addTodo(req):
    if(req.method == "POST"):
        form = TodoForm(req.POST)
        if form.is_valid():
            form.save()
    return redirect('/')

def deleteTodos(req):
    if(req.method == "POST"):
        ids = req.POST['list'].split(',')
        for id in ids:
            todo = Todo.objects.get(id=id)  
            todo.delete()

    return redirect('/')
