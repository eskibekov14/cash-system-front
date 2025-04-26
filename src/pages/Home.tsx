import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaShoppingCart, FaTable, FaUtensils, FaCreditCard, FaCog } from 'react-icons/fa';
import '../css/Home.css';

const orders = [
    { name: 'Pizza Margarita', price: 1500 },
    { name: 'Coca-Cola 0.5', price: 700 },
];

const kitchenCategories = [
    { title: 'EUROPEAN', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF76alRkEHta49mZlMC2I03Zkouc1AZQPTA&s' },
    { title: 'CHINESE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6-LA3YRT0CN38pCesnXvsUO7qr1_RoGtqw&s' },
];

const foodCategories = [
    { title: 'SUSHI', img: 'https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=5760' },
    { title: 'PIZZA', img: 'https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg' },
    { title: 'BURGERS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s' },
    { title: 'SWEETS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JOH2-I87JCH45K_UyFr7W19ySPZei76-LA&s' },
    { title: 'SEA FOOD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyrNPYhhUB3UhsD2vpb5ePRpirDhjVUne2A&s' },
    { title: 'DRINKS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjJSg35uns6TQqok1SUlJW9WVa47jFmD33w&s' },
];

export default function Home() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            setDate(now.toLocaleDateString([], { day: '2-digit', month: 'long', year: 'numeric' }));
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <aside className="sidebar">
                <h2>MyRestaurant</h2>
                <nav className="header-nav">
                    <Link to="/"><FaTachometerAlt /> Dashboard</Link>
                    <Link to="/orders"><FaShoppingCart /> Orders</Link>
                    <Link to="/tables"><FaTable /> Tables</Link>
                    <Link to="/menu"><FaUtensils /> Menu</Link>
                    <Link to="/payments"><FaCreditCard /> Payments</Link>
                    <Link to="/setting"><FaCog /> Setting</Link>
                </nav>
            </aside>

            <main className="main-content">
                <div className="topbar">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="orders-panel">
                        {orders.map((order, idx) => (
                            <div key={idx} className="order-item">
                                <span className="order-name">{order.name}</span>
                                <span className="order-price">{order.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="keypad">
                        <button className="btn plus">+</button>
                        <div className="display">123</div>
                        <button className="btn minus">-</button>
                        <button className="btn del">del</button>
                    </div>
                </div>

                <div className="content">

                    <div className="clock">
                        <div className="time">{time}</div>
                        <div className="date">{date}</div>
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
                </div>
            </main>
        </div>
    );
}