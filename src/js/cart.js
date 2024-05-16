import { getLocalStorage, loadHeaderFooter, handleResize} from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import cartQuantity from "./ProductDetails.mjs";
loadHeaderFooter();

const cart = new ShoppingCart('so-cart', '.product-list');
cart.renderCartContents();

// Add the resize handler
handleResize(() => cart.renderCartContents());

// Get the cart quantity from localStorage
document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity');

// we getItem to show the number not the list of card and show on the bag
//numberInCart = localStorage.getItem('so-cart-quantity');
//iconCero = document.querySelector('.icon-cart');
//iconCero.innerHTML = numberInCart

