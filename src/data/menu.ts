export interface Product {
  id: string;
  name: string;
  price: number | null;
  description: string;
  category: string;
  subcategory?: string;
  tags: string[];
  size?: string;
  featured?: boolean;
  popular?: boolean;
  special?: boolean;
  nonAlcoholic?: boolean;
  promo?: boolean;
  schedule?: string;
  items?: string[];
  includes?: string[];
  maxGuests?: number;
  minGuests?: number;
  contact?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image?: string;
  gradient?: string;
  itemCount: number;
}

export const categories: Category[] = [
  {
    id: 'servicos-clinica',
    name: 'Serviços de Clínica',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    itemCount: 6
  },
  {
    id: 'eventos-especiais',
    name: 'Eventos e Especiais',
    icon: '🎉',
    gradient: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
    itemCount: 4
  },
  {
    id: 'boutique-acessorios',
    name: 'Boutique e Acessórios',
    icon: '👕',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    itemCount: 8
  },
  {
    id: 'farmacia-pet',
    name: 'Farmácia Pet',
    icon: '💊',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    itemCount: 10
  },
  {
    id: 'nutricao-gatos',
    name: 'Nutrição para Gatos',
    icon: '🐱',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    itemCount: 12
  },
  {
    id: 'nutricao-caes',
    name: 'Nutrição para Cães',
    icon: '🐕',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    itemCount: 15
  },
  {
    id: 'daycare-hotel',
    name: 'Day Care e Hotel',
    icon: '🏨',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
    itemCount: 5
  },
  {
    id: 'estetica-spa',
    name: 'Estética e SPA',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    itemCount: 8
  }
];

