// src/domain/useCases/fetchMenu.ts
import { menuRepository } from '../../data/repositories/menuRepository';
import { MenuItem } from '../models/MenuItem';

export function fetchMenu(
    categoryId?: number,
    subCategoryId?: number
): Promise<MenuItem[]> {
    if (categoryId != null) {
        return menuRepository.fetchByCategory(categoryId, subCategoryId);
    }
    return menuRepository.fetchAll();
}
