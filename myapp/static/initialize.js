let due_date = document.getElementById("date");
let d = new Date(Date.now());
let dd = d.getDate() < 10 ? "0"+d.getDate() : d.getDate();
let mm = (d.getMonth()+1) < 10 ? "0"+(d.getMonth()+1) : d.getMonth()+1;
let yyyy = d.getFullYear();
due_date.min = yyyy+"-"+mm+"-"+dd;
due_date.value = yyyy+"-"+mm+"-"+dd;

let category = document.getElementsByClassName("category");
for(let i=0;i<category.length;i++) {
    switch(category[i].innerText) {
        case "Private" : category[i].style.backgroundColor = "orange";
                            break;
        case "Urgent" : category[i].style.backgroundColor = "red";
                            break;
        case "Work" : category[i].style.backgroundColor = "#33CC99";
                            break;
        case "Paid" : category[i].style.backgroundColor = "grey";
                            break;
    }
}