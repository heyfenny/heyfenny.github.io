document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const images = slider.querySelectorAll("img");
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");
        let currentIndex = 0;
        let interval;

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        function showPrevImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add("active");
        }

        prevButton.addEventListener("click", showPrevImage);
        nextButton.addEventListener("click", showNextImage);

        function startSlider() {
            interval = setInterval(showNextImage, 5500);
        }

        function stopSlider() {
            clearInterval(interval);
        }

        startSlider();

        slider.addEventListener("mouseenter", stopSlider);
        slider.addEventListener("mouseleave", startSlider);
    });
});
