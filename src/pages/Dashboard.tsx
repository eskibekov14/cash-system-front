import { useState } from 'react';

interface Order {
    name: string;
    price: number;
}

interface Category {
    title: string;
    img: string;
}

const orders: Order[] = [
    { name: 'Pizza Margarita', price: 1500 },
    { name: 'Coca-Cola 0.5', price: 700 },
];

const kitchenCategories: Category[] = [
    { title: 'EUROPEAN', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF76alRkEHta49mZlMC2I03Zkouc1AZQPTA&s' },
    { title: 'CHINESE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF76alRkEHta49mZlMC2I03Zkouc1AZQPTA&s' },
];

const foodCategories: Category[] = [
    { title: 'SUSHI', img: 'https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=5760' },
    { title: 'PIZZA', img: 'https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg' },
    { title: 'BURGERS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s' },
    { title: 'SWEETS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JOH2-I87JCH45K_UyFr7W19ySPZei76-LA&s' },
    { title: 'SEA FOOD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyrNPYhhUB3UhsD2vpb5ePRpirDhjVUne2A&s'},
    { title: 'DRINKS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjJSg35uns6TQqok1SUlJW9WVa47jFmD33w&s'},
];

const Dashboard = () => {
    const [displayValue] = useState('123');

    return (
        <div className="content">
            <div className="orders-panel">
                {orders.map((order, idx) => (
                    <div key={idx} className="order-item">
                        <span className="order-name">{order.name}</span>
                        <span className="order-price">{order.price}</span>
                    </div>
                ))}
            </div>
            <section className="categories">
                <h3>Kitchen Categories</h3>
                <div className="category-grid">
                    {kitchenCategories.map((cat, idx) => (
                        <div key={idx} className="category-card">
                            <img src={cat.img} alt={cat.title} />
                            <span>{cat.title}</span>
                        </div>
                    ))}
                </div>
                <h3>Food Categories</h3>
                <div className="category-grid">
                    {foodCategories.map((cat, idx) => (
                        <div key={idx} className="category-card">
                            <img src={cat.img} alt={cat.title} />
                            <span>{cat.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <div className="keypad">
                <button className="btn plus">+</button>
                <div className="display">{displayValue}</div>
                <button className="btn minus">-</button>
                <button className="btn del">del</button>
            </div>
        </div>
    );
};

export default Dashboard;