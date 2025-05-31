import {Category} from "./Category.ts";

export interface MenuItem {
    /** Уникальный идентификатор */
    id: number;

    /** Название категории (EUROPEAN, SUSHI и т.д.) */
    name: string;

    basePrice: number;

    subCategory: Category;
}
