import { addSliderButtons, removeSliderButtons } from './sliderButtons';

export const slider = (sliderClass, fieldClass, slidesClass) => {
  const slider = document.querySelector(sliderClass);
  const sliderField = slider.querySelector(fieldClass);
  const slides = slider.querySelectorAll(slidesClass);

  let slideWidth = parseInt(window.getComputedStyle(slides[0]).width);
  let buttonsBox;
  let offset = 0;
  let currentSlide = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  sliderField.style.transition = 'transform 0.5s';

  const handleResize = () => {
    slideWidth = parseInt(window.getComputedStyle(slides[0]).width);

    if (window.innerWidth <= 992) {
      buttonsBox = addSliderButtons(buttonsBox, slider, handleButtonClick);
      sliderField.style.width = 100 * slides.length + '%';
    } else {
      buttonsBox = removeSliderButtons(buttonsBox, handleButtonClick);
      offset = 0;
      currentSlide = 0;
      sliderField.style.transform = `translateX(${offset}px)`;
      sliderField.style.width = '';
    }
  };

  const handleButtonClick = (e) => {
    const button = e.target.closest('.button');
    if (!button) return;

    if (button.classList.contains('button-left')) {
      if (currentSlide > 0) {
        currentSlide--;
        offset -= slideWidth;
      }
    }

    if (button.classList.contains('button-right')) {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        offset += slideWidth;
      } else if (currentSlide === slides.length - 1) {
        currentSlide = 0;
        offset = 0;
      }
    }

    sliderField.style.transform = `translateX(${-offset}px)`;
  };

  // --- touch events ---

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      currentSlide = slideIndex;
      offset = slideWidth * currentSlide;
      sliderField.style.transform = `translateX(${-offset}px)`;
    }
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
    sliderField.style.transition = 'none';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    currentX = e.touches[0].clientX;
    const diff = currentX - startX;

    const minTranslate = 0;
    const maxTranslate = slideWidth * (slides.length - 1);

    let newOffset = offset - diff;
    newOffset = Math.max(minTranslate, Math.min(newOffset, maxTranslate));

    sliderField.style.transform = `translateX(${-newOffset}px)`;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    isDragging = false;
    sliderField.style.transition = 'transform 0.5s';

    const diff = currentX - startX;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToSlide(currentSlide - 1);
      } else {
        goToSlide(currentSlide + 1);
      }
    } else {
      sliderField.style.transform = `translateX(${-offset}px)`;
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);

  slider.addEventListener('touchstart', handleTouchStart, { passive: true });
  slider.addEventListener('touchmove', handleTouchMove, { passive: true });
  slider.addEventListener('touchend', handleTouchEnd);
};
