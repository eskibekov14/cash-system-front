import { useState, useEffect } from 'react';

const Topbar = () => {
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
        <div className="topbar">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="clock">
                <div className="time">{time}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    );
};

export default Topbar;