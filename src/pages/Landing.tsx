import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, MapPin, Clock, ChevronDown } from 'lucide-react';
import supraLogoNew from '@/assets/supra-logo-new.png';
import supraLogoIcon from '@/assets/supra-logo-icon.png';
import leaoSupra from '@/assets/leao-supra.jpg';
import mosaico01 from '@/assets/mosaico-01.jpg';
import mosaico02 from '@/assets/mosaico-02.jpg';
import mosaico03 from '@/assets/mosaico-03.jpg';
import mosaico04 from '@/assets/mosaico-04.jpg';
import mosaico05 from '@/assets/mosaico-05.jpg';
import mosaico06 from '@/assets/mosaico-06.jpg';
import { LightboxGallery } from '@/components/LightboxGallery';
const socialLinks = [{
  name: 'Instagram',
  url: 'https://www.instagram.com/suprabarvilamadalena/',
  icon: Instagram,
  color: 'text-neon-magenta',
  label: '@suprabarvilamadalena'
}, {
  name: 'WhatsApp',
  url: 'https://api.whatsapp.com/send/?phone=5511912851547',
  icon: MessageCircle,
  color: 'text-neon-green',
  label: '(11) 91285-1547'
}, {
  name: 'Localização',
  url: 'https://www.google.com/maps/search/?api=1&query=R.+Mourato+Coelho+838+Vila+Madalena+São+Paulo+SP',
  icon: MapPin,
  color: 'text-neon-orange',
  label: 'R. Mourato Coelho, 838 - Vila Madalena - SP'
}];
const schedule = [{
  day: 'Quarta-feira',
  hours: '17h - 01h'
}, {
  day: 'Quinta-feira',
  hours: '17h - 01h'
}, {
  day: 'Sexta-feira',
  hours: '17h - 04h'
}, {
  day: 'Sábado',
  hours: '17h - 04h'
}, {
  day: 'Domingo',
  hours: '17h - 01h'
}];
const mosaicoImages = [{
  src: mosaico01,
  alt: 'Supra Bar - Escada e ambiente'
}, {
  src: mosaico02,
  alt: 'Supra Bar - Brinde com cervejas'
}, {
  src: mosaico03,
  alt: 'Supra Bar - Mural do leão'
}, {
  src: mosaico04,
  alt: 'Supra Bar - Bartender preparando drink'
}, {
  src: mosaico05,
  alt: 'Supra Bar - Mesa com bebidas'
}, {
  src: mosaico06,
  alt: 'Supra Bar - Fachada'
}];
export const Landing = () => {
  const navigate = useNavigate();
  const scrollToMosaic = () => {
    document.getElementById('ambiente')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      {/* First Fold - Hero */}
      <section className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 relative overflow-hidden">
        {/* Background with lion image */}
        <div className="absolute inset-0 -z-10">
          <img src={leaoSupra} alt="Supra Lion" className="w-full h-full object-cover blur-sm opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
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
        
        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full space-y-8 text-center relative z-10">
          {/* Logo */}
          <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5
        }} className="relative">
            <motion.img src={supraLogoNew} alt="Supra Bar Logo" className="w-56 md:w-64 mx-auto" animate={{
            filter: ['drop-shadow(0 0 15px hsl(45 100% 50% / 0.3))', 'drop-shadow(0 0 25px hsl(45 100% 50% / 0.5))', 'drop-shadow(0 0 15px hsl(45 100% 50% / 0.3))']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} />
          </motion.div>
          
          {/* Stylized Title */}
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="space-y-3">
            <motion.h1 className="text-4xl md:text-5xl font-black text-foreground tracking-wider uppercase font-bebas" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0,
            textShadow: ['0 0 20px hsl(var(--neon-orange) / 0.5), 0 0 40px hsl(var(--neon-orange) / 0.3)', '0 0 30px hsl(var(--neon-orange) / 0.7), 0 0 60px hsl(var(--neon-orange) / 0.4)', '0 0 20px hsl(var(--neon-orange) / 0.5), 0 0 40px hsl(var(--neon-orange) / 0.3)']
          }} transition={{
            opacity: {
              duration: 0.8,
              delay: 0.3
            },
            y: {
              duration: 0.8,
              delay: 0.3,
              type: 'spring'
            },
            textShadow: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}>
              MUITO MAIS QUE UM BAR!
            </motion.h1>
            <div className="flex items-center justify-center gap-2 text-2xl">
              <span className="text-neon-orange font-bold text-base">Vila Madalena</span>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }}>
            <Button onClick={() => navigate('/cardapio')} size="lg" className="w-full gradient-sunset text-white font-bold text-lg py-6 rounded-xl hover:scale-105 transition-transform duration-300 glow-orange">
              VER CARDÁPIO COMPLETO
              <motion.span animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }} className="ml-2">
                →
              </motion.span>
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }} className="flex gap-4 justify-center">
            <motion.a href="https://www.instagram.com/suprabarvilamadalena/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all duration-300" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} animate={{
            boxShadow: ['0 0 15px hsl(var(--neon-magenta) / 0.4)', '0 0 25px hsl(var(--neon-magenta) / 0.6)', '0 0 15px hsl(var(--neon-magenta) / 0.4)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              <Instagram className="text-neon-magenta" size={24} />
            </motion.a>
            <motion.a href="https://api.whatsapp.com/send/?phone=5511912851547" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all duration-300" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} animate={{
            boxShadow: ['0 0 15px hsl(var(--neon-green) / 0.4)', '0 0 25px hsl(var(--neon-green) / 0.6)', '0 0 15px hsl(var(--neon-green) / 0.4)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              <MessageCircle className="text-neon-green" size={24} />
            </motion.a>
            <motion.a href="https://suprabar.com.br/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all duration-300 overflow-hidden" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} animate={{
            boxShadow: ['0 0 15px hsl(var(--neon-orange) / 0.4)', '0 0 25px hsl(var(--neon-orange) / 0.6)', '0 0 15px hsl(var(--neon-orange) / 0.4)']
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              <img src={supraLogoIcon} alt="Supra Bar" className="w-9 h-9 object-contain" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll CTA - positioned at bottom */}
        <motion.button onClick={scrollToMosaic} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-neon-orange transition-colors pb-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.5
      }}>
          <span className="text-sm font-medium">Nosso Ambiente</span>
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </section>

      {/* Second Fold - Mosaic */}
      <section id="ambiente" className="py-12 px-4 sm:px-6 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div className="text-center space-y-2" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase text-glow-orange font-bebas tracking-wider">
              Conheça Nosso Ambiente
            </h2>
            <p className="text-muted-foreground">Toque nas fotos para ampliar</p>
          </motion.div>

          <LightboxGallery images={mosaicoImages} />

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }} className="pt-4">
            <Button onClick={() => navigate('/cardapio')} size="lg" className="w-full gradient-sunset text-white font-bold text-lg py-6 rounded-xl hover:scale-105 transition-transform duration-300 glow-orange">
              VER CARDÁPIO COMPLETO
              <motion.span animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }} className="ml-2">
                →
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Third Fold - Contact & Info */}
      <section className="py-12 px-4 sm:px-6">
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
            <p>© 2025 Supra Bar Vila Madalena. Muito mais que um bar.</p>
          </div>
        </div>
      </section>
    </div>;
};