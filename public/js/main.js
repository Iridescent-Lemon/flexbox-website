const locationMap = document.querySelector('.location-map');

async function mapToken() {
    try {
        const response = await fetch('http://localhost:3000/token');
        const data = await response.json();

        mapboxgl.accessToken = data.message;
        var map = new mapboxgl.Map({
            container: locationMap,
            style: 'mapbox://styles/lemonplug/ckenng4qa0bsl1anzmux3hh43', // stylesheet location
            center: [120.3136, 14.6297], // starting position [lng, lat]
            zoom: 15 // starting zoom
        });
    } catch (err) {
        throw new Error('There is an Error: ', err);
    }
}

mapToken();