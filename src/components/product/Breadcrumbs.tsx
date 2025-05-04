
import { Link } from 'react-router-dom';
import { Product } from '@/components/ProductCard';

interface BreadcrumbsProps {
  product?: Product | null;
}

const Breadcrumbs = ({ product }: BreadcrumbsProps) => {
  return (
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
  );
};

export default Breadcrumbs;
