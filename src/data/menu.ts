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
    itemCount: 12
  },
  {
    id: 'boutique-acessorios',
    name: 'Boutique e Acessórios',
    icon: '👕',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    itemCount: 12
  },
  {
    id: 'farmacia-pet',
    name: 'Farmácia Pet',
    icon: '💊',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    itemCount: 12
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
    itemCount: 10
  },
  {
    id: 'banho-tosa',
    name: 'Banho e Tosa',
    icon: '🛁',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    itemCount: 12
  }
];

export const products: Product[] = [
  // ========== SERVIÇOS DE CLÍNICA (12 itens) ==========
  {
    id: 'consulta-clinica',
    name: 'Consulta Veterinária',
    price: 150.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['consulta', 'veterinário', 'saúde', 'clínica'],

  },
  {
    id: 'vacina-v8-v10',
    name: 'Vacina V8/V10 (Cães)',
    price: 90.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['vacina', 'v8', 'v10', 'cão', 'imunização'],

  },
  {
    id: 'vacina-triplice-felina',
    name: 'Vacina Tríplice Felina',
    price: 85.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['vacina', 'gato', 'felina', 'tríplice'],
  },
  {
    id: 'vacina-antirrabica',
    name: 'Vacina Antirrábica',
    price: 65.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['vacina', 'raiva', 'antirrábica'],
  },
  {
    id: 'castracao-macho-pp',
    name: 'Castração Macho Porte Pequeno',
    price: 450.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['castração', 'cirurgia', 'macho'],

  },
  {
    id: 'castracao-femea-pp',
    name: 'Castração Fêmea Porte Pequeno',
    price: 550.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['castração', 'cirurgia', 'fêmea'],

  },
  {
    id: 'exame-hemograma',
    name: 'Hemograma Completo',
    price: 85.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['exame', 'sangue', 'hemograma', 'laboratório'],
  },
  {
    id: 'exame-bioquimico',
    name: 'Perfil Bioquímico',
    price: 120.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['exame', 'bioquímico', 'laboratório'],
  },
  {
    id: 'ultrassonografia',
    name: 'Ultrassonografia Abdominal',
    price: 220.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['ultrassom', 'imagem', 'diagnóstico'],
  },
  {
    id: 'raio-x',
    name: 'Raio-X Digital',
    price: 150.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['raio-x', 'imagem', 'diagnóstico'],
  },
  {
    id: 'microchip',
    name: 'Implante de Microchip',
    price: 95.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['microchip', 'identificação', 'segurança'],
  },
  {
    id: 'limpeza-tartaro',
    name: 'Limpeza de Tártaro',
    price: 350.00,
    description: '',
    category: 'Serviços de Clínica',
    tags: ['tartaro', 'dental', 'limpeza'],
  },

  // ========== BOUTIQUE E ACESSÓRIOS (12 itens) ==========
  {
    id: 'coleira-couro-premium',
    name: 'Coleira de Couro Premium',
    price: 89.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['coleira', 'couro', 'premium'],

  },
  {
    id: 'guia-retrátil-5m',
    name: 'Guia Retrátil 5 metros',
    price: 75.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['guia', 'retrátil', 'passeio'],

  },
  {
    id: 'peitoral-anti-puxao',
    name: 'Peitoral Anti-Puxão',
    price: 95.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['peitoral', 'passeio', 'treinamento'],

  },
  {
    id: 'cama-ortopedica-m',
    name: 'Cama Ortopédica Tamanho M',
    price: 189.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['cama', 'ortopédica', 'conforto'],

  },
  {
    id: 'cama-iglu-gato',
    name: 'Cama Iglu para Gatos',
    price: 125.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['cama', 'iglu', 'gato'],
  },
  {
    id: 'comedouro-inox-duplo',
    name: 'Comedouro Duplo Inox',
    price: 65.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['comedouro', 'bebedouro', 'inox'],
  },
  {
    id: 'bebedouro-fonte',
    name: 'Bebedouro Fonte Automático',
    price: 145.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['bebedouro', 'fonte', 'automático'],
  },
  {
    id: 'brinquedo-kong-classic',
    name: 'Kong Classic M',
    price: 75.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['brinquedo', 'kong', 'interativo'],

  },
  {
    id: 'arranhador-torre',
    name: 'Arranhador Torre para Gatos',
    price: 220.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['arranhador', 'gato', 'torre'],
  },
  {
    id: 'bolsa-transporte-aerea',
    name: 'Bolsa de Transporte Aérea',
    price: 185.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['bolsa', 'transporte', 'avião', 'viagem'],
  },
  {
    id: 'roupa-inverno-fleece',
    name: 'Moletom Fleece para Cães',
    price: 79.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['roupa', 'inverno', 'moletom'],
  },
  {
    id: 'capa-carro-pet',
    name: 'Capa Protetora para Carro',
    price: 135.00,
    description: '',
    category: 'Boutique e Acessórios',
    tags: ['capa', 'carro', 'proteção'],
  },

  // ========== FARMÁCIA PET (12 itens) ==========
  {
    id: 'bravecto-caes-4-10kg',
    name: 'Bravecto 4,5-10kg',
    price: 165.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['antipulgas', 'carrapatos', 'bravecto'],

  },
  {
    id: 'nexgard-caes-4-10kg',
    name: 'NexGard 4-10kg',
    price: 95.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['antipulgas', 'carrapatos', 'nexgard'],

  },
  {
    id: 'revolution-gatos',
    name: 'Revolution para Gatos',
    price: 85.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['revolution', 'gato', 'antipulgas'],
  },
  {
    id: 'drontal-plus-10kg',
    name: 'Drontal Plus até 10kg',
    price: 32.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['vermífugo', 'drontal', 'vermes'],
  },
  {
    id: 'milbemax-gatos',
    name: 'Milbemax Gatos',
    price: 45.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['vermífugo', 'milbemax', 'gato'],
  },
  {
    id: 'shampoo-clorexidina',
    name: 'Shampoo Clorexidina 500ml',
    price: 55.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['shampoo', 'clorexidina', 'dermatológico'],

  },
  {
    id: 'condroitina-glucosamina',
    name: 'Condroitina + Glucosamina',
    price: 85.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['suplemento', 'articulação', 'condroitina'],
  },
  {
    id: 'omega-3-caes',
    name: 'Ômega 3 EPA/DHA Cães',
    price: 68.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['omega', 'suplemento', 'pelagem'],
  },
  {
    id: 'probiotico-floratil-vet',
    name: 'Floratil Vet 250mg',
    price: 48.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['probiótico', 'intestinal', 'floratil'],
  },
  {
    id: 'colirio-lacrima-plus',
    name: 'Colírio Lacrima Plus',
    price: 38.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['colírio', 'olhos', 'lacrima'],
  },
  {
    id: 'otodem-plus',
    name: 'Otodem Plus 20ml',
    price: 42.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['otológico', 'ouvido', 'limpeza'],
  },
  {
    id: 'vetaglos-pomada',
    name: 'Vetaglos Pomada 50g',
    price: 35.00,
    description: '',
    category: 'Farmácia Pet',
    tags: ['pomada', 'cicatrizante', 'ferida'],
  },

  // ========== NUTRIÇÃO PARA GATOS (12 itens) ==========
  {
    id: 'royal-canin-indoor-4kg',
    name: 'Royal Canin Indoor 4kg',
    price: 215.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'royal canin', 'indoor', 'gato'],


  },
  {
    id: 'premier-gatos-castrados-3kg',
    name: 'Premier Gatos Castrados 3kg',
    price: 145.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'premier', 'castrado', 'gato'],

  },
  {
    id: 'golden-gatos-filhotes-3kg',
    name: 'Golden Gatos Filhotes 3kg',
    price: 98.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'golden', 'filhote', 'gato'],
  },
  {
    id: 'whiskas-sache-85g',
    name: 'Whiskas Sachê 85g (unidade)',
    price: 4.50,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['sachê', 'whiskas', 'úmido', 'gato'],
  },
  {
    id: 'sheba-sache-premium',
    name: 'Sheba Sachê Premium 85g',
    price: 7.90,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['sachê', 'sheba', 'premium', 'gato'],
  },
  {
    id: 'royal-canin-renal-2kg',
    name: 'Royal Canin Renal 2kg',
    price: 195.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'renal', 'veterinária', 'gato'],

  },
  {
    id: 'hills-urinary-1-8kg',
    name: "Hill's Urinary Care 1,8kg",
    price: 185.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['ração', 'hills', 'urinário', 'gato'],

  },
  {
    id: 'dreamies-petisco-40g',
    name: 'Dreamies Petisco 40g',
    price: 12.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['petisco', 'dreamies', 'gato'],
  },
  {
    id: 'pasta-malte-100g',
    name: 'Pasta de Malte 100g',
    price: 32.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['malte', 'bola de pelo', 'gato'],
  },
  {
    id: 'areia-pipicat-4kg',
    name: 'Areia Pipicat Classic 4kg',
    price: 28.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['areia', 'pipicat', 'higiene'],
  },
  {
    id: 'areia-silica-1-8kg',
    name: 'Areia de Sílica 1,8kg',
    price: 35.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['areia', 'sílica', 'higiene'],
  },
  {
    id: 'graminha-gatos',
    name: 'Graminha para Gatos',
    price: 15.00,
    description: '',
    category: 'Nutrição para Gatos',
    tags: ['graminha', 'gato', 'digestão'],
  },

  // ========== NUTRIÇÃO PARA CÃES (15 itens) ==========
  {
    id: 'royal-canin-medium-15kg',
    name: 'Royal Canin Medium Adult 15kg',
    price: 385.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'royal canin', 'médio', 'cão'],


  },
  {
    id: 'golden-formula-adulto-15kg',
    name: 'Golden Fórmula Adulto 15kg',
    price: 198.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'golden', 'adulto', 'cão'],

  },
  {
    id: 'premier-filhotes-12kg',
    name: 'Premier Cães Filhotes 12kg',
    price: 265.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'premier', 'filhote', 'cão'],
  },
  {
    id: 'hills-science-diet-12kg',
    name: "Hill's Science Diet Adult 12kg",
    price: 320.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'hills', 'adulto', 'cão'],

  },
  {
    id: 'pedigree-adulto-15kg',
    name: 'Pedigree Adulto Carne 15kg',
    price: 125.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'pedigree', 'adulto', 'cão'],
  },
  {
    id: 'gran-plus-choice-15kg',
    name: 'Gran Plus Choice 15kg',
    price: 175.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'gran plus', 'adulto', 'cão'],
  },
  {
    id: 'royal-canin-hipoalergenico-10kg',
    name: 'Royal Canin Hypoallergenic 10kg',
    price: 450.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'hipoalergênica', 'alergia', 'cão'],

  },
  {
    id: 'hills-metabolic-12kg',
    name: "Hill's Metabolic 12kg",
    price: 395.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['ração', 'hills', 'light', 'peso', 'cão'],

  },
  {
    id: 'sache-pedigree-100g',
    name: 'Pedigree Sachê 100g',
    price: 5.50,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['sachê', 'pedigree', 'úmido', 'cão'],
  },
  {
    id: 'bifinho-premio-500g',
    name: 'Bifinho Prêmio 500g',
    price: 35.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['petisco', 'bifinho', 'cão'],

  },
  {
    id: 'osso-natural-grande',
    name: 'Osso Natural Bovino Grande',
    price: 25.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['osso', 'natural', 'dental', 'cão'],
  },
  {
    id: 'dental-chew',
    name: 'Dental Chew Médio (5 unid)',
    price: 45.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['dental', 'petisco', 'dentes', 'cão'],
  },
  {
    id: 'pasta-amendoim-pet-350g',
    name: 'Pasta de Amendoim Pet 350g',
    price: 38.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['pasta', 'amendoim', 'cão'],
  },
  {
    id: 'biscoito-funcional-400g',
    name: 'Biscoito Funcional 400g',
    price: 32.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['biscoito', 'funcional', 'cão'],
  },
  {
    id: 'alimentacao-natural-500g',
    name: 'Alimentação Natural 500g',
    price: 35.00,
    description: '',
    category: 'Nutrição para Cães',
    tags: ['alimentação natural', 'AN', 'cão'],

  },

  // ========== DAY CARE E HOTEL (10 itens) ==========
  {
    id: 'daycare-diaria',
    name: 'Day Care - Diária',
    price: 85.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['daycare', 'creche', 'diária'],

  },
  {
    id: 'daycare-pacote-5',
    name: 'Day Care - Pacote 5 Diárias',
    price: 380.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['daycare', 'pacote', 'semanal'],

  },
  {
    id: 'daycare-pacote-10',
    name: 'Day Care - Pacote 10 Diárias',
    price: 700.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['daycare', 'pacote', 'quinzenal'],
  },
  {
    id: 'hotel-standard',
    name: 'Hotel Pet Standard - Diária',
    price: 120.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['hotel', 'hospedagem', 'diária'],

  },
  {
    id: 'hotel-suite-vip',
    name: 'Suíte VIP - Diária',
    price: 180.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['hotel', 'vip', 'suíte', 'webcam'],


  },
  {
    id: 'hotel-pacote-5',
    name: 'Hotel - Pacote 5 Diárias',
    price: 540.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['hotel', 'pacote', 'hospedagem'],
  },
  {
    id: 'passeio-adicional',
    name: 'Passeio Adicional',
    price: 25.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['passeio', 'adicional', 'hotel'],
  },
  {
    id: 'banho-durante-hospedagem',
    name: 'Banho Durante Hospedagem',
    price: 55.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['banho', 'hotel', 'hospedagem'],
  },
  {
    id: 'adestramento-basico',
    name: 'Aula de Adestramento Básico',
    price: 120.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['adestramento', 'treinamento', 'aula'],
  },
  {
    id: 'taxi-dog',
    name: 'Táxi Dog (ida ou volta)',
    price: 35.00,
    description: '',
    category: 'Day Care e Hotel',
    tags: ['táxi', 'transporte', 'busca'],
  },

  // ========== BANHO E TOSA (12 itens) ==========
  {
    id: 'banho-pequeno',
    name: 'Banho Porte Pequeno',
    price: 55.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'pequeno'],

  },
  {
    id: 'banho-medio',
    name: 'Banho Porte Médio',
    price: 70.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'médio'],

  },
  {
    id: 'banho-grande',
    name: 'Banho Porte Grande',
    price: 95.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'grande'],
  },
  {
    id: 'banho-tosa-pequeno',
    name: 'Banho e Tosa Porte Pequeno',
    price: 85.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'tosa', 'pequeno'],

  },
  {
    id: 'banho-tosa-medio',
    name: 'Banho e Tosa Porte Médio',
    price: 110.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'tosa', 'médio'],

  },
  {
    id: 'banho-tosa-grande',
    name: 'Banho e Tosa Porte Grande',
    price: 145.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'tosa', 'grande'],
  },
  {
    id: 'tosa-tesoura',
    name: 'Tosa na Tesoura',
    price: 65.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['tosa', 'tesoura', 'artística'],
  },
  {
    id: 'tosa-higienica',
    name: 'Tosa Higiênica',
    price: 40.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['tosa', 'higiênica'],
  },
  {
    id: 'hidratacao-pelagem',
    name: 'Hidratação de Pelagem',
    price: 45.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['hidratação', 'pelagem', 'tratamento'],

  },
  {
    id: 'spa-completo',
    name: 'SPA Completo',
    price: 180.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['spa', 'completo', 'hidratação', 'massagem'],


  },
  {
    id: 'banho-gato',
    name: 'Banho para Gatos',
    price: 75.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['banho', 'gato', 'felino'],
  },
  {
    id: 'corte-unhas',
    name: 'Corte de Unhas',
    price: 25.00,
    description: '',
    category: 'Banho e Tosa',
    tags: ['unhas', 'corte', 'lixa'],
  }
];
