body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #fffafc;
    color: #333;
}
header {
    background: #f06292;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}
nav a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}
main {
    padding: 30px;
}
.product img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    border-radius: 8px; /* tuỳ chỉnh bo góc nếu muốn */
    box-shadow: 0 2px 8px rgba(0,0,0,0.07); /* tuỳ chọn: hiệu ứng bóng */
}
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.product {
    border: 1px solid #ffe4ec;
    border-radius: 8px;
    padding: 15px;
    width: 220px;
    background: #fff;
    box-shadow: 0 2px 8px #f8bbd0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.product img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
}
.product h3 {
    margin: 10px 0 5px;
}
.product p {
    margin: 0 0 10px 0;
}
.product button {
    background: #f06292;
    color: #fff;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}
.product button:hover {:root {
    --primary: #ff4081;
    --secondary: #fff9fa;
    --bg-dark: #23272b;
    --bg-light: #fff;
    --text-dark: #212121;
    --text-light: #fff;
    --gray: #e0e0e0;
}

body {
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: var(--secondary);
    color: var(--text-dark);
}
.container {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
}
.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
header {
    background: var(--bg-dark);
}
.topbar {
    background: var(--primary);
    color: var(--text-light);
    padding: 6px 0;
    font-size: 15px;
}
.topbar .hotline {
    float: right;
}
.header-main {
    padding: 14px 0;
}
.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
    font-family: 'Segoe Script', cursive;
}
.logo-tag { color: #4caf50; font-size: 1.2rem; }
nav a {
    color: var(--text-light);
    text-decoration: none;
    margin: 0 16px;
    font-weight: 500;
    font-size: 1.08rem;
    transition: color 0.2s;
}
nav a:hover { color: var(--primary);}
.header-actions button {
    margin-left: 10px;
    padding: 6px 16px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    background: var(--primary);
    color: var(--text-light);
    cursor: pointer;
    transition: background 0.2s;
}
.header-actions .cart-btn { background: #fff; color: var(--primary);}
.header-actions .cart-btn:hover { background: var(--gray);}
.header-actions .login-btn:hover { background: #f06292;}
/* Banner */
.banner {
    background: linear-gradient(120deg, #ffe5ec 60%, #fff 100%);
    padding: 30px 0 18px 0;
}
.banner-content {
    flex-wrap: wrap;
}
.banner-text {
    flex: 1 1 340px;
    max-width: 400px;
}
.banner-text h1 {
    font-size: 2.5rem;
    color: var(--primary);
    margin: 0 0 8px 0;
}
.banner-text ul {
    margin: 14px 0 18px 18px;
    color: #333;
}
.banner-img {
    width: 350px;
    max-width: 90vw;
    border-radius: 12px;
    margin-left: 32px;
    box-shadow: 0 4px 24px #f8bbd0cc;
}
.primary-btn {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    padding: 10px 26px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
}
.primary-btn:hover { background: #e91e63; }
/* Search bar */
.searchbar {
    background: #fff;
    margin: 20px auto 0 auto;
    padding: 16px 14px;
    border-radius: 7px;
    box-shadow: 0 2px 12px #f8bbd044;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
}
.searchbar input, .searchbar select {
    padding: 8px 14px;
    font-size: 1.05rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    min-width: 120px;
}
.products {
    margin: 30px auto 0 auto;
}
.products h2 {
    color: var(--primary);
    font-size: 2rem;
    margin-bottom: 22px;
    text-align: center;
}
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
}
.product-card {
    background: #fff;
    border-radius: 9px;
    box-shadow: 0 2px 12px #f0629218;
    width: 240px;
    padding: 0 0 14px 0;
    text-align: center;
    transition: box-shadow 0.22s;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.product-card:hover {
    box-shadow: 0 6px 28px #f0629277;
    transform: translateY(-2px) scale(1.01);
}
.product-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}
.product-card .product-name {
    font-weight: bold;
    font-size: 1.1rem;
    color: #d81b60;
    margin: 12px 0 6px 0;
}
.product-card .product-price {
    color: #222;
    font-size: 1.04rem;
    margin-bottom: 10px;
}
.product-card .add-cart-btn {
    background: var(--primary);
    color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.18s;
}
.product-card .add-cart-btn:hover { background: #e91e63; }
footer {
    background: var(--bg-dark);
    color: #fff;
    margin-top: 30px;
    padding-top: 28px;
}
.footer-main {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    font-size: 1rem;
    line-height: 1.6;
}
.footer-main a {
    color: #f8bbd0;
    text-decoration: none;
}
.footer-main a:hover { text-decoration: underline;}
.footer-copyright {
    text-align: center;
    color: #ccc;
    margin-top: 14px;
    padding-bottom: 10px;
    font-size: 0.97rem;
}
/* Responsive */
@media (max-width: 900px) {
    .banner-content { flex-direction: column; align-items: center;}
    .banner-img { margin: 18px 0 0 0; }
    .header-main { flex-direction: column; gap: 12px;}
    nav { margin: 8px 0 0 0; }
}
@media (max-width: 600px) {
    .product-list { flex-direction: column; align-items: center;}
    .product-card { width: 98vw; max-width: 340px;}
    .footer-main { flex-direction: column; gap: 10px;}
    .container { width: 100%; padding: 0 4px;}
}
    background: #ec407a;
}
#cart {
    margin-top: 40px;
    border-top: 2px solid #f06292;
    padding-top: 30px;
}
#cart ul {
    list-style: none;
    padding: 0;
}
#cart li {
    margin-bottom: 5px;
}
footer {
    margin-top: 40px;
    text-align: center;
    background: #f8bbd0;
    color: #a80050;
    padding: 16px 0;
}
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
}


