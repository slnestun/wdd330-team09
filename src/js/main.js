// Import the ProductData module
import ProductData from './ProductData';
import ProductList from './ProductList.mjs';

// Create an instance of the ProductData class
const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductList('Tents', dataSource, element);

listing.init();

// we getItem to show the number not the list of card and show on the bag
document.querySelector(".icon-cart").innerHTML = localStorage.getItem('so-cart-quantity');