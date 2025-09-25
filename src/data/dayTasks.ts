import { DayTask } from '../types';

export function generateDayTasks(): DayTask[] {
  return [
    {
      id: '1',
      day: 1,
      title: 'Limpeza Profunda e Avaliação',
      type: 'limpeza',
      tasks: [
        { id: 't1-1', description: 'Lavar o cabelo com shampoo detox', completed: false, points: 10 },
        { id: 't1-2', description: 'Tirar foto "antes" do tratamento', completed: false, points: 5 },
        { id: 't1-3', description: 'Avaliar tipo e condição do cabelo', completed: false, points: 5 }
      ],
      tip: 'Entenda o seu tipo de cabelo e qual a sua principal necessidade (ressecamento, queda, oleosidade).'
    },
    {
      id: '2',
      day: 2,
      title: 'Hidratação e Maciez',
      type: 'hidratacao',
      tasks: [
        { id: 't2-1', description: 'Aplicar máscara de hidratação por 20 minutos', completed: false, points: 15 },
        { id: 't2-2', description: 'Utilizar leave-in com proteção térmica', completed: false, points: 10 },
        { id: 't2-3', description: 'Registrar sensação do cabelo no diário', completed: false, points: 5 }
      ],
      tip: 'A hidratação repõe a água nos fios, combatendo o ressecamento e o frizz.'
    },
    {
      id: '3',
      day: 3,
      title: 'Nutrição e Brilho',
      type: 'nutricao',
      tasks: [
        { id: 't3-1', description: 'Fazer umectação com óleo vegetal (30 min)', completed: false, points: 20 },
        { id: 't3-2', description: 'Aplicar máscara nutritiva', completed: false, points: 15 },
        { id: 't3-3', description: 'Finalizar com óleo nas pontas', completed: false, points: 10 }
      ],
      tip: 'A umectação nutre profundamente, fortalece os fios e dá um brilho intenso.'
    },
    {
      id: '4',
      day: 4,
      title: 'Descanso e Cuidados Leves',
      type: 'descanso',
      tasks: [
        { id: 't4-1', description: 'Não lavar o cabelo hoje', completed: false, points: 10 },
        { id: 't4-2', description: 'Aplicar óleo reparador nas pontas', completed: false, points: 10 },
        { id: 't4-3', description: 'Fazer massagem no couro cabeludo (5 min)', completed: false, points: 5 }
      ],
      tip: 'Dar um descanso aos fios é importante. O excesso de lavagens pode ressecar.'
    },
    {
      id: '5',
      day: 5,
      title: 'Reconstrução e Força',
      type: 'reconstrucao',
      tasks: [
        { id: 't5-1', description: 'Aplicar máscara reconstrutora', completed: false, points: 20 },
        { id: 't5-2', description: 'Usar protetor térmico antes da finalização', completed: false, points: 10 },
        { id: 't5-3', description: 'Fazer teste da elasticidade', completed: false, points: 5 }
      ],
      tip: 'A reconstrução repõe a proteína (queratina) e é essencial para cabelos danificados. Use com moderação!'
    },
    {
      id: '6',
      day: 6,
      title: 'Hidratação Intensiva',
      type: 'hidratacao',
      tasks: [
        { id: 't6-1', description: 'Aplicar máscara hidratante por 30 minutos', completed: false, points: 15 },
        { id: 't6-2', description: 'Usar creme para pentear sem enxágue', completed: false, points: 10 },
        { id: 't6-3', description: 'Fazer penteado protetor (coque ou trança)', completed: false, points: 5 }
      ],
      tip: 'Após a reconstrução, é importante hidratar bem para equilibrar os fios.'
    },
    {
      id: '7',
      day: 7,
      title: 'Avaliação Semanal',
      type: 'limpeza',
      tasks: [
        { id: 't7-1', description: 'Tirar foto de progresso (1ª semana)', completed: false, points: 10 },
        { id: 't7-2', description: 'Lavar com shampoo suave', completed: false, points: 10 },
        { id: 't7-3', description: 'Anotar mudanças percebidas no diário', completed: false, points: 10 }
      ],
      tip: 'Compare com a foto inicial. Pequenas mudanças já são um grande progresso!'
    },
    {
      id: '8',
      day: 8,
      title: 'Nutrição com Óleos',
      type: 'nutricao',
      tasks: [
        { id: 't8-1', description: 'Umectação pré-shampoo (45 min)', completed: false, points: 20 },
        { id: 't8-2', description: 'Aplicar máscara nutritiva', completed: false, points: 15 },
        { id: 't8-3', description: 'Finalizar com sérum anti-frizz', completed: false, points: 10 }
      ],
      tip: 'Varie os óleos: coco, argan, jojoba. Cada um tem benefícios únicos.'
    },
    {
      id: '9',
      day: 9,
      title: 'Descanso e Massagem',
      type: 'descanso',
      tasks: [
        { id: 't9-1', description: 'Massagem no couro cabeludo (10 min)', completed: false, points: 10 },
        { id: 't9-2', description: 'Aplicar tônico capilar', completed: false, points: 10 },
        { id: 't9-3', description: 'Dormir com fronha de seda/cetim', completed: false, points: 5 }
      ],
      tip: 'A massagem estimula a circulação e pode ajudar no crescimento.'
    },
    {
      id: '10',
      day: 10,
      title: 'Hidratação Profunda',
      type: 'hidratacao',
      tasks: [
        { id: 't10-1', description: 'Máscara de hidratação overnight', completed: false, points: 25 },
        { id: 't10-2', description: 'Proteger com touca de cetim', completed: false, points: 5 },
        { id: 't10-3', description: 'Enxaguar pela manhã com água fria', completed: false, points: 10 }
      ],
      tip: 'O tratamento noturno permite absorção máxima dos ativos.'
    },
    {
      id: '11',
      day: 11,
      title: 'Limpeza e Purificação',
      type: 'limpeza',
      tasks: [
        { id: 't11-1', description: 'Esfoliação do couro cabeludo', completed: false, points: 15 },
        { id: 't11-2', description: 'Shampoo clarificante', completed: false, points: 10 },
        { id: 't11-3', description: 'Condicionador apenas no comprimento', completed: false, points: 10 }
      ],
      tip: 'A esfoliação remove resíduos e estimula a renovação celular.'
    },
    {
      id: '12',
      day: 12,
      title: 'Reconstrução Moderada',
      type: 'reconstrucao',
      tasks: [
        { id: 't12-1', description: 'Máscara reconstrutora (15 min)', completed: false, points: 20 },
        { id: 't12-2', description: 'Teste de porosidade', completed: false, points: 5 },
        { id: 't12-3', description: 'Aplicar leave-in reparador', completed: false, points: 10 }
      ],
      tip: 'Observe se os fios estão mais resistentes e elásticos.'
    },
    {
      id: '13',
      day: 13,
      title: 'Nutrição e Brilho',
      type: 'nutricao',
      tasks: [
        { id: 't13-1', description: 'Banho de brilho com vinagre de maçã', completed: false, points: 15 },
        { id: 't13-2', description: 'Máscara nutritiva caseira', completed: false, points: 15 },
        { id: 't13-3', description: 'Finalização com técnica plopping', completed: false, points: 10 }
      ],
      tip: 'O vinagre de maçã sela as cutículas e potencializa o brilho natural.'
    },
    {
      id: '14',
      day: 14,
      title: 'Marco de 2 Semanas',
      type: 'hidratacao',
      tasks: [
        { id: 't14-1', description: 'Foto de progresso (2ª semana)', completed: false, points: 15 },
        { id: 't14-2', description: 'Hidratação com babosa natural', completed: false, points: 20 },
        { id: 't14-3', description: 'Avaliar textura e maciez', completed: false, points: 10 }
      ],
      tip: 'Compare com as fotos anteriores. O progresso pode ser sutil mas significativo!'
    },
    {
      id: '15',
      day: 15,
      title: 'Descanso Ativo',
      type: 'descanso',
      tasks: [
        { id: 't15-1', description: 'Não lavar o cabelo', completed: false, points: 10 },
        { id: 't15-2', description: 'Spray hidratante nas pontas', completed: false, points: 10 },
        { id: 't15-3', description: 'Penteado protetor para dormir', completed: false, points: 5 }
      ],
      tip: 'Metade do caminho! Seus fios merecem um descanso.'
    },
    {
      id: '16',
      day: 16,
      title: 'Limpeza Suave',
      type: 'limpeza',
      tasks: [
        { id: 't16-1', description: 'Co-wash (lavagem só com condicionador)', completed: false, points: 15 },
        { id: 't16-2', description: 'Massagem durante a lavagem', completed: false, points: 10 },
        { id: 't16-3', description: 'Enxágue com água morna/fria', completed: false, points: 5 }
      ],
      tip: 'O co-wash limpa sem ressecar, ideal para cabelos mais secos.'
    },
    {
      id: '17',
      day: 17,
      title: 'Reconstrução Intensiva',
      type: 'reconstrucao',
      tasks: [
        { id: 't17-1', description: 'Máscara reconstrutora por 20 min', completed: false, points: 25 },
        { id: 't17-2', description: 'Teste de elasticidade', completed: false, points: 5 },
        { id: 't17-3', description: 'Protetor térmico antes de secar', completed: false, points: 10 }
      ],
      tip: 'Fios mais fortes significam menos quebra e mais crescimento aparente.'
    },
    {
      id: '18',
      day: 18,
      title: 'Hidratação Reparadora',
      type: 'hidratacao',
      tasks: [
        { id: 't18-1', description: 'Máscara hidratante com mel', completed: false, points: 20 },
        { id: 't18-2', description: 'Leave-in com proteção UV', completed: false, points: 10 },
        { id: 't18-3', description: 'Finalização natural (sem calor)', completed: false, points: 10 }
      ],
      tip: 'O mel é um umectante natural que atrai e retém a umidade.'
    },
    {
      id: '19',
      day: 19,
      title: 'Nutrição Profunda',
      type: 'nutricao',
      tasks: [
        { id: 't19-1', description: 'Umectação com mix de óleos (1h)', completed: false, points: 25 },
        { id: 't19-2', description: 'Máscara nutritiva potencializada', completed: false, points: 20 },
        { id: 't19-3', description: 'Óleo finalizador nas pontas', completed: false, points: 10 }
      ],
      tip: 'Combine óleos leves e pesados para nutrição completa.'
    },
    {
      id: '20',
      day: 20,
      title: 'Descanso e Cuidados',
      type: 'descanso',
      tasks: [
        { id: 't20-1', description: 'Massagem relaxante (15 min)', completed: false, points: 15 },
        { id: 't20-2', description: 'Aplicar sérum noturno', completed: false, points: 10 },
        { id: 't20-3', description: 'Meditar ou relaxar', completed: false, points: 5 }
      ],
      tip: 'O estresse afeta a saúde capilar. Relaxe e cuide de você!'
    },
    {
      id: '21',
      day: 21,
      title: 'Marco de 3 Semanas',
      type: 'limpeza',
      tasks: [
        { id: 't21-1', description: 'Foto de progresso (3ª semana)', completed: false, points: 15 },
        { id: 't21-2', description: 'Limpeza profunda com argila', completed: false, points: 20 },
        { id: 't21-3', description: 'Avaliar crescimento e saúde', completed: false, points: 10 }
      ],
      tip: '3 semanas de cuidados! Compare todas as fotos e celebre o progresso.'
    },
    {
      id: '22',
      day: 22,
      title: 'Hidratação Intensiva',
      type: 'hidratacao',
      tasks: [
        { id: 't22-1', description: 'Máscara hidratante por 45 min', completed: false, points: 25 },
        { id: 't22-2', description: 'Creme para pentear nutritivo', completed: false, points: 15 },
        { id: 't22-3', description: 'Finalização com difusor em temperatura baixa', completed: false, points: 10 }
      ],
      tip: 'Fios bem hidratados são mais maleáveis e brilhantes.'
    },
    {
      id: '23',
      day: 23,
      title: 'Reconstrução Final',
      type: 'reconstrucao',
      tasks: [
        { id: 't23-1', description: 'Última reconstrução do ciclo', completed: false, points: 25 },
        { id: 't23-2', description: 'Teste de resistência dos fios', completed: false, points: 10 },
        { id: 't23-3', description: 'Aplicar ampola de tratamento', completed: false, points: 15 }
      ],
      tip: 'Esta é a última reconstrução intensiva. Seus fios estão mais fortes!'
    },
    {
      id: '24',
      day: 24,
      title: 'Nutrição de Manutenção',
      type: 'nutricao',
      tasks: [
        { id: 't24-1', description: 'Umectação leve (30 min)', completed: false, points: 20 },
        { id: 't24-2', description: 'Máscara nutritiva suave', completed: false, points: 15 },
        { id: 't24-3', description: 'Spray nutritivo para o dia', completed: false, points: 10 }
      ],
      tip: 'Agora é manutenção! Seus fios já estão bem nutridos.'
    },
    {
      id: '25',
      day: 25,
      title: 'Hidratação de Luxo',
      type: 'hidratacao',
      tasks: [
        { id: 't25-1', description: 'Tratamento spa em casa', completed: false, points: 30 },
        { id: 't25-2', description: 'Máscara hidratante premium', completed: false, points: 20 },
        { id: 't25-3', description: 'Finalização profissional', completed: false, points: 15 }
      ],
      tip: 'Você merece um tratamento especial! Mime seus cabelos.'
    },
    {
      id: '26',
      day: 26,
      title: 'Preparação para o Final',
      type: 'limpeza',
      tasks: [
        { id: 't26-1', description: 'Limpeza suave e preparatória', completed: false, points: 15 },
        { id: 't26-2', description: 'Condicionador reparador', completed: false, points: 15 },
        { id: 't26-3', description: 'Preparar para fotos finais', completed: false, points: 10 }
      ],
      tip: 'Estamos quase no final! Prepare seus fios para o grande resultado.'
    },
    {
      id: '27',
      day: 27,
      title: 'Hidratação Final',
      type: 'hidratacao',
      tasks: [
        { id: 't27-1', description: 'Última hidratação intensiva', completed: false, points: 25 },
        { id: 't27-2', description: 'Leave-in de finalização', completed: false, points: 15 },
        { id: 't27-3', description: 'Avaliar maciez e brilho', completed: false, points: 10 }
      ],
      tip: 'Seus fios estão no auge da hidratação. Sinta a diferença!'
    },
    {
      id: '28',
      day: 28,
      title: 'Nutrição de Finalização',
      type: 'nutricao',
      tasks: [
        { id: 't28-1', description: 'Umectação de finalização', completed: false, points: 25 },
        { id: 't28-2', description: 'Máscara nutritiva final', completed: false, points: 20 },
        { id: 't28-3', description: 'Óleo finalizador especial', completed: false, points: 15 }
      ],
      tip: 'A nutrição final sela todos os benefícios do tratamento.'
    },
    {
      id: '29',
      day: 29,
      title: 'Preparação para o Grande Dia',
      type: 'hidratacao',
      tasks: [
        { id: 't29-1', description: 'Hidratação leve e preparatória', completed: false, points: 20 },
        { id: 't29-2', description: 'Protetor térmico premium', completed: false, points: 15 },
        { id: 't29-3', description: 'Preparar ambiente para fotos', completed: false, points: 10 }
      ],
      tip: 'Amanhã é o grande dia! Seus cabelos estão prontos para brilhar.'
    },
    {
      id: '30',
      day: 30,
      title: 'Dia da Transformação Final!',
      type: 'limpeza',
      tasks: [
        { id: 't30-1', description: 'Foto DEPOIS - resultado final!', completed: false, points: 50 },
        { id: 't30-2', description: 'Lavar com produtos de manutenção', completed: false, points: 20 },
        { id: 't30-3', description: 'Celebrar sua conquista!', completed: false, points: 30 },
        { id: 't30-4', description: 'Planejar rotina de manutenção', completed: false, points: 20 }
      ],
      tip: 'PARABÉNS! Você completou os 30 dias! Compare todas as fotos e celebre sua transformação. Seus cabelos nunca estiveram tão saudáveis!'
    }
  ];
}