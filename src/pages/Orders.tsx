import '../css/Orders.css'

interface Order {
    id: number;
    table: number;
    items: string[];
    total: number;
}

const ordersList: Order[] = [
    { id: 1, table: 2, items: ['Pizza Margarita', 'Coca-Cola 0.5'], total: 2200 },
    { id: 2, table: 5, items: ['Sushi Set', 'Green Tea'], total: 3000 },
];

const Orders = () => {
    return (
        <div className="content">
            <h3>Orders</h3>
            <div className="orders-list">
                {ordersList.map((order) => (
                    <div key={order.id} className="order-card">
                        <span className="order-table">Table {order.table}</span>
                        <ul className="order-items">
                            {order.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <span className="order-total">Total: {order.total}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;