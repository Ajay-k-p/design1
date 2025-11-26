import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  index: number;
}
export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
  index
}: TestimonialCardProps) {
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
    duration: 0.6,
    delay: index * 0.15,
    ease: [0.6, 0.05, 0.01, 0.9]
  }} whileHover={{
    y: -10,
    scale: 1.02
  }} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group">
      {/* Quote background */}
      <div className="absolute top-4 right-4 text-cyan-500/10 text-8xl font-serif leading-none">
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(rating)].map((_, i) => <motion.div key={i} initial={{
        opacity: 0,
        scale: 0
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: index * 0.15 + i * 0.1
      }}>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </motion.div>)}
      </div>

      {/* Content */}
      <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 relative z-10">
        <motion.img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/50" whileHover={{
        scale: 1.1,
        rotate: 5
      }} transition={{
        duration: 0.3
      }} />
        <div>
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>

      {/* Glow effect */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
      background: 'radial-gradient(circle at top right, rgba(6, 182, 212, 0.1) 0%, transparent 60%)'
    }} />
    </motion.div>;
}