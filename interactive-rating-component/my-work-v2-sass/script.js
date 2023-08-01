var currentSelection = null;
var currentVal = 0;

window.onload = function() {
  for (var i = 0; i < 5; i++) {
    var buttonName = "rating" + (i + 1);
    var button = document.getElementById(buttonName);
    button.addEventListener("click", changeSelectColor);
    button.addEventListener("mouseover", changeHoverColor);
    button.addEventListener("mouseout", changeHoverColor2);
  }
  var submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", submitCheck);
  submitButton.addEventListener("mouseover", submitHover);
  submitButton.addEventListener("mouseout", submitHover2);
}

function changeSelectColor() {
  // Remove the previous selection color
  if (currentSelection !== null) {
    currentSelection.style.backgroundColor = "hsl(213, 19%, 18%)";
    currentSelection.style.color = "hsl(217, 12%, 63%)";
  }

  // Update the current selection
  currentSelection = this;
  currentVal = this.innerHTML;

  // Apply the selected color
  currentSelection.style.backgroundColor = "hsl(217, 12%, 63%)";
  currentSelection.style.color = "hsl(0, 0%, 100%)";

}

function changeHoverColor() {
  // Apply hover color if the button is not selected
  if (currentSelection !== this) {
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    this.style.color = "hsl(0, 0%, 100%)";
  }
}

function changeHoverColor2() {
  // Apply default color if the button is not selected
  if (currentSelection !== this) {
    this.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.color = "hsl(217, 12%, 63%)";
  }
}

function submitCheck(){
    if (currentSelection !== null) {
      var sectionOne = document.getElementById("rating-section");
      sectionOne.className = "rating-container display-none";
      var sectionTwo = document.getElementById("thankyou-section");
      sectionTwo.className = "success-container";
      var finalRating = document.getElementById("rr");
      finalRating.innerHTML = "You selected " +currentVal +" out of 5";
    }
  }

function submitHover(){
	this.style.color = "hsl(25, 97%, 53%)";
	this.style.backgroundColor = "hsl(0, 0%, 100%)";
}

function submitHover2(){
	this.style.color = "hsl(0, 0%, 100%)";
	this.style.backgroundColor = "hsl(25, 97%, 53%)";
}