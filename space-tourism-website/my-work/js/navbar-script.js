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

// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function() {
    localStorage.setItem("selectedNavOption", currentNavSelection);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function() {
    currentNavSelection = this.localStorage.getItem("selectedNavOption");
    if(currentNavSelection == null){
        currentNavSelection = 1;
    }
});

window.onload = function() {

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
}

function addNavHover(navOption){
    if(navOption != currentNavSelection){
        mainNavUnderline[navOption - 1].style.borderBottom = "var(--custom-nav-grey) 3px solid";
        mainNavUnderline[navOption - 1].style.display = "block";
    }
}

function removeNavHover(navOption){
    if(navOption != currentNavSelection){
        mainNavUnderline[navOption - 1].style.borderBottom = "";
        mainNavUnderline[navOption - 1].style.display = "none";
    }
}

function changeNavUnderline(navOption){
    if(navOption != currentNavSelection){
        mainNavUnderline[navOption - 1].style.borderBottom = "var(--theme-white) solid 3px";
        mainNavUnderline[navOption - 1].style.display = "block";

        currentNavSelection = navOption;
    }
}



