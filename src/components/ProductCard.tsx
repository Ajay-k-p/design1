import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Shoe } from '../data/shoes';
interface ProductCardProps {
  shoe: Shoe;
  index: number;
  onQuickView: (shoe: Shoe) => void;
  onToggleWishlist: (id: number) => void;
  isInWishlist: boolean;
}
export function ProductCard({
  shoe,
  index,
  onQuickView,
  onToggleWishlist,
  isInWishlist
}: ProductCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.5,
    delay: index * 0.1,
    ease: [0.6, 0.05, 0.01, 0.9]
  }} whileHover={{
    y: -10
  }} className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
      {/* Image container with 3D hover effect */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <motion.img src={shoe.image} alt={shoe.name} className="w-full h-full object-cover" whileHover={{
        scale: 1.15,
        rotateY: 10,
        rotateX: -5
      }} transition={{
        duration: 0.4,
        ease: 'easeOut'
      }} style={{
        transformStyle: 'preserve-3d'
      }} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button initial={{
          scale: 0.8
        }} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onQuickView(shoe)} className="bg-white text-black p-3 rounded-full shadow-lg">
            <Eye className="w-5 h-5" />
          </motion.button>
          <motion.button initial={{
          scale: 0.8
        }} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onToggleWishlist(shoe.id)} className={`p-3 rounded-full shadow-lg transition-colors ${isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-black'}`}>
            <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              {shoe.category}
            </span>
            <h3 className="text-white text-xl font-bold mt-1 group-hover:text-cyan-400 transition-colors">
              {shoe.name}
            </h3>
          </div>
          <motion.span className="text-white text-2xl font-black" whileHover={{
          scale: 1.1
        }}>
            ${shoe.price}
          </motion.span>
        </div>

        {/* Animated underline */}
        <motion.div className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4" initial={{
        width: 0
      }} whileInView={{
        width: '100%'
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: index * 0.1 + 0.3
      }} />
      </div>

      {/* Glow effect on hover */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
      background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
    }} />
    </motion.div>;
}