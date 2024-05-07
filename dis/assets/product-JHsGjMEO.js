import{g as s,s as d,a as i}from"./utils-80SC-tss.js";import{P as o}from"./ProductData-x6YJPJnt.js";function c(t){const a=(t.SuggestedRetailPrice-t.FinalPrice)/t.SuggestedRetailPrice*100;return`
  <section class="product-detail">
    <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Image}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product-card__discount">${a.toFixed(2)}% off</p>
    <p class="product"__color>${t.Colors[0].ColorName}</p>
    <p class="product__description">${t.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div>
  </section>`}class r{constructor(e,a){this.productId=e,this.product={},this.dataSource=a}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let e=s("so-cart");e||(e=[]),e.push(this.product),d("so-cart",e)}renderProductDetails(e){document.querySelector(e).insertAdjacentHTML("afterBegin",c(this.product))}}const n=new o("tents"),l=i("product"),u=new r(l,n);u.init();
