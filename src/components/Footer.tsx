import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/suprabarvilamadalena/',
    icon: Instagram,
    color: 'text-neon-magenta',
    label: '@suprabarvilamadalena'
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=5511912851547',
    icon: MessageCircle,
    color: 'text-neon-green',
    label: '(11) 91285-1547'
  },
  {
    name: 'Localização',
    url: 'https://www.google.com/maps/search/?api=1&query=R.+Mourato+Coelho+838+Vila+Madalena+São+Paulo+SP',
    icon: MapPin,
    color: 'text-neon-orange',
    label: 'R. Mourato Coelho, 838'
  }
];

const schedule = [
  { day: 'Quarta-feira', hours: '17h - 01h' },
  { day: 'Quinta-feira', hours: '17h - 01h' },
  { day: 'Sexta-feira', hours: '17h - 04h', highlight: true },
  { day: 'Sábado', hours: '17h - 04h', highlight: true },
  { day: 'Domingo', hours: '17h - 01h' }
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
                <span className={item.highlight ? 'font-semibold text-foreground' : 'text-muted-foreground'}>
                  {item.day}:
                </span>
                <span className={item.highlight ? 'font-bold text-neon-orange' : 'text-muted-foreground'}>
                  {item.hours} {item.highlight && '🔥'}
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
          <p>© 2025 Supra Bar Vila Madalena. Muito mais que um bar 🔥</p>
        </div>
      </div>
    </footer>
  );
};
