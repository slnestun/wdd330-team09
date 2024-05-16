import { getLocalStorage, loadHeaderFooter, handleResize} from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
loadHeaderFooter();

const cart = new ShoppingCart('so-cart', '.product-list');
cart.renderCartContents();

// Add the resize handler
handleResize(() => cart.renderCartContents());

// Get the cart quantity from localStorage
document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity')|| 0;;
