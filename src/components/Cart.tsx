import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

export const Cart = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = 'Olá, gostaria de fazer o pedido abaixo:\n\n';
    
    items.forEach(item => {
      const price = item.product.price || 0;
      const itemTotal = price * item.quantity;
      message += `${item.product.name} | Qtd: ${item.quantity} | ${formatPrice(itemTotal)}\n`;
    });

    message += `\nTOTAL: ${formatPrice(getTotalPrice())}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5511952685530&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Cart Button */}
      <motion.button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-neon-orange flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px hsl(28 100% 55% / 0.4)',
            '0 0 30px hsl(28 100% 55% / 0.6)',
            '0 0 20px hsl(28 100% 55% / 0.4)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ShoppingCart className="text-white" size={24} />
        {getTotalItems() > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-neon-magenta rounded-full flex items-center justify-center text-xs font-bold text-white">
            {getTotalItems()}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="text-neon-orange" size={24} />
                  <h2 className="text-xl font-bold text-foreground">Meu Carrinho</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="text-foreground" size={24} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <ShoppingCart size={48} className="mb-4 opacity-50" />
                    <p>Seu carrinho está vazio</p>
                    <p className="text-sm">Adicione itens para continuar</p>
                  </div>
                ) : (
                  items.map(item => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="glass p-4 rounded-xl"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.product.description}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-bold text-neon-orange">
                          {formatPrice((item.product.price || 0) * item.quantity)}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-4 border-t border-border space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-2xl font-bold text-neon-orange">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-neon-green hover:bg-neon-green/90 text-white font-bold py-6"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Fazer Pedido no WhatsApp
                    </Button>

                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="w-full"
                    >
                      Limpar Carrinho
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

