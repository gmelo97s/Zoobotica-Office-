import { motion } from 'framer-motion';
import { Product } from '@/data/menu';
import { formatPrice } from '@/utils/textUtils';
import { Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  const { addItem } = useCart();
  const showBadges = product.promo;
  
  const handleAddToCart = () => {
    if (product.price) {
      addItem(product);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="p-4 rounded-xl glass hover:glow-orange transition-all duration-300 group"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-neon-orange transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {product.description}
          </p>
          
          {showBadges && (
            <div className="flex flex-wrap gap-2 mb-2">
              {product.promo && (
                <span className="px-2 py-1 rounded-full bg-neon-green/20 text-neon-green text-xs font-semibold">
                  💰 Promoção
                </span>
              )}
            </div>
          )}
          
          {product.schedule && (
            <p className="text-xs text-neon-yellow mt-2">
              ⏰ {product.schedule}
            </p>
          )}
          
          {product.items && product.items.length > 0 && (
            <div className="mt-2 space-y-1">
              {product.items.map((item, index) => (
                <p key={index} className="text-xs text-muted-foreground">
                  • {item}
                </p>
              ))}
            </div>
          )}
          
          {product.includes && product.includes.length > 0 && (
            <div className="mt-2 space-y-1">
              {product.includes.map((item, index) => (
                <p key={index} className="text-xs text-muted-foreground">
                  ✓ {item}
                </p>
              ))}
            </div>
          )}
          
          {product.contact && (
            <p className="text-xs text-neon-blue mt-2">
              📱 {product.contact}
            </p>
          )}
        </div>
        
        <div className="flex-shrink-0 text-right flex flex-col items-end gap-2">
          <p className="text-2xl font-bold text-neon-orange text-glow-orange">
            {formatPrice(product.price)}
          </p>
          {product.size && (
            <p className="text-xs text-muted-foreground">{product.size}</p>
          )}
          {product.maxGuests && (
            <p className="text-xs text-muted-foreground">
              até {product.maxGuests} pessoas
            </p>
          )}
          {product.minGuests && (
            <p className="text-xs text-muted-foreground">
              {product.minGuests}+ pessoas
            </p>
          )}
          
          {product.price && (
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="mt-2 bg-neon-orange hover:bg-neon-orange/80 text-white"
            >
              <Plus size={16} className="mr-1" />
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
