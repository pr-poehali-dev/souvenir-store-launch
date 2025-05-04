
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Сувенир<span className="text-secondary">Мастер</span>
          </Link>

          {/* Мобильное меню */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-primary/80"
            >
              <Menu size={24} />
            </Button>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-secondary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-white hover:text-secondary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="text-white hover:text-secondary transition-colors">
              О нас
            </Link>
            <Link to="/contacts" className="text-white hover:text-secondary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary/80">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary/80">
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>

        {/* Мобильное меню (выпадающее) */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 space-y-2 mt-2 border-t border-primary-foreground/20">
            <Link 
              to="/" 
              className="block py-2 text-white hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="block py-2 text-white hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-white hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="block py-2 text-white hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="flex space-x-4 pt-2 border-t border-primary-foreground/20">
              <Button variant="ghost" size="icon" className="text-white hover:bg-primary/80">
                <User size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-primary/80">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
