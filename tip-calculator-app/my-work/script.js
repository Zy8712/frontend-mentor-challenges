
var tipSelected = 0;
var optionSelected = 0;
window.onload = function(){
  var tipOption1 = document.getElementById("tip-option-1");
  var tipOption2 = document.getElementById("tip-option-2");
  var tipOption3 = document.getElementById("tip-option-3");
  var tipOption4 = document.getElementById("tip-option-4");
  var tipOption5 = document.getElementById("tip-option-5");
  var customTip = document.getElementById("custom-tip");

  tipOption1.addEventListener("click", () => {
    changeTipValue(5, 1);
    activateResetButton();
    calculateTip();
  });

  tipOption2.addEventListener("click", () => {
    changeTipValue(10, 2);
    activateResetButton();
    calculateTip();
  });

  tipOption3.addEventListener("click", () => {
    changeTipValue(15, 3);
    activateResetButton();
    calculateTip();
  });

  tipOption4.addEventListener("click", () => {
    changeTipValue(25, 4);
    activateResetButton();
    calculateTip();
  });

  tipOption5.addEventListener("click", () => {
    changeTipValue(50, 5);
    activateResetButton();
    calculateTip();
  });

  customTip.addEventListener("click", () => {
    changeTipValue(customTip.value, 6);
    activateResetButton();
    calculateTip();
  });

  customTip.addEventListener("keyup", () => {
    changeTipValue(customTip.value, 6);
    activateResetButton();
    calculateTip();
  });


  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    resetPage();
    activateResetButton();
  });

  var billInputBox = document.getElementById("bill-input");
  billInputBox.addEventListener("keydown", () => {
    limitTextboxInput();
  });
  billInputBox.addEventListener("keyup", () => {
    activateResetButton();
    calculateTip();
  });


  var peopleInputBox = document.getElementById("people-input");
  peopleInputBox.addEventListener("keydown", () => {
    limitTextboxInput();
  });
  peopleInputBox.addEventListener("keyup", () => {
    displayPeopleError();
    activateResetButton();
    calculateTip();
  });
}

function activateResetButton(){
  var billAmount = document.getElementById("bill-input");
  var peopleNumber = document.getElementById("people-input");

  if (optionSelected != 0 && billAmount.value >= 0 && peopleNumber.value > 0){
    var resetButton = document.getElementById("reset-button");
    resetButton.disabled = false;
  }
}


function changeTipValue(val, option){
  tipSelected = val;
  /* console.log(tipSelected); */

  /* undo previous changes */
  if(optionSelected != 6 && optionSelected != 0){
    var prevOption = document.getElementById("tip-option-" + optionSelected);
    prevOption.style.backgroundColor = "var(--theme-very-dark-cyan)";
    prevOption.style.color = "var(--theme-white)";
  }
  else if(optionSelected == 6){
    var prevOption = document.getElementById("custom-tip");
    prevOption.style.borderStyle = "none";
  }

  /* update with newest selection / value change */
  if(option >= 1 && option <= 5){
    var currOption = document.getElementById("tip-option-" + option);
    currOption.style.backgroundColor = "var(--theme-strong-cyan)";
    currOption.style.color = "var(--theme-very-dark-cyan)";
  }
  else{
    var currOption = document.getElementById("custom-tip");
    currOption.style.border = "3px var(--theme-strong-cyan) solid";
  }

  optionSelected = option;
}


function calculateTip(){
  var billAmount = document.getElementById("bill-input");
  var peopleNumber = document.getElementById("people-input");

  if (optionSelected != 0 && billAmount.value >= 0 && peopleNumber.value > 0){

    var totalTip = billAmount.value * (tipSelected/100);
    var personTip = totalTip / peopleNumber.value;

    var totalTipText = document.getElementById("total-tip");
    var personTipText = document.getElementById("person-tip");

    totalTipText.innerHTML = "$" + totalTip.toFixed(2);
    personTipText.innerHTML = "$" + personTip.toFixed(2);
  }
}

function displayPeopleError(){
  var peopleNumber = document.getElementById("people-input");
  var errorMessage = document.getElementById("people-error");

  if (peopleNumber.value == 0){
    errorMessage.className = "error-message";
  }
  else{
    errorMessage.className = "error-message display-none";
  }
}

function resetPage(){
  location.reload();
}

/* limits textbox input to numbers only */
function limitTextboxInput(){
  const textboxes = document.querySelectorAll('body input[type="text"]');

    // Attach an event listener to each textbox
    textboxes.forEach((textbox) => {
      textbox.addEventListener('input', (event) => {
        const { value } = event.target;

        // Check if the entered value is a valid numeric value with a single decimal
        const isValidInput = /^\d*\.?\d{0,2}$/.test(value);

        if (!isValidInput) {
          // If the input is not valid, remove the last character from the value
          event.target.value = value.slice(0, -1);
        }
      });
    });

}
