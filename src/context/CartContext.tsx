
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/components/ProductCard';

// Структура элемента корзины
export interface CartItem {
  product: Product;
  quantity: number;
}

// Интерфейс контекста корзины
interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
}

// Создаем контекст с начальным значением
const CartContext = createContext<CartContextType | undefined>(undefined);

// Хук для использования контекста корзины
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

// Ключ для хранения корзины в localStorage
const CART_STORAGE_KEY = 'ecommerce_cart';

// Провайдер контекста корзины
export const CartProvider = ({ children }: CartProviderProps) => {
  // Состояние для хранения элементов корзины
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Загрузка корзины из localStorage при инициализации
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Ошибка при загрузке корзины из localStorage:', error);
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
  }, []);
  
  // Сохранение корзины в localStorage при изменении
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  
  // Подсчет общего количества товаров
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  // Подсчет общей стоимости
  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );
  
  // Добавление товара в корзину
  const addToCart = (product: Product, quantity: number = 1) => {
    setItems(prevItems => {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );
      
      if (existingItemIndex >= 0) {
        // Если товар уже есть, увеличиваем количество
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Если товара нет, добавляем новый элемент
        return [...prevItems, { product, quantity }];
      }
    });
  };
  
  // Удаление товара из корзины
  const removeFromCart = (productId: number) => {
    setItems(prevItems => 
      prevItems.filter(item => item.product.id !== productId)
    );
  };
  
  // Обновление количества товара
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Очистка корзины
  const clearCart = () => {
    setItems([]);
  };
  
  // Проверка, находится ли товар в корзине
  const isInCart = (productId: number) => {
    return items.some(item => item.product.id === productId);
  };
  
  // Значение контекста
  const value = {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
