
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold">{product.price} ₽</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart size={16} />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
