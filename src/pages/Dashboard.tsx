import '../css/Dashboard.css'

import { useCategories } from '../hooks/useCategories';
import { useMenu } from '../hooks/useMenu';
import {useOrder} from "../context/OrderContext.tsx";
import {MenuItem} from "../domain/models/MenuItem.ts";

interface DashboardProps {
    menuItems: MenuItem[]
}

const Dashboard: React.FC<DashboardProps> = () => {
    const { category, activeCategory, subCategories, activeSubCategory, handleCategorySelect, handleSubCategorySelect, loading: catLoading } = useCategories();
    const { menuItems: filteredMenuItems, loading: menuLoading } = useMenu(
        activeCategory?.id,
        activeSubCategory?.id
    );

    const { addItem } = useOrder()
    if(catLoading || menuLoading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className="dashboard-content">
            <section className="categories">
                <div className="category-column">
                    <h2 className="section-title">Kitchen Categories</h2>
                    <div className="category-grid">
                        {category.map((cat) => (
                            <button
                                key={cat.id}
                                className={`subcategory-button ${cat.id === activeCategory?.id ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(cat)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="category-column">
                    <h2 className="section-title">Food Categories</h2>
                    <div className="category-grid">
                        {subCategories.map((subCat) => (
                            <button
                                key={subCat.id}
                                className={`subcategory-button ${subCat.id === activeSubCategory?.id ? 'active' : ''}`}
                                onClick={() => handleSubCategorySelect(subCat)}
                            >
                                {subCat.name}
                            </button>
                        ))}
                    </div>
                </div>

            </section>

            <section className="menu-section">
                <h2 className="section-title">Our Menu</h2>
                <div className="menu-grid">
                    {filteredMenuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => addItem(item)}
                        >
                            {item.name} - {item.subCategory.name} -{item.basePrice}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;