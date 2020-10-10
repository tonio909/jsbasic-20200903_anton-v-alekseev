export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.productCard(product);
    this.eventListener();
  }

  productCard(product) {
    let card = document.createElement('div');
    card.classList.add('card');

    let html = `
      <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>`;

    card.insertAdjacentHTML('afterbegin', html);

    return card;
  }

  eventListener() {
    let elem = this.elem;

    elem.addEventListener('click', () => {
      let product = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      });
      elem.dispatchEvent(product);
    });
  }
}
