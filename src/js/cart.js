import { getLocalStorage, loadHeaderFooter, handleResize, getTotalAmount } from './utils.mjs';
import ShoppingCart from './ShoppingCart.mjs';

loadHeaderFooter();

const cart = new ShoppingCart('so-cart', '.product-list');
cart.renderCartContents();

// Add the resize handler
handleResize(() => cart.renderCartContents());

// Get total to pay
getTotalAmount(localStorage)
// we getItem to show the number not the list of card and show on the bag
//document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity') || 0;
