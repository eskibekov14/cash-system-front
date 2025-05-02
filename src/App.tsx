import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Orders from './pages/Orders';
import './App.css';
import {useEffect, useState} from "react";


function App() {
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
        <Router>
            <div className="home-container">
                <Sidebar />
                <main className="main-content">
                    <Topbar />
                    <div className="routes-container">
                        <div className="clock">
                            <div className="time">{time}</div>
                            <div className="date">{date}</div>
                        </div>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/tables" element={<Tables />} />
                            <Route path="/orders" element={<Orders />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;