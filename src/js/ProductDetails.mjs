//This script file will contain the code to dynamically produce the product detail pages.
import { setLocalStorage, getLocalStorage } from './utils.mjs';

function productDetailsTemplate(product){
    // adding discpunt information:
    const discountAmount = product.SuggestedRetailPrice - product.FinalPrice
    const discountPercentage = ((discountAmount / product.SuggestedRetailPrice) * 100)
  // since I have all information, I return the html template based on one of the tents html
  return `
  <section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product-card__discount">${discountPercentage.toFixed(2)}% off</p>
    <p class="product"__color>${product.Colors[0].ColorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`
}
export default class ProductDetails{
  constructor(productId, dataSource){
    this.productId  = productId;
    this.product = {}; 
    this.dataSource = dataSource;
  }
  async init(){
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML, Uso main que sera el selector
    this.renderProductDetails('main')
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this));
  };
  addToCart(){
    let cartItems = getLocalStorage('so-cart');
    //Now I do not receive argumnets, therefore I will only receive the object, this.product.
    if (!cartItems) {
      cartItems = [];
    }

    const existingItem = cartItems.find(item => item.Id === this.product.Id);
    //then for the activity, we sum 1 each time press add (in any product)
    // and call the funcion to sum on the same product and be in the cart after
    // and if it doesn't there then sum a new one 
    if (existingItem) {
      existingItem.quantity += 1;
    } 
    else {
      this.product.quantity = 1;
      cartItems.push(this.product);
    }

    setLocalStorage('so-cart', cartItems);

    //we call the funtion to sum to the cart the number 
    //and the product in general to show the total items
    updateCartQuantity();

    //we call the funtion to save the cart number
    saveCartQuantity(cartItems);

 };
 renderProductDetails(selector){
  const element = document.querySelector(selector)
  element.insertAdjacentHTML('afterBegin', productDetailsTemplate(this.product));
 }
}

// We this funcion we change the icon number each time press
// we call the id of html and input the new one number in that
function updateCartQuantity() {
  const iconCartSpan = document.querySelector('.icon-cart');
  if (iconCartSpan) {
    let cartItems = getLocalStorage('so-cart');
    let totalQuantity = 0;
  if (cartItems) {
      totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    }
    iconCartSpan.innerHTML = totalQuantity;
  }
}

// with this funtion we save the number to stay 
function saveCartQuantity(cartItems) {
  // we get again the total in cart
  const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  // and we save in the local storage
  localStorage.setItem('so-cart-quantity', totalQuantity);
}
