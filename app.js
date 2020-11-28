

const locationMap = document.querySelector('.location-map');


async function mapToken() {
const getToken = await fetch();
const token = getToken.json();

}



// add something that will fetch the api_key from the backend
mapboxgl.accessToken = mapToken();
var map = new mapboxgl.Map({
    container: locationMap,
    style: 'mapbox://styles/lemonplug/ckenng4qa0bsl1anzmux3hh43', // stylesheet location
    center: [120.3136, 14.6297], // starting position [lng, lat]
    zoom: 15 // starting zoom
});