document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
	
	// 随机颜色函数
	function getRandomColor() {
	    const colors = [
		"#f0f8ff", "#faebd7", "#00ffff", "#7fffd4", "#f0ffff", "#f5f5dc", "#ffe4c4", "#000000", 
		"#ffebcd", "#0000ff", "#8a2be2", "#a52a2a", "#deb887", "#5f9ea0", "#7fff00", "#d2691e", 
		"#ff7f50", "#6495ed", "#fff8dc", "#dc143c", "#00ffff", "#00008b", "#008b8b", "#b8860b", 
		"#a9a9a9", "#006400", "#a9a9a9", "#bdb76b", "#8b008b", "#556b2f", "#ff8c00", "#9932cc", 
		"#8b0000", "#e9967a", "#8fbc8f", "#483d8b", "#2f4f4f", "#2f4f4f", "#00ced1", "#9400d3", 
		"#ff1493", "#00bfff", "#696969", "#696969", "#1e90ff", "#b22222", "#fffaf0", "#228b22", 
		"#ff00ff", "#dcdcdc", "#f8f8ff", "#ffd700", "#daa520", "#808080", "#008000", "#adff2f", 
		"#808080", "#f0fff0", "#ff69b4", "#cd5c5c", "#4b0082", "#fffff0", "#f0e68c", "#e6e6fa", 
		"#fff0f5", "#7cfc00", "#fffacd", "#add8e6", "#f08080", "#e0ffff", "#d3d3d3", "#90ee90", 
		"#d3d3d3", "#ffb6c1", "#ffa07a", "#20b2aa", "#87cefa", "#778899", "#778899", "#b0c4de", 
		"#ffffe0", "#00ff00", "#32cd32", "#faf0e6", "#ff00ff", "#800000", "#66cdaa", "#0000cd", 
		"#ba55d3", "#9370db", "#3cb371", "#7b68ee", "#00fa9a", "#48d1cc", "#c71585", "#191970", 
		"#f5fffa", "#ffe4e1", "#ffe4b5", "#ffdead", "#000080", "#fdf5e6", "#808000", "#6b8e23", 
		"#ffa500", "#ff4500", "#da70d6", "#eee8aa", "#98fb98", "#afeeee", "#db7093", "#ffefd5", 
		"#ffdab9", "#cd853f", "#ffc0cb", "#dda0dd", "#b0e0e6", "#800080", "#ff0000", "#bc8f8f", 
		"#4169e1", "#8b4513", "#fa8072", "#f4a460", "#2e8b57", "#fff5ee", "#a0522d", "#c0c0c0", 
		"#87ceeb", "#6a5acd", "#708090", "#708090", "#fffafa", "#00ff7f", "#4682b4", "#d2b48c", 
		"#008080", "#d8bfd8", "#ff6347", "#40e0d0", "#ee82ee", "#f5deb3", "#ffffff", "#f5f5f5", 
		"#ffff00", "#9acd32"
	    ];
	    // 随机选择一个颜色
	    const randomIndex = Math.floor(Math.random() * colors.length);
	    return colors[randomIndex];
	}
	
    sliders.forEach((slider) => {
        const images = slider.querySelectorAll("img");
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");
        let currentIndex = 0;
        let interval;
        
        // 创建并添加文字元素，确保每张图片都有对应的文字
        images.forEach((img) => {
            const altText = img.alt;  // 获取图片的 alt 内容

            // 创建文字元素
            const caption = document.createElement("span");
            caption.textContent = altText;  // 将 alt 内容设置为文字

            // 获取该图片的父容器 div，并设置为相对定位
            const parentDiv = img.parentElement;

            // 将文字插入到图片父容器中
            parentDiv.appendChild(caption);
            // 初始时将所有文字隐藏
            caption.style.opacity = 0;
	    const dominantColor = getRandomColor();
            caption.style.webkitTextStroke = `1px ${dominantColor}`;  // 设置文字轮廓颜色
        });

        // 显示下一个图片并切换文字
        function showNextImage() {
            images[currentIndex].classList.remove("active");
            const captions = images[currentIndex].parentElement.querySelectorAll("span");
            captions.forEach(caption => caption.style.opacity = 0); // 隐藏当前图片的文字

            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
            const nextCaptions = images[currentIndex].parentElement.querySelectorAll("span");
            nextCaptions.forEach(caption => caption.style.opacity = 1); // 显示下一个图片的文字
        }

        // 显示上一个图片并切换文字
        function showPrevImage() {
            images[currentIndex].classList.remove("active");
            const captions = images[currentIndex].parentElement.querySelectorAll("span");
            captions.forEach(caption => caption.style.opacity = 0); // 隐藏当前图片的文字

            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add("active");
            const prevCaptions = images[currentIndex].parentElement.querySelectorAll("span");
            prevCaptions.forEach(caption => caption.style.opacity = 1); // 显示上一个图片的文字
        }

        prevButton.addEventListener("click", showPrevImage);
        nextButton.addEventListener("click", showNextImage);

        // 自动播放
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
