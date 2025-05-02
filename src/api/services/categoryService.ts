// src/api/services/categoryService.ts
import httpClient from '../httpClient';
import { Category } from '../../domain/models/Category';

export const categoryService = {
    getCategories: () => httpClient.get<Category[]>('/category'),
    getSubCategories:    () => httpClient.get<Category[]>('/category/sub'),
};
