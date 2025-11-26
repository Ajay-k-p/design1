import { useState, useCallback } from 'react';
export function useWishlist() {
  const [items, setItems] = useState<Set<number>>(new Set());
  const toggleItem = useCallback((id: number) => {
    setItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);
  const isInWishlist = useCallback((id: number) => {
    return items.has(id);
  }, [items]);
  return {
    items,
    toggleItem,
    isInWishlist,
    count: items.size
  };
}