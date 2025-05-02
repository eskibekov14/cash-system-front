// src/domain/useCases/fetchCategories.ts
import { categoryRepository } from '../../data/repositories/categoryRepository';
import { Category } from '../models/Category';

export async function fetchCategories(): Promise<{ category: Category[]; }> {
    const categories = await categoryRepository.fetchCategories()

    const allSubCategories = new Map<number, Category>();

    categories.forEach( cat => {
        (cat.subCategories || []).forEach( sub => {
            allSubCategories.set(sub.id, sub);
        })
    })
    const uniqueSubCategories = Array.from(allSubCategories.values());
    const allCategory: Category = {
        id: 0,
        name: 'All',
        subCategories: uniqueSubCategories
    }

    return { category: [allCategory, ...categories]};
}
