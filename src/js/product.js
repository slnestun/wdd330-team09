import { getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {

  //get the existing cart items from local storage
  let existingCart = getLocalStorage('so-cart');
  //If the existing cart is not an array (because is empty)
  //Initialize it as an array empty
  if (!Array.isArray(existingCart)){
    existingCart = [];
  }
  // Add the product
  existingCart.push(product)
  setLocalStorage('so-cart', existingCart)
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
