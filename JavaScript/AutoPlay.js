document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#slider .slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            const img = slide.querySelector("img");
            const caption = slide.querySelector(".caption");

            if (i === index) {
                img.classList.add("active");
                caption.classList.add("active");
            } else {
                img.classList.remove("active");
                caption.classList.remove("active");
            }
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);

    function startSlider() {
        interval = setInterval(showNextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    startSlider();
    document.getElementById("slider").addEventListener("mouseenter", stopSlider);
    document.getElementById("slider").addEventListener("mouseleave", startSlider);

    // 初始化第一个 slide
    showSlide(currentIndex);
});
