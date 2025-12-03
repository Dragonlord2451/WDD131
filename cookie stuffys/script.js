// Scroll to featured cookies
function scrollToFeatured() {
    document.getElementById("featured").scrollIntoView({
        behavior: "smooth"
    });
}

// Carousel sliding logic
let track = document.querySelector('.carousel-track');
let position = 0;

function slideLeft() {
    position += 260;
    track.style.transform = `translateX(${position}px)`;
}

function slideRight() {
    position -= 260;
    track.style.transform = `translateX(${position}px)`;
}

