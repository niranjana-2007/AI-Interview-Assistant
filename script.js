const role = document.getElementById("role");

const button = document.querySelector(".practice-button");


button.addEventListener("click", function() {

    if (role.value === "") {

        alert("Please select an interview role.");

        return;
    }


    localStorage.clear();


    localStorage.setItem(
        "selectedRole",
        role.value
    );


    window.location.href = "interview.html";

});