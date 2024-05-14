//Import the header and footer for all pages
import {loadHeaderFooter} from './utils.mjs';

loadHeaderFooter();
// we getItem to show the number not the list of card and show on the bag
document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity');
