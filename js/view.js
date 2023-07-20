
function viewEmp(idx) {
    let pop = document.getElementById("pop-up-view");
    pop.style.display = 'flex';

    document.getElementById("viewId").innerHTML = `<p>: ${arr[idx].id} </p>`;
    document.getElementById("viewName").innerHTML = `<p>: ${arr[idx].name} </p>`;
    document.getElementById("viewAge").innerHTML = `<p>: ${arr[idx].age} </p>`;
    document.getElementById("viewGender").innerHTML = `<p>: ${arr[idx].gender} </p>`;
    document.getElementById("viewDesignation").innerHTML = `<p>: ${arr[idx].designation} </p>`;
    document.getElementById("viewPhoto").src = arr[idx].photo;
    console.log(document.getElementById("viewId").innerHTML);
}