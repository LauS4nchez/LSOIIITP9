document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.children);
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    const intervalTime = 4500;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    function moveToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    setInterval(moveToNextSlide, intervalTime);

    window.addEventListener('resize', () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        updateCarousel();
    });
});
