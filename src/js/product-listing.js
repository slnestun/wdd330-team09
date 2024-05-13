import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParams } from './utils.mjs';

// console.log('Soy product Listing')
loadHeaderFooter();
const category = getParams('category');
const dataSource = new ProductData();
const element = document.querySelector('.product-list');
const listing = new ProductList(category, dataSource, element);

listing.init();
// we getItem to show the number not the list of card and show on the bag
document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity') || 0;
