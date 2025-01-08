document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#slider img");
    let currentIndex = 0;
    let interval;
    
    function showNextImage() 
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }
                          
    function showPrevImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add("active");
    }

    document.getElementById("next").addEventListener("click", showNextImage);
    document.getElementById("prev").addEventListener("click", showPrevImage);

    function startSlider() {
        interval = setInterval(showNextImage, 3000);
    }

    function stopSlider() {
        clearInterval(interval);
    }
    startSlider();
    document.getElementById("slider").addEventListener("mouseenter", stopSlider);
    document.getElementById("slider").addEventListener("mouseleave", startSlider);
});
