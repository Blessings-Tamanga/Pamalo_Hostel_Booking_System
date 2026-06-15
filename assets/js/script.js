document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const prevBtn = document.querySelector('.hero-controls .prev');
    const nextBtn = document.querySelector('.hero-controls .next');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (slides.length > 0 && prevBtn && nextBtn) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        let slideInterval = setInterval(nextSlide, 5000);

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }
    }

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});