import { motion } from 'framer-motion';
import { Product } from '@/data/menu';
import { formatPrice } from '@/utils/textUtils';
import { normalizeText } from '@/utils/textUtils';

interface SearchResultsProps {
  results: Product[];
  query: string;
  onProductClick: (product: Product) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const popularSuggestions = [
  'Caipirinha',
  'Jack Daniels',
  'Licor 43',
  'Xeque-Mate',
  'Batata Frita',
  'Santo Mel'
];

export const SearchResults = ({ 
  results, 
  query, 
  onProductClick,
  onSuggestionClick 
}: SearchResultsProps) => {
  if (!query.trim()) {
    return (
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-foreground mb-3">💡 Sugestões Populares:</h3>
        <div className="grid grid-cols-2 gap-2">
          {popularSuggestions.map((item) => (
            <button
              key={item}
              onClick={() => onSuggestionClick(item)}
              className="px-4 py-2 rounded-lg glass hover:glow-orange transition-all duration-300 text-left text-sm font-medium"
            >
              🔥 {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  if (results.length === 0) {
    return (
      <div className="p-6 text-center space-y-6">
        <div className="text-6xl mb-2">😕</div>
        <h3 className="text-xl font-bold text-foreground">
          Nenhum resultado para "{query}"
        </h3>
        <div className="space-y-3 text-muted-foreground text-sm">
          <p className="font-semibold">Dicas:</p>
          <ul className="space-y-1">
            <li>• Verifique a ortografia</li>
            <li>• Tente termos mais simples</li>
            <li>• Navegue pelas categorias ↓</li>
          </ul>
        </div>
        <div className="mt-6 space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">Sugestões:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularSuggestions.slice(0, 3).map((item) => (
              <button
                key={item}
                onClick={() => onSuggestionClick(item)}
                className="px-3 py-1 rounded-full bg-secondary hover:bg-primary/20 text-xs transition-colors"
              >
                → {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const highlightText = (text: string, query: string) => {
    const normalized = normalizeText(text);
    const normalizedQuery = normalizeText(query);
    const index = normalized.indexOf(normalizedQuery);
    
    if (index === -1) return text;
    
    // Calculate original string indices
    let currentIndex = 0;
    let normalizedIndex = 0;
    let startIndex = 0;
    let endIndex = text.length;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const normalizedChar = normalizeText(char);
      
      if (normalizedIndex === index) {
        startIndex = i;
      }
      
      if (normalizedChar) {
        normalizedIndex++;
      }
      
      if (normalizedIndex === index + normalizedQuery.length) {
        endIndex = i + 1;
        break;
      }
    }
    
    return (
      <>
        {text.slice(0, startIndex)}
        <span className="text-neon-orange font-bold">
          {text.slice(startIndex, endIndex)}
        </span>
        {text.slice(endIndex)}
      </>
    );
  };
  
  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-bold text-neon-orange mb-3">
        🔍 {results.length} {results.length === 1 ? 'resultado' : 'resultados'} para "{query}"
      </h3>
      
      <div className="space-y-3">
        {results.map((product, index) => (
          <motion.button
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onProductClick(product)}
            className="w-full p-4 rounded-lg glass hover:glow-orange transition-all duration-300 text-left"
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground text-base mb-1 truncate">
                  {highlightText(product.name, query)}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">📂 {product.category}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-bold text-neon-orange">
                  {formatPrice(product.price)}
                </p>
                {product.size && (
                  <p className="text-xs text-muted-foreground mt-1">{product.size}</p>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
