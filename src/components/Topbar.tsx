import { useState } from 'react';

const Topbar = () => {
    const [displayValue] = useState('123');


    return (
        <div className="topbar">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="clock">

            </div>
            <div className="keypad">
                <button className="btn minus">-</button>
                <button className="btn plus">+</button>
                <button className="btn del">del</button>
                <div className="display">{displayValue}</div>
            </div>
        </div>
    );
};

export default Topbar;