let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const projects = document.querySelectorAll('.project-item');
const totalProjects = projects.length;

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < totalProjects - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalProjects - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
}
