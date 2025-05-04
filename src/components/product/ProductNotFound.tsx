
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductNotFound = () => {
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
};

export default ProductNotFound;
