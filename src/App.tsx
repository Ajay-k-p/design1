import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ProductCard } from './components/ProductCard';
import { CategoryCard } from './components/CategoryCard';
import { TestimonialCard } from './components/TestimonialCard';
import { CartSidebar } from './components/CartSidebar';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { FilterBar } from './components/FilterBar';
import { trendingShoes, bestSellers, categories, testimonials } from './data/shoes';
import { useCart } from './hooks/useCart';
import { useWishlist } from './hooks/useWishlist';
import { Shoe } from './data/shoes';
export function App() {
  const cart = useCart();
  const wishlist = useWishlist();
  const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const allShoes = [...trendingShoes, ...bestSellers];
  const filteredShoes = selectedCategory === 'All' ? allShoes : allShoes.filter(shoe => shoe.category === selectedCategory);
  const handleAddToCart = (shoe: Shoe, size: string) => {
    cart.addItem({
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      image: shoe.image,
      size
    });
  };
  return <div className="min-w-full bg-black">
      {/* Header */}
      <Header cartCount={cart.itemCount} wishlistCount={wishlist.count} onCartClick={() => cart.setIsOpen(true)} onSearchClick={() => setSearchOpen(true)} />

      {/* Add padding for fixed header */}
      <div className="pt-20">
        {/* Hero Section with Auto Slider */}
        <HeroSlider />

        {/* Trending Shoes Section */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <motion.span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                Hot Right Now
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
                Trending Shoes
              </h2>
              <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" initial={{
              width: 0
            }} whileInView={{
              width: 96
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} />
            </motion.div>

            {/* Filter Bar */}
            <div className="mb-12">
              <FilterBar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} priceRange={[0, 300]} onPriceRangeChange={() => {}} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredShoes.slice(0, 4).map((shoe, index) => <ProductCard key={shoe.id} shoe={shoe} index={index} onQuickView={setSelectedShoe} onToggleWishlist={wishlist.toggleItem} isInWishlist={wishlist.isInWishlist(shoe.id)} />)}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <motion.span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                Explore
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
                Shop by Category
              </h2>
              <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" initial={{
              width: 0
            }} whileInView={{
              width: 96
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => <CategoryCard key={category.name} name={category.name} icon={category.icon} count={category.count} index={index} />)}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-24 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <motion.span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                Customer Favorites
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
                Best Sellers
              </h2>
              <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" initial={{
              width: 0
            }} whileInView={{
              width: 96
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestSellers.map((shoe, index) => <ProductCard key={shoe.id} shoe={shoe} index={index} onQuickView={setSelectedShoe} onToggleWishlist={wishlist.toggleItem} isInWishlist={wishlist.isInWishlist(shoe.id)} />)}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              icon: Zap,
              title: 'Fast Delivery',
              desc: 'Get your shoes in 2-3 days'
            }, {
              icon: Shield,
              title: 'Secure Payment',
              desc: '100% secure transactions'
            }, {
              icon: Truck,
              title: 'Free Shipping',
              desc: 'On orders over $100'
            }].map((feature, index) => <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-100px'
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              y: -5
            }} className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all">
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: 5
              }} transition={{
                duration: 0.3
              }} className="inline-block">
                    <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <motion.span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                Reviews
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
                What Our Customers Say
              </h2>
              <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" initial={{
              width: 0
            }} whileInView={{
              width: 96
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.id} name={testimonial.name} role={testimonial.role} content={testimonial.content} rating={testimonial.rating} image={testimonial.image} index={index} />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div className="absolute inset-0 opacity-20" animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }} transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }} style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                Ready to Step Up?
              </h2>
              <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
                Join thousands of satisfied customers and experience the perfect
                blend of style and performance.
              </p>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-black/50 transition-shadow">
                Shop Collection
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 px-6 border-t border-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p className="text-gray-500" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }}>
              © 2024 Elite Footwear. All rights reserved.
            </motion.p>
          </div>
        </footer>
      </div>

      {/* Modals & Sidebars */}
      <CartSidebar isOpen={cart.isOpen} onClose={() => cart.setIsOpen(false)} items={cart.items} total={cart.total} onUpdateQuantity={cart.updateQuantity} onRemove={cart.removeItem} />

      <QuickViewModal shoe={selectedShoe} onClose={() => setSelectedShoe(null)} onAddToCart={handleAddToCart} />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} shoes={allShoes} onSelectShoe={setSelectedShoe} />
    </div>;
}