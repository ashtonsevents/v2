// script.js
let touchstartX = 0;
let touchendX = 0;
const slideshow = document.querySelector('.slideshow-container');

slideshow.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

slideshow.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX < touchstartX) {
        // Swiped left
        nextSlide();
    }

    if (touchendX > touchstartX) {
        // Swiped right
        previousSlide();
    }
}

function nextSlide() {
    const currentSlide = document.querySelector('.slide:first-child');
    const nextSlide = currentSlide.nextElementSibling || slideshow.firstElementChild;
    currentSlide.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        currentSlide.style.transform = 'translateX(0)';
        slideshow.appendChild(currentSlide);
    }, 500);
}

function previousSlide() {
    const slides = document.querySelectorAll('.slide');
    const lastSlide = slides[slides.length - 1];
    const previousSlide = lastSlide.previousElementSibling || slideshow.lastElementChild;
    previousSlide.style.transform = 'translateX(0)';
    slideshow.insertBefore(lastSlide, slides[0]);
    setTimeout(() => {
        lastSlide.style.transform = 'translateX(100%)';
    }, 0);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});
