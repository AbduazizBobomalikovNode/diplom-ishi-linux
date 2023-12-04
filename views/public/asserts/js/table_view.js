let tr_count = 1;
let array = document.getElementsByTagName("tr");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.style.display == "table-row") {
        tr_count++;
        console.log(tr_count);
    }
}

let button_add_tr = document.getElementById("table-dynamik+");
let button_delete_tr = document.getElementById("table-dynamik-");
let list_tr = document.getElementById('table2').children;

button_delete_tr.onclick = () => {
    if (tr_count > 1) {
        tr_count--;
        list_tr[tr_count].style.display = "none";
    }
}
button_add_tr.onclick = () => {
    if (tr_count < 8) {
        list_tr[tr_count].style.display = "table-row";
        tr_count++;
    }
}