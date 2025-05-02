// src/api/services/menuService.ts
import httpClient from '../httpClient';
import { MenuItem } from '../../domain/models/MenuItem';

export const menuService = {
    getAll: () => httpClient.get<MenuItem[]>('/menu-item'),

    getByCategory: (categoryId: number, subCategoryId?: number) => {
        const params: Record<string, number> = { categoryId };
        if (subCategoryId != null) params.subCategoryId = subCategoryId;
        return httpClient.get<MenuItem[]>('/menu-item', { params });
    }
};
