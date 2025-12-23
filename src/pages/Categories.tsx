import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories, products } from '@/data/menu';
import { SearchBar } from '@/components/SearchBar';
import { SearchResults } from '@/components/SearchResults';
import { useSearch } from '@/hooks/useSearch';
import { useDebounce } from '@/hooks/useDebounce';
import { Product } from '@/data/menu';

// Importação das imagens
import clinicaImg from '@/assets/clinica.jpg';
import coleiraImg from '@/assets/coleira.jpg';
import farmaciaImg from '@/assets/farmacia pet.jpg';
import gatosImg from '@/assets/gatos.jpg';
import cachorrosImg from '@/assets/cachorros.jpg';
import hotelImg from '@/assets/hotel.jpg';
import banhoTosaImg from '@/assets/banho e tosa.jpg';

// Mapeamento de imagens por ID da categoria
const categoryImages: Record<string, string> = {
  'servicos-clinica': clinicaImg,
  'boutique-acessorios': coleiraImg,
  'farmacia-pet': farmaciaImg,
  'nutricao-gatos': gatosImg,
  'nutricao-caes': cachorrosImg,
  'daycare-hotel': hotelImg,
  'banho-tosa': banhoTosaImg,
};

export const Categories = () => {
  const navigate = useNavigate();
  const { query, setQuery, results } = useSearch(products);
  const debouncedQuery = useDebounce(query, 300);
  const [showResults, setShowResults] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(4); // Inicia em Nutrição para Cães
  
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
      c.name === product.category
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

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
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
              Catálogo Zoobotica
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
              className="relative h-[calc(100vh-180px)] md:h-[calc(100vh-180px)] flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Title */}
              <div className="text-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-neon-orange uppercase tracking-wider">
                  Escolha uma Categoria
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Deslize para navegar</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform glow-orange"
                aria-label="Categoria anterior"
              >
                <ChevronLeft className="text-neon-orange" size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform glow-orange"
                aria-label="Próxima categoria"
              >
                <ChevronRight className="text-neon-orange" size={24} />
              </button>

              {/* 3D Carousel with swipe */}
              <motion.div 
                className="relative w-full flex-1 flex items-center justify-center perspective-1000 touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence initial={false}>
                  {categories.map((category, index) => {
                    const position = getCardPosition(index);
                    if (position === 'hidden') return null;

                    const categoryImage = categoryImages[category.id];

                    return (
                      <motion.div
                        key={category.id}
                        className="absolute"
                        initial={false}
                        animate={{
                          x: position === 'center' ? 0 : position === 'right' ? '60%' : '-60%',
                          scale: position === 'center' ? 1 : 0.55,
                          z: position === 'center' ? 50 : 0,
                          opacity: position === 'center' ? 1 : 0.3,
                          rotateY: position === 'center' ? 0 : position === 'right' ? -25 : 25,
                          filter: position === 'center' ? 'blur(0px)' : 'blur(4px)',
                        }}
                        transition={{
                          duration: 0.4,
                          ease: 'easeOut'
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <motion.button
                          onClick={() => position === 'center' && navigate(`/cardapio/${category.id}`)}
                          className="relative w-[55vw] h-[45vh] max-w-[240px] max-h-[320px] md:w-[50vw] md:h-[50vh] md:max-w-[300px] md:max-h-[400px] overflow-hidden cursor-pointer"
                          style={{
                            borderRadius: '1rem',
                            border: position === 'center' ? '3px solid hsl(28 100% 55%)' : '2px solid hsl(28 100% 55% / 0.3)',
                            boxShadow: position === 'center' 
                              ? '0 10px 40px -10px hsl(28 100% 55% / 0.5)'
                              : '0 5px 20px -10px rgba(0,0,0,0.3)',
                            background: '#0a0a0a'
                          }}
                          whileHover={position === 'center' ? { scale: 1.02 } : {}}
                          whileTap={position === 'center' ? { scale: 0.98 } : {}}
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '0.875rem' }}>
                            {categoryImage ? (
                              <img 
                                src={categoryImage} 
                                alt={category.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div 
                                className="w-full h-full"
                                style={{ background: category.gradient || 'linear-gradient(135deg, hsl(var(--neon-orange)) 0%, hsl(var(--neon-magenta)) 100%)' }}
                              />
                            )}
                          </div>

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-6">
                            <h2 
                              className="text-lg md:text-xl font-bold text-white mb-1 uppercase text-center"
                              style={{
                                textShadow: '0 0 15px hsl(28 100% 55% / 0.8), 0 2px 4px rgba(0,0,0,0.8)'
                              }}
                            >
                              {category.name}
                            </h2>
                            <p className="text-xs text-gray-300">
                              {category.itemCount} {category.itemCount === 1 ? 'item' : 'itens'}
                            </p>
                          </div>

                          {/* Border Glow for center */}
                          {position === 'center' && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                borderRadius: '1rem',
                                border: '2px solid hsl(28 100% 55% / 0.6)',
                              }}
                              animate={{
                                boxShadow: [
                                  '0 0 15px hsl(28 100% 55% / 0.4)',
                                  '0 0 25px hsl(28 100% 55% / 0.6)',
                                  '0 0 15px hsl(28 100% 55% / 0.4)',
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
              </motion.div>

              {/* Indicators */}
              <div className="flex gap-2 mt-4 md:mt-6">
                {categories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-neon-orange w-6 glow-orange' 
                        : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Ir para categoria ${index + 1}`}
                  />
                ))}
              </div>

              {/* Instruction text */}
              <p className="text-neon-orange text-sm mt-4">Toque para selecionar</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
