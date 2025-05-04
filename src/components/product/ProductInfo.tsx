
import { Product } from '@/components/ProductCard';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const getCategoryName = (category: string | undefined): string => {
    if (!category) return '';
    
    const categories: Record<string, string> = {
      'ceramics': 'Керамика',
      'wood': 'Изделия из дерева',
      'eco': 'Эко-товары',
      'textile': 'Текстиль',
      'glass': 'Стекло и витражи'
    };
    
    return categories[category] || category;
  };
  
  return (
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
              <span className="w-2/3">{getCategoryName(product.category)}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
