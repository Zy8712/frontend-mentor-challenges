/* Initialize Animate on Scroll */
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

var navbar_minimized = false; // variable for vertical nav bar status

let top_page_button = document.getElementById("to_top");

var darklightValue = false; // false for light, true for dark

/* Function called upon page load */
window.onload = function(){
  /* Minimize Vertical Navbar Button (Three Horizonal Lines Icon) */
  var minimize_button = $("minimize-navbar-button");
  minimize_button.observe("click", changeNavBar); // can use .observe or .addEventListener

  /* Site Appearance Settings Button (Gear Icon) */
  var settings_button = $("site-appearance-settings-button");
  settings_button.observe("click", showSettings);

  /* Close Site Appearance Menu (X Mark Shown After Opening Menu) */
  var close_settings_button = $("close-site-appearance-settings-button");
  close_settings_button.observe("click", closeSettings);

  /* Dark Mode / Light Mode Toggle Switch */
  var dark_light_button = $("dark-light-button");
  dark_light_button.addEventListener("click", switchDarkLight);

  const checkbox = document.getElementById('dark-light-checkbox');

  let isAOSRunning = false; // Flag to track if AOS animations are running

  // Add an event listener to the checkbox
  checkbox.addEventListener('change', function (event) {
    // Check if AOS animations are currently running
    if (isAOSRunning) {
      return; // If AOS is running, exit the function to avoid duplicate calls
    }

    // Disable AOS temporarily
    isAOSRunning = true;
    AOS.refreshHard();

    // Your logic here to handle the checkbox state change
    // This code block will only be executed once per click.

    // Re-enable AOS
    setTimeout(function () {
      AOS.init();
      isAOSRunning = false; // Reset the flag after re-enabling AOS
    }, 100);
  });


  window.addEventListener("resize", checkNavBarText);
}

/* Function called upon scrolling up and down page */
window.onscroll = function(){
  scrollFunction(); // Calss the scroll function
}

function changeNavBar(){
  if (navbar_minimized == false){
    $("nav-option0").innerHTML = "[H]";
    $("nav-option1").innerHTML = "[1]";
    $("nav-option2").innerHTML = "[2]";
    $("nav-option3").innerHTML = "[3]";
    $("nav-option4").innerHTML = "[4]";
    $("nav-option5").innerHTML = "[5]";
    $("nav-option6").innerHTML = "[L]";
    $("nav-option7").innerHTML = "[C]";


    $("nav-option0").title = "Home";
    $("nav-option1").title = "Newbie";
    $("nav-option2").title = "Junior";
    $("nav-option3").title = "Intermediate";
    $("nav-option4").title = "Advanced";
    $("nav-option5").title = "Guru";
    $("nav-option6").title = "Links";
    $("nav-option7").title = "Contact";

    $("side_icon").className = "d-none";
    document.getElementsByTagName("nav")[0].className = "navbar navbar-expand-lg navbar-dark fixed-top navbar2";
    $("content-wrapper").className = "content-change-wrapper";
    navbar_minimized = true;
  }
  else{
    $("nav-option0").innerHTML = "Home";
    $("nav-option1").innerHTML = "Newbie";
    $("nav-option2").innerHTML = "Junior";
    $("nav-option3").innerHTML = "Intermediate";
    $("nav-option4").innerHTML = "Advanced";
    $("nav-option5").innerHTML = "Guru";
    $("nav-option6").innerHTML = "Links";
    $("nav-option7").innerHTML = "Contact";

    $("nav-option0").title = "";
    $("nav-option1").title = "";
    $("nav-option2").title = "";
    $("nav-option3").title = "";
    $("nav-option4").title = "";
    $("nav-option5").title = "";
    $("nav-option6").title = "";
    $("nav-option7").title = "";

    $("side_icon").className = "d-none d-lg-block";
    document.getElementsByTagName("nav")[0].className = "navbar navbar-expand-lg navbar-dark fixed-top";
    $("content-wrapper").className = "full-wrapper";
    navbar_minimized = false;
  }
}

function checkNavBarText(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  if(w < 992 && navbar_minimized == true){
    $("nav-option0").innerHTML = "Home";
    $("nav-option1").innerHTML = "Newbie";
    $("nav-option2").innerHTML = "Junior";
    $("nav-option3").innerHTML = "Intermediate";
    $("nav-option4").innerHTML = "Advanced";
    $("nav-option5").innerHTML = "Guru";
    $("nav-option6").innerHTML = "Links";
    $("nav-option7").innerHTML = "Contact";

    $("nav-option0").title = "";
    $("nav-option1").title = "";
    $("nav-option2").title = "";
    $("nav-option3").title = "";
    $("nav-option4").title = "";
    $("nav-option5").title = "";
    $("nav-option6").title = "";
    $("nav-option7").title = "";
  }
  else if (w >= 992 && navbar_minimized == true){
    $("nav-option0").innerHTML = "[H]";
    $("nav-option1").innerHTML = "[1]";
    $("nav-option2").innerHTML = "[2]";
    $("nav-option3").innerHTML = "[3]";
    $("nav-option4").innerHTML = "[4]";
    $("nav-option5").innerHTML = "[5]";
    $("nav-option6").innerHTML = "[L]";
    $("nav-option7").innerHTML = "[C]";

    $("nav-option0").title = "Home";
    $("nav-option1").title = "Newbie";
    $("nav-option2").title = "Junior";
    $("nav-option3").title = "Intermediate";
    $("nav-option4").title = "Advanced";
    $("nav-option5").title = "Guru";
    $("nav-option6").title = "Links";
    $("nav-option7").title = "Contact";
  }
}

function showSettings(){
  var settings_box_popup = $("site-settings-popup");
  settings_box_popup.style.display = "block";
}

function closeSettings(){
  var settings_box_popup = $("site-settings-popup");
  settings_box_popup.style.display = "none";
}

function switchDarkLight(){
  var settingsBox = $("site-settings-popup-box");
  var popupBox = $("settings-popup-box-contents");
  var toggleBox = $("dark-light-toggle-box");
  var newBackgroundColor, newTextColor;

  var light_icon = $("light-mode-icon");
  var dark_icon = $("dark-mode-icon");

  var dark_light_text = $("dark-light-toggle-box-text");
  console.log(darklightValue);


  if (darklightValue == false) {
    console.log("1");
    newBackgroundColor = "black";
    newTextColor = "white";
    light_icon.style.display = "none";
    dark_icon.style.display = "block";
    dark_light_text.innerHTML = "Appearance (Dark):";
    darklightValue = true;
  } else if (darklightValue == true){
    console.log("2");

    newBackgroundColor = "white";
    newTextColor = "black";
    light_icon.style.display = "block";
    dark_icon.style.display = "none";
    dark_light_text.innerHTML = "Appearance (Light):";
    darklightValue = false;
  }

  settingsBox.style.backgroundColor = newBackgroundColor;

  const h2Elements = popupBox.querySelectorAll('h2');
  h2Elements.forEach(h2 => h2.style.color = newTextColor);

}

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    top_page_button.style.display = "block";
  } else {
    top_page_button.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
