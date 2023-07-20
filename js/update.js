
function updateEmp(idx) {
    let pop = document.getElementById("pop-up-update");
    pop.style.display = 'flex';

    document.getElementById("idx").value = idx;
    document.getElementById("emp-id-update").value = arr[idx].id;
    document.getElementById("emp-name-update").value = arr[idx].name;
    document.getElementById("emp-age-update").value = arr[idx].age;
    document.getElementById("emp-gender-update").value = arr[idx].gender;
    document.getElementById("emp-des-update").value = arr[idx].designation;
    document.getElementById("emp-photo-update").value = arr[idx].photo;



}

function addUpdatedEmp() {
    event.preventDefault();
    if (validationEdit()) {
        // let id = document.getElementById("emp-id-update").value;
        let idx = document.getElementById("idx").value;
        let name = document.getElementById("emp-name-update").value;
        let age = document.getElementById("emp-age-update").value;
        let gender = document.getElementById("emp-gender-update").value;
        let designation = document.getElementById("emp-des-update").value;
        let photo = document.getElementById("emp-photo-update").value;
        // let tbl = document.getElementById("tbl-body");
        // let add = {};
        // console.log(id, name, age, gender, designation, photo);
        // arr[idx]['id'] = id;
        arr[idx]['name'] = name;
        arr[idx]['age'] = age;
        arr[idx]['gender'] = gender;
        arr[idx]['designation'] = designation;
        arr[idx]['photo'] = photo;
        // arr.push(add);

        addTable();

        let pop = document.getElementById("pop-up-update");
        pop.style.display = 'none';

    }




}

function cancelBtn() {
    let popUpdate = document.getElementById("pop-up-update");
    let popView = document.getElementById("pop-up-view");
    popUpdate.style.display = 'none';
    popView.style.display = 'none';
}