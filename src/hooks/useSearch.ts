import { useState, useMemo } from 'react';
import { Product } from '@/data/menu';
import { normalizeText, fuzzyMatch } from '@/utils/textUtils';

interface SearchResult extends Product {
  score: number;
}

export const useSearch = (products: Product[]) => {
  const [query, setQuery] = useState('');
  
  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const normalizedQuery = normalizeText(query);
    const scored: SearchResult[] = products.map(product => {
      const normalizedName = normalizeText(product.name);
      const normalizedDesc = normalizeText(product.description || '');
      const normalizedTags = product.tags?.map(normalizeText).join(' ') || '';
      
      let score = 0;
      
      // 1. Match exato
      if (normalizedName === normalizedQuery) {
        score = 100;
      }
      // 2. Começa com
      else if (normalizedName.startsWith(normalizedQuery)) {
        score = 90;
      }
      // 3. Contém palavra completa
      else if (normalizedName.includes(` ${normalizedQuery} `) || 
               normalizedName.startsWith(`${normalizedQuery} `) ||
               normalizedName.endsWith(` ${normalizedQuery}`)) {
        score = 80;
      }
      // 4. Contém termo
      else if (normalizedName.includes(normalizedQuery)) {
        score = 60;
      }
      // 5. Match na descrição
      else if (normalizedDesc.includes(normalizedQuery)) {
        score = 50;
      }
      // 6. Match nas tags
      else if (normalizedTags.includes(normalizedQuery)) {
        score = 45;
      }
      // 7. Fuzzy match
      else if (fuzzyMatch(normalizedQuery, normalizedName, 2)) {
        score = 40;
      }
      
      return { ...product, score };
    });
    
    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.name.localeCompare(b.name);
      });
  }, [query, products]);
  
  return { query, setQuery, results };
};
