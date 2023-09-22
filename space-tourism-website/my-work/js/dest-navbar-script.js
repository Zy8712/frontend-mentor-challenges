var currentDestSelection = 1;
var moonNav = document.getElementById("moon-dest");
var marsNav = document.getElementById("mars-dest");
var euroNav = document.getElementById("euro-dest");
var titaNav = document.getElementById("tita-dest");

var moonUnderline = document.getElementById("moon-underline");
var marsUnderline = document.getElementById("mars-underline");
var euroUnderline = document.getElementById("euro-underline");
var titaUnderline = document.getElementById("tita-underline");

var destImg = document.getElementById("destination-image");
var destName = document.getElementById("destination-name");
var destDesc = document.getElementById("destination-description");
var destDist = document.getElementById("destination-distance");
var destTime = document.getElementById("destination-time");

let jsonData; // Declare a global variable to store the JSON data

// Load the JSON data when your script is first loaded
fetch("../data.json")
  .then(response => response.json())
  .then(data => {
    jsonData = data; // Store the data in the global variable
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });


// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function () {
    localStorage.setItem("selectedDestOption", currentDestSelection);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function () {
    currentDestSelection = this.localStorage.getItem("selectedDestOption");
    if (currentDestSelection == null) {
        currentDestSelection = 1;
    }
});


window.onload = function () {

    if (currentDestSelection == 1) {
        moonNav.style.color = "var(--theme-white)";
        moonUnderline.style.display = "block";
        loadDestData(currentDestSelection);
    }
    else if (currentDestSelection == 2) {
        marsNav.style.color = "var(--theme-white)";
        marsUnderline.style.display = "block";
        loadDestData(currentDestSelection);
    }
    else if (currentDestSelection == 3) {
        euroNav.style.color = "var(--theme-white)";
        euroUnderline.style.display = "block";
        loadDestData(currentDestSelection);
    }
    else {
        titaNav.style.color = "var(--theme-white)";
        titaUnderline.style.display = "block";
        loadDestData(currentDestSelection);
    }

    /* Activate Navigation Hover Effect */
    moonNav.addEventListener("mouseover", () => {
        addDestNavHover("1");
    });

    marsNav.addEventListener("mouseover", () => {
        addDestNavHover("2");
    });

    euroNav.addEventListener("mouseover", () => {
        addDestNavHover("3");
    });

    titaNav.addEventListener("mouseover", () => {
        addDestNavHover("4");
    });

    /* Remove Navigation Hover Effect */
    moonNav.addEventListener("mouseout", () => {
        removeDestNavHover("1");
    });

    marsNav.addEventListener("mouseout", () => {
        removeDestNavHover("2");
    });

    euroNav.addEventListener("mouseout", () => {
        removeDestNavHover("3");
    });

    titaNav.addEventListener("mouseout", () => {
        removeDestNavHover("4");
    });

    /* Clicking Valid Navigation Option */
    moonNav.addEventListener("click", () => {
        changeDestUnderline("1");
    });

    marsNav.addEventListener("click", () => {
        changeDestUnderline("2");
    });

    euroNav.addEventListener("click", () => {
        changeDestUnderline("3");
    });

    titaNav.addEventListener("click", () => {
        changeDestUnderline("4");
    });

}


function addDestNavHover(destNavOption) {

    if (destNavOption != currentDestSelection) {

        if (destNavOption == 1) {
            moonUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            moonUnderline.style.display = "block";
        }

        else if (destNavOption == 2) {
            marsUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            marsUnderline.style.display = "block";
        }

        else if (destNavOption == 3) {
            euroUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            euroUnderline.style.display = "block";
        }
        else {
            titaUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            titaUnderline.style.display = "block";
        }
    }
}

function removeDestNavHover(destNavOption) {

    if (destNavOption != currentDestSelection) {
        if (destNavOption == 1) {
            moonUnderline.style.borderBottom = "";
            moonUnderline.style.display = "none";
        }

        else if (destNavOption == 2) {
            marsUnderline.style.borderBottom = "";
            marsUnderline.style.display = "none";
        }

        else if (destNavOption == 3) {
            euroUnderline.style.borderBottom = "";
            euroUnderline.style.display = "none";
        }
        else {
            titaUnderline.style.borderBottom = "";
            titaUnderline.style.display = "none";
        }
    }
}

function changeDestUnderline(destNavOption){
    if(destNavOption != currentDestSelection){
        if(destNavOption == 1){
            moonUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            moonUnderline.style.display = "block";
        }

        else if(destNavOption == 2){
            marsUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            marsUnderline.style.display = "block";
        }

        else if(destNavOption == 3){
            euroUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            euroUnderline.style.display = "block";
        }
        else{
            titaUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            titaUnderline.style.display = "block";
        }
        loadDestData(destNavOption);
        currentDestSelection = destNavOption;
    }
}

function loadDestData(destNavOption){
    let destinations = jsonData.destinations;
    let loadingDestinationName = destinations[destNavOption-1].name;
    let loadingDestinationImage = destinations[destNavOption-1].images.png;
    let loadingDestinationDescription = destinations[destNavOption-1].description;

    let loadingDestinationDistance = destinations[destNavOption-1].distance;
    let loadingDestinationTime = destinations[destNavOption-1].travel;

    destName.innerHTML = loadingDestinationName;
    destImg.src = loadingDestinationImage;
    destDesc.innerHTML = loadingDestinationDescription;
    destDist.innerHTML = loadingDestinationDistance;
    destTime.innerHTML = loadingDestinationTime;
}