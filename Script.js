let index = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(i) {
  items.forEach((item, idx) => {
    item.classList.toggle('active', idx === i);
  });
}

function prev() {
  index = (index - 1 + items.length) % items.length;
  showItem(index);
}

function next() {
  index = (index + 1) % items.length;
  showItem(index);
}

let cart = [];
let total = 0;

function addToCart(product, price) {
cart.push({ product, price });
const cartList = document.getElementById('cart');
const item = document.createElement('li');
item.textContent = `${product} - $${price}`;
cartList.appendChild(item);

total += price;
document.getElementById('total').textContent = total;
}





