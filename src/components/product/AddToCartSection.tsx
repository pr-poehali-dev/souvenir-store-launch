
import { useState } from 'react';
import { ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

interface AddToCartSectionProps {
  product: Product;
}

const AddToCartSection = ({ product }: AddToCartSectionProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart, updateQuantity } = useCart();
  const { toast } = useToast();
  
  const productInCart = isInCart(product.id);

  // Обработчик изменения количества
  const changeQuantity = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  // Обработчик добавления в корзину
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${quantity} шт.)`,
      duration: 3000,
    });
  };
  
  // Обработчик обновления количества в корзине
  const handleUpdateCart = () => {
    updateQuantity(product.id, quantity);
    toast({
      title: "Корзина обновлена",
      description: `${product.name} (${quantity} шт.)`,
      duration: 3000,
    });
  };

  return (
    <div>
      {/* Выбор количества и добавление в корзину */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={() => changeQuantity(-1)}
            className="px-3 py-2 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Уменьшить количество"
          >
            -
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button 
            onClick={() => changeQuantity(1)}
            className="px-3 py-2 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>
        
        <Button 
          className="flex-grow flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
          onClick={productInCart ? handleUpdateCart : handleAddToCart}
          disabled={!product.availability}
        >
          {productInCart ? <Check size={18} /> : <ShoppingCart size={18} />}
          {productInCart ? 'Обновить в корзине' : 'Добавить в корзину'}
        </Button>
      </div>
      
      {/* Дополнительные кнопки */}
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 transition-colors hover:bg-pink-50"
        >
          <Heart size={18} />
          В избранное
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 transition-colors hover:bg-blue-50"
        >
          <Share2 size={18} />
          Поделиться
        </Button>
      </div>
    </div>
  );
};

export default AddToCartSection;
