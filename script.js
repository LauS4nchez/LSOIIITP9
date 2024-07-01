document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    let currentIndex = 0;
    const intervalTime = 10000;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    function moveToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function moveToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    }

    function addHoverEffect() {
        slides.forEach((slide, index) => {
            const imgContainers = slide.querySelectorAll('.carousel-img-container');

            imgContainers.forEach(container => {
                container.addEventListener('mouseenter', () => {
                    container.classList.add('hovered');
                });

                container.addEventListener('mouseleave', () => {
                    container.classList.remove('hovered');
                });
            });
        });
    }

    setInterval(moveToNextSlide, intervalTime);
    window.addEventListener('resize', updateCarousel);

    document.querySelector('.carousel-button.next').addEventListener('click', moveToNextSlide);
    document.querySelector('.carousel-button.prev').addEventListener('click', moveToPrevSlide);

    addHoverEffect();
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.images-featured');

    carouselImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
            img.style.boxShadow = '0 0 20px rgba(0, 0, 0, 1)';
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
            img.style.transition = 'transform 0.3s ease-in-out';
            img.style.boxShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-img');

    carouselImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
            img.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
            img.style.transition = 'transform 0.3s ease-in-out';
            img.style.boxShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.small-images');

    carouselImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
            img.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
            img.style.transition = 'transform 0.3s ease-in-out';
            img.style.boxShadow = 'none';
        });
    });
});