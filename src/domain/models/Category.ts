export interface Category {
    /** Уникальный идентификатор */
    id: number;

    /** Название категории (EUROPEAN, SUSHI и т.д.) */
    name: string;

    subCategories: Category[];
}