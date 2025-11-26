import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Shoe } from '../data/shoes';
interface QuickViewModalProps {
  shoe: Shoe | null;
  onClose: () => void;
  onAddToCart: (shoe: Shoe, size: string) => void;
}
const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];
export function QuickViewModal({
  shoe,
  onClose,
  onAddToCart
}: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  if (!shoe) return null;
  const handleAddToCart = () => {
    if (!selectedSize) return;
    onAddToCart(shoe, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };
  return <AnimatePresence>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} transition={{
        type: 'spring',
        damping: 25
      }} onClick={e => e.stopPropagation()} className="bg-gray-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative h-96 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex items-center justify-center">
              <motion.img src={shoe.image} alt={shoe.name} className="w-full h-full object-contain" initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              delay: 0.2
            }} />
            </div>

            {/* Content */}
            <div className="p-8 relative">
              <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }}>
                <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                  {shoe.category}
                </span>
                <h2 className="text-4xl font-black text-white mt-2 mb-4">
                  {shoe.name}
                </h2>
                <p className="text-3xl font-black text-white mb-6">
                  ${shoe.price}
                </p>
                <p className="text-gray-400 mb-8">
                  Experience premium comfort and style with cutting-edge
                  technology designed for peak performance.
                </p>

                {/* Size Selector */}
                <div className="mb-8">
                  <h3 className="text-white font-bold mb-4">Select Size</h3>
                  <div className="grid grid-cols-6 gap-2">
                    {sizes.map(size => <motion.button key={size} whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} onClick={() => setSelectedSize(size)} className={`py-3 rounded-lg font-bold transition-all ${selectedSize === size ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
                        {size}
                      </motion.button>)}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button whileHover={{
                scale: selectedSize ? 1.02 : 1
              }} whileTap={{
                scale: selectedSize ? 0.98 : 1
              }} onClick={handleAddToCart} disabled={!selectedSize || added} className={`w-full py-4 rounded-full font-bold text-lg transition-all ${added ? 'bg-green-500 text-white' : selectedSize ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/50' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>
                  <AnimatePresence mode="wait">
                    {added ? <motion.span key="added" initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -10
                  }} className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5" />
                        Added to Cart!
                      </motion.span> : <motion.span key="add" initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -10
                  }}>
                        {selectedSize ? 'Add to Cart' : 'Select a Size'}
                      </motion.span>}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>;
}