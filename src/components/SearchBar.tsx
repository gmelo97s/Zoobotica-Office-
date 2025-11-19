import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  className?: string;
}

const placeholders = [
  'Buscar drinks, shots, porções...',
  'Ex: caipirinha, whisky, batata...',
  'Digite qualquer bebida ou petisco...',
  'Licor 43, Xeque-Mate, Mojito...'
];

export const SearchBar = ({ value, onChange, onClear, className }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={cn('w-full', className)}>
      <motion.div 
        className={cn(
          'relative flex items-center gap-3 px-4 py-3 rounded-xl glass transition-all duration-300',
          isFocused && 'glow-orange'
        )}
        animate={{ 
          boxShadow: isFocused 
            ? '0 0 30px hsl(var(--neon-orange) / 0.6)' 
            : '0 0 10px hsl(var(--neon-orange) / 0.3)' 
        }}
      >
        <Search className="text-neon-orange" size={20} />
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholders[placeholderIndex]}
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
        />
        
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClear}
              className="text-muted-foreground hover:text-foreground transition-colors"
              type="button"
            >
              <X size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
