var selectedTodos = [];

function toggleTodoList(id) {
    if(selectedTodos.includes(id)) {
        let index = selectedTodos.indexOf(id);
        if(index > -1) selectedTodos.splice(index, 1);
    }
    else selectedTodos.push(id);
}

function deleteTodos() {
    if(selectedTodos.length == 0) {
        alert('Please select atleast one todo');
    } else {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                location.reload();
            }
        };
        xhttp.open("POST", "/delete-todos", true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhttp.setRequestHeader("X-CSRFToken", document.cookie.split("=")[1]);
        xhttp.send('list='+selectedTodos);
    }
}