// src/data/repositories/categoryRepository.ts
import { categoryService } from '../../api/services/categoryService';

export const categoryRepository = {
    fetchCategories: () => categoryService.getCategories()
        .then(res => res.data),
    fetchSubCategories:    () => categoryService.getSubCategories()
        .then(res => res.data),
};
