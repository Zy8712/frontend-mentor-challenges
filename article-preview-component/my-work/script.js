var popUpOpen = 0;
window.onload = function(){
  var buttonShare = document.getElementById("share-button");
  buttonShare.onclick = popUpBox;

  var buttonShareMobile = document.getElementById("share-button-mobile");
  buttonShareMobile.onclick = popUpBox;

  buttonShare.addEventListener("mouseover", hoverOver);
  buttonShare.addEventListener("mouseout", noHoverOver);

  buttonShareMobile.addEventListener("mouseover", hoverOver);
  buttonShareMobile.addEventListener("mouseout", noHoverOver);

  window.addEventListener("resize", checkPopBox);
}

function popUpBox(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  if(w >= 620){
    if (popUpOpen == 0){
      var shareBox = document.getElementById("share-popup");
      shareBox.style.display = "block";
      popUpOpen = 1;
    }
    else{
      var shareBox = document.getElementById("share-popup");
      shareBox.style.display = "none";
      popUpOpen = 0;
    }
  }
  else{
    if (popUpOpen == 0){
      var shareBox = document.getElementById("share-popup-mobile");
      shareBox.style.display = "flex";

      var avatarBox = document.getElementById("avatar-div-mobile");
      avatarBox.style.display = "none";

      var otherBox = document.getElementById("other-div-mobile");
      otherBox.style.display = "none";

      var fullBox = document.getElementById("profile-stuff-mobile");
      fullBox.style.backgroundColor = "hsl(217, 19%, 35%)";

      popUpOpen = 1;
    }
    else{
      var shareBox = document.getElementById("share-popup-mobile");
      shareBox.style.display = "none";

      var avatarBox = document.getElementById("avatar-div-mobile");
      avatarBox.style.display = "inline";

      var otherBox = document.getElementById("other-div-mobile");
      otherBox.style.display = "inline";

      var fullBox = document.getElementById("profile-stuff-mobile");
      fullBox.style.backgroundColor = "white";

      popUpOpen = 0;
    }
  }

}

function hoverOver(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  if(w > 620){
    var buttonShare = document.getElementById("share-button");
    buttonShare.style.backgroundColor = "hsl(217, 19%, 35%)"; /* --theme-very-dark-grayish-blue */

    var buttonShareIcon = document.getElementById("share-button-icon");
    /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element */
    buttonShareIcon.style.filter = "invert(100%) sepia(9%) saturate(2%) hue-rotate(56deg) brightness(200%) contrast(100%)";
  }
  else{
    var buttonShare = document.getElementById("share-button-mobile");
    buttonShare.style.backgroundColor = "hsl(217, 19%, 35%)"; /* --theme-very-dark-grayish-blue */

    var buttonShareIcon = document.getElementById("share-button-icon-mobile");
    /* https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element */
    buttonShareIcon.style.filter = "invert(100%) sepia(9%) saturate(2%) hue-rotate(56deg) brightness(200%) contrast(100%)";
  }


}

function noHoverOver(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  if(w > 620){
    if (popUpOpen == 0){
      var buttonShare = document.getElementById("share-button");
      buttonShare.style.backgroundColor = "hsl(210, 46%, 95%)"; /* --theme-light-grayish-blue*/

      var buttonShareIcon = document.getElementById("share-button-icon");
      buttonShareIcon.style.filter = "none";
    }
    else{
      var buttonShare = document.getElementById("share-button");
      buttonShare.style.backgroundColor = "hsl(214, 17%, 51%)"; /* --theme-desaturated-dark-blue */

      var buttonShareIcon = document.getElementById("share-button-icon");
      buttonShareIcon.style.filter = "invert(100%) sepia(9%) saturate(2%) hue-rotate(56deg) brightness(200%) contrast(100%)";
    }
  }
  else{
    if (popUpOpen == 0){
      var buttonShareMobile = document.getElementById("share-button-mobile");
      buttonShareMobile.style.backgroundColor = "hsl(210, 46%, 95%)"; /* --theme-light-grayish-blue*/

      var buttonShareIconMobile = document.getElementById("share-button-icon-mobile");
      buttonShareIconMobile.style.filter = "none";
    }
    else{
      var buttonShareMobile = document.getElementById("share-button-mobile");
      buttonShareMobile.style.backgroundColor = "hsl(214, 17%, 51%)"; /* --theme-desaturated-dark-blue */

      var buttonShareIconMobile = document.getElementById("share-button-icon-mobile");
      buttonShareIconMobile.style.filter = "invert(100%) sepia(9%) saturate(2%) hue-rotate(56deg) brightness(200%) contrast(100%)";
    }
  }

}

