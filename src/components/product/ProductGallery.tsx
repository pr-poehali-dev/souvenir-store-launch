
import { useState } from 'react';
import { Product } from '@/components/ProductCard';

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.imageUrl);
  
  return (
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
  );
};

export default ProductGallery;
