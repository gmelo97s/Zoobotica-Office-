import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Globe } from 'lucide-react';
import supraLogo from '@/assets/supra-logo.jpg';

export const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-30 -z-10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-orange"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>
      
      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 40px hsl(var(--neon-orange) / 0.4)',
                '0 0 60px hsl(var(--neon-orange) / 0.6)',
                '0 0 40px hsl(var(--neon-orange) / 0.4)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-neon-orange"
          >
            <img
              src={supraLogo}
              alt="Supra Bar Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
        
        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
            animate={{ 
              textShadow: [
                '0 0 20px hsl(var(--neon-orange) / 0.5)',
                '0 0 30px hsl(var(--neon-orange) / 0.7)',
                '0 0 20px hsl(var(--neon-orange) / 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MUITO MAIS QUE UM BAR
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-2xl">
            <span>🔥</span>
            <span className="text-neon-orange font-bold">Vila Madalena</span>
            <span>🔥</span>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            onClick={() => navigate('/cardapio')}
            size="lg"
            className="w-full gradient-sunset text-white font-bold text-lg py-6 rounded-xl hover:scale-105 transition-transform duration-300 glow-orange"
          >
            VER CARDÁPIO COMPLETO
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="https://www.instagram.com/suprabarvilamadalena/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                '0 0 15px hsl(var(--neon-magenta) / 0.4)',
                '0 0 25px hsl(var(--neon-magenta) / 0.6)',
                '0 0 15px hsl(var(--neon-magenta) / 0.4)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Instagram className="text-neon-magenta" size={24} />
          </motion.a>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5511912851547"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                '0 0 15px hsl(var(--neon-green) / 0.4)',
                '0 0 25px hsl(var(--neon-green) / 0.6)',
                '0 0 15px hsl(var(--neon-green) / 0.4)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="text-neon-green" size={24} />
          </motion.a>
          <motion.a
            href="https://suprabar.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                '0 0 15px hsl(var(--neon-blue) / 0.4)',
                '0 0 25px hsl(var(--neon-blue) / 0.6)',
                '0 0 15px hsl(var(--neon-blue) / 0.4)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Globe className="text-neon-blue" size={24} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
