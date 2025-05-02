// src/hooks/useMenu.ts
import { useState, useEffect } from 'react';
import { fetchMenu } from '../domain/useCases/fetchMenu';
import { MenuItem } from '../domain/models/MenuItem';

export function useMenu() {
    const [menuItems, setItems]  = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMenu()
            .then(setItems)
            .finally(() => setLoading(false));
    }, []);

    return { menuItems, loading };
}