function checkPopBox(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

    if(w < 620 && popUpOpen == 0){
      var profileBoxDesktop = document.getElementById("profile-stuff-desktop");
      profileBoxDesktop.style.display = "none";
      var profileBoxMobile = document.getElementById("profile-stuff-mobile");
      profileBoxMobile.style.display = "flex";

    }
    else if (w >= 620 && popUpOpen == 0){
      var profileBoxDesktop = document.getElementById("profile-stuff-desktop");
      profileBoxDesktop.style.display = "flex";
      var profileBoxMobile = document.getElementById("profile-stuff-mobile");
      profileBoxMobile.style.display = "none";
    }

    else if (w < 620 && popUpOpen == 1){
      var profileBoxDesktop = document.getElementById("profile-stuff-desktop");
      profileBoxDesktop.style.display = "none";
      var profileBoxMobile = document.getElementById("profile-stuff-mobile");
      profileBoxMobile.style.display = "flex";

      var avatarBox = document.getElementById("avatar-div-mobile");
      avatarBox.style.display = "none";

      var otherBox = document.getElementById("other-div-mobile");
      otherBox.style.display = "none";

      var shareBox = document.getElementById("share-popup");
      shareBox.style.display = "none";

      var fullBox = document.getElementById("profile-stuff-mobile");
      fullBox.style.backgroundColor = "hsl(217, 19%, 35%)";

      var shareBox = document.getElementById("share-popup-mobile");
      shareBox.style.display = "flex";

      var buttonShareMobile = document.getElementById("share-button-mobile");
      buttonShareMobile.style.backgroundColor = "hsl(214, 17%, 51%)"; /* --theme-desaturated-dark-blue */

      var buttonShareIconMobile = document.getElementById("share-button-icon-mobile");
      buttonShareIconMobile.style.filter = "invert(100%) sepia(9%) saturate(2%) hue-rotate(56deg) brightness(200%) contrast(100%)";
    }

    else if (w >= 620 && popUpOpen == 1){
      var profileBoxDesktop = document.getElementById("profile-stuff-desktop");
      profileBoxDesktop.style.display = "flex";
      var profileBoxMobile = document.getElementById("profile-stuff-mobile");
      profileBoxMobile.style.display = "none";

      var avatarBox = document.getElementById("avatar-div-mobile");
      avatarBox.style.display = "flex";

      var otherBox = document.getElementById("other-div-mobile");
      otherBox.style.display = "flex";

      var fullBox = document.getElementById("profile-stuff-mobile");
      fullBox.style.backgroundColor = "white";

      var shareBox = document.getElementById("share-popup");
      shareBox.style.display = "block";

      var shareBox = document.getElementById("share-popup-mobile");
      shareBox.style.display = "none";

      var buttonShare = document.getElementById("share-button");
      buttonShare.style.backgroundColor = "hsl(214, 17%, 51%)"; /* --theme-desaturated-dark-blue */

      var buttonShareIcon = document.getElementById("share-button-icon");
      buttonShareIcon.style.filter = "invert(100%) sepia(9%) saturate(2%) hue-rotate(56deg) brightness(200%) contrast(100%)";
    }
}
