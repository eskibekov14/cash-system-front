// src/domain/useCases/fetchMenu.ts
import { menuRepository } from '../../data/repositories/menuRepository';
import { MenuItem } from '../models/MenuItem';

export function fetchMenu(): Promise<MenuItem[]> {
    return menuRepository.fetchAll();
}
