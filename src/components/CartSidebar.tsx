import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../hooks/useCart';
interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: number, size: string, quantity: number) => void;
  onRemove: (id: number, size: string) => void;
}
export function CartSidebar({
  isOpen,
  onClose,
  items,
  total,
  onUpdateQuantity,
  onRemove
}: CartSidebarProps) {
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />

          {/* Sidebar */}
          <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300
      }} className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-gray-900 z-50 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Your Cart
              </h2>
              <motion.button whileHover={{
            scale: 1.1,
            rotate: 90
          }} whileTap={{
            scale: 0.9
          }} onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Your cart is empty</p>
                </motion.div> : <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item, index) => <motion.div key={`${item.id}-${item.size}`} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} transition={{
                delay: index * 0.05
              }} className="bg-gray-800 rounded-2xl p-4 flex gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="text-white font-bold mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            Size: {item.size}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <motion.button whileHover={{
                        scale: 1.1
                      }} whileTap={{
                        scale: 0.9
                      }} onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="text-white font-bold w-8 text-center">
                                {item.quantity}
                              </span>
                              <motion.button whileHover={{
                        scale: 1.1
                      }} whileTap={{
                        scale: 0.9
                      }} onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)} className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                                <Plus className="w-4 h-4" />
                              </motion.button>
                            </div>
                            <span className="text-white font-bold">
                              ${item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                        <motion.button whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.9
                }} onClick={() => onRemove(item.id, item.size)} className="text-gray-400 hover:text-red-400 transition-colors">
                          <X className="w-5 h-5" />
                        </motion.button>
                      </motion.div>)}
                  </AnimatePresence>
                </div>}
            </div>

            {/* Footer */}
            {items.length > 0 && <div className="border-t border-gray-800 p-6 space-y-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span className="text-gray-400">Total</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
                <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow">
                  Checkout
                </motion.button>
              </div>}
          </motion.div>
        </>}
    </AnimatePresence>;
}