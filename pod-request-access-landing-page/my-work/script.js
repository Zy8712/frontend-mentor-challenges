const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let messagePresent = 0;

var emailEntry = document.getElementById("email-entry");
var successMessage = document.getElementById("success-message");
var errorMessage = document.getElementById("error-message");

window.onload = function(){
    var reqAcc = document.getElementById("req-access");
    reqAcc.addEventListener("click", checkEmail);
}

function checkEmail(){
    if(messagePresent != 0){
        resetMessage();
    }

    if(validEmailFormat.test(emailEntry.value)){
        successMessage.style.display = "block";
        messagePresent = 1;
    }
    else{
        errorMessage.style.display = "block";
        messagePresent = 2;
    }
}

function resetMessage(){
    if(messagePresent == 1){
        successMessage.style.display = "none";
    }
    else{
        errorMessage.style.display = "none";
    }
    messagePresent = 0;
}