import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import {loadHeaderFooter} from './utils.mjs';

loadHeaderFooter();
const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductList('Tents', dataSource, element);

listing.init();

// we getItem to show the number not the list of card and show on the bag
document.querySelector(".icon-cart").innerHTML = localStorage.getItem('so-cart-quantity') || 0;