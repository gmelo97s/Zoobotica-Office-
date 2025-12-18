import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, MapPin, Clock, ChevronDown } from 'lucide-react';
import zooboticaHero from '@/assets/zoobotica hero.png';

const socialLinks = [{
  name: 'Instagram',
  url: 'https://www.instagram.com/zooboticapet/',
  icon: Instagram,
  color: 'text-neon-magenta',
  label: '@zooboticapet'
}, {
  name: 'WhatsApp',
  url: 'https://api.whatsapp.com/send/?phone=5511952685530',
  icon: MessageCircle,
  color: 'text-neon-green',
  label: '(11) 95268-5530'
}, {
  name: 'Localização',
  url: 'https://www.google.com/maps/search/?api=1&query=R.+Tabor+465+Ipiranga+São+Paulo+SP',
  icon: MapPin,
  color: 'text-neon-orange',
  label: 'R. Tabor, 465 - Ipiranga - SP'
}];

const schedule = [{
  day: 'Segunda à Sexta',
  hours: '08h às 19h'
}, {
  day: 'Sábado',
  hours: '08h às 18h'
}, {
  day: 'Domingo',
  hours: '09h às 14h'
}];

export const Landing = () => {
  const navigate = useNavigate();
  const scrollToInfo = () => {
    document.getElementById('info')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <div className="min-h-screen">
      {/* First Fold - Hero */}
      <section className="min-h-screen flex flex-col items-center justify-end p-4 sm:p-6 relative overflow-hidden">
        {/* Background with zoobotica image */}
        <div className="absolute inset-0 -z-10">
          <img src={zooboticaHero} alt="Zoobotica Hero" className="w-full h-full object-cover" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 -z-10">
          {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-neon-orange" initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          opacity: 0
        }} animate={{
          y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
          opacity: [0, 0.5, 0]
        }} transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          ease: 'linear'
        }} />)}
        </div>
        
        {/* Área de Botões - Fixada no rodapé */}
        <div className="w-full max-w-md flex flex-col items-center gap-4 pb-4 relative z-10">
          {/* Botão Explorar */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1, duration: 0.5 }}
            className="w-full px-4"
          >
            <Button 
              onClick={() => navigate('/cardapio')} 
              size="lg" 
              className="w-full gradient-sunset text-white font-bold text-lg py-6 rounded-xl hover:scale-105 transition-transform duration-300 glow-orange"
            >
              EXPLORAR
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }} 
                className="ml-2"
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Ícones Sociais */}
          <motion.div initial={{
          y: 10,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="flex gap-5 justify-center">
            <motion.a href="https://www.instagram.com/zooboticapet/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} animate={{
            boxShadow: ['0 0 10px hsl(var(--neon-magenta) / 0.3)', '0 0 20px hsl(var(--neon-magenta) / 0.5)', '0 0 10px hsl(var(--neon-magenta) / 0.3)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              <Instagram className="text-neon-magenta" size={24} />
            </motion.a>
            <motion.a href="https://api.whatsapp.com/send/?phone=5511952685530" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} animate={{
            boxShadow: ['0 0 10px hsl(var(--neon-green) / 0.3)', '0 0 20px hsl(var(--neon-green) / 0.5)', '0 0 10px hsl(var(--neon-green) / 0.3)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              <MessageCircle className="text-neon-green" size={24} />
            </motion.a>
          </motion.div>

          {/* Botão de Scroll */}
          <motion.button onClick={scrollToInfo} className="flex flex-col items-center gap-1 text-muted-foreground/80 hover:text-neon-orange transition-colors" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5,
          duration: 0.5
        }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Informações</span>
            <motion.div animate={{
            y: [0, 4, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>
              <ChevronDown size={18} />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Second Fold - Contact & Info */}
      <section id="info" className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Schedule */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-neon-orange" size={20} />
              <h3 className="font-bold text-lg text-foreground">Horários de Funcionamento</h3>
            </div>
            <div className="space-y-2">
              {schedule.map(item => <div key={item.day} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    {item.day}:
                  </span>
                  <span className="text-muted-foreground">
                    {item.hours}
                  </span>
                </div>)}
            </div>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialLinks.map((link, index) => <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} className="flex items-center gap-3 p-4 rounded-xl glass hover:glow-orange transition-all duration-300">
                <link.icon className={link.color} size={24} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">{link.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{link.label}</p>
                </div>
              </motion.a>)}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
            <p>© 2025 Zoobotica Pet Shop. Cuidado e carinho para o seu pet.</p>
          </div>
        </div>
      </section>
    </div>;
};
