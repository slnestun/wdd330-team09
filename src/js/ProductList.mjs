import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
    // adding discpunt information:
    const discountAmount = product.SuggestedRetailPrice - product.FinalPrice
    const discountPercentage = ((discountAmount / product.SuggestedRetailPrice) * 100)
    // since I have all information, I return the html template based on one of the tents html
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__discount">${discountPercentage.toFixed(2)}% off</p>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);
    // render the list
    this.renderList(list);
   
  };

  //filterTentsNeeded(list){
    //const tentsId = ['344YJ','880RR','985PR','985RF']
    //return list.filter(product => tentsId.includes(product.Id))
  //}
  
  // render after doing the first stretch
  renderList(list) {
    //   const htmlStrings = list.map(productCardTemplate);
    //   this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }

}
