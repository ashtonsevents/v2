document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const dotsContainer = document.querySelector('.dots');
    const numCards = cards.length;
    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;

    // Create dots for navigation
    for (let i = 0; i < numCards; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showCard(i);
        });
        dotsContainer.appendChild(dot);
    }

    // Show the initial card
    showCard(currentIndex);

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === currentIndex ? '#fff' : 'transparent';
        });
    }

    // Event listeners for touch devices
    document.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    document.addEventListener('touchmove', (event) => {
        currentX = event.touches[0].clientX;
        const diff = startX - currentX;
        const percent = (diff / window.innerWidth) * 100;
        cards[currentIndex].style.transform = `translateX(-${percent}%)`;
    });

    document.addEventListener('touchend', () => {
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < numCards - 1) {
                showCard(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                showCard(currentIndex - 1);
            }
        }
        cards[currentIndex].style.transform = `translateX(0)`;
        startX = 0;
        currentX = 0;
    });

    // Event listeners for desktop drag
    document.addEventListener('mousedown', (event) => {
        startX = event.clientX;
    });

    document.addEventListener('mousemove', (event) => {
        currentX = event.clientX;
        const diff = startX - currentX;
        const percent = (diff / window.innerWidth) * 100;
        cards[currentIndex].style.transform = `translateX(-${percent}%)`;
    });

    document.addEventListener('mouseup', () => {
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < numCards - 1) {
                showCard(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                showCard(currentIndex - 1);
            }
        }
        cards[currentIndex].style.transform = `translateX(0)`;
        startX = 0;
        currentX = 0;
    });

    // Event listener for arrow key navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' && currentIndex < numCards - 1) {
            showCard(currentIndex + 1);
        } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
            showCard(currentIndex - 1);
        }
    });

    // Event listeners for arrow clicks
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            showCard(currentIndex - 1);
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < numCards - 1) {
            showCard(currentIndex + 1);
        }
    });
});
