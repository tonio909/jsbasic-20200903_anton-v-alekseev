export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.slides = slides;
    this.elem = this.card(slides);
    this.event();
    this.carousel(slides.length);
  }

  card(slides) {
    let html = document.createElement('div');
    html.classList.add('carousel');

    html.insertAdjacentHTML('afterbegin', '<div class="carousel__arrow carousel__arrow_right"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></div><div class="carousel__arrow carousel__arrow_left"><img src="/assets/images/icons/angle-left-icon.svg" alt="icon"></div>');

    let carousel = document.createElement('div');
    carousel.classList.add('carousel__inner');

    slides.forEach(slide => {
      let carous = `
        <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`;
      carousel.insertAdjacentHTML('beforeend', carous);
    });
    html.append(carousel);
    return html;
  }

  carousel(nSlidesLength) {
    let slide = 1;
    let left = this.elem.querySelector('.carousel__arrow_left');
    let right = this.elem.querySelector('.carousel__arrow_right');
    let carousel = this.elem.querySelector('.carousel__inner');

    if (slide === 1) {left.style.display = 'none';} else {left.style.display = '';}

    if (slide === nSlidesLength) {right.style.display = 'none';} else {right.style.display = '';}

    right.addEventListener('click', click);
    left.addEventListener('click', click);

    function click(event) {
      let offsetWidth = carousel.offsetWidth;
      let isLeft = false;
      if (event.currentTarget === left) {isLeft = true;}

      carousel.style.transform = `translateX(-${(isLeft ? (slide - 2) : slide) * offsetWidth}px)`;

      if (isLeft) {slide--;} else {slide++;}

      if (slide === 1) {left.style.display = 'none';} else {left.style.display = '';}
      if (slide === nSlidesLength) {right.style.display = 'none';} else {right.style.display = '';}
    }
  }

  event() {
    let element = this.elem;
    element.addEventListener('click', (event) => {
      if (event.target.closest('button')) {
        event.stopPropagation();
        let id = event.target.closest('.carousel__slide').dataset.id;
        let productAdd = new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        });
        element.dispatchEvent(productAdd);
      }
    });
  }
}
