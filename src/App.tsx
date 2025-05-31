import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Orders from './pages/Orders';
import './App.css';
// import {useEffect, useState} from "react";
import {menuService} from "./api/services/menuService.ts";
import {MenuItem} from "./domain/models/MenuItem.ts";
import {useQuery} from "@tanstack/react-query";


function App() {
    // const [time, setTime] = useState('');
    // const [date, setDate] = useState('');

    const { data: menuItems = [], isLoading, isError } = useQuery<MenuItem[]>({
        queryKey: ['menuItems'],
        queryFn: () => menuService.getAll(), // или другой метод
    })
    console.log('sss',menuItems)
    if (isLoading) return <div>Загрузка меню...</div>
    if (isError) return <div>Ошибка загрузки меню</div>
    // useEffect(() => {
    //     const updateDateTime = () => {
    //         const now = new Date();
    //         setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    //         setDate(now.toLocaleDateString([], { day: '2-digit', month: 'long', year: 'numeric' }));
    //     };
    //     updateDateTime();
    //     const interval = setInterval(updateDateTime, 60000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <Router>
            <div className="home-container">
                <Sidebar />
                <main className="main-content">
                    <Topbar menuItems={menuItems} />
                    <div className="routes-container">
                        {/*<div className="clock">*/}
                        {/*    <div className="time">{time}</div>*/}
                        {/*    <div className="date">{date}</div>*/}
                        {/*</div>*/}
                        <Routes>
                            <Route path="/" element={<Dashboard menuItems={menuItems} />} />
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