window.onload = function() {
  var openNavButton = document.getElementById("toggle-nav-menu-mobile");
  var menuPopout = document.querySelector(".menu-popout");

  openNavButton.addEventListener("click", function() {
    menuPopout.style.width = "250px";
  });

  var closeNavButton = document.querySelector(".closebtn");
  closeNavButton.addEventListener("click", function() {
    menuPopout.style.width = "0";
  });
};
