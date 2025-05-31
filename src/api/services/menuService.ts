// src/api/services/menuService.ts
import httpClient from '../httpClient';
import { MenuItem } from '../../domain/models/MenuItem';
export const menuService = {
    getAll: async (): Promise<MenuItem[]> => {
        const { data } = await httpClient.get<MenuItem[]>('/menu-item');
        return data;
    },

    getByCategory: async (categoryId: number, subCategoryId?: number): Promise<MenuItem[]> => {
        const params: Record<string, number> = { categoryId };
        if (subCategoryId != null) params.subCategoryId = subCategoryId;

        const { data } = await httpClient.get<MenuItem[]>('/menu-item', { params });
        return data;
    },
};