export const products: Product[] = [
  // SERVIÇOS DE CLÍNICA
  {
    id: 'consulta-clinica',
    name: 'Consulta Clínica',
    price: 150.00,
    description: 'Atendimento veterinário completo com avaliação geral',
    category: 'Serviços de Clínica',
    tags: ['consulta', 'veterinário', 'saúde', 'clínica'],
    popular: true
  },
  {
    id: 'vacinacao',
    name: 'Vacinação',
    price: 80.00,
    description: 'Aplicação de vacinas com orientação veterinária',
    category: 'Serviços de Clínica',
    tags: ['vacina', 'imunização', 'prevenção'],
  },
  {
    id: 'vermifugacao',
    name: 'Vermifugação',
    price: 45.00,
    description: 'Tratamento e prevenção contra vermes',
    category: 'Serviços de Clínica',
    tags: ['vermífugo', 'parasitas', 'prevenção'],
  },
  {
    id: 'exames-laboratoriais',
    name: 'Exames Laboratoriais',
    price: 120.00,
    description: 'Exames de sangue, urina e outros',
    category: 'Serviços de Clínica',
    tags: ['exame', 'sangue', 'laboratório', 'diagnóstico'],
  },
  {
    id: 'ultrassonografia',
    name: 'Ultrassonografia',
    price: 200.00,
    description: 'Exame de imagem por ultrassom',
    category: 'Serviços de Clínica',
    tags: ['ultrassom', 'imagem', 'diagnóstico'],
    featured: true
  },
  {
    id: 'microchip',
    name: 'Implante de Microchip',
    price: 90.00,
    description: 'Identificação permanente do seu pet',
    category: 'Serviços de Clínica',
    tags: ['microchip', 'identificação', 'segurança'],
  },

  // EVENTOS E ESPECIAIS
  {
    id: 'festa-aniversario',
    name: 'Festa de Aniversário Pet',
    price: 350.00,
    description: 'Pacote completo com decoração e bolo pet-friendly',
    category: 'Eventos e Especiais',
    tags: ['festa', 'aniversário', 'celebração'],
    featured: true,
    special: true
  },
  {
    id: 'ensaio-fotografico',
    name: 'Ensaio Fotográfico',
    price: 180.00,
    description: 'Sessão de fotos profissional para seu pet',
    category: 'Eventos e Especiais',
    tags: ['foto', 'ensaio', 'profissional'],
    special: true
  },
  {
    id: 'pacote-casamento-pet',
    name: 'Pacote Casamento Pet',
    price: 500.00,
    description: 'Seu pet como padrinho/madrinha no grande dia',
    category: 'Eventos e Especiais',
    tags: ['casamento', 'evento', 'especial'],
    special: true
  },
  {
    id: 'cha-revelacao-pet',
    name: 'Chá Revelação Pet',
    price: 280.00,
    description: 'Revelação do sexo do filhote com festa',
    category: 'Eventos e Especiais',
    tags: ['chá revelação', 'filhote', 'festa'],
    special: true
  },

  // BOUTIQUE E ACESSÓRIOS
  {
    id: 'roupa-inverno',
    name: 'Roupas de Inverno',
    price: 75.00,
    description: 'Casacos e moletons para dias frios',
    category: 'Boutique e Acessórios',
    tags: ['roupa', 'inverno', 'casaco', 'moletom'],
    popular: true
  },
  {
    id: 'coleira-personalizada',
    name: 'Coleira Personalizada',
    price: 55.00,
    description: 'Coleiras com nome gravado',
    category: 'Boutique e Acessórios',
    tags: ['coleira', 'personalizada', 'acessório'],
  },
  {
    id: 'cama-pet-premium',
    name: 'Cama Pet Premium',
    price: 180.00,
    description: 'Camas confortáveis e duráveis',
    category: 'Boutique e Acessórios',
    tags: ['cama', 'conforto', 'descanso'],
    featured: true
  },
  {
    id: 'brinquedo-interativo',
    name: 'Brinquedos Interativos',
    price: 45.00,
    description: 'Brinquedos para estimulação mental',
    category: 'Boutique e Acessórios',
    tags: ['brinquedo', 'interativo', 'diversão'],
  },
  {
    id: 'comedouro-bebedouro',
    name: 'Comedouro e Bebedouro',
    price: 65.00,
    description: 'Conjuntos em inox ou cerâmica',
    category: 'Boutique e Acessórios',
    tags: ['comedouro', 'bebedouro', 'alimentação'],
  },
  {
    id: 'transporte-bolsa',
    name: 'Bolsa de Transporte',
    price: 120.00,
    description: 'Bolsas para transporte seguro',
    category: 'Boutique e Acessórios',
    tags: ['bolsa', 'transporte', 'passeio'],
  },
  {
    id: 'guia-peitoral',
    name: 'Guia com Peitoral',
    price: 85.00,
    description: 'Conjunto guia e peitoral ergonômico',
    category: 'Boutique e Acessórios',
    tags: ['guia', 'peitoral', 'passeio'],
  },
  {
    id: 'fantasia-pet',
    name: 'Fantasias',
    price: 60.00,
    description: 'Fantasias para datas especiais',
    category: 'Boutique e Acessórios',
    tags: ['fantasia', 'festa', 'especial'],
  },

  // FARMÁCIA PET
  {
    id: 'antipulgas-carrapatos',
    name: 'Antipulgas e Carrapatos',
    price: 85.00,
    description: 'Proteção contra parasitas externos',
    category: 'Farmácia Pet',
    tags: ['antipulgas', 'carrapatos', 'proteção'],
    popular: true
  },
  {
    id: 'vermifugo-oral',
    name: 'Vermífugo Oral',
    price: 35.00,
    description: 'Comprimidos palatáveis contra vermes',
    category: 'Farmácia Pet',
    tags: ['vermífugo', 'oral', 'comprimido'],
  },
  {
    id: 'suplemento-vitaminas',
    name: 'Suplementos Vitamínicos',
    price: 55.00,
    description: 'Vitaminas para saúde completa',
    category: 'Farmácia Pet',
    tags: ['suplemento', 'vitamina', 'saúde'],
  },
  {
    id: 'shampoo-medicinal',
    name: 'Shampoo Medicinal',
    price: 48.00,
    description: 'Shampoos para tratamento dermatológico',
    category: 'Farmácia Pet',
    tags: ['shampoo', 'medicinal', 'dermatológico'],
  },
  {
    id: 'colírio-otologico',
    name: 'Colírio e Otológico',
    price: 42.00,
    description: 'Produtos para olhos e ouvidos',
    category: 'Farmácia Pet',
    tags: ['colírio', 'otológico', 'tratamento'],
  },
  {
    id: 'pomada-cicatrizante',
    name: 'Pomada Cicatrizante',
    price: 38.00,
    description: 'Para feridas e lesões de pele',
    category: 'Farmácia Pet',
    tags: ['pomada', 'cicatrizante', 'ferida'],
  },
  {
    id: 'probioticos',
    name: 'Probióticos',
    price: 65.00,
    description: 'Para saúde intestinal',
    category: 'Farmácia Pet',
    tags: ['probiótico', 'intestinal', 'digestão'],
  },
  {
    id: 'calmante-natural',
    name: 'Calmante Natural',
    price: 72.00,
    description: 'Florais e calmantes naturais',
    category: 'Farmácia Pet',
    tags: ['calmante', 'natural', 'floral'],
  },
  {
    id: 'protetor-solar-pet',
    name: 'Protetor Solar Pet',
    price: 45.00,
    description: 'Proteção para pets de pelagem clara',
    category: 'Farmácia Pet',
    tags: ['protetor solar', 'pele', 'proteção'],
  },
  {
    id: 'repelente-natural',
    name: 'Repelente Natural',
    price: 52.00,
    description: 'Proteção natural contra insetos',
    category: 'Farmácia Pet',
    tags: ['repelente', 'natural', 'insetos'],
  },

  // NUTRIÇÃO PARA GATOS
  {
    id: 'racao-gato-filhote',
    name: 'Ração Gato Filhote Premium',
    price: 95.00,
    description: 'Ração premium para gatos até 12 meses',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'gato', 'filhote', 'premium'],
    popular: true
  },
  {
    id: 'racao-gato-adulto',
    name: 'Ração Gato Adulto Premium',
    price: 120.00,
    description: 'Ração premium para gatos adultos',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'gato', 'adulto', 'premium'],
    popular: true
  },
  {
    id: 'racao-gato-castrado',
    name: 'Ração Gato Castrado',
    price: 135.00,
    description: 'Fórmula especial para castrados',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'gato', 'castrado'],
    featured: true
  },
  {
    id: 'racao-gato-senior',
    name: 'Ração Gato Sênior',
    price: 140.00,
    description: 'Para gatos acima de 7 anos',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'gato', 'sênior', 'idoso'],
  },
  {
    id: 'sache-gato',
    name: 'Sachê para Gatos',
    price: 8.00,
    description: 'Alimentação úmida premium',
    category: 'Nutrição para Gatos',
    tags: ['sachê', 'gato', 'úmida'],
  },
  {
    id: 'petisco-gato',
    name: 'Petiscos para Gatos',
    price: 18.00,
    description: 'Snacks e treats saborosos',
    category: 'Nutrição para Gatos',
    tags: ['petisco', 'gato', 'snack'],
  },
  {
    id: 'pasta-malte',
    name: 'Pasta de Malte',
    price: 28.00,
    description: 'Auxilia na eliminação de bolas de pelo',
    category: 'Nutrição para Gatos',
    tags: ['malte', 'bola de pelo', 'gato'],
  },
  {
    id: 'leite-gatos',
    name: 'Leite para Gatos',
    price: 22.00,
    description: 'Leite sem lactose para felinos',
    category: 'Nutrição para Gatos',
    tags: ['leite', 'gato', 'sem lactose'],
  },
  {
    id: 'erva-gato',
    name: 'Erva do Gato',
    price: 15.00,
    description: 'Catnip orgânico para entretenimento',
    category: 'Nutrição para Gatos',
    tags: ['catnip', 'erva', 'gato'],
  },
  {
    id: 'racao-gato-urinario',
    name: 'Ração Trato Urinário',
    price: 160.00,
    description: 'Prevenção de problemas urinários',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'urinário', 'gato', 'saúde'],
  },
  {
    id: 'racao-gato-sensivel',
    name: 'Ração Digestão Sensível',
    price: 155.00,
    description: 'Para gatos com estômago sensível',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'sensível', 'digestão', 'gato'],
  },
  {
    id: 'alimentacao-natural-gato',
    name: 'Alimentação Natural Gatos',
    price: 45.00,
    description: 'Porções de AN congeladas',
    category: 'Nutrição para Gatos',
    tags: ['alimentação natural', 'AN', 'gato'],
    special: true
  },

  // NUTRIÇÃO PARA CÃES
  {
    id: 'racao-cao-filhote',
    name: 'Ração Cão Filhote Premium',
    price: 110.00,
    description: 'Ração premium para cães até 12 meses',
    category: 'Nutrição para Cães',
    tags: ['ração', 'cão', 'filhote', 'premium'],
    popular: true
  },
  {
    id: 'racao-cao-adulto-pp',
    name: 'Ração Cão Adulto Porte Pequeno',
    price: 125.00,
    description: 'Para cães de pequeno porte',
    category: 'Nutrição para Cães',
    tags: ['ração', 'cão', 'adulto', 'pequeno'],
    popular: true
  },
  {
    id: 'racao-cao-adulto-mg',
    name: 'Ração Cão Adulto Porte Médio/Grande',
    price: 145.00,
    description: 'Para cães de médio e grande porte',
    category: 'Nutrição para Cães',
    tags: ['ração', 'cão', 'adulto', 'médio', 'grande'],
  },
  {
    id: 'racao-cao-senior',
    name: 'Ração Cão Sênior',
    price: 150.00,
    description: 'Para cães acima de 7 anos',
    category: 'Nutrição para Cães',
    tags: ['ração', 'cão', 'sênior', 'idoso'],
  },
  {
    id: 'racao-cao-light',
    name: 'Ração Cão Light',
    price: 140.00,
    description: 'Controle de peso para cães',
    category: 'Nutrição para Cães',
    tags: ['ração', 'cão', 'light', 'peso'],
    featured: true
  },
  {
    id: 'sache-cao',
    name: 'Sachê para Cães',
    price: 7.00,
    description: 'Alimentação úmida saborosa',
    category: 'Nutrição para Cães',
    tags: ['sachê', 'cão', 'úmida'],
  },
  {
    id: 'petisco-cao',
    name: 'Petiscos para Cães',
    price: 20.00,
    description: 'Snacks e bifinhos',
    category: 'Nutrição para Cães',
    tags: ['petisco', 'cão', 'bifinho'],
  },
  {
    id: 'osso-cao',
    name: 'Ossos e Mordedores',
    price: 25.00,
    description: 'Ossos naturais e sintéticos',
    category: 'Nutrição para Cães',
    tags: ['osso', 'mordedor', 'cão'],
  },
  {
    id: 'racao-cao-hipoalergenica',
    name: 'Ração Hipoalergênica',
    price: 180.00,
    description: 'Para cães com alergias alimentares',
    category: 'Nutrição para Cães',
    tags: ['ração', 'hipoalergênica', 'alergia', 'cão'],
  },
  {
    id: 'racao-cao-renal',
    name: 'Ração Suporte Renal',
    price: 175.00,
    description: 'Para cães com problemas renais',
    category: 'Nutrição para Cães',
    tags: ['ração', 'renal', 'cão', 'saúde'],
  },
  {
    id: 'racao-cao-articulacoes',
    name: 'Ração Suporte Articular',
    price: 170.00,
    description: 'Com glucosamina e condroitina',
    category: 'Nutrição para Cães',
    tags: ['ração', 'articulação', 'cão'],
  },
  {
    id: 'alimentacao-natural-cao',
    name: 'Alimentação Natural Cães',
    price: 55.00,
    description: 'Porções de AN congeladas',
    category: 'Nutrição para Cães',
    tags: ['alimentação natural', 'AN', 'cão'],
    special: true
  },
  {
    id: 'suplemento-omega',
    name: 'Suplemento Ômega 3',
    price: 65.00,
    description: 'Para pelagem brilhante e saudável',
    category: 'Nutrição para Cães',
    tags: ['suplemento', 'ômega', 'pelagem', 'cão'],
  },
  {
    id: 'biscoito-cao',
    name: 'Biscoitos Funcionais',
    price: 35.00,
    description: 'Biscoitos com benefícios à saúde',
    category: 'Nutrição para Cães',
    tags: ['biscoito', 'funcional', 'cão'],
  },
  {
    id: 'pasta-amendoim-pet',
    name: 'Pasta de Amendoim Pet',
    price: 32.00,
    description: 'Sem xilitol, segura para pets',
    category: 'Nutrição para Cães',
    tags: ['pasta', 'amendoim', 'cão'],
  },

  // DAY CARE E HOTEL
  {
    id: 'daycare-diaria',
    name: 'Day Care - Diária',
    price: 80.00,
    description: 'Creche diurna com atividades e socialização',
    category: 'Day Care e Hotel',
    tags: ['daycare', 'creche', 'diária'],
    popular: true
  },
  {
    id: 'daycare-pacote-5',
    name: 'Day Care - Pacote 5 Diárias',
    price: 350.00,
    description: 'Pacote semanal com desconto',
    category: 'Day Care e Hotel',
    tags: ['daycare', 'pacote', 'semanal'],
    featured: true
  },
  {
    id: 'hotel-diaria',
    name: 'Hotel Pet - Diária',
    price: 120.00,
    description: 'Hospedagem com acompanhamento 24h',
    category: 'Day Care e Hotel',
    tags: ['hotel', 'hospedagem', 'diária'],
    popular: true
  },
  {
    id: 'hotel-suite-vip',
    name: 'Suíte VIP - Diária',
    price: 180.00,
    description: 'Acomodação premium com webcam',
    category: 'Day Care e Hotel',
    tags: ['hotel', 'vip', 'suíte', 'webcam'],
    featured: true,
    special: true
  },
  {
    id: 'passeio-adicional',
    name: 'Passeio Adicional',
    price: 25.00,
    description: 'Passeios extras durante a hospedagem',
    category: 'Day Care e Hotel',
    tags: ['passeio', 'adicional', 'hotel'],
  },

  // ESTÉTICA E SPA
  {
    id: 'banho-tosa-pequeno',
    name: 'Banho e Tosa - Porte Pequeno',
    price: 70.00,
    description: 'Banho completo com tosa higiênica ou estética',
    category: 'Estética e SPA',
    tags: ['banho', 'tosa', 'pequeno'],
    popular: true
  },
  {
    id: 'banho-tosa-medio',
    name: 'Banho e Tosa - Porte Médio',
    price: 95.00,
    description: 'Banho completo com tosa higiênica ou estética',
    category: 'Estética e SPA',
    tags: ['banho', 'tosa', 'médio'],
    popular: true
  },
  {
    id: 'banho-tosa-grande',
    name: 'Banho e Tosa - Porte Grande',
    price: 130.00,
    description: 'Banho completo com tosa higiênica ou estética',
    category: 'Estética e SPA',
    tags: ['banho', 'tosa', 'grande'],
  },
  {
    id: 'spa-completo',
    name: 'SPA Completo',
    price: 180.00,
    description: 'Banho, tosa, hidratação e aromaterapia',
    category: 'Estética e SPA',
    tags: ['spa', 'completo', 'hidratação', 'aromaterapia'],
    featured: true,
    special: true
  },
  {
    id: 'hidratacao-pelagem',
    name: 'Hidratação de Pelagem',
    price: 45.00,
    description: 'Tratamento intensivo para pelos ressecados',
    category: 'Estética e SPA',
    tags: ['hidratação', 'pelagem', 'tratamento'],
  },
  {
    id: 'tosa-tesoura',
    name: 'Tosa na Tesoura',
    price: 60.00,
    description: 'Tosa artística feita à mão',
    category: 'Estética e SPA',
    tags: ['tosa', 'tesoura', 'artística'],
  },
  {
    id: 'escovacao-dentes',
    name: 'Escovação de Dentes',
    price: 35.00,
    description: 'Higiene bucal com pasta pet',
    category: 'Estética e SPA',
    tags: ['escovação', 'dentes', 'higiene'],
  },
  {
    id: 'corte-unhas',
    name: 'Corte de Unhas',
    price: 25.00,
    description: 'Corte e lixa das unhas',
    category: 'Estética e SPA',
    tags: ['unhas', 'corte', 'lixa'],
  }
];
