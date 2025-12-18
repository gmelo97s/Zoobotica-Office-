import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zooboticapet/',
    icon: Instagram,
    color: 'text-neon-magenta',
    label: '@zooboticapet'
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=5511952685530',
    icon: MessageCircle,
    color: 'text-neon-green',
    label: '(11) 95268-5530'
  },
  {
    name: 'Localização',
    url: 'https://www.google.com/maps/search/?api=1&query=R.+Tabor+465+Ipiranga+São+Paulo+SP',
    icon: MapPin,
    color: 'text-neon-orange',
    label: 'R. Tabor, 465 - Ipiranga - SP'
  }
];

const schedule = [
  { day: 'Segunda à Sexta', hours: '08h às 19h' },
  { day: 'Sábado', hours: '08h às 18h' },
  { day: 'Domingo', hours: '09h às 14h' }
];

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 glass mt-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Horários */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-neon-orange" size={20} />
            <h3 className="font-bold text-lg text-foreground">Horários de Funcionamento</h3>
          </div>
          <div className="space-y-2">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-muted-foreground">
                  {item.day}:
                </span>
                <span className="text-muted-foreground">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Links Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 p-4 rounded-xl glass hover:glow-orange transition-all duration-300"
            >
              <link.icon className={link.color} size={24} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">{link.name}</p>
                <p className="text-xs text-muted-foreground truncate">{link.label}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
          <p>© 2025 Zoobotica Pet Shop. Cuidado e carinho para o seu pet 🐾</p>
        </div>
      </div>
    </footer>
  );
};
