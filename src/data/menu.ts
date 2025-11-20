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
    id: 'abriu-bebeu',
    name: 'Abriu Bebeu',
    icon: '🍺',
    image: 'xeque-mate',
    itemCount: 4
  },
  {
    id: 'shots',
    name: 'Shots',
    icon: '🥃',
    image: 'licor-43',
    itemCount: 8
  },
  {
    id: 'whiskys',
    name: 'Whiskys & Destilados',
    icon: '🥃',
    image: 'whiskys-generica',
    itemCount: 9
  },
  {
    id: 'runs-cachacas',
    name: 'Runs & Cachaças',
    icon: '🥃',
    image: 'rum-cachaca',
    itemCount: 4
  },
  {
    id: 'vodkas',
    name: 'Vodkas',
    icon: '🍸',
    image: 'vodkas-generica',
    itemCount: 4
  },
  {
    id: 'gins',
    name: 'Gins',
    icon: '🍸',
    image: 'gin-hq',
    itemCount: 3
  },
  {
    id: 'cervejas',
    name: 'Cervejas',
    icon: '🍺',
    image: 'corona',
    itemCount: 9
  },
  {
    id: 'drinks',
    name: 'Drinks & Coquetéis',
    icon: '🍹',
    image: 'drinks',
    itemCount: 12
  },
  {
    id: 'porcoes',
    name: 'Porções & Petiscos',
    icon: '🍔',
    image: 'porcoes-hq',
    itemCount: 10
  },
  {
    id: 'combos',
    name: 'Combos & Promoções',
    icon: '🎉',
    image: 'combos',
    itemCount: 5
  }
];

