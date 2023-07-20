var arrToken = [];
var arr = [];


function addEmp() {
    event.preventDefault();
    if (validation()) {
        let id = document.getElementById("emp-id").value;
        let name = document.getElementById("emp-name").value;
        let age = document.getElementById("emp-age").value;
        let gender = document.getElementById("emp-gender").value;
        let designation = document.getElementById("emp-des").value;
        let photo = document.getElementById("emp-photo").value;
        let add = {};
        // console.log(id, name, age, gender, designation, photo);
        add['id'] = id;
        add['name'] = name;
        add['age'] = age;
        add['gender'] = gender;
        add['designation'] = designation;
        add['photo'] = photo;
        arr.push(add);
        arrToken.push(id);

        document.getElementById("emp-id").value = "";
        document.getElementById("emp-name").value = "";
        document.getElementById("emp-age").value = "";
        document.getElementById("emp-gender").selectedIndex = 0;
        document.getElementById("emp-des").selectedIndex = 0;
        document.getElementById("emp-photo").value = "";

    }


    // console.log(arr);

    addTable();

    // tbl
    // console.log(tbl.innerHTML);
}

function addTable() {
    let tbl = document.getElementById("tbl-body");

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>
                <td>${arr[i].designation}</td>
                <td>
                    <button onclick="updateEmp(${i})" class="btn btn-edit">Edit</button>
                    <button onclick="deleteEmp(${i})"class="btn btn-delete">Delete</button>
                    <button onclick="viewEmp(${i})" class="btn btn-view">View</button>
                </td>
            </tr>`;
    }
    tbl.innerHTML = str;

}