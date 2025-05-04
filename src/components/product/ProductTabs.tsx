
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Product } from '@/components/ProductCard';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  return (
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
  );
};

export default ProductTabs;
