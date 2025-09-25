export interface Alert {
  id: string;
  title: string;
  description: string;
  category: 'higiene' | 'cuidado' | 'protecao' | 'nutricao' | 'hidratacao';
  icon: string;
  priority: 'alta' | 'media' | 'baixa';
  frequency: 'diario' | 'semanal' | 'mensal';
}

export const alertsData: Alert[] = [
  {
    id: '1',
    title: 'Escove seu cabelo antes de dormir',
    description: 'Escove delicadamente para distribuir os óleos naturais e evitar embaraços',
    category: 'cuidado',
    icon: '🪮',
    priority: 'media',
    frequency: 'diario'
  },
  {
    id: '2',
    title: 'Aplique protetor térmico',
    description: 'Use protetor térmico antes de usar secador, chapinha ou babyliss',
    category: 'protecao',
    icon: '🛡️',
    priority: 'alta',
    frequency: 'diario'
  },
  {
    id: '3',
    title: 'Hidrate seu cabelo',
    description: 'Aplique um leave-in ou óleo capilar nas pontas',
    category: 'hidratacao',
    icon: '💧',
    priority: 'alta',
    frequency: 'diario'
  },
  {
    id: '4',
    title: 'Beba água suficiente',
    description: 'Mantenha-se hidratada para ter cabelos saudáveis de dentro para fora',
    category: 'nutricao',
    icon: '🥤',
    priority: 'alta',
    frequency: 'diario'
  },
  {
    id: '5',
    title: 'Use fronha de seda ou cetim',
    description: 'Troque sua fronha comum por uma de seda para reduzir o atrito',
    category: 'protecao',
    icon: '🛏️',
    priority: 'media',
    frequency: 'diario'
  },
  {
    id: '6',
    title: 'Massageie o couro cabeludo',
    description: 'Faça uma massagem suave para estimular a circulação sanguínea',
    category: 'cuidado',
    icon: '💆‍♀️',
    priority: 'media',
    frequency: 'diario'
  },
  {
    id: '7',
    title: 'Evite água muito quente',
    description: 'Use água morna ou fria para lavar o cabelo e preservar a hidratação',
    category: 'higiene',
    icon: '🚿',
    priority: 'alta',
    frequency: 'diario'
  },
  {
    id: '8',
    title: 'Aplique máscara nutritiva',
    description: 'Use uma máscara de nutrição profunda para fortalecer os fios',
    category: 'nutricao',
    icon: '🥥',
    priority: 'media',
    frequency: 'semanal'
  },
  {
    id: '9',
    title: 'Corte as pontas ressecadas',
    description: 'Apare as pontas duplas para manter o cabelo saudável',
    category: 'cuidado',
    icon: '✂️',
    priority: 'media',
    frequency: 'mensal'
  },
  {
    id: '10',
    title: 'Use shampoo adequado ao seu tipo',
    description: 'Escolha produtos específicos para seu tipo de cabelo',
    category: 'higiene',
    icon: '🧴',
    priority: 'alta',
    frequency: 'diario'
  },
  {
    id: '11',
    title: 'Proteja do sol',
    description: 'Use chapéu ou produtos com proteção UV quando exposta ao sol',
    category: 'protecao',
    icon: '☀️',
    priority: 'alta',
    frequency: 'diario'
  },
  {
    id: '12',
    title: 'Durma com cabelo seco',
    description: 'Evite dormir com cabelo molhado para prevenir fungos e quebra',
    category: 'cuidado',
    icon: '🌙',
    priority: 'alta',
    frequency: 'diario'
  }
];

export const alertCategories = [
  { id: 'todos', label: 'Todos', color: 'bg-gray-100 text-gray-800' },
  { id: 'higiene', label: 'Higiene', color: 'bg-blue-100 text-blue-800' },
  { id: 'cuidado', label: 'Cuidado', color: 'bg-green-100 text-green-800' },
  { id: 'protecao', label: 'Proteção', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'nutricao', label: 'Nutrição', color: 'bg-orange-100 text-orange-800' },
  { id: 'hidratacao', label: 'Hidratação', color: 'bg-cyan-100 text-cyan-800' }
];