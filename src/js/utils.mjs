//any functionality that needs to be shared between modules can be placed in a utility module.
// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}
export function getParams(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param)
  // console.log(product);
  return product;
}
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = 'afterbegin',
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

export function renderWithTemplate(template,parentElement,data,callback) 
{
  parentElement.insertAdjacentHTML('afterbegin', template)
  // if clear is true we need to clear out the contents of the parent.
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

// function to dynamically load the header and footer into a page
  export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');
    const headerElement = document.querySelector('#main-header');
    const footerTemplate = await loadTemplate('../partials/footer.html');
    const footerElement = document.querySelector('#main-footer');

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
    updateCartIcon()
}

//function to capitalize Strings
export function capitalize(text) {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return firstLetter.toUpperCase() + rest;
}

//Function to change the image size based on screen view
export function selectProductImage(product) {
  const width = window.innerWidth;
  if (product.Images) { // We verify which product.Images is defined
    if (width <= 600) {
      return product.Images.PrimarySmall;
    } else if (width <= 900) {
      return product.Images.PrimaryMedium;
    } else if (width <= 1200) {
      return product.Images.PrimaryLarge;
    } else {
      return product.Images.PrimaryExtraLarge;
    }
  } else {
    return ''; // Return the default value if product.Images isn´t defined
  }
}


//event handler to change image when scree size change
export function handleResize(callback) {
  window.addEventListener('resize', callback);
}

export function getTotalAmount(localStorage){
  //getting from so-cart all products
  const cartData = localStorage.getItem('so-cart')

  //parsing the json string into an object
  const cartItems = JSON.parse(cartData)

  let totalPrice = 0;

  //Use forEach to add each price and multiply by its quantity
  cartItems.forEach(item => {
    totalPrice += item.FinalPrice * item.quantity; 
  });
  // console.log(`Hola Perro ${totalPrice}`)

  document.getElementById('total-price').textContent = `USD ${totalPrice.toFixed(2)}`;
}

export function updateCartIcon() {
  return new Promise((resolve, reject) => {
    const cartItems = getLocalStorage('so-cart');
    let totalQuantity = 0;
    if (cartItems) {
      totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    }
    const cartIconElement = document.querySelector('.icon-cart');
    if (cartIconElement) {
      cartIconElement.innerHTML = totalQuantity;
      resolve();
    } else {
      reject('Element with class .icon-cart not found');
    }
  });
}