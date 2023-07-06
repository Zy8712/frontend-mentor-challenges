var optionSelected = 1;

window.onload = function(){
  var dailySelect = document.getElementById("option-select-daily");
  dailySelect.addEventListener("click", function() {
    changeValues(1);
  });

  var weeklySelect = document.getElementById("option-select-weekly");
  weeklySelect.addEventListener("click", function() {
    changeValues(2);
  });

  var monthlySelect = document.getElementById("option-select-monthly");
  monthlySelect.addEventListener("click", function() {
    changeValues(3);
  });
}


function changeValues(value){
  if (value != optionSelected){
    if (value == 1){
      var dailySelect = document.getElementById("option-select-daily");
      dailySelect.style.color = "white";

      var dailyVal1 = document.getElementById("daily-1");
      dailyVal1.className = "visible";
      var dailyVal2 = document.getElementById("daily-2");
      dailyVal2.className = "visible";
      var dailyVal3 = document.getElementById("daily-3");
      dailyVal3.className = "visible";
      var dailyVal4 = document.getElementById("daily-4");
      dailyVal4.className = "visible";
      var dailyVal5 = document.getElementById("daily-5");
      dailyVal5.className = "visible";
      var dailyVal6 = document.getElementById("daily-6");
      dailyVal6.className = "visible";
    }
    else if (value == 2){
      var weeklySelect = document.getElementById("option-select-weekly");
      weeklySelect.style.color = "white";

      var weeklyVal1 = document.getElementById("weekly-1");
      weeklyVal1.className = "visible";
      var weeklyVal2 = document.getElementById("weekly-2");
      weeklyVal2.className = "visible";
      var weeklyVal3 = document.getElementById("weekly-3");
      weeklyVal3.className = "visible";
      var weeklyVal4 = document.getElementById("weekly-4");
      weeklyVal4.className = "visible";
      var weeklyVal5 = document.getElementById("weekly-5");
      weeklyVal5.className = "visible";
      var weeklyVal6 = document.getElementById("weekly-6");
      weeklyVal6.className = "visible";
    }
    else{
      var monthlySelect = document.getElementById("option-select-monthly");
      monthlySelect.style.color = "white";

      var monthlyVal1 = document.getElementById("monthly-1");
      monthlyVal1.className = "visible";
      var monthlyVal2 = document.getElementById("monthly-2");
      monthlyVal2.className = "visible";
      var monthlyVal3 = document.getElementById("monthly-3");
      monthlyVal3.className = "visible";
      var monthlyVal4 = document.getElementById("monthly-4");
      monthlyVal4.className = "visible";
      var monthlyVal5 = document.getElementById("monthly-5");
      monthlyVal5.className = "visible";
      var monthlyVal6 = document.getElementById("monthly-6");
      monthlyVal6.className = "visible";
    }

    if (optionSelected == 1){
      var dailySelect = document.getElementById("option-select-daily");
      dailySelect.style.color = "hsl(235, 45%, 61%)";

      var dailyVal1 = document.getElementById("daily-1");
      dailyVal1.className = "hidden";
      var dailyVal2 = document.getElementById("daily-2");
      dailyVal2.className = "hidden";
      var dailyVal3 = document.getElementById("daily-3");
      dailyVal3.className = "hidden";
      var dailyVal4 = document.getElementById("daily-4");
      dailyVal4.className = "hidden";
      var dailyVal5 = document.getElementById("daily-5");
      dailyVal5.className = "hidden";
      var dailyVal6 = document.getElementById("daily-6");
      dailyVal6.className = "hidden";
    }
    else if (optionSelected == 2){
      var weeklySelect = document.getElementById("option-select-weekly");
      weeklySelect.style.color = "hsl(235, 45%, 61%)";

      var weeklyVal1 = document.getElementById("weekly-1");
      weeklyVal1.className = "hidden";
      var weeklyVal2 = document.getElementById("weekly-2");
      weeklyVal2.className = "hidden";
      var weeklyVal3 = document.getElementById("weekly-3");
      weeklyVal3.className = "hidden";
      var weeklyVal4 = document.getElementById("weekly-4");
      weeklyVal4.className = "hidden";
      var weeklyVal5 = document.getElementById("weekly-5");
      weeklyVal5.className = "hidden";
      var weeklyVal6 = document.getElementById("weekly-6");
      weeklyVal6.className = "hidden";
    }
    else{
      var monthlySelect = document.getElementById("option-select-monthly");
      monthlySelect.style.color = "hsl(235, 45%, 61%)";

      var monthlyVal1 = document.getElementById("monthly-1");
      monthlyVal1.className = "hidden";
      var monthlyVal2 = document.getElementById("monthly-2");
      monthlyVal2.className = "hidden";
      var monthlyVal3 = document.getElementById("monthly-3");
      monthlyVal3.className = "hidden";
      var monthlyVal4 = document.getElementById("monthly-4");
      monthlyVal4.className = "hidden";
      var monthlyVal5 = document.getElementById("monthly-5");
      monthlyVal5.className = "hidden";
      var monthlyVal6 = document.getElementById("monthly-6");
      monthlyVal6.className = "hidden";
    }
    optionSelected = value;
  }

}
