import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Shoe } from '../data/shoes';
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  shoes: Shoe[];
  onSelectShoe: (shoe: Shoe) => void;
}
export function SearchModal({
  isOpen,
  onClose,
  shoes,
  onSelectShoe
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Shoe[]>([]);
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = shoes.filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()) || shoe.category.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  }, [query, shoes]);
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
          <motion.div initial={{
        y: -50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} exit={{
        y: -50,
        opacity: 0
      }} transition={{
        type: 'spring',
        damping: 25
      }} onClick={e => e.stopPropagation()} className="bg-gray-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
            {/* Search Input */}
            <div className="p-6 border-b border-gray-800">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for shoes..." autoFocus className="w-full bg-gray-800 text-white pl-12 pr-12 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                <motion.button whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto p-6">
              {query.trim() === '' ? <p className="text-gray-400 text-center py-8">
                  Start typing to search...
                </p> : results.length === 0 ? <p className="text-gray-400 text-center py-8">
                  No results found for "{query}"
                </p> : <div className="space-y-3">
                  <AnimatePresence>
                    {results.map((shoe, index) => <motion.button key={shoe.id} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: 20
              }} transition={{
                delay: index * 0.05
              }} whileHover={{
                x: 5
              }} onClick={() => {
                onSelectShoe(shoe);
                onClose();
              }} className="w-full flex items-center gap-4 p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors text-left">
                        <img src={shoe.image} alt={shoe.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="text-white font-bold">{shoe.name}</h3>
                          <p className="text-gray-400 text-sm">
                            {shoe.category}
                          </p>
                        </div>
                        <span className="text-white font-bold">
                          ${shoe.price}
                        </span>
                      </motion.button>)}
                  </AnimatePresence>
                </div>}
            </div>
          </motion.div>
        </motion.div>}
    </AnimatePresence>;
}