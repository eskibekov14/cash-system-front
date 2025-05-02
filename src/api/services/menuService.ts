// src/api/services/menuService.ts
import httpClient from '../httpClient';
import { MenuItem } from '../../domain/models/MenuItem';

export const menuService = {
    getAll: () => httpClient.get<MenuItem[]>('/menu-item'),
};
