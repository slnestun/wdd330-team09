import { getLocalStorage, selectProductImage, getTotalAmount } from './utils.mjs';

function cartItemTemplate(item) {
  // select the appropriate image based on screen width
  const productImage = selectProductImage(item);
  //console.log(productImage)
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <div class="cart-card__quantity-control">
    <button class="quantity-decrease">-</button>
    <p class="cart-card__quantity">${item.quantity}</p>
    <button class="quantity-increase">+</button>
  </div>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join('');

    // Add event listeners for the quantity buttons
    document.querySelectorAll('.quantity-increase').forEach((button, index) => {
      button.addEventListener('click', () => {
        cartItems[index].quantity++;
        this.updateLocalStorage(cartItems);
        this.renderCartContents();
        getTotalAmount(localStorage);
      });
    });

    document.querySelectorAll('.quantity-decrease').forEach((button, index) => {
      button.addEventListener('click', () => {
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity--;
        } else {
          cartItems.splice(index, 1);
        }
        this.updateLocalStorage(cartItems);
        this.renderCartContents();
        getTotalAmount(localStorage);
      });
    });
  }
  updateLocalStorage(cartItems) {
    localStorage.setItem(this.key, JSON.stringify(cartItems));
  }
}