const locationMap = document.querySelector('.location-map');
const navItems = document.querySelectorAll('.nav-items li');
const navbar = document.getElementById('navbar');

// get navbar height
const navHeight = navbar.getBoundingClientRect().height;

// Scroll into View when clicked
navItems.forEach(item => {
    let idTag = document.getElementById(`${item.textContent.toLowerCase()}`);
    item.addEventListener('click', () => {
        window.scroll({
            top: (idTag.offsetTop - navHeight),
            left: 0, 
            behavior: 'smooth'
        });
    })
});

// Styling while scrolled
window.addEventListener('scroll', () => {
    if (this.scrollY > 200) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Map fetch and render
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

        var marker = new mapboxgl.Marker()
            .setLngLat([120.3136, 14.6297])
            .addTo(map);

    } catch (err) {
        throw new Error('There is an Error: ', err);
    }
}

mapToken();