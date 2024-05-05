import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product){
  return `
  <li class="product-card>
    <a href="product_pages/?product=${product.Id}">
    <img 
      src="${product.Image}"
      alt="Image of ${product.NameWithoutBrand}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">${product.FinalPrice}$</p>
    </a>
  </li>`
}

export default class ProductList{
  constructor(category, dataSource, listElement){

    //Since I will have more categories I am trying make it reusable
    //defining things when using classes will make it flexible
    this.category   = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    
  }
  async init(){
    //Since it is a promise I need to use await to resolve it
    const list = await this.dataSource.getData();
    const filteredList = this.filterTentsNeeded(list);
    this.renderList(filteredList);

  };
  filterTentsNeeded(list){
    const tentsId = ['344YJ','880RR','985PR','985RF']
    return list.filter(product => tentsId.includes(product.Id))
  }
  //using the function from utils:
  renderList(list){
    renderListWithTemplate(productCardTemplate, this.listElement, list)
  }
  //This is before the stretch challenge
  // We have also hard coded the position of the inserted HTML: afterbegin, 
  // this might not always be the desired case. We might also sometimes want to clear out the contents of the element first.
  // renderList(list){
  //   const htmlStrings = list.map(productCardTemplate);
  //   this.listElement.insertAdjacentHTML('afterBegin', htmlStrings.join(''))

  // }
}
