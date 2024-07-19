const express = require('express');
const app = express();
const path = require('path');

// Sample product data
const products = [
    { id: 1, name: 'White-Desk', price: 19.00, rating: 121, image: "https://i.ibb.co/cxrssvS/alexandru-acea-WBYxm-W4yuw-unsplash.jpg" },
    { id: 2, name: 'Black small Desk', price: 16.00, rating: 121, image: "https://i.ibb.co/JC18f2j/farhad-fallahzad-Vt-QMBG-Ljc0-unsplash.jpg" },
    // Add more products as needed
    { id: 3, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/0KvBfvV/pexels-arina-krasnikova-5710689.jpg" },
    { id: 4, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/x83LdNB/pexels-cup-of-couple-6177636.jpg" },
    { id: 5, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/t8Ct5Nq/pexels-elvis-1316342-2528116.jpg" },

    { id: 6, name: 'White-Desk', price: 19.00, rating: 121, image: "https://i.ibb.co/CnqSf4f/pexels-karolina-grabowska-8546651.jpg" },
    { id: 7, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/n1vx5tJ/pexels-pixabay-273671.jpg" },
    { id: 8, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/5XZRPQW/pexels-skylar-kang-6044830.jpg" },
    { id: 9, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/XVys2z1/pexels-skylar-kang-6368894.jpg" },
    { id: 10, name: 'Product 2', price: 19.00, rating: 121, image: "https://i.ibb.co/dQwmSBx/suhyeon-choi-y-X1-Rl-Zp-C8-ZU-unsplash.jpg" },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { products });
});

app.get('/product/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.render('product_detail', { product });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
