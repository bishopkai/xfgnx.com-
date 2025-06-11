class Slider {
  constructor() {
    this.slider = document.querySelector('.slider');
    this.slides = document.querySelectorAll('.slide');
    this.currentSlide = 0;
    this.slideCount = this.slides.length;
    this.autoPlayDelay = 5000;
    this.init();
  }

  init() {
    this.createNavigation();
    this.createArrows();
    this.startAutoPlay();
    this.addEventListeners();
  }

  createNavigation() {
    const nav = document.createElement('div');
    nav.className = 'slider-nav';
    
    this.slides.forEach((_, index) => {
      const button = document.createElement('button');
      button.addEventListener('click', () => this.goToSlide(index));
      nav.appendChild(button);
    });
    
    document.querySelector('.slider-container').appendChild(nav);
    this.updateNavigation();
  }

  createArrows() {
    const arrows = document.createElement('div');
    arrows.className = 'slider-arrows';
    
    arrows.innerHTML = `
      <button class="arrow arrow-left">&lt;</button>
      <button class="arrow arrow-right">&gt;</button>
    `;
    
    document.querySelector('.slider-container').appendChild(arrows);
  }

  updateNavigation() {
    const buttons = document.querySelectorAll('.slider-nav button');
    buttons.forEach((button, index) => {
      button.classList.toggle('active', index === this.currentSlide);
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.slider.style.transform = `translateX(-${index * 100}%)`;
    this.updateNavigation();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount;
    this.goToSlide(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
    this.goToSlide(this.currentSlide);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  addEventListeners() {
    document.querySelector('.arrow-left').addEventListener('click', () => this.prevSlide());
    document.querySelector('.arrow-right').addEventListener('click', () => this.nextSlide());
    
    this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.slider.addEventListener('mouseleave', () => this.startAutoPlay());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Event listeners
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  // Auto advance slides
  setInterval(nextSlide, 5000);
});