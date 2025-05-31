import React, {useState} from 'react'
import { useOrder } from '../context/OrderContext'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import {OrderResponse} from "../domain/models/OrderResponse.ts";
import {OrderPayload} from "../domain/models/OrderPayload.ts";
import {orderService} from "../api/services/orderService.ts";
import {MenuItem} from "../domain/models/MenuItem.ts";

type TopbarProps = {
    menuItems: MenuItem[]
}

const Topbar: React.FC<TopbarProps> = ({ menuItems }) => {
    const {items, addItem, decreaseItemQuantity, clear } = useOrder()

    const { mutate, isPending } = useMutation<
        OrderResponse,
        AxiosError,
        OrderPayload
    >({
        mutationFn: payload => orderService.createOrder(payload),
        onSuccess: () => {
            clear()
            // optionally show toast
        },
        onError: err => {
            console.error(err)
            // optionally show error toast
        },
    })
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null)

    const orderDetails = items.map(item => {
        const fullItem = menuItems.find(menu => menu.id === item.id)
        console.log(fullItem);
        console.log(menuItems);
        console.log(item);
        return {

            ...item,
            name: fullItem?.name || 'Unknown',
            price: fullItem?.basePrice || 0,
        }
    })
    const totalCount = orderDetails.reduce((sum, i) => sum + i.quantity, 0)
    const totalPrice = orderDetails.reduce((sum, i) => sum + i.price * i.quantity, 0)



    const handlePlus = () => {
        const item = menuItems.find(i => i.id === selectedItemId)
        if (item) {
            addItem(item)
        }
    }

    const handleMinus = () => {
        if (selectedItemId !== null) {
            decreaseItemQuantity(selectedItemId)
        }
    }
    const handleClear = () => clear()

    const handleCheckout = () => {
        if (items.length === 0) return
        const payload: OrderPayload = { items }
        mutate(payload)
    }

    return (
        <div className="topbar">
            {/* existing search-bar & clock markup unchanged */}
            <div className="order-preview">
                {orderDetails.map(item => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        className={`menu-item-details ${item.id === selectedItemId ? 'selected' : ''}`}
                    >
                        {item.name} x {item.quantity}
                    </div>

                ))}
            </div>
            <div className="keypad">
                <button className="btn minus" onClick={handleMinus} disabled={isPending}>-</button>
                <button className="btn plus" onClick={handlePlus} disabled={isPending}>+</button>
                <button className="btn del" onClick={handleClear} disabled={isPending}>del</button>
                <div className="display" onClick={handleCheckout}>
                    🛒 {totalCount} шт. / {totalPrice}₸
                </div>
            </div>
        </div>
    )
}

export default Topbar