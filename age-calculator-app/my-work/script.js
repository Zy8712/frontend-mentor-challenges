
var errorStateEntered = 0; // if entered error state value is 1, else value is 0

// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function() {
  const entryDay = document.getElementById("dayEntry").getElementsByTagName("input")[0].value;
  const entryMonth = document.getElementById("monthEntry").getElementsByTagName("input")[0].value;
  const entryYear = document.getElementById("yearEntry").getElementsByTagName("input")[0].value;

  localStorage.setItem("userInput_day", entryDay);
  localStorage.setItem("userInput_month", entryMonth);
  localStorage.setItem("userInput_year", entryYear);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function() {
  const entryDay = localStorage.getItem("userInput_day");
  const entryMonth = localStorage.getItem("userInput_month");
  const entryYear = localStorage.getItem("userInput_year");

  document.getElementById("dayEntry").getElementsByTagName("input")[0].value = entryDay;
  document.getElementById("monthEntry").getElementsByTagName("input")[0].value = entryMonth;
  document.getElementById("yearEntry").getElementsByTagName("input")[0].value = entryYear;
});

window.onload = function(){
  var calculateButton = document.getElementById("calculate-arrow");
  calculateButton.addEventListener("click", checkConditions);
}


function checkConditions(){
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysInMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let entryDay = document.getElementById("dayEntry").getElementsByTagName("input")[0].value;
  let entryMonth = document.getElementById("monthEntry").getElementsByTagName("input")[0].value;
  let entryYear = document.getElementById("yearEntry").getElementsByTagName("input")[0].value;

  if(errorStateEntered == 1){
    location.reload();
    errorStateEntered = 0;
  }

  var dateObj = new Date();
  var currentYear = dateObj.getFullYear(); // year

  if (entryDay === "" || isNaN(entryDay)){
    activateWarnings(1);
  }

  if (entryMonth === "" || isNaN(entryMonth)){
    activateWarnings(2);
  }

  if (entryYear === "" || isNaN(entryYear)){
    activateWarnings(3);
  }

  var leapYearYes = checkLeapYear(entryYear);
  if (leapYearYes){
    if (entryDay > daysInMonthLeapYear[entryMonth - 1]){
      activateWarnings(4);
    }
  }
  else{
    if (entryDay > daysInMonth[entryMonth - 1]){
      activateWarnings(4);
    }
  }


  if (entryMonth < 1 || entryMonth > 12){
    activateWarnings(5);
  }

  if (entryYear < 0 || entryYear > currentYear){
    activateWarnings(6);
  }

  if(errorStateEntered == 0){
    displayCalculatedAge();
  }
}


function checkLeapYear(yearEntered){
  if (yearEntered % 4 == 0 && yearEntered % 100 != 0){
    return true;
  }
  else{
    return false
  }
}


function activateWarnings(val){
  var entryDay = document.getElementById("dayEntry");
  var entryMonth = document.getElementById("monthEntry");
  var entryYear = document.getElementById("yearEntry");

  var warningDay = document.getElementById("dayWarning");
  var warningMonth = document.getElementById("monthWarning");
  var warningYear = document.getElementById("yearWarning");

  if(val == 1){
    var heading = entryDay.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryDay.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningDay.className = "";

    var invalidDay = warningDay.getElementsByClassName("missingField")[0];
    invalidDay.className = "missingField";
  }

  else if(val == 2){
    var heading = entryMonth.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryMonth.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningMonth.className = "";

    var invalidMonth = warningMonth.getElementsByClassName("missingField")[0];
    invalidMonth.className = "missingField";
  }

  else if(val == 3){
    var heading = entryYear.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryYear.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningYear.className = "";

    var invalidYear = warningYear.getElementsByClassName("missingField")[0];
    invalidYear.className = "missingField";
  }

  else if (val == 4){
    var heading = entryDay.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryDay.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningDay.className = "";

    var invalidDay = warningDay.getElementsByClassName("invalidField")[0];
    invalidDay.className = "invalidField";
  }


  else if (val == 5){
    var heading = entryMonth.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryMonth.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningMonth.className = "";

    var invalidMonth = warningMonth.getElementsByClassName("invalidField")[0];
    invalidMonth.className = "invalidField";
  }

  else if (val == 6){
    var heading = entryYear.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryYear.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningYear.className = "";

    var invalidYear = warningYear.getElementsByClassName("invalidField")[0];
    invalidYear.className = "invalidField";
  }

  errorStateEntered = 1;
}

function displayCalculatedAge(){
  var dateObj = new Date();
  var currentDate = dateObj.getDate(); // day of the month
  var currentMonth = dateObj.getMonth(); // month
  var currentYear = dateObj.getFullYear(); // year

  const entryDay = document.getElementById("dayEntry").getElementsByTagName("input")[0].value;
  const entryMonth = document.getElementById("monthEntry").getElementsByTagName("input")[0].value;
  const entryYear = document.getElementById("yearEntry").getElementsByTagName("input")[0].value;

  var ageYears = currentYear - entryYear;
  var ageMonths = currentMonth - entryMonth;
  var ageDays = currentDate - entryDay;

  if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
    ageYears--;
    ageMonths += 12;
    if (ageDays < 0) {
      ageMonths--;
      const lastMonth = new Date(dateObj.getFullYear(), dateObj.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }
  }

  var displayYear = document.getElementById("yearDisplay");
  var displayMonth = document.getElementById("monthDisplay");
  var displayDay = document.getElementById("dayDisplay");

  displayYear.innerHTML = ageYears;
  displayMonth.innerHTML = ageMonths;
  displayDay.innerHTML = ageDays;
}
