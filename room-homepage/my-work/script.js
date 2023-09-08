var currImg = 1;
var currFeature = ["feature-1", "feature-2", "feature-3"];
var currFeatureImage = ["feature-image-1", "feature-image-2", "feature-image-3"];

var mobileMenuStatus = 0; // 0 is closed, 1 is opened

window.onload = function(){
    var leftButton = document.getElementById("left-arrow");
    leftButton.addEventListener("click", shiftImageLeft);

    var rightButton = document.getElementById("right-arrow");
    rightButton.addEventListener("click", shiftImageRight);

    var mobileMenuButton = document.getElementById("mobile-menu-button");
    mobileMenuButton.addEventListener("click", adjustMenu);

    var closeMobileMenuButton = document.getElementById("mobile-close-menu-button");
    closeMobileMenuButton.addEventListener("click", adjustMenu);
}

function shiftImageLeft(){
    var prevImg = currImg;
    currImg = currImg - 1;
    if (currImg == 0){
        currImg = 3;
    }

    var retrievePrevImg = document.getElementById(currFeatureImage[prevImg-1]);
    var retrieveCurrImg = document.getElementById(currFeatureImage[currImg-1]);

    retrievePrevImg.className = "display-none";
    retrieveCurrImg.className = "";

    var retrievePrevText = document.getElementById(currFeature[prevImg-1]);
    var retrieveCurrText = document.getElementById(currFeature[currImg-1]);

    retrievePrevText.className = "display-none";
    retrieveCurrText.className = "current-box";
}

function shiftImageRight(){
    var prevImg = currImg;
    currImg = currImg + 1;
    if (currImg == 4){
        currImg = 1;
    }

    var retrievePrevImg = document.getElementById(currFeatureImage[prevImg-1]);
    var retrieveCurrImg = document.getElementById(currFeatureImage[currImg-1]);

    retrievePrevImg.className = "display-none";
    retrieveCurrImg.className = "";

    var retrievePrevText = document.getElementById(currFeature[prevImg-1]);
    var retrieveCurrText = document.getElementById(currFeature[currImg-1]);

    retrievePrevText.className = "display-none";
    retrieveCurrText.className = "current-box";
}

function adjustMenu(){
    var siteLogo = document.getElementById("site-logo");
    var navBar = document.getElementById("navbarControl");
    var mobileMenuButton = document.getElementById("mobile-menu-button");
    var closeMobileMenuButton = document.getElementById("mobile-close-menu-button");
    var navOptions = document.getElementById("nav-options");

    if (mobileMenuStatus == 0){
        siteLogo.style.display = "none";
        mobileMenuButton.style.display = "none";
        closeMobileMenuButton.style.display = "inline";
        navOptions.style.display = "flex";
        navOptions.style.color = "black";
        navOptions.style.position = "absolute";
        navOptions.style.right = "30px";
        navBar.style.backgroundColor = "white";
        navBar.style.height = "120px";
        navBar.style.top = "0px";
        
        mobileMenuStatus = 1;
    }
    else{
        siteLogo.style.display = "inline";
        mobileMenuButton.style.display = "inline";
        closeMobileMenuButton.style.display = "none";
        navOptions.style.color = "white";
        navOptions.style.display = "none";
        navOptions.style.position = "relative";
        navBar.style.backgroundColor = "transparent";
        navBar.style.height = "auto";
        navBar.style.top = "45px";

        mobileMenuStatus = 0;
    }
}