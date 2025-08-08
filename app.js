// Danh sách sản phẩm mẫu
const products = [
    {
        name: "Bó hoa hồng đỏ",
        price: 320000,
        img: "rose.jpg"
    },
    {
        name: "Giỏ hoa hướng dương",
        price: 289000,
        img: "sunflower.jpg"
    },
    {
        name: "Bó hoa baby trắng",
        price: 210000,
        img: "baby.jpg"
    },
    {
        name: "Lẵng hoa cẩm chướng",
        price: 340000,
        img: "carnation.jpg"
    },
    {
        name: "Bó hoa tulip nhập khẩu",
        price: 570000,
        img: "tulip.jpg"
    },
    {
        name: "Bình hoa lan hồ điệp",
        price: 900000,
        img: "orchid.jpg"
    }
];
function renderProducts(list = products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    list.forEach(p => {
        const el = document.createElement('div');
        el.className = 'product-card';
        el.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.price.toLocaleString()} VNĐ</div>
            <button class="add-cart-btn" onclick="alert('Đã thêm vào giỏ!')">Thêm vào giỏ</button>
        `;
        productList.appendChild(el);
    });
}
window.onload = () => {
    renderProducts();
};
function filterProducts() {
    let kw = document.getElementById('search').value.trim().toLowerCase();
    let cat = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let filtered = products.filter(p => {
        let match = true;
        if (kw && !p.name.toLowerCase().includes(kw)) match = false;
        if (cat !== 'Tất cả' && !p.name.toLowerCase().includes(cat.toLowerCase())) match = false;
        if (price === 'Dưới 300k' && p.price >= 300000) match = false;
        if (price === '300k - 700k' && (p.price < 300000 || p.price > 700000)) match = false;
        if (price === 'Trên 700k' && p.price <= 700000) match = false;
        return match;
    });
    renderProducts(filtered);
}
