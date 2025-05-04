
import { Product } from '@/components/ProductCard';

// Имитируем данные товаров для демонстрации
export const productsData: Product[] = [
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

export const getProductById = (id: number | string): Product | undefined => {
  return productsData.find(p => p.id === Number(id));
};