export const products: Product[] = [
  // ABRIU BEBEU
  {
    id: 'xeque-mate',
    name: 'Xeque-Mate Lata',
    price: 14.00,
    description: 'Ice com vodka refrescante',
    category: 'Abriu Bebeu',
    tags: ['ice', 'vodka', 'lata', 'gelado', 'xeque', 'mate'],
    size: 'Lata'
  },
  {
    id: 'smirnoff-ice',
    name: 'Smirnoff Ice Long Neck',
    price: 13.00,
    description: 'Ice clássico Smirnoff',
    category: 'Abriu Bebeu',
    tags: ['smirnoff', 'ice', 'long neck'],
    size: 'Long Neck'
  },
  {
    id: 'beats-gt',
    name: 'Beats / GT Long Neck',
    price: 13.00,
    description: 'Ice sabores variados',
    category: 'Abriu Bebeu',
    tags: ['beats', 'gt', 'ice', 'long neck'],
    size: 'Long Neck'
  },
  {
    id: 'mikes-sabores',
    name: 'Mike\'s Sabores Long Neck',
    price: 13.00,
    description: 'Ice com sabores especiais',
    category: 'Abriu Bebeu',
    tags: ['mikes', 'sabores', 'ice', 'long neck'],
    size: 'Long Neck'
  },

  // SHOTS
  {
    id: 'licor-43',
    name: 'Licor 43',
    price: 19.00,
    description: 'Licor espanhol premium com 43 ingredientes',
    category: 'Shots',
    tags: ['licor', 'espanha', 'premium', 'doce', '43'],
    size: '50ml',
    featured: true
  },
  {
    id: 'ballena',
    name: 'Ballena',
    price: 19.00,
    description: 'Cachaça premium com toque especial',
    category: 'Shots',
    tags: ['cachaca', 'premium', 'ballena'],
    size: '50ml'
  },
  {
    id: 'jack-honey-shot',
    name: 'Jack Daniels Honey',
    price: 16.00,
    description: 'Whisky com mel suave',
    category: 'Shots',
    tags: ['jack daniels', 'honey', 'mel', 'whisky', 'jack'],
    size: '50ml'
  },
  {
    id: 'tequila-shot',
    name: 'Tequila',
    price: 16.00,
    description: 'Tequila com limão e sal',
    category: 'Shots',
    tags: ['tequila', 'limao', 'sal', 'mexico'],
    size: '50ml'
  },
  {
    id: 'jagermeister',
    name: 'Jägermeister',
    price: 14.00,
    description: 'Licor alemão de ervas',
    category: 'Shots',
    tags: ['jager', 'jagermeister', 'alemao', 'ervas'],
    size: '25ml'
  },
  {
    id: 'fireball',
    name: 'Fireball',
    price: 14.00,
    description: 'Whisky de canela picante 🔥',
    category: 'Shots',
    tags: ['fireball', 'canela', 'whisky', 'picante'],
    size: '50ml'
  },
  {
    id: 'santo-mel',
    name: 'Santo Mel',
    price: 10.00,
    description: 'Shot de cachaça com mel - clássico da casa',
    category: 'Shots',
    tags: ['cachaca', 'mel', 'nacional', 'classico', 'santo'],
    size: '50ml',
    popular: true
  },
  {
    id: 'seleta',
    name: 'Seleta',
    price: 10.00,
    description: 'Shot nacional tradicional',
    category: 'Shots',
    tags: ['seleta', 'nacional'],
    size: '50ml'
  },

  // WHISKYS NACIONAIS
  {
    id: 'old-eight',
    name: 'Old Eight',
    price: 180.00,
    description: 'Whisky nacional suave e encorpado',
    category: 'Whiskys Nacionais',
    subcategory: 'Whiskys & Destilados',
    tags: ['whisky', 'nacional', 'old eight', 'old', 'eight']
  },
  {
    id: 'white-horse',
    name: 'White Horse',
    price: 240.00,
    description: 'Blend escocês clássico',
    category: 'Whiskys Nacionais',
    subcategory: 'Whiskys & Destilados',
    tags: ['whisky', 'escoces', 'blend', 'white', 'horse']
  },

  // WHISKYS IMPORTADOS
  {
    id: 'jack-daniels',
    name: 'Jack Daniel\'s',
    price: 380.00,
    description: 'Tennessee whiskey icônico',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['jack daniels', 'tennessee', 'whiskey', 'americano', 'jack'],
    popular: true
  },
  {
    id: 'jack-daniels-honey',
    name: 'Jack Daniel\'s Honey',
    price: 420.00,
    description: 'Jack Daniel\'s com toque de mel',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['jack daniels', 'honey', 'mel', 'whiskey', 'jack']
  },
  {
    id: 'johnnie-red',
    name: 'Johnnie Walker Red Label',
    price: 340.00,
    description: 'Blend escocês vibrante',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['johnnie walker', 'red label', 'escoces', 'johnnie', 'walker', 'red']
  },
  {
    id: 'johnnie-black',
    name: 'Johnnie Walker Black Label',
    price: 480.00,
    description: '12 anos de maturação',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['johnnie walker', 'black label', 'escoces', 'premium', 'johnnie', 'walker', 'black']
  },
  {
    id: 'ballantines',
    name: 'Ballantine\'s',
    price: 340.00,
    description: 'Blend escocês equilibrado',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['ballantines', 'escoces', 'blend']
  },
  {
    id: 'passport',
    name: 'Passport',
    price: 280.00,
    description: 'Blend escocês suave',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['passport', 'escoces']
  },
  {
    id: 'jim-beam',
    name: 'Jim Beam',
    price: 380.00,
    description: 'Bourbon americano tradicional',
    category: 'Whiskys Importados',
    subcategory: 'Whiskys & Destilados',
    tags: ['jim beam', 'bourbon', 'americano', 'jim', 'beam']
  },

  // RUNS & CACHAÇAS
  {
    id: 'montilla',
    name: 'Montilla',
    price: 260.00,
    description: 'Rum caribenho suave',
    category: 'Runs & Cachaças',
    tags: ['rum', 'montilla', 'caribenho']
  },
  {
    id: 'bacardi',
    name: 'Bacardi',
    price: 280.00,
    description: 'Rum branco clássico',
    category: 'Runs & Cachaças',
    tags: ['bacardi', 'rum', 'branco', 'cuba'],
    popular: true
  },
  {
    id: 'velho-barreiro',
    name: 'Velho Barreiro',
    price: 150.00,
    description: 'Cachaça nacional tradicional',
    category: 'Runs & Cachaças',
    tags: ['cachaca', 'velho barreiro', 'nacional', 'velho', 'barreiro']
  },
  {
    id: 'cachaca-51',
    name: '51',
    price: 150.00,
    description: 'Cachaça brasileira clássica',
    category: 'Runs & Cachaças',
    tags: ['51', 'cachaca', 'brasileira']
  },

  // VODKAS
  {
    id: 'smirnoff',
    name: 'Smirnoff',
    price: 240.00,
    description: 'Vodka clássica premium',
    category: 'Vodkas',
    tags: ['smirnoff', 'vodka', 'classica'],
    popular: true
  },
  {
    id: 'absolut',
    name: 'Absolut',
    price: 280.00,
    description: 'Vodka sueca premium',
    category: 'Vodkas',
    tags: ['absolut', 'vodka', 'sueca', 'premium']
  },
  {
    id: 'orloff',
    name: 'Orloff',
    price: 200.00,
    description: 'Vodka nacional',
    category: 'Vodkas',
    tags: ['orloff', 'vodka', 'nacional']
  },
  {
    id: 'skyy',
    name: 'Skyy',
    price: 240.00,
    description: 'Vodka americana suave',
    category: 'Vodkas',
    tags: ['skyy', 'vodka', 'americana']
  },

  // GINS
  {
    id: 'tanqueray',
    name: 'Tanqueray',
    price: 320.00,
    description: 'Gin inglês premium',
    category: 'Gins',
    tags: ['tanqueray', 'gin', 'ingles', 'premium'],
    popular: true
  },
  {
    id: 'beefeater',
    name: 'Beefeater',
    price: 280.00,
    description: 'London Dry Gin clássico',
    category: 'Gins',
    tags: ['beefeater', 'gin', 'london dry', 'ingles']
  },
  {
    id: 'seagers',
    name: 'Seagers',
    price: 220.00,
    description: 'Gin nacional acessível',
    category: 'Gins',
    tags: ['seagers', 'gin', 'nacional']
  },

  // CERVEJAS - Long Necks
  {
    id: 'budweiser-ln',
    name: 'Budweiser Long Neck',
    price: 12.00,
    description: 'Cerveja americana clássica',
    category: 'Cervejas - Long Necks',
    subcategory: 'Cervejas',
    tags: ['budweiser', 'cerveja', 'long neck', 'americana', 'bud']
  },
  {
    id: 'heineken-ln',
    name: 'Heineken Long Neck',
    price: 15.00,
    description: 'Cerveja holandesa premium',
    category: 'Cervejas - Long Necks',
    subcategory: 'Cervejas',
    tags: ['heineken', 'cerveja', 'long neck', 'holandesa'],
    popular: true
  },
  {
    id: 'corona-ln',
    name: 'Corona Long Neck',
    price: 18.00,
    description: 'Cerveja mexicana com limão',
    category: 'Cervejas - Long Necks',
    subcategory: 'Cervejas',
    tags: ['corona', 'cerveja', 'long neck', 'mexicana', 'limao']
  },
  {
    id: 'stella-ln',
    name: 'Stella Artois Long Neck',
    price: 18.00,
    description: 'Cerveja belga premium',
    category: 'Cervejas - Long Necks',
    subcategory: 'Cervejas',
    tags: ['stella artois', 'cerveja', 'long neck', 'belga', 'premium', 'stella']
  },

  // CERVEJAS - Latas
  {
    id: 'brahma-lata',
    name: 'Brahma Lata',
    price: 8.00,
    description: 'Cerveja brasileira tradicional',
    category: 'Cervejas - Latas',
    subcategory: 'Cervejas',
    tags: ['brahma', 'cerveja', 'lata', 'brasileira']
  },
  {
    id: 'skol-lata',
    name: 'Skol Lata',
    price: 8.00,
    description: 'Cerveja brasileira refrescante',
    category: 'Cervejas - Latas',
    subcategory: 'Cervejas',
    tags: ['skol', 'cerveja', 'lata', 'brasileira']
  },
  {
    id: 'amstel-lata',
    name: 'Amstel Lata',
    price: 10.00,
    description: 'Cerveja holandesa de qualidade',
    category: 'Cervejas - Latas',
    subcategory: 'Cervejas',
    tags: ['amstel', 'cerveja', 'lata', 'holandesa']
  },

  // CERVEJAS - Especiais
  {
    id: 'balde-cervejas',
    name: 'Balde de Cerveja (6 unidades)',
    price: 60.00,
    description: '6 cervejas long neck geladas no gelo',
    category: 'Cervejas - Especiais',
    subcategory: 'Cervejas',
    tags: ['balde', 'cerveja', 'long neck', 'gelo', 'combo'],
    featured: true
  },

  // DRINKS - Clássicos
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    price: 22.00,
    description: 'Limão, morango, kiwi ou frutas vermelhas',
    category: 'Drinks - Clássicos',
    subcategory: 'Drinks & Coquetéis',
    tags: ['caipirinha', 'cachaca', 'limao', 'morango', 'kiwi', 'frutas'],
    popular: true
  },
  {
    id: 'caipiroska',
    name: 'Caipiroska',
    price: 25.00,
    description: 'Vodka + frutas frescas',
    category: 'Drinks - Clássicos',
    subcategory: 'Drinks & Coquetéis',
    tags: ['caipiroska', 'vodka', 'frutas']
  },
  {
    id: 'mojito',
    name: 'Mojito',
    price: 28.00,
    description: 'Rum, hortelã e limão refrescante',
    category: 'Drinks - Clássicos',
    subcategory: 'Drinks & Coquetéis',
    tags: ['mojito', 'rum', 'hortela', 'limao', 'refrescante'],
    popular: true
  },
  {
    id: 'gin-tonica',
    name: 'Gin Tônica',
    price: 30.00,
    description: 'Gin + tônica + especiarias',
    category: 'Drinks - Clássicos',
    subcategory: 'Drinks & Coquetéis',
    tags: ['gin tonica', 'gin', 'tonica', 'especiarias']
  },
  {
    id: 'cuba-libre',
    name: 'Cuba Libre',
    price: 24.00,
    description: 'Rum + cola + limão',
    category: 'Drinks - Clássicos',
    subcategory: 'Drinks & Coquetéis',
    tags: ['cuba libre', 'rum', 'cola', 'limao']
  },
  {
    id: 'whisky-sour',
    name: 'Whisky Sour',
    price: 32.00,
    description: 'Whisky + limão + açúcar',
    category: 'Drinks - Clássicos',
    subcategory: 'Drinks & Coquetéis',
    tags: ['whisky sour', 'whisky', 'limao', 'azucar', 'sour']
  },

  // DRINKS - Autorais
  {
    id: 'supra-sunset',
    name: 'Supra Sunset',
    price: 35.00,
    description: 'Vodka, maracujá, laranja com toque secreto 🌅',
    category: 'Drinks - Autorais Supra',
    subcategory: 'Drinks & Coquetéis',
    tags: ['supra sunset', 'autoral', 'vodka', 'maracuja', 'laranja', 'especial', 'sunset'],
    featured: true,
    special: true
  },
  {
    id: 'neon-explosion',
    name: 'Neon Explosion',
    price: 38.00,
    description: 'Gin, frutas vermelhas e energético',
    category: 'Drinks - Autorais Supra',
    subcategory: 'Drinks & Coquetéis',
    tags: ['neon explosion', 'autoral', 'gin', 'frutas vermelhas', 'energetico', 'neon', 'explosion'],
    featured: true,
    special: true
  },
  {
    id: 'vila-madness',
    name: 'Vila Madness',
    price: 40.00,
    description: 'Drink especial da casa com mix de destilados',
    category: 'Drinks - Autorais Supra',
    subcategory: 'Drinks & Coquetéis',
    tags: ['vila madness', 'autoral', 'especial', 'mix', 'destilados', 'madness'],
    featured: true,
    special: true
  },

  // DRINKS - Sem Álcool
  {
    id: 'limonada-suica',
    name: 'Limonada Suíça',
    price: 15.00,
    description: 'Limonada cremosa refrescante',
    category: 'Drinks - Sem Álcool',
    subcategory: 'Drinks & Coquetéis',
    tags: ['limonada', 'suica', 'sem alcool', 'refrescante'],
    nonAlcoholic: true
  },
  {
    id: 'suco-natural',
    name: 'Suco Natural',
    price: 12.00,
    description: 'Laranja, limão ou morango',
    category: 'Drinks - Sem Álcool',
    subcategory: 'Drinks & Coquetéis',
    tags: ['suco', 'natural', 'laranja', 'limao', 'morango', 'sem alcool'],
    nonAlcoholic: true
  },
  {
    id: 'energetico',
    name: 'Energético Red Bull/TNT',
    price: 18.00,
    description: 'Energético gelado',
    category: 'Drinks - Sem Álcool',
    subcategory: 'Drinks & Coquetéis',
    tags: ['energetico', 'red bull', 'tnt', 'sem alcool'],
    nonAlcoholic: true
  },
  {
    id: 'refrigerante',
    name: 'Refrigerante Lata',
    price: 8.00,
    description: 'Coca-Cola, Guaraná, Sprite',
    category: 'Drinks - Sem Álcool',
    subcategory: 'Drinks & Coquetéis',
    tags: ['refrigerante', 'lata', 'coca', 'guarana', 'sprite', 'sem alcool'],
    nonAlcoholic: true
  },
  {
    id: 'agua',
    name: 'Água',
    price: 6.00,
    description: 'Água mineral',
    category: 'Drinks - Sem Álcool',
    subcategory: 'Drinks & Coquetéis',
    tags: ['agua', 'mineral', 'sem alcool'],
    nonAlcoholic: true
  },

  // PORÇÕES & PETISCOS
  {
    id: 'batata-simples',
    name: 'Batata Frita Simples',
    price: 25.00,
    description: 'Porção generosa de batata crocante',
    category: 'Porções & Petiscos',
    tags: ['batata', 'frita', 'porcao', 'petisco'],
    popular: true
  },
  {
    id: 'batata-cheddar',
    name: 'Batata Frita com Cheddar e Bacon',
    price: 35.00,
    description: 'Batata com cheddar derretido e bacon crocante',
    category: 'Porções & Petiscos',
    tags: ['batata', 'cheddar', 'bacon', 'porcao'],
    featured: true
  },
  {
    id: 'calabresa',
    name: 'Calabresa Acebolada',
    price: 32.00,
    description: 'Calabresa fatiada com cebola caramelizada',
    category: 'Porções & Petiscos',
    tags: ['calabresa', 'acebolada', 'porcao']
  },
  {
    id: 'frango-passarinho',
    name: 'Frango à Passarinho',
    price: 38.00,
    description: 'Frango temperado e crocante',
    category: 'Porções & Petiscos',
    tags: ['frango', 'passarinho', 'porcao', 'crocante']
  },
  {
    id: 'iscas-peixe',
    name: 'Iscas de Peixe',
    price: 42.00,
    description: 'Iscas de peixe empanadas',
    category: 'Porções & Petiscos',
    tags: ['iscas', 'peixe', 'empanado', 'porcao']
  },
  {
    id: 'pasteis',
    name: 'Pastéis Variados (10 unidades)',
    price: 35.00,
    description: 'Mix de pastéis fritos na hora',
    category: 'Porções & Petiscos',
    tags: ['pastel', 'pasteis', 'variados', 'frito']
  },
  {
    id: 'azeitona',
    name: 'Porção de Azeitona',
    price: 15.00,
    description: 'Azeitonas verdes e pretas',
    category: 'Porções & Petiscos',
    tags: ['azeitona', 'porcao']
  },
  {
    id: 'amendoim',
    name: 'Amendoim',
    price: 10.00,
    description: 'Amendoim torrado salgado',
    category: 'Porções & Petiscos',
    tags: ['amendoim', 'torrado']
  },
  {
    id: 'castanhas',
    name: 'Mix de Castanhas',
    price: 18.00,
    description: 'Mix premium de castanhas',
    category: 'Porções & Petiscos',
    tags: ['castanhas', 'mix', 'premium']
  },
  {
    id: 'tabua-frios',
    name: 'Tábua de Frios',
    price: 55.00,
    description: 'Queijos, salame e presunto selecionados',
    category: 'Porções & Petiscos',
    tags: ['tabua', 'frios', 'queijo', 'salame', 'presunto'],
    featured: true
  },

  // COMBOS & PROMOÇÕES
  {
    id: 'combo-casal',
    name: 'Combo Casal',
    price: 280.00,
    description: '1 Garrafa Vodka Smirnoff + 2 Energéticos + Gelo',
    category: 'Combos & Promoções',
    tags: ['combo', 'casal', 'vodka', 'smirnoff', 'energetico'],
    items: ['1x Smirnoff', '2x Energético', 'Gelo']
  },
  {
    id: 'combo-amigos',
    name: 'Combo Amigos',
    price: 550.00,
    description: '2 Garrafas Vodka + 1 Balde Cerveja + 4 Energéticos',
    category: 'Combos & Promoções',
    tags: ['combo', 'amigos', 'vodka', 'balde', 'cerveja', 'energetico'],
    items: ['2x Vodka', '1x Balde Cerveja (6un)', '4x Energético'],
    featured: true
  },
  {
    id: 'combo-balada',
    name: 'Combo Balada',
    price: 420.00,
    description: '1 Whisky Red Label + 6 Energéticos + Porção Batata',
    category: 'Combos & Promoções',
    tags: ['combo', 'balada', 'whisky', 'red label', 'energetico', 'batata'],
    items: ['1x Johnnie Red', '6x Energético', '1x Batata Frita'],
    featured: true
  },
  {
    id: 'happy-hour-cerveja',
    name: 'Happy Hour - Dobradinha',
    price: 20.00,
    description: '2 Cervejas Long Neck (17h às 20h)',
    category: 'Combos & Promoções',
    tags: ['happy hour', 'cerveja', 'long neck', 'promocao'],
    schedule: '17h às 20h',
    promo: true
  },
  {
    id: 'happy-hour-caipirinha',
    name: 'Happy Hour - Caipirinha em Dobro',
    price: 35.00,
    description: '2 Caipirinhas (17h às 20h)',
    category: 'Combos & Promoções',
    tags: ['happy hour', 'caipirinha', 'dobro', 'promocao'],
    schedule: '17h às 20h',
    promo: true
  }
];
