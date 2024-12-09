document.addEventListener("DOMContentLoaded", function () {
    // Slide ảnh banner
    const images = document.querySelectorAll('.banner-images img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000);
});
