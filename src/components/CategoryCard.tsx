import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  image?: string;
  gradient?: string;
  itemCount: number;
  onClick: () => void;
  delay?: number;
}
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
export const CategoryCard = ({
  name,
  icon,
  image,
  gradient,
  itemCount,
  onClick,
  delay = 0
}: CategoryCardProps) => {
  const bgImage = image && imageMap[image];
  return <motion.button initial={{
    opacity: 0,
    scale: 0.9
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    delay,
    duration: 0.3
  }} whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick} className={cn('relative overflow-hidden rounded-xl aspect-square glass', 'hover:glow-orange transition-all duration-300 group')}>
      {/* Background */}
      <div className="absolute inset-0">
        {bgImage ? <img src={bgImage} alt={name} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300" /> : gradient ? <div className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-300" style={{
        background: gradient
      }} /> : <div className="w-full h-full bg-gradient-to-br from-neon-orange/20 to-neon-magenta/20 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />}
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full p-4 flex flex-col justify-end items-start">
        
        <h3 className="font-bold text-lg text-foreground text-left mb-1 text-glow-orange">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {itemCount} {itemCount === 1 ? 'item' : 'itens'}
        </p>
      </div>
    </motion.button>;
};