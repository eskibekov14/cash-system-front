// src/hooks/useCategories.ts
import { useState, useEffect } from 'react';
import { fetchCategories } from '../domain/useCases/fetchCategories';
import { Category } from '../domain/models/Category';

export function useCategories() {
    const [category, setCategories] = useState<Category[]>([]);
    const [activeCategory, setActiveCategory] = useState<Category | null>(null);
    const [visibleSubCategory, setVisibleSubCategories] = useState<Category[]>([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        fetchCategories()
            .then(({ category }) => {
                setCategories(category);
                setActiveCategory(category[0]);
                setVisibleSubCategories(category[0].subCategories);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleCategorySelect = (category: Category) => {
        setActiveCategory(category);
        setVisibleSubCategories(category.subCategories || []);
    };
    return { category,activeCategory, visibleSubCategory, handleCategorySelect, loading };
}
