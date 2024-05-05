//Our first task is to read the product data out of the tents.json file (our current data source).
// Import the ProductData module into main.js and create an instance of it.
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData('tents')
const element = document.querySelector('.product-list')
const productList = new ProductList('tents', dataSource, element)

console.log('productList.listElement')
console.log(productList.listElement)

productList.init()
