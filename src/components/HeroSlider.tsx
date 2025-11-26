import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { heroShoes } from '../data/shoes';
export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroShoes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  const currentShoe = heroShoes[currentIndex];
  return <div className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div className="absolute inset-0 opacity-30" animate={{
      background: ['radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)', 'radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 50%)', 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)']
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'linear'
    }} />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: [0.6, 0.05, 0.01, 0.9]
        }} className="z-10">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.5
            }}>
                <motion.span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.2
              }}>
                  {currentShoe.category}
                </motion.span>
                <h1 className="text-6xl md:text-8xl font-black text-white mt-4 mb-6 leading-none">
                  {currentShoe.name}
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-md">
                  Experience the perfect fusion of cutting-edge technology and
                  timeless design.
                </p>
                <div className="flex items-center gap-4">
                  <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-2xl hover:shadow-white/20 transition-shadow">
                    Shop Now
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  <motion.span className="text-4xl font-black text-white" initial={{
                  scale: 0.8,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.3
                }}>
                    ${currentShoe.price}
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Shoe Image Slider */}
          <div className="relative h-[600px] flex items-center justify-center">
            <AnimatePresence mode="sync">
              <motion.div key={currentIndex} initial={{
              x: '100%',
              opacity: 0,
              scale: 0.8
            }} animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }} exit={{
              x: '-100%',
              opacity: 0,
              scale: 0.8
            }} transition={{
              duration: 0.7,
              ease: [0.6, 0.05, 0.01, 0.9]
            }} className="absolute inset-0 flex items-center justify-center">
                <motion.img src={currentShoe.image} alt={currentShoe.name} className="w-full h-full object-contain drop-shadow-2xl" whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: -5
              }} transition={{
                duration: 0.3
              }} style={{
                filter: 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.5))'
              }} />
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {heroShoes.map((_, index) => <motion.div key={index} className={`h-1 rounded-full transition-all ${index === currentIndex ? 'w-12 bg-white' : 'w-6 bg-gray-600'}`} initial={{
              scale: 0.8
            }} animate={{
              scale: index === currentIndex ? 1 : 0.8
            }} />)}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{
          y: [0, 16, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </div>;
}