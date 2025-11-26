import { useState, useCallback } from 'react';
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}
export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === item.size);
      if (existing) {
        return prev.map(i => i.id === item.id && i.size === item.size ? {
          ...i,
          quantity: i.quantity + 1
        } : i);
      }
      return [...prev, {
        ...item,
        quantity: 1
      }];
    });
    setIsOpen(true);
  }, []);
  const removeItem = useCallback((id: number, size: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.size === size)));
  }, []);
  const updateQuantity = useCallback((id: number, size: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(id, size);
      return;
    }
    setItems(prev => prev.map(i => i.id === id && i.size === size ? {
      ...i,
      quantity
    } : i));
  }, [removeItem]);
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    isOpen,
    setIsOpen
  };
}