import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Heart, Menu, X } from 'lucide-react';
interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onSearchClick: () => void;
}
export function Header({
  cartCount,
  wishlistCount,
  onCartClick,
  onSearchClick
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: [0.6, 0.05, 0.01, 0.9]
  }} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{
          scale: 1.05
        }} className="text-2xl font-black text-white cursor-pointer">
            ELITE<span className="text-cyan-400">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['New Arrivals', 'Men', 'Women', 'Sale'].map((item, index) => <motion.a key={item} href="#" className="text-gray-300 hover:text-white transition-colors relative group" initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                {item}
                <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400" initial={{
              scaleX: 0
            }} whileHover={{
              scaleX: 1
            }} transition={{
              duration: 0.3
            }} />
              </motion.a>)}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={onSearchClick} className="text-gray-300 hover:text-white transition-colors p-2">
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Wishlist */}
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="text-gray-300 hover:text-white transition-colors p-2 relative">
              <Heart className="w-5 h-5" />
              <AnimatePresence>
                {wishlistCount > 0 && <motion.span initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} exit={{
                scale: 0
              }} className="absolute -top-1 -right-1 bg-cyan-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </motion.span>}
              </AnimatePresence>
            </motion.button>

            {/* Cart */}
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={onCartClick} className="text-gray-300 hover:text-white transition-colors p-2 relative">
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && <motion.span initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} exit={{
                scale: 0
              }} className="absolute -top-1 -right-1 bg-cyan-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </motion.span>}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-300 hover:text-white transition-colors p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.nav initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden">
              <div className="py-4 space-y-4">
                {['New Arrivals', 'Men', 'Women', 'Sale'].map(item => <a key={item} href="#" className="block text-gray-300 hover:text-white transition-colors py-2">
                    {item}
                  </a>)}
              </div>
            </motion.nav>}
        </AnimatePresence>
      </div>
    </motion.header>;
}