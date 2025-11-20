import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories, products } from '@/data/menu';
import { SearchBar } from '@/components/SearchBar';
import { SearchResults } from '@/components/SearchResults';
import { Footer } from '@/components/Footer';
import { useSearch } from '@/hooks/useSearch';
import { useDebounce } from '@/hooks/useDebounce';
import { Product } from '@/data/menu';

export const Categories = () => {
  const navigate = useNavigate();
  const { query, setQuery, results } = useSearch(products);
  const debouncedQuery = useDebounce(query, 300);
  const [showResults, setShowResults] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleSearchChange = (value: string) => {
    setQuery(value);
    setShowResults(value.length > 0);
  };
  
  const handleClear = () => {
    setQuery('');
    setShowResults(false);
  };
  
  const handleProductClick = (product: Product) => {
    const categoryId = categories.find(c => 
      product.subcategory 
        ? c.name === product.subcategory 
        : c.name === product.category
    )?.id;
    
    if (categoryId) {
      navigate(`/cardapio/${categoryId}`);
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowResults(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    const total = categories.length;
    const normalizedDiff = ((diff + total) % total);
    
    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1) return 'right';
    if (normalizedDiff === total - 1) return 'left';
    return 'hidden';
  };

  const imageMap: Record<string, string> = {
    'licor-43': new URL('@/assets/licor-43.jpg', import.meta.url).href,
    'xeque-mate': new URL('@/assets/xeque-mate.jpg', import.meta.url).href,
    'whiskys-generica': new URL('@/assets/whiskys-generica.jpg', import.meta.url).href,
    'vodkas-generica': new URL('@/assets/vodkas-generica.jpg', import.meta.url).href,
    'gins-generica': new URL('@/assets/gins-generica.jpg', import.meta.url).href,
    'gin-hq': new URL('@/assets/gin-hq.jpg', import.meta.url).href,
    'cervejas': new URL('@/assets/cervejas.jpg', import.meta.url).href,
    'corona': new URL('@/assets/corona.jpg', import.meta.url).href,
    'drinks': new URL('@/assets/drinks.jpg', import.meta.url).href,
    'porcoes': new URL('@/assets/porcoes.jpg', import.meta.url).href,
    'porcoes-hq': new URL('@/assets/porcoes-hq.jpg', import.meta.url).href,
    'rum-cachaca': new URL('@/assets/rum-cachaca.jpg', import.meta.url).href,
    'combos': new URL('@/assets/combos.jpg', import.meta.url).href
  };
  
  return (
    <div className="min-h-screen pb-20">
      {/* Header with search */}
      <div className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto p-4 space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="text-foreground" size={24} />
            </button>
            <h1 className="text-2xl font-bold text-foreground text-glow-orange">
              Cardápio Digital
            </h1>
          </div>
          
          <SearchBar
            value={query}
            onChange={handleSearchChange}
            onClear={handleClear}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {showResults ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass rounded-xl overflow-hidden m-4"
            >
              <SearchResults
                results={results}
                query={debouncedQuery}
                onProductClick={handleProductClick}
                onSuggestionClick={handleSuggestionClick}
              />
            </motion.div>
          ) : (
            <motion.div
              key="categories-carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[calc(100vh-180px)] flex items-center justify-center overflow-hidden"
            >
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform glow-orange"
                aria-label="Categoria anterior"
              >
                <ChevronLeft className="text-neon-orange" size={32} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform glow-orange"
                aria-label="Próxima categoria"
              >
                <ChevronRight className="text-neon-orange" size={32} />
              </button>

              {/* 3D Carousel */}
              <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                <AnimatePresence initial={false}>
                  {categories.map((category, index) => {
                    const position = getCardPosition(index);
                    if (position === 'hidden') return null;

                    const bgImage = category.image && imageMap[category.image];

                    return (
                      <motion.div
                        key={category.id}
                        className="absolute"
                        initial={false}
                        animate={{
                          x: position === 'center' ? 0 : position === 'right' ? '60%' : '-60%',
                          scale: position === 'center' ? 1 : 0.7,
                          z: position === 'center' ? 50 : 0,
                          opacity: position === 'center' ? 1 : 0.4,
                          rotateY: position === 'center' ? 0 : position === 'right' ? -25 : 25,
                          filter: position === 'center' ? 'blur(0px)' : 'blur(4px)',
                        }}
                        transition={{
                          duration: 0.5,
                          ease: 'easeInOut'
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <motion.button
                          onClick={() => position === 'center' && navigate(`/cardapio/${category.id}`)}
                          className="relative w-[85vw] h-[65vh] max-w-md overflow-hidden glass cursor-pointer"
                          style={{
                            borderRadius: '2rem',
                            border: '6px solid hsl(var(--border) / 0.4)',
                            boxShadow: position === 'center' 
                              ? '0 20px 60px -10px hsl(var(--neon-orange) / 0.4)'
                              : '0 10px 30px -10px rgba(0,0,0,0.3)'
                          }}
                          whileHover={position === 'center' ? { scale: 1.02 } : {}}
                          whileTap={position === 'center' ? { scale: 0.98 } : {}}
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '1.75rem' }}>
                            {bgImage ? (
                              <img 
                                src={bgImage} 
                                alt={category.name} 
                                className="w-full h-full object-cover"
                                style={{
                                  filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
                                }}
                              />
                            ) : (
                              <div 
                                className="w-full h-full"
                                style={{ background: category.gradient || 'linear-gradient(135deg, hsl(var(--neon-orange)) 0%, hsl(var(--neon-magenta)) 100%)' }}
                              />
                            )}
                          </div>

                          {/* Enhanced Shine Effect */}
                          {position === 'center' && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                background: 'linear-gradient(110deg, transparent 0%, transparent 35%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 55%, transparent 65%, transparent 100%)',
                                backgroundSize: '200% 100%',
                                mixBlendMode: 'overlay',
                                borderRadius: '1.75rem'
                              }}
                              animate={{
                                backgroundPosition: ['200% 0', '-200% 0'],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          )}

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                            <motion.h2 
                              className="text-3xl md:text-4xl font-black text-foreground mb-2 text-glow-orange uppercase"
                              animate={position === 'center' ? {
                                textShadow: [
                                  '0 0 20px hsl(var(--neon-orange) / 0.8)',
                                  '0 0 30px hsl(var(--neon-orange) / 1)',
                                  '0 0 20px hsl(var(--neon-orange) / 0.8)',
                                ]
                              } : {}}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {category.name}
                            </motion.h2>
                            <p className="text-base md:text-lg text-muted-foreground mb-4">
                              {category.itemCount} {category.itemCount === 1 ? 'item' : 'itens'}
                            </p>
                            {position === 'center' && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-neon-orange font-bold flex items-center gap-2 text-sm md:text-base"
                              >
                                <span>TOQUE PARA VER</span>
                                <motion.span
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                >
                                  →
                                </motion.span>
                              </motion.div>
                            )}
                          </div>

                          {/* Border Glow */}
                          {position === 'center' && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                borderRadius: '2rem',
                                border: '3px solid hsl(var(--neon-orange) / 0.6)',
                              }}
                              animate={{
                                boxShadow: [
                                  '0 0 25px hsl(var(--neon-orange) / 0.6)',
                                  '0 0 45px hsl(var(--neon-orange) / 0.9)',
                                  '0 0 25px hsl(var(--neon-orange) / 0.6)',
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {categories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-neon-orange w-8 glow-orange' 
                        : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Ir para categoria ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {!showResults && <Footer />}
    </div>
  );
};
