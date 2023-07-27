
window.onload = function(){
  var generateButton = document.getElementById("random-advice-button");
  generateButton.addEventListener("click", generateAdvice);
}

function generateAdvice(){
  animateDice();
  handleClick();
  const apiURL = "https://api.adviceslip.com/advice";
  const adviceID = document.getElementById("advice-id");
  const adviceQuote = document.getElementById("advice-text");
  /*fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.advice)
      .catch(error => {
        console.error('Error accessing the API:', error.message);
        return null;
      }); */

  fetch(apiURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const adviceJson = data["slip"];

    adviceID.innerHTML = adviceJson["id"];
    adviceQuote.innerHTML = adviceJson["advice"];
  });
}


function animateDice(){
  var diceIcon = document.getElementById("dice-icon");
  var currentRotation = getRotationAngle(diceIcon);

  if (currentRotation === 0) {
      // Rotate the icon to -180 degrees
      diceIcon.style.transform = "rotate(-180deg)";
    } else {
      // Reset the rotation to 0 degrees (original state)
      diceIcon.style.transform = "rotate(0deg)";
    }

    diceIcon.style.transition = "transform 0.5s ease";
  }

  function getRotationAngle(element) {
    var st = window.getComputedStyle(element, null);
    var tr = st.getPropertyValue("transform");

    if (tr && tr !== "none") {
      var values = tr.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      return (angle < 0) ? angle + 360 : angle;
    }
    return 0;
}

function handleClick() {
  var generateButton = document.getElementById("random-advice-button");
  generateButton.disabled = true; // Disable the button

  // Set a timeout to enable the button after a few seconds (e.g., 3 seconds in this example)
  setTimeout(() => {
    generateButton.disabled = false; // Enable the button
  }, 3000); // 3000 milliseconds = 3 seconds
}
