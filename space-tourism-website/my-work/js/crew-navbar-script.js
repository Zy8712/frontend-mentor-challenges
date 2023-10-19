var currentNavSelection = 1;
var homeNav = document.getElementById("nav-home");
var destinationNav = document.getElementById("nav-destination");
var crewNav = document.getElementById("nav-crew");
var techNav = document.getElementById("nav-technology");

var navHomeUnderline = document.getElementById("nav-home-underline");
var navDestUnderline = document.getElementById("nav-dest-underline");
var navCrewUnderline = document.getElementById("nav-crew-underline");
var navTechUnderline = document.getElementById("nav-tech-underline");

var mainNav = [homeNav, destinationNav, crewNav, techNav];
var mainNavUnderline = [navHomeUnderline, navDestUnderline, navCrewUnderline, navTechUnderline];

var currentCrewSelection = 1;

var personName = document.getElementById("crew-name");
var personRole = document.getElementById("crew-role");
var personBio = document.getElementById("crew-description");
var personImg = document.getElementById("crew-image");

var firstCrew = document.getElementById("crew-first");
var secondCrew = document.getElementById("crew-second");
var thirdCrew = document.getElementById("crew-third");
var fourthCrew = document.getElementById("crew-fourth");

var dotNavigation = [firstCrew, secondCrew, thirdCrew, fourthCrew];

var openMobileMenuButton = document.getElementById("mobile-menu-icon");
var closeMobileMenuButton = document.getElementById("mobile-close-menu-icon");

let jsonData; // Declare a global variable to store the JSON data

// Load the JSON data when your script is first loaded
fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        jsonData = data; // Store the data in the global variable

        loadCrewData(currentCrewSelection);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function () {
    localStorage.setItem("selectedNavOption", currentNavSelection);

    localStorage.setItem("selectedCrewOption", currentCrewSelection);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function () {
    currentNavSelection = this.localStorage.getItem("selectedNavOption");
    if (currentNavSelection == null) {
        currentNavSelection = 1;
    }

    currentCrewSelection = this.localStorage.getItem("selectedCrewOption");
    if (currentCrewSelection == null) {
        currentCrewSelection = 1;
    }
});

window.onload = function () {

    mainNavUnderline[currentNavSelection - 1].style.display = "block";

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

    dotNavigation[currentCrewSelection - 1].style.opacity = "100%";

    /* Activate Navigation Hover Effect */
    firstCrew.addEventListener("mouseover", () => {
        addCrewNavHover("1");
    });

    secondCrew.addEventListener("mouseover", () => {
        addCrewNavHover("2");
    });

    thirdCrew.addEventListener("mouseover", () => {
        addCrewNavHover("3");
    });

    fourthCrew.addEventListener("mouseover", () => {
        addCrewNavHover("4");
    });

    /* Remove Navigation Hover Effect */
    firstCrew.addEventListener("mouseout", () => {
        removeCrewNavHover("1");
    });

    secondCrew.addEventListener("mouseout", () => {
        removeCrewNavHover("2");
    });

    thirdCrew.addEventListener("mouseout", () => {
        removeCrewNavHover("3");
    });

    fourthCrew.addEventListener("mouseout", () => {
        removeCrewNavHover("4");
    });

    /* Clicking Valid Navigation Option */
    firstCrew.addEventListener("click", () => {
        changeCrewView("1");
    });

    secondCrew.addEventListener("click", () => {
        changeCrewView("2");
    });

    thirdCrew.addEventListener("click", () => {
        changeCrewView("3");
    });

    fourthCrew.addEventListener("click", () => {
        changeCrewView("4");
    });
    
    openMobileMenuButton.addEventListener("click", openMobileMenu);
    closeMobileMenuButton.addEventListener("click", closeMobileMenu);
}

function addNavHover(navOption) {
    if (navOption != currentNavSelection) {
        mainNavUnderline[navOption - 1].style.borderBottom = "var(--custom-nav-grey) 3px solid";
        mainNavUnderline[navOption - 1].style.display = "block";
    }
}

function removeNavHover(navOption) {
    if (navOption != currentNavSelection) {
        mainNavUnderline[navOption - 1].style.borderBottom = "";
        mainNavUnderline[navOption - 1].style.display = "none";
    }
}

function changeNavUnderline(navOption) {
    if (navOption != currentNavSelection) {
        mainNavUnderline[navOption - 1].style.borderBottom = "var(--theme-white) solid 3px";
        mainNavUnderline[navOption - 1].style.display = "block";

        currentNavSelection = navOption;
    }
}

function addCrewNavHover(crewNavOption) {
    if (crewNavOption != currentCrewSelection) {
        dotNavigation[crewNavOption - 1].style.opacity = "50.01%";
    }
}

function removeCrewNavHover(crewNavOption) {
    if (crewNavOption != currentCrewSelection) {
        dotNavigation[crewNavOption - 1].style.opacity = "17.44%";
    }
}

function changeCrewView(crewNavOption) {
    if (crewNavOption != currentCrewSelection) {
        dotNavigation[crewNavOption - 1].style.opacity = "100%";
        dotNavigation[currentCrewSelection - 1].style.opacity = "17.44%";

        loadCrewData(crewNavOption);
        currentCrewSelection = crewNavOption;
    }
}


function loadCrewData(crewNavOption) {
    let crew = jsonData.crew;

    let crewName = crew[crewNavOption - 1].name;
    let crewRole = crew[crewNavOption - 1].role;

    let crewImg = crew[crewNavOption - 1].images.png;
    let crewBio = crew[crewNavOption - 1].bio;

    personName.innerHTML = crewName;
    personImg.src = crewImg;
    personRole.innerHTML = crewRole;
    personBio.innerHTML = crewBio;
}

function openMobileMenu(){
    var menuMobile = document.getElementById("mobile-menu-box");
    menuMobile.style.width = "254px"; 
    menuMobile.style.display = "flex";
}

function closeMobileMenu(){
    var menuMobile = document.getElementById("mobile-menu-box");
    menuMobile.style.width = "0px";
    menuMobile.style.display = "none";
}
