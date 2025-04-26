import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaShoppingCart, FaTable, FaUtensils, FaCreditCard, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
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
    );
};

export default Sidebar;