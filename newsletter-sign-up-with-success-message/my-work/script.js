
const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
window.onload = function(){
  var subButton = document.getElementById("subscribeButton");
  subButton.addEventListener("click", enterEmail);
  var disButton = document.getElementById("dismissButton");
  disButton.addEventListener("click", closeMessage);
}



function enterEmail(){
  var emailEntered = document.getElementById("emailEntry");
  if(validEmailFormat.test(emailEntered.value)){
    successMessage();
  }
  else{
    var errorMessage = document.getElementById("emailError");
    errorMessage.style.display = "inline-block";
    emailEntered.style.borderColor = "hsl(4, 100%, 67%)";
    emailEntered.style.color = "hsl(4, 100%, 67%)";
    emailEntered.style.background = "rgba(255,232,230,255)";
  }

}

function successMessage(){
  var signupBlock = document.getElementById("signup-div");
  signupBlock.style.display = "none";
  var successBlock = document.getElementById("success-div");
  successBlock.style.display = "block";

  var emailEntered = document.getElementById("emailEntry");

  var emailSubmitted = document.getElementById("userEmail");
  emailSubmitted.innerHTML = emailEntered.value;
}

function closeMessage(){
  var signupBlock = document.getElementById("signup-div");
  signupBlock.style.display = "flex";
  var successBlock = document.getElementById("success-div");
  successBlock.style.display = "none";
}
