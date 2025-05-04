
import { useState } from 'react';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/components/ProductCard';

interface AddToCartSectionProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const AddToCartSection = ({ product, onAddToCart }: AddToCartSectionProps) => {
  const [quantity, setQuantity] = useState(1);

  // Обработчик изменения количества
  const changeQuantity = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
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
          onClick={() => onAddToCart(product, quantity)}
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
  );
};

export default AddToCartSection;
