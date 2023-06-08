var currentSelection = null;
var currentVal = 0;
window.onload = function() {
  for (var i = 0; i < 5; i++) {
    var buttonName = "but" + (i + 1);
    var button = document.getElementById(buttonName);
    button.addEventListener("click", changeSelectColor);
    button.addEventListener("mouseover", changeHoverColor);
    button.addEventListener("mouseout", changeHoverColor2);
  }
  var submit = document.getElementById("submitButton");
  submit.addEventListener("click", submitCheck);
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
  currentSelection.style.backgroundColor = "hsl(25, 97%, 53%)";
  currentSelection.style.color = "hsl(0, 0%, 100%)";

}

function changeHoverColor() {
  // Apply hover color if the button is not selected
  if (currentSelection !== this) {
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
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
    var sectionOne = document.getElementById("sec1");
    sectionOne.className = "mainContent invisible";
    var sectionTwo = document.getElementById("sec2");
    sectionTwo.className = "mainContent thankyou";
    var finalRating = document.getElementById("rr");
    finalRating.innerHTML = "You selected " +currentVal +" out of 5";
  }
}
