
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.getElementById('language').addEventListener('change', function(event) {
    const lang = event.target.value;
    alert(`Language switched to: ${lang}`);
    // Placeholder: Add logic to dynamically load content based on the selected language
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slide')[0].classList.add('active');
});
