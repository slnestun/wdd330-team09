//This script file will contain the code to dynamically produce the product detail pages.
import { setLocalStorage } from './utils.mjs';

function productDetailsTemplate(product){
  // since I have all information, I return the html template based on one of the tents html
  return `
  <section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">${product.FinalPrice}</p>
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
    //Now I do not receive argumnets, therefore I will only receive the object, this.product.
    setLocalStorage('so-cart', this.product)

 };
 renderProductDetails(selector){
  const element = document.querySelector(selector)
  element.insertAdjacentHTML('afterBegin', productDetailsTemplate(this.product));
 }
}
