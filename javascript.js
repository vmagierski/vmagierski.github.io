/*
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
      alert(position.coords.latitude)
      //alert('Your Longitude is ' + position.coords.longitude);
} else {
  alert("Geolocation not available");
}
*/

alert(onclick);

//FOLLOWING KONAMI CODE TAKEN FROM: http://mattkirman.com/how-to-recreate-the-konami-code-in-javascript/
//

// create the keys and konami variables
var keys = [],
    konami = "38,38,40,40,37,39,37,39,66,65";

function detectKonami(e){
   
    // push the keycode to the 'keys' array
    keys.push(e.keyCode);

    // and check to see if the user has entered the Konami code
    // do something such as:
    if (keys.toString().indexOf(konami) >= 0) {
        alert('Konami');

        // and finally clean up the keys array
        keys = [];
    }
}

if (window.addEventListener) {
    
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", detectKonami , true);
};