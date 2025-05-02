// src/data/repositories/menuRepository.ts
import { menuService } from '../../api/services/menuService';
import {MenuItem} from "../../domain/models/MenuItem.ts";

export const menuRepository = {
    fetchAll: () => menuService.getAll()
        .then(res => res.data),
    fetchByCategory: (categoryId: number, subCategoryId?: number): Promise<MenuItem[]> =>
        menuService.getByCategory(categoryId, subCategoryId).then(res => res.data)
};
