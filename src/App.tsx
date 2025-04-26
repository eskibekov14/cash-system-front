import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Orders from './pages/Orders';
import './css/Home.css';

function App() {
    return (
        <Router>
            <div className="home-container">
                <Sidebar />
                <main className="main-content">
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tables" element={<Tables />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;