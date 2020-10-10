function initCarousel() {
  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let slideWidth = carousel.offsetWidth;
  let currentSlide = 1;

  hide(currentSlide, left, right);

  right.addEventListener('click', click);
  left.addEventListener('click', click);

  function click(event) {
    let isLeft = false;

    if (event.currentTarget === left) {isLeft = true;}
    carousel.style.transform = `translateX(-${(isLeft ? (currentSlide - 2) : currentSlide) * slideWidth}px)`;

    if (isLeft) {currentSlide--;} else {currentSlide++;}

    hide(currentSlide, left, right);
  }

  function hide(slideNumber, leftArrow, rightArrow) {
    if (slideNumber === 1) {
      leftArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
    }

    if (slideNumber === 4) {
      rightArrow.style.display = 'none';
    } else {
      rightArrow.style.display = '';
    }
  }
}
