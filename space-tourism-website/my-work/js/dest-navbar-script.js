var currentNavSelection = 1;
var homeNav = document.getElementById("nav-home");
var destinationNav = document.getElementById("nav-destination");
var crewNav = document.getElementById("nav-crew");
var techNav = document.getElementById("nav-technology");

var navHomeUnderline = document.getElementById("nav-home-underline");
var navDestUnderline = document.getElementById("nav-dest-underline");
var navCrewUnderline = document.getElementById("nav-crew-underline");
var navTechUnderline = document.getElementById("nav-tech-underline");

// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function () {
    localStorage.setItem("selectedNavOption", currentNavSelection);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function () {
    currentNavSelection = this.localStorage.getItem("selectedNavOption");
    if (currentNavSelection == null) {
        currentNavSelection = 1;
    }
});

window.onload = function () {

    if (currentNavSelection == 1) {
        navHomeUnderline.style.display = "block";
    }
    else if (currentNavSelection == 2) {
        navDestUnderline.style.display = "block";
    }
    else if (currentNavSelection == 3) {
        navCrewUnderline.style.display = "block";
    }
    else {
        navTechUnderline.style.display = "block";
    }

    /* Activate Navigation Hover Effect */
    homeNav.addEventListener("mouseover", () => {
        addNavHover("1");
    });

    destinationNav.addEventListener("mouseover", () => {
        addNavHover("2");
    });

    crewNav.addEventListener("mouseover", () => {
        addNavHover("3");
    });

    techNav.addEventListener("mouseover", () => {
        addNavHover("4");
    });

    /* Remove Navigation Hover Effect */
    homeNav.addEventListener("mouseout", () => {
        removeNavHover("1");
    });

    destinationNav.addEventListener("mouseout", () => {
        removeNavHover("2");
    });

    crewNav.addEventListener("mouseout", () => {
        removeNavHover("3");
    });

    techNav.addEventListener("mouseout", () => {
        removeNavHover("4");
    });

    /* Clicking Valid Navigation Option */
    homeNav.addEventListener("click", () => {
        changeNavUnderline("1");
    });

    destinationNav.addEventListener("click", () => {
        changeNavUnderline("2");
    });

    crewNav.addEventListener("click", () => {
        changeNavUnderline("3");
    });

    techNav.addEventListener("click", () => {
        changeNavUnderline("4");
    });

    if (currentDestSelection == 1) {
        moonNav.style.color = "var(--theme-white)";
        moonUnderline.style.display = "block";
    }
    else if (currentDestSelection == 2) {
        marsNav.style.color = "var(--theme-white)";
        marsUnderline.style.display = "block";
    }
    else if (currentDestSelection == 3) {
        euroNav.style.color = "var(--theme-white)";
        euroUnderline.style.display = "block";
    }
    else {
        titaNav.style.color = "var(--theme-white)";
        titaUnderline.style.display = "block";
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

function addNavHover(navOption) {
    if (navOption != currentNavSelection) {
        if (navOption == 1) {
            navHomeUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            navHomeUnderline.style.display = "block";
        }

        else if (navOption == 2) {
            navDestUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            navDestUnderline.style.display = "block";
        }

        else if (navOption == 3) {
            navCrewUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            navCrewUnderline.style.display = "block";
        }
        else {
            navTechUnderline.style.borderBottom = "var(--custom-nav-grey) 3px solid";
            navTechUnderline.style.display = "block";
        }
    }
}

function removeNavHover(navOption) {
    if (navOption != currentNavSelection) {
        if (navOption == 1) {
            navHomeUnderline.style.borderBottom = "";
            navHomeUnderline.style.display = "none";
        }

        else if (navOption == 2) {
            navDestUnderline.style.borderBottom = "";
            navDestUnderline.style.display = "none";
        }

        else if (navOption == 3) {
            navCrewUnderline.style.borderBottom = "";
            navCrewUnderline.style.display = "none";
        }
        else {
            navTechUnderline.style.borderBottom = "";
            navTechUnderline.style.display = "none";
        }
    }
}

function changeNavUnderline(navOption) {
    if (navOption != currentNavSelection) {
        if (navOption == 1) {
            navHomeUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            navHomeUnderline.style.display = "block";
        }

        else if (navOption == 2) {
            navDestUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            navDestUnderline.style.display = "block";
        }

        else if (navOption == 3) {
            navCrewUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            navCrewUnderline.style.display = "block";
        }
        else {
            navTechUnderline.style.borderBottom = "var(--theme-white) solid 3px";
            navTechUnderline.style.display = "block";
        }
        currentNavSelection = navOption;
    }
}


var currentDestSelection = 1;
var moonNav = document.getElementById("moon-dest");
var marsNav = document.getElementById("mars-dest");
var euroNav = document.getElementById("euro-dest");
var titaNav = document.getElementById("tita-dest");

var moonUnderline = document.getElementById("moon-underline");
var marsUnderline = document.getElementById("mars-underline");
var euroUnderline = document.getElementById("euro-underline");
var titaUnderline = document.getElementById("tita-underline");

var allNavs = [moonNav, marsNav, euroNav, titaNav];
var allUnderlines = [moonUnderline, marsUnderline, euroUnderline, titaUnderline];

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

        loadDestData(currentDestSelection);
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


function addDestNavHover(destNavOption) {

    if (destNavOption != currentDestSelection) {
        allUnderlines[destNavOption - 1].style.borderBottom = "var(--custom-nav-grey) 3px solid";
        allUnderlines[destNavOption - 1].style.display = "block";
    }
}

function removeDestNavHover(destNavOption) {

    if (destNavOption != currentDestSelection) {
        allUnderlines[destNavOption - 1].style.borderBottom = "";
        allUnderlines[destNavOption - 1].style.display = "none";
    }
}

function changeDestUnderline(destNavOption) {
    if (destNavOption != currentDestSelection) {
        allNavs[destNavOption-1].style.color = "var(--theme-white)";
        allUnderlines[destNavOption-1].style.borderBottom = "var(--theme-white) solid 3px";
        allUnderlines[destNavOption-1].style.display = "block";

        allNavs[currentDestSelection-1].style.color = "var(--theme-light-blue)";
        allUnderlines[currentDestSelection - 1].style.borderBottom = "";
        allUnderlines[currentDestSelection - 1].style.display = "none";

        loadDestData(destNavOption);
        currentDestSelection = destNavOption;
    }
}

function loadDestData(destNavOption) {
    let destinations = jsonData.destinations;
    let loadingDestinationName = destinations[destNavOption - 1].name;
    let loadingDestinationImage = destinations[destNavOption - 1].images.png;
    let loadingDestinationDescription = destinations[destNavOption - 1].description;

    let loadingDestinationDistance = destinations[destNavOption - 1].distance;
    let loadingDestinationTime = destinations[destNavOption - 1].travel;

    destName.innerHTML = loadingDestinationName;
    destImg.src = loadingDestinationImage;
    destDesc.innerHTML = loadingDestinationDescription;
    destDist.innerHTML = loadingDestinationDistance;
    destTime.innerHTML = loadingDestinationTime;
}
