import {loadHeaderFooter, getParams } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

loadHeaderFooter();

const category = getParams('category');
const dataSource = new ProductData();
const element = document.querySelector('.product-list');
const listing = new ProductList(category, dataSource, element)

document.addEventListener('DOMContentLoaded', function() {
    let titleElement = document.querySelector('.products > h2');
    let urlCategory = new URL(window.location.href);
    let searchCategory = new URLSearchParams(urlCategory.search)
    // saque capitalize para ver error
    let categoryTitle = searchCategory.get('category')
    titleElement.textContent = `Top Products: ${categoryTitle}`
  });

listing.init();

// we getItem to show the number not the list of card and show on the bag
document.querySelector('.icon-cart').innerHTML = localStorage.getItem('so-cart-quantity');
