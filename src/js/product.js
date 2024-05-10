import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs'
import { getParams } from './utils.mjs';

const dataSource = new ProductData('tents');
const productId = getParams('product');

const product = new ProductDetails(productId, dataSource)
product.init();

// we getItem to show the number not the list of card and show on the bag
document.querySelector(".icon-cart").innerHTML = localStorage.getItem('so-cart-quantity');

// Testing getParams and variables
// console.log(product.productId);
// console.log(product.product);
// console.log(typeof product.product);

//Old addProductToCart now addToCart
// addProductToCart(product){
//   console.log('you clicked me')
//   //get the existing cart items from local storage
//   let existingCart = getLocalStorage('so-cart');
//   //If the existing cart is not an array (because is empty)
//   //Initialize it as an array empty
//   if (!Array.isArray(existingCart)){
//     existingCart = [];
//   }
//   // Add the product
//   existingCart.push(product)
//   setLocalStorage('so-cart', existingCart)
// };

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// add listener to Add to Cart button
// document.getElementById('addToCart').addEventListener('click', this.addToCart);
  
