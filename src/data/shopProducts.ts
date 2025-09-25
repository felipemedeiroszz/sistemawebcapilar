export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  benefits: string[];
  ingredients: string[];
}

export const shopProducts: ShopProduct[] = [
  {
    id: "1",
    name: "Shampoo Nutritivo Martha Brust",
    description: "Shampoo nutritivo com óleo de argan e proteína de trigo. Limpa suavemente enquanto nutre profundamente os fios, preparando-os para o tratamento completo.",
    price: 45.90,
    originalPrice: 59.90,
    image: "🧴",
    category: "Limpeza",
    inStock: true,
    rating: 4.8,
    reviews: 324,
    benefits: ["Limpa sem ressecar", "Nutre profundamente", "Prepara para tratamento"],
    ingredients: ["Óleo de Argan", "Proteína de Trigo", "Vitamina E"]
  },
  {
    id: "2",
    name: "Condicionador Hidratante Martha Brust",
    description: "Condicionador hidratante com manteiga de karité e óleo de coco. Proporciona hidratação intensa e facilita o desembaraço dos fios.",
    price: 42.90,
    originalPrice: 54.90,
    image: "🧴",
    category: "Hidratação",
    inStock: true,
    rating: 4.9,
    reviews: 287,
    benefits: ["Hidrata intensamente", "Facilita penteado", "Sela cutículas"],
    ingredients: ["Manteiga de Karité", "Óleo de Coco", "Pantenol"]
  },
  {
    id: "3",
    name: "Máscara de Reconstrução Martha Brust",
    description: "Máscara reconstrutora com queratina hidrolisada e aminoácidos. Reconstrói fios danificados e fortalece a estrutura capilar.",
    price: 67.90,
    originalPrice: 89.90,
    image: "🏺",
    category: "Reconstrução",
    inStock: true,
    rating: 4.9,
    reviews: 412,
    benefits: ["Reconstrói fios danificados", "Fortalece estrutura capilar", "Reduz quebra"],
    ingredients: ["Queratina Hidrolisada", "Aminoácidos", "Ceramidas"]
  },
  {
    id: "4",
    name: "Máscara de Nutrição Martha Brust",
    description: "Máscara nutritiva com óleo de macadâmia e extrato de açaí. Nutre profundamente e restaura o brilho natural dos fios.",
    price: 64.90,
    originalPrice: 84.90,
    image: "🏺",
    category: "Nutrição",
    inStock: true,
    rating: 4.7,
    reviews: 298,
    benefits: ["Nutre profundamente", "Restaura brilho natural", "Suaviza fios"],
    ingredients: ["Óleo de Macadâmia", "Extrato de Açaí", "Vitaminas A e E"]
  },
  {
    id: "5",
    name: "Máscara de Hidratação Martha Brust",
    description: "Máscara hidratante com ácido hialurônico e glicerina. Proporciona hidratação intensa e controla o frizz eficazmente.",
    price: 62.90,
    originalPrice: 79.90,
    image: "🏺",
    category: "Hidratação",
    inStock: true,
    rating: 4.8,
    reviews: 356,
    benefits: ["Hidrata intensamente", "Controla frizz", "Aumenta maciez"],
    ingredients: ["Ácido Hialurônico", "Glicerina", "Óleo de Jojoba"]
  },
  {
    id: "6",
    name: "Sérum Reparador Martha Brust",
    description: "Sérum reparador com silicones nobres e óleo de argan. Protege do calor, repara pontas duplas e adiciona brilho instantâneo.",
    price: 38.90,
    originalPrice: 49.90,
    image: "💧",
    category: "Finalizador",
    inStock: true,
    rating: 4.6,
    reviews: 189,
    benefits: ["Protege do calor", "Repara pontas duplas", "Adiciona brilho"],
    ingredients: ["Silicones nobres", "Óleo de Argan", "Filtro UV"]
  },
  {
    id: "7",
    name: "Tônico Noturno Martha Brust",
    description: "Tônico noturno com biotina e cafeína. Estimula o crescimento, fortalece a raiz e melhora a circulação do couro cabeludo.",
    price: 55.90,
    originalPrice: 72.90,
    image: "🧪",
    category: "Tratamento",
    inStock: true,
    rating: 4.5,
    reviews: 156,
    benefits: ["Estimula crescimento", "Fortalece raiz", "Melhora circulação"],
    ingredients: ["Biotina", "Cafeína", "Extrato de Ginseng"]
  },
  {
    id: "8",
    name: "Kit Completo Martha Brust",
    description: "Kit completo com todos os produtos da linha Martha Brust. Inclui shampoo, condicionador, 3 máscaras, sérum e tônico para tratamento completo de 30 dias.",
    price: 299.90,
    originalPrice: 399.90,
    image: "📦",
    category: "Kit Completo",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    benefits: ["Tratamento completo", "Economia de 25%", "Resultados garantidos"],
    ingredients: ["Todos os ingredientes dos produtos individuais"]
  },
  {
    id: "9",
    name: "Óleo Capilar Nutritivo Premium",
    description: "Óleo capilar premium com blend de 7 óleos naturais. Nutre, protege e adiciona brilho excepcional aos fios.",
    price: 49.90,
    originalPrice: 64.90,
    image: "🫒",
    category: "Nutrição",
    inStock: true,
    rating: 4.7,
    reviews: 234,
    benefits: ["Nutrição intensa", "Brilho excepcional", "Proteção natural"],
    ingredients: ["Óleo de Argan", "Óleo de Coco", "Óleo de Jojoba", "Óleo de Macadâmia"]
  },
  {
    id: "10",
    name: "Leave-in Protetor Térmico",
    description: "Leave-in com proteção térmica até 230°C. Protege dos danos do calor enquanto facilita o penteado e adiciona maciez.",
    price: 34.90,
    originalPrice: 44.90,
    image: "🌡️",
    category: "Proteção",
    inStock: false,
    rating: 4.4,
    reviews: 167,
    benefits: ["Proteção térmica", "Facilita penteado", "Adiciona maciez"],
    ingredients: ["Silicones protetores", "Vitamina E", "Filtros UV"]
  },
  {
    id: "11",
    name: "Spray Hidratante Diário",
    description: "Spray hidratante para uso diário. Refresca, hidrata e revitaliza os fios ao longo do dia sem pesar.",
    price: 28.90,
    originalPrice: 36.90,
    image: "💨",
    category: "Hidratação",
    inStock: true,
    rating: 4.3,
    reviews: 145,
    benefits: ["Hidratação diária", "Não pesa", "Revitaliza fios"],
    ingredients: ["Água termal", "Glicerina", "Pantenol"]
  },
  {
    id: "12",
    name: "Ampola de Tratamento Intensivo",
    description: "Ampola de tratamento intensivo com alta concentração de ativos. Para uso semanal em cabelos muito danificados.",
    price: 19.90,
    originalPrice: 24.90,
    image: "💉",
    category: "Tratamento",
    inStock: true,
    rating: 4.8,
    reviews: 203,
    benefits: ["Tratamento intensivo", "Alta concentração", "Resultados rápidos"],
    ingredients: ["Queratina concentrada", "Colágeno", "Elastina"]
  }
];

export const categories = [
  "Todos",
  "Limpeza",
  "Hidratação", 
  "Reconstrução",
  "Nutrição",
  "Finalizador",
  "Proteção",
  "Tratamento",
  "Kit Completo"
];