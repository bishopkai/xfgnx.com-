document.addEventListener("DOMContentLoaded", function () {
    console.log("Slider.js loaded!");

    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftControl = document.querySelector(".slider-control.left");
    const rightControl = document.querySelector(".slider-control.right");

    if (!slider || slides.length === 0) {
        console.error("Slider or slides not found!");
        return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    leftControl.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    rightControl.addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
});
