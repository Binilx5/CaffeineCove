import React, { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  icon: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface MenuProps {
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const Menu: React.FC<MenuProps> = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const menuCategories: MenuCategory[] = [
    {
      title: 'Coffee',
      items: [
        { name: 'Espresso', description: 'Bold, concentrated coffee shot with a smooth, intense flavor.', price: 'Rs. 170', icon: 'bi-cup-hot' },
        { name: 'Americano', description: 'Smooth espresso blended with hot water for a rich, mellow taste.', price: 'Rs. 180', icon: 'bi-cup-hot' },
        { name: 'Latte', description: 'Creamy blend of espresso and steamed milk with a velvety finish.', price: 'Rs. 220', icon: 'bi-cup-hot' },
        { name: 'Mocha', description: 'Espresso fused with rich chocolate and steamed milk, topped with a hint of sweetness.', price: 'Rs. 240', icon: 'bi-cup-hot' },
      ]
    },
    {
      title: 'Matcha',
      items: [
        { name: 'Matcha Latte', description: 'Smooth Japanese green tea blended with creamy steamed milk for an earthy, calming sip.', price: 'Rs. 240', icon: 'bi-cup-straw' },
        { name: 'Orange Matcha', description: 'Refreshing blend of earthy matcha and zesty orange for a vibrant, citrusy twist.', price: 'Rs. 260', icon: 'bi-cup-straw' },
        { name: 'Almond Matcha', description: 'Earthy matcha paired with nutty almond milk for a smooth, dairy-free delight.', price: 'Rs. 270', icon: 'bi-cup-straw' },
        { name: 'Sundowner Matcha', description: 'A soothing mix of matcha and tropical citrus notes, perfect for a refreshing sunset sip.', price: 'Rs. 280', icon: 'bi-cup-straw' },
      ]
    },
    {
      title: 'Specials',
      items: [
        { name: 'Biscoff Cream Latte', description: 'Espresso blended with creamy milk and sweet Biscoff spread, topped with a velvety cream finish.', price: 'Rs. 270', icon: 'bi-snow' },
        { name: 'Ruby Cove', description: 'A luscious fusion of ruby chocolate and creamy milk with a delicate berry-like sweetness.', price: 'Rs. 280', icon: 'bi-snow' },
        { name: 'Lavender Blossom', description: 'A calming blend of espresso, milk, and floral lavender for a soothing aromatic sip.', price: 'Rs. 290', icon: 'bi-snow' },
        { name: 'Mont Blanc', description: 'A decadent mix of espresso, white chocolate, and creamy milk with a silky smooth finish.', price: 'Rs. 320', icon: 'bi-snow' },
      ]
    },
    {
      title: 'Sandwiches',
      items: [
        { name: 'Classic Grilled Cheese', description: 'Crispy toasted bread with layers of perfectly melted cheese for a timeless favorite.', price: 'Rs. 220', icon: 'bi-grid-fill' },
        { name: 'Cheese Mushroom Toast', description: 'Golden toast topped with sautéed mushrooms and melted cheese for a rich, savory flavor.', price: 'Rs. 230', icon: 'bi-grid-fill' },
        { name: 'Cheesy Chipotle', description: 'Crispy toast layered with melted cheese and smoky chipotle sauce for a bold, zesty bite.', price: 'Rs. 250', icon: 'bi-grid-fill' },
        { name: 'Avacado Toast', description: 'Toasted sourdough topped with creamy smashed avocado, a hint of lemon, and seasoning.', price: 'Rs. 310', icon: 'bi-grid-fill' },
      ]
    },
    {
      title: 'Pizzas',
      items: [
        { name: 'Margherita Pizza', description: 'Stone-baked crust topped with fresh mozzarella, tangy tomato sauce, and fragrant basil.', price: 'Rs. 380', icon: 'bi-palette' },
        { name: 'Farmhouse Pizza', description: 'A hearty mix of fresh veggies, gooey mozzarella, and zesty tomato sauce on a crisp crust.', price: 'Rs. 400', icon: 'bi-palette' },
        { name: 'Peri Peri Pizza', description: 'Fiery peri peri sauce topped with spicy veggies, mozzarella, and a bold kick of flavor.', price: 'Rs. 420', icon: 'bi-palette' },
        { name: 'Mushroom Pizza', description: 'Oven-baked crust topped with melted mozzarella, rich tomato sauce, and hearty mushrooms.', price: 'Rs. 480', icon: 'bi-palette' },
      ]
    }
  ];

  return (
    <section id="menu" className="py-16 sm:py-20 bg-marble-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-coffee mb-3 sm:mb-4 md:mb-6">
              Our Menu
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-natural-wood mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
              Carefully crafted beverages and dishes made with the finest ingredients
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-6 sm:mb-8 md:mb-12 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-poppins font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  activeCategory === index
                    ? 'bg-natural-wood text-marble-white shadow-lg'
                    : 'bg-muted-sand text-coffee hover:bg-natural-wood hover:text-marble-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-0">
            {menuCategories[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="bg-soft-beige p-3 sm:p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 flex-1">
                    <div className="bg-natural-wood p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0">
                      <i className={`${item.icon} text-marble-white text-sm sm:text-lg md:text-xl`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-outfit font-semibold text-coffee text-sm sm:text-base md:text-lg mb-1 md:mb-2 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-coffee/70 font-poppins text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-outfit font-bold text-natural-wood text-sm sm:text-base md:text-lg ml-2 sm:ml-3 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <button 
              onClick={() => setCurrentPage && setCurrentPage('menu')}
              className="bg-coffee hover:bg-natural-wood text-marble-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-poppins font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="bi bi-arrow-right mr-2"></i>
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;