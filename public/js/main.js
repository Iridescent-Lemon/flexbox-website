const locationMap = document.querySelector('.map');
const navItems = document.querySelectorAll('.nav-items li');
const navbar = document.getElementById('navbar');

// get navbar height
let navHeight = navbar.getBoundingClientRect().height;

// responsive navbar sizing
window.addEventListener('resize', () => {
    navHeight = navbar.getBoundingClientRect().height;
    ScrollView();
});

// Scroll into View when clicked
function ScrollView() {
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
}
ScrollView();

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
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVtb25wbHVnIiwiYSI6ImNrZW12ajdhYjBjeXoycW5xYmpkOW91YzYifQ.T-5jg37zN8QSAsxoNTezCw';
        var map = new mapboxgl.Map({
            container: locationMap,
            style: 'mapbox://styles/lemonplug/ckenng4qa0bsl1anzmux3hh43', // stylesheet location
            center: [120.3136, 14.6297], // starting position [lng, lat]
            zoom: 15 // starting zoom
        });

        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
            'Bataan Nuclear Power Plant is a nuclear power plant, on Bataan Peninsula, 100 kilometres (62 mi) west of Manila in the Philippines. It is located on a 3.57 square kilometre government reservation at Napot Point in Morong, Bataan.'
        );

        var marker = new mapboxgl.Marker()
            .setLngLat([120.3136, 14.6297])
            .setPopup(popup)
            .addTo(map);

    } catch (err) {
        throw new Error('There is an Error: ', err);
    }
}

mapToken();