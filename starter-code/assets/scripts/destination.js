$('.container_carousel_planets .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoWidth: true,
    items: 1,
})

function namePlanetInOwlNav() {
    const planets = ['Moon', 'Mars', 'Europe', 'Titan'];

    let owlNav = document.querySelectorAll('.container_carousel_planets .owl-dot');

    console.log(owlNav);

    for(let i = 0; i < owlNav.length; i++){
        console.log(i)
        owlNav[i].innerHTML = planets[i];
    }
}

namePlanetInOwlNav();