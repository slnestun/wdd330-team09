// ProductList.mjs
import { renderListWithTemplate } from "./utils.mjs";

// template from the /index.html
function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=${product.id}">
        <img src="${product.image}" alt="Image of ${product.name}">
        <h3 class="card__brand">${product.brand}</h3>
        <h2 class="card__name">${product.name}</h2>
        <p class="product-card__price">$${product.price}</p>
      </a>
    </li>`;
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
      }

    async init() {
        // Fetch data from the data source
        const productList = await this.getData(); 
        
        // render the list
        this.renderList(productList);          
    }

    // method to filter tents
    filterTents(products) {
        // List of tent ids needed
        const tentIds = ['880RR', '985RF', '989CG', '985PR'];
        // Filter products based on tent ids
        return products.filter(product => tentIds.includes(product.Id));
    }

    // method to use the template
    renderList(productList) {
        renderListWithTemplate(productCardTemplate, this.listElement, productList);
    }

    // check if the data works o error appers
    async getData() {
        try {
            const response = await fetch(this.dataSource);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.products;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
};
