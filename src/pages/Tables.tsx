import { useState } from 'react';
import '../css/Tables.css'
interface Table {
    number: number;
    seats: number;
}

const tables: Table[] = [
    { number: 1, seats: 3 },
    { number: 2, seats: 4 },
    { number: 3, seats: 5 },
    { number: 4, seats: 3 },
    { number: 5, seats: 4 },
    { number: 6, seats: 5 },
    { number: 7, seats: 3 },
    { number: 8, seats: 4 },
    { number: 9, seats: 5 },
];

const Tables = () => {
    const [selectedTable, setSelectedTable] = useState<number | null>(null);

    return (
        <div className="content">
            <h3>Tables</h3>
            <div className="tables-grid">
                {tables.map((table) => (
                    <div
                        key={table.number}
                        className={`table-card ${selectedTable === table.number ? 'selected' : ''}`}
                        onClick={() => setSelectedTable(table.number)}
                    >
                        <span className="table-number">TABLE {table.number}</span>
                        <span className="table-seats">{table.seats} seats</span>
                    </div>
                ))}
            </div>
            {selectedTable && (
                <div className="table-details">
                    <h4>Table {selectedTable}</h4>
                    <p>Seats: {tables.find(t => t.number === selectedTable)?.seats}</p>
                    <div className="keypad">
                        <button className="btn plus">+</button>
                        <div className="display">123</div>
                        <button className="btn minus">-</button>
                        <button className="btn del">del</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tables;