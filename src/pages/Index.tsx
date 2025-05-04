
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';

const Index = () => {
  // Имитация данных популярных товаров
  const [featuredProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Керамическая ваза "Весна"',
      price: 2500,
      imageUrl: 'https://images.unsplash.com/photo-1612293905607-1bcad9bad68a?q=80&w=500',
      description: 'Ручная работа из экологичных материалов. Идеально подойдет для украшения интерьера.'
    },
    {
      id: 2,
      name: 'Деревянная шкатулка "Сокровище"',
      price: 3200,
      imageUrl: 'https://images.unsplash.com/photo-1577083552792-432dce3878a6?q=80&w=500',
      description: 'Резная шкатулка из натурального дерева с уникальным орнаментом.'
    },
    {
      id: 3,
      name: 'Плетеная корзина "Уют"',
      price: 1800,
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500',
      description: 'Экологичная корзина ручной работы. Идеально для хранения мелочей.'
    },
  ]);

  // Функция добавления товара в корзину (пока просто заглушка)
  const handleAddToCart = (product: Product) => {
    console.log('Добавлен товар в корзину:', product);
    // Здесь будет логика добавления в корзину
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Героический блок */}
        <section className="bg-gradient-to-r from-primary to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Авторские сувениры ручной работы</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Уникальные подарки, созданные с любовью и заботой для особых случаев
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold"
              onClick={() => window.location.href = '/catalog'}
            >
              Перейти в каталог
            </Button>
          </div>
        </section>

        {/* О нас (кратко) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">О нашем магазине</h2>
              <p className="text-lg text-gray-600 mb-8">
                СувенирМастер — это мастерская авторских сувениров, созданных талантливыми мастерами. 
                Мы объединяем художников, керамистов, резчиков по дереву и других мастеров, 
                чтобы предложить вам по-настоящему особенные изделия.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = '/about'}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        {/* Популярные товары */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Популярные товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/catalog'}
              >
                Смотреть все товары
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
