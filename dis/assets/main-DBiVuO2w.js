import{r}from"./utils-80SC-tss.js";import{P as i}from"./ProductData-x6YJPJnt.js";function n(t){return`<li class="product-card">
  <a href="product_pages/index.html?product=${t.Id}">
  <img
    src="${t.Image}"
    alt="Image of ${t.Name}"
  />
  <h3 class="card__brand">${t.Brand.Name}</h3>
  <h2 class="card__name">${t.Name}</h2>
  <p class="product-card__price">$${t.FinalPrice}</p></a>
</li>`}class c{constructor(e,s,a){this.category=e,this.dataSource=s,this.listElement=a}async init(){const e=await this.dataSource.getData(),s=this.filterTentsNeeded(e);this.renderList(s)}filterTentsNeeded(e){const s=["344YJ","880RR","985PR","985RF"];return e.filter(a=>s.includes(a.Id))}renderList(e){r(n,this.listElement,e)}}const d=new i("tents"),l=document.querySelector(".product-list"),o=new c("Tents",d,l);o.init();
