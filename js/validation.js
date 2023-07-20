
function validation() {
    let t = true;
    let id = document.getElementById("emp-id").value;
    let name = document.getElementById("emp-name").value;
    let age = document.getElementById("emp-age").value;
    let gender = document.getElementById("emp-gender").value;
    let designation = document.getElementById("emp-des").value;
    let photo = document.getElementById("emp-photo").value;




    if (id == "" || id == null) {
        document.getElementsByClassName("form-text")[0].innerText = "Fill this field.";
        t = false;
    }
    else if (arrToken.includes(id)) {
        document.getElementsByClassName("form-text")[0].innerText = "Id already existed";
        t = false;
    }
    else {
        document.getElementsByClassName("form-text")[0].innerText = "";
    }



    if (name == "" || name == null) {
        document.getElementsByClassName("form-text")[1].innerText = "Fill this field.";
        t = false;
    } else if (!(/^[a-zA-Z]+$/.test(name))) {
        document.getElementsByClassName("form-text")[1].innerText = "Only Alphabet is allowed.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[1].innerText = "";
    }



    if (age == "" || age == null) {
        document.getElementsByClassName("form-text")[2].innerText = "Fill this field.";
        t = false;
    } else if (Number(age) < 18 || Number(age) > 60) {
        document.getElementsByClassName("form-text")[2].innerText = "range between 18-60";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[2].innerText = "";
    }


    if (gender == "" || gender == null) {
        document.getElementsByClassName("form-text")[3].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[3].innerText = "";

    }


    if (designation == "" || designation == null) {
        document.getElementsByClassName("form-text")[4].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[4].innerText = "";

    }


    if (photo == "" || photo == null) {
        document.getElementsByClassName("form-text")[5].innerText = "Fill this field.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[5].innerText = "";

    }

    console.log();

    return t;
}







function validationEdit() {
    let t = true;
    let name = document.getElementById("emp-name-update").value;
    let age = document.getElementById("emp-age-update").value;
    let gender = document.getElementById("emp-gender-update").value;
    let designation = document.getElementById("emp-des-update").value;
    let photo = document.getElementById("emp-photo-update").value;



    if (name == "" || name == null) {
        document.getElementsByClassName("form-text")[6].innerText = "Fill this field.";
        t = false;
    } else if (!(/^[a-zA-Z]+$/.test(name))) {
        document.getElementsByClassName("form-text")[6].innerText = "Only Alphabet is allowed.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[6].innerText = "";
    }



    if (age == "" || age == null) {
        document.getElementsByClassName("form-text")[7].innerText = "Fill this field.";
        t = false;
    } else if (Number(age) < 18 || Number(age) > 60) {
        document.getElementsByClassName("form-text")[7].innerText = "range between 18-60";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[7].innerText = "";
    }


    if (gender == "" || gender == null) {
        document.getElementsByClassName("form-text")[8].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[8].innerText = "";

    }


    if (designation == "" || designation == null) {
        document.getElementsByClassName("form-text")[9].innerText = "Select option.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[9].innerText = "";

    }


    if (photo == "" || photo == null) {
        document.getElementsByClassName("form-text")[10].innerText = "Fill this field.";
        t = false;
    } else {
        document.getElementsByClassName("form-text")[10].innerText = "";

    }

    return t;
}