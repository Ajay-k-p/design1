import React from 'react';
import { motion } from 'framer-motion';
interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  index: number;
}
export function CategoryCard({
  name,
  icon,
  count,
  index
}: CategoryCardProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.8
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.5,
    delay: index * 0.1,
    ease: [0.6, 0.05, 0.01, 0.9]
  }} whileHover={{
    scale: 1.05,
    y: -5
  }} whileTap={{
    scale: 0.95
  }} className="relative group cursor-pointer">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
        {/* Background glow effect */}
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)'
      }} />

        <div className="relative z-10">
          <motion.div className="text-6xl mb-4" whileHover={{
          scale: 1.2,
          rotate: 10
        }} transition={{
          duration: 0.3
        }}>
            {icon}
          </motion.div>
          <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-sm">{count} Products</p>
        </div>

        {/* Animated border */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" initial={{
        scaleX: 0
      }} whileHover={{
        scaleX: 1
      }} transition={{
        duration: 0.3
      }} style={{
        transformOrigin: 'left'
      }} />
      </div>
    </motion.div>;
}