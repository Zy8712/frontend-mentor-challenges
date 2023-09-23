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

var currentTechSelection = 1;

var techItemOne = document.getElementById("tech-item-1");
var techItemTwo = document.getElementById("tech-item-2");
var techItemThree = document.getElementById("tech-item-3");

var techTitle = document.getElementById("tech-title");
var techImg = document.getElementById("tech-image");
var techDesc = document.getElementById("tech-description");

var techButtons = [techItemOne, techItemTwo, techItemThree];

let jsonData; // Declare a global variable to store the JSON data

// Load the JSON data when your script is first loaded
fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        jsonData = data; // Store the data in the global variable

        loadDestData(currentTechSelection);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function () {
    localStorage.setItem("selectedNavOption", currentNavSelection);

    localStorage.setItem("selectedTechOption", currentTechSelection);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function () {
    currentNavSelection = this.localStorage.getItem("selectedNavOption");
    if (currentNavSelection == null) {
        currentNavSelection = 1;
    }

    currentTechSelection = this.localStorage.getItem("selectedTechOption");
    if (currentTechSelection == null) {
        currentTechSelection = 1;
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

    techButtons[currentTechSelection - 1].style.backgroundColor = "var(--theme-white)";
    techButtons[currentTechSelection - 1].style.color = "var(--theme-dark-black)";
    techButtons[currentTechSelection - 1].style.borderColor = "var(--theme-white)";

    /* Activate Navigation Hover Effect */
    techItemOne.addEventListener("mouseover", () => {
        addTechNavHover("1");
    });

    techItemTwo.addEventListener("mouseover", () => {
        addTechNavHover("2");
    });

    techItemThree.addEventListener("mouseover", () => {
        addTechNavHover("3");
    });

    /* Remove Navigation Hover Effect */
    techItemOne.addEventListener("mouseout", () => {
        removeTechNavHover("1");
    });

    techItemTwo.addEventListener("mouseout", () => {
        removeTechNavHover("2");
    });

    techItemThree.addEventListener("mouseout", () => {
        removeTechNavHover("3");
    });

    /* Clicking Valid Navigation Option */
    techItemOne.addEventListener("click", () => {
        changeTechHighlight("1");
    });

    techItemTwo.addEventListener("click", () => {
        changeTechHighlight("2");
    });

    techItemThree.addEventListener("click", () => {
        changeTechHighlight("3");
    });
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

function addTechNavHover(techNavOption) {
    if (techNavOption != currentTechSelection) {
        techButtons[techNavOption - 1].style.borderColor = "var(--theme-white)";
    }
}

function removeTechNavHover(techNavOption) {
    if (techNavOption != currentTechSelection) {
        console.log("remove");
        techButtons[techNavOption - 1].style.borderColor = "var(--custom-tech-button-border)";
    }
}

function changeTechHighlight(techNavOption) {
    if (techNavOption != currentTechSelection) {
        techButtons[techNavOption - 1].style.backgroundColor = "var(--theme-white)";
        techButtons[techNavOption - 1].style.color = "var(--theme-dark-black)";
        techButtons[techNavOption - 1].style.borderColor = "var(--theme-white)";

        techButtons[currentTechSelection - 1].style.backgroundColor = "transparent";
        techButtons[currentTechSelection - 1].style.color = "var(--theme-white)";
        techButtons[currentTechSelection - 1].style.borderColor = "var(--custom-tech-button-border)";

        loadDestData(techNavOption);
        currentTechSelection = techNavOption;
    }
}


function loadDestData(techNavOption) {
    let tech = jsonData.technology;

    let nameTech = tech[techNavOption - 1].name;
    let descTech = tech[techNavOption - 1].description;

    let imgTech = tech[techNavOption - 1].images.portrait;

    techTitle.innerHTML = nameTech;
    techImg.src = imgTech;
    techDesc.innerHTML = descTech;
}

