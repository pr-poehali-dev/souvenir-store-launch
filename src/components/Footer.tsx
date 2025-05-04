
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">СувенирМастер</h3>
            <p className="text-gray-300 mb-4">
              Уникальные авторские сувениры ручной работы для особых случаев и дорогих людей.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@suvenirmaster.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Мастеров, д. 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} СувенирМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
