import '../css/Dashboard.css'

import { useCategories } from '../hooks/useCategories';
import { useMenu } from '../hooks/useMenu';


const Dashboard = () => {
    const { category,activeCategory, subCategories,activeSubCategory, handleCategorySelect,handleSubCategorySelect, loading: catLoading } = useCategories();
    const { menuItems, loading: menuLoading } = useMenu(
        activeCategory?.id,
        activeSubCategory?.id
    );
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
                                className={cat.id === activeCategory?.id ? 'active' : ''}
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
                                className={subCat.id === activeSubCategory?.id ? 'active' : ''}
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
                    {menuItems.map(item => (
                        <div key={item.id} className="menu-card">
                            <div className="menu-content">
                                <div className="menu-header">
                                    <h3 className="menu-title">{item.name}</h3>
                                    <span className="menu-category">{item.subCategory.name}</span>
                                    <span className="menu-price">${item.basePrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;