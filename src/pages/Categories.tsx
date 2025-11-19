import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories, products } from '@/data/menu';
import { CategoryCard } from '@/components/CategoryCard';
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
  
  const handleSearchChange = (value: string) => {
    setQuery(value);
    setShowResults(value.length > 0);
  };
  
  const handleClear = () => {
    setQuery('');
    setShowResults(false);
  };
  
  const handleCategoryClick = (categoryId: string) => {
    navigate(`/cardapio/${categoryId}`);
  };
  
  const handleProductClick = (product: Product) => {
    // Scroll to the product's category
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
      <div className="max-w-7xl mx-auto p-4">
        <AnimatePresence mode="wait">
          {showResults ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass rounded-xl overflow-hidden"
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
              key="categories-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Escolha uma categoria:
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <CategoryCard
                    key={category.id}
                    {...category}
                    onClick={() => handleCategoryClick(category.id)}
                    delay={index * 0.05}
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
