// src/hooks/useMenu.ts
import { useState, useEffect } from 'react';
import { fetchMenu } from '../domain/useCases/fetchMenu';
import { MenuItem } from '../domain/models/MenuItem';

export function useMenu(
    categoryId?: number,
    subCategoryId?: number
) {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchMenu(categoryId, subCategoryId)
            .then(setMenuItems)
            .finally(() => setLoading(false));
    }, [categoryId, subCategoryId]);

    return { menuItems, loading };
}
