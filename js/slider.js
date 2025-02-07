document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftControl = document.querySelector(".slider-control.left");
    const rightControl = document.querySelector(".slider-control.right");
    const totalSlides = slides.length;

    console.log(document.querySelector(".slider"));
    console.log(document.querySelectorAll(".slide"));

  
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    leftControl.addEventListener("click", () => {
      if (currentIndex > 0) currentIndex--;
      updateSlider();
    });
  
    rightControl.addEventListener("click", () => {
      if (currentIndex < totalSlides - 1) currentIndex++;
      updateSlider();
    });
  });
  
