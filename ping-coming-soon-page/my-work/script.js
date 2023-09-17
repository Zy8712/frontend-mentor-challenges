
const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var currError = false;
window.onload = function () {
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", checkEmailValid);
}

function checkEmailValid() {
    var emailEntered = document.getElementById("emailEntry");
    if (validEmailFormat.test(emailEntered.value)) {
        if(currError == true){
            var errorMessage = document.getElementById("error-message");
            emailEntered.style.borderColor = "var(--theme-gray)";
            errorMessage.style.display = "none";
            currError = false;
        }
    }
    else{
        var errorMessage = document.getElementById("error-message");
        emailEntered.style.borderColor = "var(--theme-light-red)";
        errorMessage.style.display = "block";
        currError = true;
    }
}