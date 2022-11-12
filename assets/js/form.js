let city = document.getElementsByClassName("city").value;
let course = document.getElementsByClassName("course").value;
let name = document.getElementById("name").value;
let fathername = document.getElementById("fathername").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let cnic = document.getElementById("cnic").value;
let fathercnic = document.getElementById("fathercnic").value;
let gender = document.getElementsByClassName("gender").value;
let address = document.getElementById("address").value;
let edu = document.getElementsByClassName("edu").value;

// function login() {
//     let email1 = document.getElementById("email1").value;
//     let pass = document.getElementById("pass").value;

//     if (email1 == "" && pass == "") {
//         swal("Please Fill The Input")
//     }
//     else if (email1 === "admin" && pass === "admin") {
//         window.location.href = "admin.html";
//     }
//     else {
//         swal("Please Fill The Input Correctly!")
//     }
// }

let allData;

allData = [{
    city: city,
    course: course,
    name: name,
    fathername: fathername,
    phone: phone,
    cnic: cnic,
    gender: gender,
    address: address,
    edu: edu
}]

function submit() {
    if (city == "") {
        swal("Please select your city");
    }
    else if (course == "") {
        swal("Please select your course");
    }
    else if (name == "") {
        swal("Please select your name");
    }
    else if (fathername == "") {
        swal("Please select your fathername");
    }
    else if (phone == "") {
        swal("Please select your phone");
    }
    else if (gender == "") {
        swal("Please select your gender");
    }
    else if (address == "") {
        swal("Please select your address");
    }
    else if (edu == "") {
        swal("Please select your edu");
    }
    else {
        localStorage.setItem("allData1", JSON.stringify(allData));
        location.reload();
    }
}

console.log(submit());
