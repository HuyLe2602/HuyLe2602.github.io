// Danh sách sản phẩm mẫu
const products = [
    { id: 1, name: "Bó hoa hồng đỏ", price: 320000, img: "rose.jpg" },
    { id: 2, name: "Giỏ hoa hướng dương", price: 289000, img: "sunflower.jpg" },
    { id: 3, name: "Bó hoa baby trắng", price: 210000, img: "baby.jpg" },
    { id: 4, name: "Lẵng hoa cẩm chướng", price: 340000, img: "carnation.jpg" }
];

let cart = [];
let currentUser = null;

// Render sản phẩm
function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="price">${p.price.toLocaleString()} VNĐ</div>
            <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index >= 0) {
        cart[index].qty += 1;
    } else {
        const prod = products.find(p => p.id === productId);
        cart.push({ ...prod, qty: 1 });
    }
    renderCart();
    window.location.hash = "#cart";
}

function renderCart() {
    const cartDiv = document.getElementById('cart-content');
    if (cart.length === 0) {
        cartDiv.innerHTML = "<i>Giỏ hàng đang trống.</i>";
        return;
    }
    let html = `<table class="cart-table">
        <tr>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
        </tr>`;
    let total = 0;
    cart.forEach((item, idx) => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        html += `<tr>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()} VNĐ</td>
            <td>
                <input type="number" min="1" value="${item.qty}" class="cart-qty" onchange="updateQty(${item.id}, this.value)">
            </td>
            <td>${itemTotal.toLocaleString()} VNĐ</td>
            <td><span class="cart-remove" onclick="removeFromCart(${item.id})">X</span></td>
        </tr>`;
    });
    html += `</table>
        <div id="cart-total">Tổng cộng: ${total.toLocaleString()} VNĐ</div>
        <button onclick="showCheckout()">Thanh toán</button>`;
    cartDiv.innerHTML = html;
}

function updateQty(id, qty) {
    qty = Math.max(1, parseInt(qty));
    const index = cart.findIndex(item => item.id === id);
    if (index >= 0) {
        cart[index].qty = qty;
        renderCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function showCheckout() {
    if (!currentUser) {
        alert("Vui lòng đăng nhập để tiếp tục thanh toán!");
        showLogin();
        return;
    }
    document.getElementById('checkout-section').style.display = "block";
    window.location.hash = "#checkout-section";
}

document.getElementById('checkout-form').onsubmit = function(e) {
    e.preventDefault();
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }
    const name = this.name.value.trim();
    const phone = this.phone.value.trim();
    const address = this.address.value.trim();
    if (!name || !phone || !address) {
        alert("Vui lòng điền đủ thông tin!");
        return;
    }
    document.getElementById('order-result').innerText =
        `Cảm ơn ${name}! Đơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ giao hoa tới: ${address}.`;
    cart = [];
    renderCart();
    this.reset();
}

// Đăng nhập modal logic
const loginModal = document.getElementById("login-modal");
const loginLink = document.getElementById("login-link");
const closeLogin = document.getElementById("close-login");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const userGreeting = document.getElementById("user-greeting");
const logoutLink = document.getElementById("logout-link");

// Demo tài khoản: user: sv2025, pass: 123456
const users = [
    { username: "sv2025", password: "123456", name: "Sinh Viên 2025" },
    { username: "admin", password: "admin", name: "Admin" }
];

function showLogin() {
    loginModal.style.display = "block";
    loginError.textContent = "";
}
loginLink.onclick = function(e) {
    e.preventDefault();
    showLogin();
};
closeLogin.onclick = function() {
    loginModal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === loginModal) loginModal.style.display = "none";
};

loginForm.onsubmit = function(e) {
    e.preventDefault();
    const username = this.username.value.trim();
    const password = this.password.value;
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
        currentUser = found;
        loginModal.style.display = "none";
        userGreeting.textContent = `Xin chào, ${found.name}!`;
        loginLink.style.display = "none";
        logoutLink.style.display = "inline";
        loginError.textContent = "";
    } else {
        loginError.textContent = "Tài khoản hoặc mật khẩu không đúng!";
    }
}
logoutLink.onclick = function(e) {
    e.preventDefault();
    currentUser = null;
    userGreeting.textContent = "";
    loginLink.style.display = "inline";
    logoutLink.style.display = "none";
    alert("Bạn đã đăng xuất.");
};

window.onload = function() {
    renderProducts();
    renderCart();
};
