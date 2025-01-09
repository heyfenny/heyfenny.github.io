document.addEventListener("DOMContentLoaded", function() {
    // 第一个 slider
    const images1 = document.querySelectorAll("#slider img");
    let currentIndex1 = 0;
    let interval1;

    function showNextImage1() {
        images1[currentIndex1].classList.remove("active");
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        images1[currentIndex1].classList.add("active");
    }

    function showPrevImage1() {
        images1[currentIndex1].classList.remove("active");
        currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
        images1[currentIndex1].classList.add("active");
    }

    document.getElementById("next").addEventListener("click", showNextImage1);
    document.getElementById("prev").addEventListener("click", showPrevImage1);

    function startSlider1() {
        interval1 = setInterval(showNextImage1, 5500);
    }

    function stopSlider1() {
        clearInterval(interval1);
    }

    startSlider1();
    document.getElementById("slider").addEventListener("mouseenter", stopSlider1);
    document.getElementById("slider").addEventListener("mouseleave", startSlider1);

    // 第二个 slider
    const images2 = document.querySelectorAll("#slider2 img");
    let currentIndex2 = 0;
    let interval2;

    function showNextImage2() {
        images2[currentIndex2].classList.remove("active");
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        images2[currentIndex2].classList.add("active");
    }

    function showPrevImage2() {
        images2[currentIndex2].classList.remove("active");
        currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
        images2[currentIndex2].classList.add("active");
    }

    document.getElementById("next2").addEventListener("click", showNextImage2);
    document.getElementById("prev2").addEventListener("click", showPrevImage2);

    function startSlider2() {
        interval2 = setInterval(showNextImage2, 5500);
    }

    function stopSlider2() {
        clearInterval(interval2);
    }

    startSlider2();
    document.getElementById("slider2").addEventListener("mouseenter", stopSlider2);
    document.getElementById("slider2").addEventListener("mouseleave", startSlider2);
});
