const addToCartBtn = document.getElementById('add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

let cart = [];
let total = 0;

addToCartBtn.addEventListener('click', () => {
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = 2499;
  const name = "Wireless Headphones";

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  updateCart();
});

function updateCart() {
  cartItems.innerHTML = "";
  total = 0;

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`;
    cartItems.appendChild(div);
    total += item.price * item.quantity;
  });

  cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  totalDisplay.textContent = `Total: ₹${total}`;
}
