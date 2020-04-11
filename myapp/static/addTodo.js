function submitForm() {
    let task = document.getElementsByName("task")[0].value;
    let category = document.getElementsByName("category")[0].options[document.getElementsByName("category")[0].selectedIndex].value;
    let due_date = document.getElementById("date").value;

    if(task.length == 0 || category == "Select" || due_date.length == 0) {
        alert('Please fill out all the fields')
    } else {
        let d = new Date(Date.now());
        let dd = d.getDate() < 10 ? "0"+d.getDate() : d.getDate();
        let mm = (d.getMonth()+1) < 10 ? "0"+(d.getMonth()+1) : d.getMonth()+1;
        let yyyy = d.getFullYear();
        
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                location.reload();
            }
        };
        xhttp.open("POST", "/add-todo", true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhttp.setRequestHeader("X-CSRFToken", document.cookie.split("=")[1]);
        xhttp.send("task="+task+"&category="+category+"&due_date="+due_date+"&date_created="+yyyy+"-"+mm+"-"+dd);
    }
}