
// Initialize the map
var mymap = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to display the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Add a custom SVG marker
var customIcon = L.divIcon({
    className: 'custom-icon',
    html: '<img src="./images/icon-location.svg" width="48" height="48">'
});

/*var customMarker = L.marker([51.505, -0.09], { icon: customIcon }).addTo(mymap);*/

// Add a popup to the custom marker
/*customMarker.bindPopup("<b>Custom Marker</b><br>This is a custom SVG marker.").openPopup();*/


const ipAddressFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const a0832fisjf952fesf5853 = "at_rUzGrVs8fkA6Upfp38tDWV2G08bdV";
/*import API_KEY from "./config.js";*/

window.onload = function () {
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkIPAddress);

    var rrlm = document.getElementById("eRLR");
    rrlm.addEventListener("click", emergencyKillSwitch);

    alert("This page is currently limited to 3 requests every 24 hours.");
}

let ipAddress;
let randomIP = '';
let timeZone;
let countryLocation;
let cityLocation;
let postalCode;
let isp;
let lat;
let lng;

let ipAddressField = document.getElementById("ip-address-text");
let countryLocationInput = document.getElementById("location-text");
let timezoneInput = document.getElementById("utc-time-text");
let ispInput = document.getElementById("isp-text");

// Retrieve the stored data from localStorage
const storedData = JSON.parse(localStorage.getItem('buttonData')) || {};
let { successClickCount = 0, isButtonDisabled = false } = storedData;

var url;
/*let successClickCount = 0;*/
const maxClicks = 3;
/*let isButtonDisabled = false;*/


function checkIPAddress() {
    var userInput = document.getElementById("user-input");
    if (userInput.value.match(ipAddressFormat)) {
        console.log(userInput.value);
        successClickCount++;

        url = "https://geo.ipify.org/api/v2/country,city?apiKey=" +a0832fisjf952fesf5853 +"&ipAddress=" + userInput.value;

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                ipAddress = response.ip;
                timeZone = response.location.timezone; // Accessing the timezone property under location
                countryLocation = response.location.country; // Accessing the country property under location
                cityLocation = response.location.region; // Accessing the region property under location
                actualCity = response.location.city;
                postalCode = response.location.postalCode;
                isp = response.isp;
                lat = response.location.lat;
                lng = response.location.lng;

                ipAddressField.innerHTML = ipAddress;
                timezoneInput.innerHTML = ` UTC `+timeZone;
                countryLocationInput.innerHTML = actualCity +", " +cityLocation +", " +countryLocation +" " +postalCode;
                ispInput.innerHTML = isp;
                console.log("reached end");
                console.log(isp);
                console.log(ipAddress);
                console.log(timeZone);
                console.log(countryLocation);
                console.log(cityLocation);
                console.log(postalCode);
                console.log(lat);
                console.log(lng);
                mapLocation(lat, lng);
            }).catch(error => console.log('Error:', error));
    } 
    else {
        alert('You have entered an invalid IP address!');
        return false;
    }

    if (successClickCount >= maxClicks) {
        disableButtonFor24Hours();
        alert('Usage limit for day reached');
    }
}

const mapLocation = (lat, lng) => {

    var markerIcon = L.icon({
        iconUrl: './images/icon-location.svg',

        iconSize: [46, 56], // size of the icon
        iconAnchor: [23, 55], // point of the icon which will correspond to marker's location
    })

    mymap.flyTo([lat, lng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: false,
    }).addTo(mymap);

    L.marker([lat, lng], { icon: markerIcon }).addTo(mymap);
}

// Check if the button should be disabled
function checkButtonStatus() {
    var submitButton = document.getElementById("submit-button");

    if (isButtonDisabled) {
    // Disable the button
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
  }
  
  // Disable the button for 24 hours
  function disableButtonFor24Hours() {

    isButtonDisabled = true;
    checkButtonStatus();

    // Store the updated data in localStorage
    localStorage.setItem('buttonData', JSON.stringify({ successClickCount, isButtonDisabled }));
  
    setTimeout(() => {

      isButtonDisabled = false;
      successClickCount = 0;

      checkButtonStatus();

       // Store the updated data in localStorage
        localStorage.setItem('buttonData', JSON.stringify({ successClickCount, isButtonDisabled }));
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  }

  // Initially check and set the button status when the page loads
    checkButtonStatus();

    function emergencyKillSwitch(){
        localStorage.clear();
        location.reload();
    }

