var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-pwd");
var message = document.getElementById("message");


var check = function() {
    if (password.value === "" && confirmPassword === "") {
        message.innerHTML = "";
    } else if (password.value === confirmPassword.value) {
        message.style.color = "green";
        message.innerHTML = "Correct, Matching";
    } else {
        message.style.color = "red";
        message.innerHTML = "False , not Matching!! , try again.";
    }
};
password.addEventListener("keyup", check);
confirmPassword.addEventListener("keyup", check);