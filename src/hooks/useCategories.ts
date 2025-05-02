// src/hooks/useCategories.ts
import { useState, useEffect } from 'react';
import { fetchCategories } from '../domain/useCases/fetchCategories';
import { Category } from '../domain/models/Category';

export function useCategories() {
    const [category, setCategories] = useState<Category[]>([]);
    const [activeCategory, setActiveCategory] = useState<Category | null>(null);
    const [subCategories, setSubCategories] = useState<Category[]>([]);
    const [activeSubCategory, setActiveSubCategory] = useState<Category | null>(null);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        fetchCategories()
            .then(({ category }) => {
                setCategories(category);
                setActiveCategory(category[0]);
                setSubCategories(category[0].subCategories);
                setActiveSubCategory(null);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleCategorySelect = (category: Category) => {
        setActiveCategory(category);
        setSubCategories(category.subCategories || []);
        setActiveSubCategory(null)
    };
    const handleSubCategorySelect = (sub: Category) => {
        setActiveSubCategory(sub);
    };

    return { category,activeCategory, subCategories,activeSubCategory, handleCategorySelect,handleSubCategorySelect, loading };
}
