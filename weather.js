function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude; 
    console.log("You live in", lat, lon);
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
console.log(url);


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);