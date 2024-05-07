// Import the ProductData module
import ProductData from './ProductData';
import ProductListing from './ProductList.mjs';

// Create an instance of the ProductData class
const dataSource = new ProductData('tents');
const productListElement = document.querySelector('product-list');
const productList = new ProductListing('Tents', dataSource , productListElement);

productList.init();
