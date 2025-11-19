import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { categories, products } from '@/data/menu';
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';

export const CategoryProducts = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Categoria não encontrada
          </h1>
          <button
            onClick={() => navigate('/cardapio')}
            className="text-neon-orange hover:underline"
          >
            ← Voltar ao cardápio
          </button>
        </div>
      </div>
    );
  }
  
  // Filter products by category or subcategory
  const categoryProducts = products.filter(p => {
    if (categoryId === 'whiskys') {
      return p.subcategory === 'Whiskys & Destilados';
    }
    if (categoryId === 'runs-cachacas') {
      return p.category === 'Runs & Cachaças';
    }
    if (categoryId === 'vodkas') {
      return p.category === 'Vodkas';
    }
    if (categoryId === 'gins') {
      return p.category === 'Gins';
    }
    if (categoryId === 'cervejas') {
      return p.subcategory === 'Cervejas';
    }
    if (categoryId === 'drinks') {
      return p.subcategory === 'Drinks & Coquetéis';
    }
    if (categoryId === 'porcoes') {
      return p.category === 'Porções & Petiscos';
    }
    if (categoryId === 'combos') {
      return p.category === 'Combos & Promoções';
    }
    if (categoryId === 'aniversarios') {
      return p.category === 'Aniversários';
    }
    if (categoryId === 'abriu-bebeu') {
      return p.category === 'Abriu Bebeu';
    }
    if (categoryId === 'shots') {
      return p.category === 'Shots';
    }
    return false;
  });
  
  // Group products by subcategory if needed
  const groupedProducts: Record<string, typeof categoryProducts> = {};
  categoryProducts.forEach(product => {
    const group = product.category;
    if (!groupedProducts[group]) {
      groupedProducts[group] = [];
    }
    groupedProducts[group].push(product);
  });
  
  const hasMultipleGroups = Object.keys(groupedProducts).length > 1;
  
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/cardapio')}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="text-foreground" size={24} />
              </button>
              <div>
                <div className="text-2xl">{category.icon}</div>
                <h1 className="text-xl font-bold text-foreground text-glow-orange">
                  {category.name}
                </h1>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/cardapio')}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Search className="text-neon-orange" size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Products List */}
      <div className="max-w-7xl mx-auto p-4">
        {hasMultipleGroups ? (
          <div className="space-y-8">
            {Object.entries(groupedProducts).map(([group, items]) => (
              <div key={group}>
                <h2 className="text-lg font-bold text-neon-orange mb-4 sticky top-[73px] bg-background/95 backdrop-blur-sm py-2 z-40">
                  {group}
                </h2>
                <div className="space-y-3">
                  {items.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      delay={index * 0.05}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {categoryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={index * 0.05}
              />
            ))}
          </div>
        )}
        
        {categoryProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🍹</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Em breve!
            </h3>
            <p className="text-muted-foreground">
              Novos produtos chegando em breve nesta categoria
            </p>
          </motion.div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};
