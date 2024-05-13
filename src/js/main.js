import {loadHeaderFooter} from './utils.mjs';

loadHeaderFooter();

// we getItem to show the number not the list of card and show on the bag
console.log('hola')
document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity') || 0;
