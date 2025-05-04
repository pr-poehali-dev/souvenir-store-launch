
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/components/ProductCard';
import { getProductById } from '@/components/product/data/productData';
import Breadcrumbs from '@/components/product/Breadcrumbs';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import AddToCartSection from '@/components/product/AddToCartSection';
import ProductTabs from '@/components/product/ProductTabs';
import ProductNotFound from '@/components/product/ProductNotFound';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setLoading(true);
    
    // Находим товар по id
    const foundProduct = getProductById(id || '');
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
    
    setLoading(false);
  }, [id]);

  // Обработчик добавления в корзину
  const handleAddToCart = (product: Product, quantity: number) => {
    console.log(`Добавлено в корзину: ${product.name}, количество: ${quantity}`);
    // Здесь будет логика добавления в корзину
  };

  // Если товар не найден
  if (!loading && !product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Навигационная цепочка */}
          <Breadcrumbs product={product} />
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : product && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Галерея изображений */}
                <ProductGallery product={product} />
                
                {/* Информация о товаре */}
                <div>
                  <ProductInfo product={product} />
                  <AddToCartSection 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                </div>
              </div>
              
              {/* Дополнительная информация (вкладки) */}
              <ProductTabs product={product} />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
