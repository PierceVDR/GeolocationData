// const express = require('express');
// const app = express();
// app.listen(3000, () => {
//     console.log('listening at 3000')
//     app.use(express.static('public'));
// });





// function geoFindMe() {
//     const status = document.querySelector("#status");
//     const mapLink = document.querySelector("#map-link");

//     mapLink.href = "";
//     mapLink.textContent = "";

//     function success(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         status.textContent = "";
//         mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//         mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//     }

//     function error() {
//         status.textContent = "Unable to retrieve your location";
//     }

//     if (!navigator.geolocation) {
//         status.textContent = "Geolocation is not supported by your browser";
//     } else {
//         status.textContent = "Locating…";
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// }

// document.querySelector("#find-me").addEventListener("click", geoFindMe);
  




if ("geolocation" in navigator) { // If geolocation is supported and allowed...
    console.log('geolocation available');

    navigator.geolocation.getCurrentPosition((position) => { // A position object containing the geolocation data gets passed into this arrow function (which is run)
        console.log( position.coords.latitude); // Prints the latitude
        console.log( position.coords.longitude); // Prints the longitude

        document.getElementById("latitude").innerHTML=position.coords.latitude;
        document.getElementById("longitude").innerHTML=position.coords.longitude;

    });

} else {

    /* geolocation IS NOT available */
    console.log('geolocation not available');
}
