import { createContext, useContext, useState, ReactNode } from 'react'
import type { MenuItem } from '../domain/models/MenuItem.ts'

export interface OrderItem {
    id: number
    name: string
    quantity: number
}

export interface OrderContextValue {
    items: OrderItem[]
    addItem: (item: MenuItem) => void
    decreaseItemQuantity: (id: number) => void
    removeItem: (id: number) => void
    clear: () => void
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined)

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        setItems(prev => {
            const found = prev.find(i => i.id === item.id)
            if (found) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            }
            return [...prev, { id: item.id, name: item.name, quantity: 1 }]
        })
    }

    const decreaseItemQuantity = (id: number) => {
        setItems(prev => {
            const found = prev.find(i => i.id === id)
            if (!found) return prev
            if (found.quantity > 1) {
                return prev.map(i =>
                    i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                )
            }
            return prev.filter(i => i.id !== id)
        })
    }

    const removeItem = (id: number) => {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    const clear = () => setItems([])

    return (
        <OrderContext.Provider value={{ items, addItem, removeItem,decreaseItemQuantity, clear }}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = () => {
    const ctx = useContext(OrderContext)
    if (!ctx) throw new Error('useOrder must be used within OrderProvider')
    return ctx
}