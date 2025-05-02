// src/data/repositories/menuRepository.ts
import { menuService } from '../../api/services/menuService';

export const menuRepository = {
    fetchAll: () => menuService.getAll()
        .then(res => res.data),
};
