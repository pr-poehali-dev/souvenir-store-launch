
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import CatalogFilter, { FilterState } from '@/components/CatalogFilter';

const Catalog = () => {
  // Имитация данных для каталога
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Керамическая ваза "Весна"',
      price: 2500,
      imageUrl: 'https://images.unsplash.com/photo-1612293905607-1bcad9bad68a?q=80&w=500',
      description: 'Ручная работа из экологичных материалов. Идеально подойдет для украшения интерьера.',
      category: 'ceramics'
    },
    {
      id: 2,
      name: 'Деревянная шкатулка "Сокровище"',
      price: 3200,
      imageUrl: 'https://images.unsplash.com/photo-1577083552792-432dce3878a6?q=80&w=500',
      description: 'Резная шкатулка из натурального дерева с уникальным орнаментом.',
      category: 'wood'
    },
    {
      id: 3,
      name: 'Плетеная корзина "Уют"',
      price: 1800,
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500',
      description: 'Экологичная корзина ручной работы. Идеально для хранения мелочей.',
      category: 'eco'
    },
    {
      id: 4,
      name: 'Глиняный кувшин "Традиция"',
      price: 2800,
      imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500',
      description: 'Традиционный кувшин ручной работы из натуральной глины.',
      category: 'ceramics'
    },
    {
      id: 5,
      name: 'Вязаный плед "Тепло"',
      price: 4500,
      imageUrl: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=500',
      description: 'Мягкий плед ручной вязки из натуральной шерсти. Согреет в холодные вечера.',
      category: 'textile'
    },
    {
      id: 6,
      name: 'Витражная подвеска "Рассвет"',
      price: 1500,
      imageUrl: 'https://images.unsplash.com/photo-1619975102136-5a41df10b7e7?q=80&w=500',
      description: 'Яркая витражная подвеска ручной работы. Украсит любое окно.',
      category: 'glass'
    },
    {
      id: 7,
      name: 'Деревянная игрушка "Конь"',
      price: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1554830072-52d78d0af4e2?q=80&w=500',
      description: 'Экологичная игрушка из натурального дерева. Безопасна для детей.',
      category: 'wood'
    },
    {
      id: 8,
      name: 'Вышитая салфетка "Цветы"',
      price: 900,
      imageUrl: 'https://images.unsplash.com/photo-1615486511262-c858a177ab0a?q=80&w=500', 
      description: 'Нежная салфетка с ручной вышивкой цветочного орнамента.',
      category: 'textile'
    },
    {
      id: 9,
      name: 'Стеклянный подсвечник "Огонёк"',
      price: 1300,
      imageUrl: 'https://images.unsplash.com/photo-1576086949431-2e5f9e905814?q=80&w=500',
      description: 'Изящный подсвечник из цветного стекла. Создаст уютную атмосферу.',
      category: 'glass'
    },
  ].map(p => ({...p}));

  // Категории товаров
  const categories = [
    { id: 'ceramics', name: 'Керамика' },
    { id: 'wood', name: 'Изделия из дерева' },
    { id: 'textile', name: 'Текстиль' },
    { id: 'glass', name: 'Стекло и витражи' },
    { id: 'eco', name: 'Эко-товары' },
  ];

  // Находим минимальную и максимальную цену
  const priceMin = Math.min(...allProducts.map(p => p.price));
  const priceMax = Math.max(...allProducts.map(p => p.price));

  // Начальные фильтры
  const initialFilters: FilterState = {
    search: '',
    priceRange: [priceMin, priceMax],
    categories: [],
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  // Обработка изменения фильтров
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    
    // Применение фильтров к товарам
    const filtered = allProducts.filter(product => {
      // Фильтр по поиску
      const matchesSearch = newFilters.search === '' || 
        product.name.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(newFilters.search.toLowerCase());
      
      // Фильтр по цене
      const matchesPrice = 
        product.price >= newFilters.priceRange[0] && 
        product.price <= newFilters.priceRange[1];
      
      // Фильтр по категориям
      const matchesCategory = 
        newFilters.categories.length === 0 || 
        (product.category && newFilters.categories.includes(product.category));
      
      return matchesSearch && matchesPrice && matchesCategory;
    });
    
    setFilteredProducts(filtered);
  };

  // Функция добавления товара в корзину
  const handleAddToCart = (product: Product) => {
    console.log('Добавлен товар в корзину:', product);
    // Здесь будет логика добавления в корзину
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Каталог сувениров</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Фильтры (боковая панель) */}
            <div className="md:col-span-1">
              <CatalogFilter 
                onFilterChange={handleFilterChange}
                initialFilters={initialFilters}
                categories={categories}
                priceMin={priceMin}
                priceMax={priceMax}
              />
            </div>
            
            {/* Товары */}
            <div className="md:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-600">
                    По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={handleAddToCart} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
