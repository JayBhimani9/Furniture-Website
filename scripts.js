document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.items-carousel');
    const container = carousel.querySelector('.items-container2');
    const batches = carousel.querySelectorAll('.item-batch2');
    const prevButton = carousel.querySelector('.carousel-nav.prev');
    const nextButton = carousel.querySelector('.carousel-nav.next');
    const seeAllButton = document.querySelector('.see-all-btn');
    let currentIndex = 0;

    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < batches.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    seeAllButton.addEventListener('click', () => {
        container.style.flexWrap = 'wrap';
        container.style.transform = 'none';
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
    });

    updateCarousel();
});
