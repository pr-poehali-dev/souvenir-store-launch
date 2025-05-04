
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/components/ProductCard';

// Имитируем данные товаров для демонстрации
const productsData: Product[] = [
  {
    id: 1,
    name: 'Керамическая ваза "Весна"',
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1612293905607-1bcad9bad68a?q=80&w=500',
    description: 'Ручная работа из экологичных материалов. Идеально подойдет для украшения интерьера. Каждое изделие уникально и имеет свой неповторимый узор. Керамическая ваза "Весна" создана профессиональным мастером с многолетним опытом работы с глиной.',
    category: 'ceramics',
    materials: ['Глина', 'Экологичные красители', 'Глазурь'],
    dimensions: '15 x 15 x 25 см',
    weight: '800 г',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1612293905607-1bcad9bad68a?q=80&w=500',
      'https://images.unsplash.com/photo-1578749471545-8c3f8d5f0b8b?q=80&w=500',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=500',
    ]
  },
  {
    id: 2,
    name: 'Деревянная шкатулка "Сокровище"',
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1577083552792-432dce3878a6?q=80&w=500',
    description: 'Резная шкатулка из натурального дерева с уникальным орнаментом. Подойдет для хранения украшений и других ценных мелочей. Каждый узор вырезан вручную умелым мастером, что делает каждое изделие неповторимым и особенным.',
    category: 'wood',
    materials: ['Дуб', 'Натуральный воск', 'Бронзовая фурнитура'],
    dimensions: '20 x 15 x 10 см',
    weight: '500 г',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1577083552792-432dce3878a6?q=80&w=500',
      'https://images.unsplash.com/photo-1551029506-0807df4e2031?q=80&w=500',
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=500',
    ]
  },
  {
    id: 3,
    name: 'Плетеная корзина "Уют"',
    price: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500',
    description: 'Экологичная корзина ручной работы. Идеально для хранения мелочей. Изготовлена из натуральных материалов, гипоаллергенна и безопасна. Плетение выполнено вручную опытным мастером, что гарантирует долговечность и прочность изделия.',
    category: 'eco',
    materials: ['Ротанг', 'Джут', 'Натуральные красители'],
    dimensions: '30 x 30 x 25 см',
    weight: '400 г',
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500',
      'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?q=80&w=500',
      'https://images.unsplash.com/photo-1583495838029-1c68550ccc15?q=80&w=500',
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setLoading(true);
    
    // Находим товар по id
    const foundProduct = productsData.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images?.[0] || foundProduct.imageUrl);
    }
    
    setLoading(false);
  }, [id]);

  // Обработчик добавления в корзину
  const handleAddToCart = () => {
    if (product) {
      console.log(`Добавлено в корзину: ${product.name}, количество: ${quantity}`);
      // Здесь будет логика добавления в корзину
    }
  };

  // Обработчик изменения количества
  const changeQuantity = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Если товар не найден
  if (!loading && !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
            <p className="mb-6">К сожалению, запрашиваемый товар не существует.</p>
            <Button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 mx-auto"
            >
              <ArrowLeft size={16} />
              Вернуться назад
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Навигационная цепочка */}
          <div className="mb-6">
            <Link to="/" className="text-gray-500 hover:text-primary">Главная</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/catalog" className="text-gray-500 hover:text-primary">Каталог</Link>
            {product && (
              <>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">{product.name}</span>
              </>
            )}
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : product && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Галерея изображений */}
                <div>
                  <div className="bg-white rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedImage} 
                      alt={product.name} 
                      className="w-full h-auto object-contain aspect-square"
                    />
                  </div>
                  
                  {product.images && product.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {product.images.map((img, index) => (
                        <div 
                          key={index}
                          className={`cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === img ? 'border-primary' : 'border-transparent'}`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${product.name} - изображение ${index + 1}`}
                            className="w-full h-20 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Информация о товаре */}
                <div>
                  <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.availability ? 'В наличии' : 'Нет в наличии'}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  
                  {/* Характеристики товара */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Характеристики:</h3>
                    <ul className="space-y-2">
                      {product.materials && (
                        <li className="flex">
                          <span className="w-1/3 text-gray-600">Материалы:</span>
                          <span className="w-2/3">{product.materials.join(', ')}</span>
                        </li>
                      )}
                      {product.dimensions && (
                        <li className="flex">
                          <span className="w-1/3 text-gray-600">Размеры:</span>
                          <span className="w-2/3">{product.dimensions}</span>
                        </li>
                      )}
                      {product.weight && (
                        <li className="flex">
                          <span className="w-1/3 text-gray-600">Вес:</span>
                          <span className="w-2/3">{product.weight}</span>
                        </li>
                      )}
                      {product.category && (
                        <li className="flex">
                          <span className="w-1/3 text-gray-600">Категория:</span>
                          <span className="w-2/3">
                            {product.category === 'ceramics' && 'Керамика'}
                            {product.category === 'wood' && 'Изделия из дерева'}
                            {product.category === 'eco' && 'Эко-товары'}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Выбор количества и добавление в корзину */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => changeQuantity(-1)}
                        className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-2">{quantity}</span>
                      <button 
                        onClick={() => changeQuantity(1)}
                        className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    
                    <Button 
                      className="flex-grow flex items-center justify-center gap-2"
                      onClick={handleAddToCart}
                      disabled={!product.availability}
                    >
                      <ShoppingCart size={18} />
                      Добавить в корзину
                    </Button>
                  </div>
                  
                  {/* Дополнительные кнопки */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Heart size={18} />
                      В избранное
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Share2 size={18} />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Дополнительная информация (вкладки) */}
              <Tabs defaultValue="description" className="mb-12">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="delivery">Доставка</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="bg-white p-4 rounded-lg mt-2">
                  <h3 className="font-semibold text-lg mb-3">Подробное описание</h3>
                  <p className="text-gray-700">
                    {product.description}
                  </p>
                  <p className="mt-4 text-gray-700">
                    Все наши изделия тщательно изготавливаются вручную профессиональными мастерами 
                    с многолетним опытом. Каждый сувенир уникален и может незначительно отличаться 
                    от представленного на фото, сохраняя при этом все особенности и качество.
                  </p>
                </TabsContent>
                
                <TabsContent value="delivery" className="bg-white p-4 rounded-lg mt-2">
                  <h3 className="font-semibold text-lg mb-3">Информация о доставке</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Доставка курьером по Москве: 1-2 дня, 300 ₽</li>
                    <li>• Доставка по России: 3-7 дней, от 400 ₽</li>
                    <li>• Самовывоз из магазина: бесплатно</li>
                    <li>• Бесплатная доставка при заказе от 5000 ₽</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    Все товары бережно упаковываются, чтобы исключить возможные повреждения при транспортировке.
                  </p>
                </TabsContent>
                
                <TabsContent value="reviews" className="bg-white p-4 rounded-lg mt-2">
                  <h3 className="font-semibold text-lg mb-3">Отзывы о товаре</h3>
                  <p className="text-gray-600">
                    На данный момент отзывов о товаре нет. Станьте первым, кто оставит отзыв!
                  </p>
                  <Button className="mt-4">Оставить отзыв</Button>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
