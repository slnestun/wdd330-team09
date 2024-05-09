import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { getParams } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// we getItem to show the number not the list of card and show on the bag
document.querySelector(".icon-cart").innerHTML = localStorage.getItem('so-cart-quantity');
