document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const images = slider.querySelectorAll("img");
        const altText = img.alt; // 获取 alt 内容
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");
        let currentIndex = 0;
        let interval;
        
        // 创建文字元素
        const caption = document.createElement("span");
        caption.textContent = altText;
        // 将文字插入到图片父容器中
        slide.style.position = "relative"; // 设置父容器相对定位
        slide.appendChild(caption);
        
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
