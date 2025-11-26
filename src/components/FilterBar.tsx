import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}
const categories = ['All', 'Running', 'Basketball', 'Lifestyle', 'Training'];
export function FilterBar({
  selectedCategory,
  onCategoryChange
}: FilterBarProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-cyan-400" />
        <h3 className="text-white font-bold">Filter Products</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map(category => <motion.button key={category} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={() => onCategoryChange(category)} className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
            {category}
          </motion.button>)}
      </div>
    </motion.div>;
}