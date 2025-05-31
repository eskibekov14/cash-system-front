// src/data/repositories/menuRepository.ts
import { menuService } from '../../api/services/menuService';
import { MenuItem } from '../../domain/models/MenuItem.ts';

export const menuRepository = {
    fetchAll: (): Promise<MenuItem[]> => menuService.getAll(),

    fetchByCategory: (categoryId: number, subCategoryId?: number): Promise<MenuItem[]> =>
        menuService.getByCategory(categoryId, subCategoryId),
};
