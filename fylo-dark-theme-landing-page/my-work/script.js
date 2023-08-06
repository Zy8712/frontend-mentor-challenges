
const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var errorMessage = 0; /* 0 for not showing, 1 for showing*/
window.onload = function(){
    var emailButton = document.getElementById("submitEmail");
    emailButton.addEventListener("click", checkEmail);
}

function checkEmail() {
    var emailEntered = document.getElementById("emailEntry");
    if (validEmailFormat.test(emailEntered.value)) {
        if (errorMessage == 1) {
            var errorDisplay = document.getElementById("validateEmail");
            errorDisplay.style.display = "none";
            errorMessage = 0;
        }
    }
    else {
        var errorDisplay = document.getElementById("validateEmail");
        errorDisplay.style.display = "block";
        errorMessage = 1;
    }
}