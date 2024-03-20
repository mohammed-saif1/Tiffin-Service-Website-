const menu = [{
        name: 'Chicken Biryani',
        price: 120,
        customizations: ['No onions', 'Extra spicy', 'With raita']
    },
    {
        name: 'Palak Paneer',
        price: 100,
        customizations: ['No garlic', 'Extra creamy', 'With naan']
    },
    {
        name: 'Veg Fried Rice',
        price: 80,
        customizations: ['No eggs', 'Extra soy sauce', 'With manchurian']
    }
];

const orders = [];

const reviewList = document.getElementById('review-list');

function addReview(review) {
    const li = document.createElement('li');
    li.textContent = `${review.username}: ${review.rating} stars - ${review.review}`;
    reviewList.appendChild(li);
}

function submitReview(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    addReview({ username, rating, review });
}

document.getElementById('review-form').addEventListener('submit', submitReview);

const menuList = document.getElementById('menu-list');

function addMenuItem(menuItem) {
    const li = document.createElement('li');
    li.textContent = `${menuItem.name}: ${menuItem.price} rupees`;
    menuList.appendChild(li);
}

menu.forEach(addMenuItem);

const orderForm = document.getElementById('order-form');
const dishSelect = document.getElementById('dish');
const customizationInput = document.getElementById('customization');
const orderList = document.getElementById('order-list');

function addOrder(order) {
    const li = document.createElement('li');
    li.textContent = `${order.menuItem.name} - ${order.customization}: ${order.menuItem.price} rupees`;
    orderList.appendChild(li);
}

function submitOrder(event) {
    event.preventDefault();
    const menuItemName = dishSelect.value;
    const menuItem = menu.find(m => m.name === menuItemName);
    const customization = customizationInput.value;
    const order = { menuItem, customization };
    orders.push(order);
    addOrder(order);
}

orderForm.addEventListener('submit', submitOrder);

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        document.getElementById('login').hidden = true;
        document.getElementById('menu').hidden = false;
        document.getElementById('orders').hidden = false;
        document.getElementById('reviews').hidden = false;
    }
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        alert('Username already taken!');
    } else {
        alert('Registration successful!');
    }
}

loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);