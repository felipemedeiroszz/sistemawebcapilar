export interface Product {
  name: string;
  function: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  frequency: string;
}

export interface DayRoutine {
  day: number;
  products: string[];
  steps: string[];
  tips: string;
}

export interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

export const products: Product[] = [
  {
    name: "Shampoo Nutritivo Martha Brust",
    function: "Limpeza suave e nutritiva dos fios",
    ingredients: ["Óleo de Argan", "Proteína de Trigo", "Vitamina E"],
    benefits: ["Limpa sem ressecar", "Nutre profundamente", "Prepara para tratamento"],
    usage: "Aplique no cabelo molhado, massageie suavemente e enxágue",
    frequency: "Conforme cronograma do tratamento"
  },
  {
    name: "Condicionador Hidratante Martha Brust",
    function: "Hidratação e desembaraço dos fios",
    ingredients: ["Manteiga de Karité", "Óleo de Coco", "Pantenol"],
    benefits: ["Hidrata intensamente", "Facilita penteado", "Sela cutículas"],
    usage: "Aplique do meio às pontas, deixe agir 3-5 minutos e enxágue",
    frequency: "Após cada lavagem"
  },
  {
    name: "Máscara de Reconstrução Martha Brust",
    function: "Reconstrução e fortalecimento dos fios danificados",
    ingredients: ["Queratina Hidrolisada", "Aminoácidos", "Ceramidas"],
    benefits: ["Reconstrói fios danificados", "Fortalece estrutura capilar", "Reduz quebra"],
    usage: "Aplique no cabelo limpo e úmido, deixe agir 15-20 minutos e enxágue",
    frequency: "1-2 vezes por semana conforme cronograma"
  },
  {
    name: "Máscara de Nutrição Martha Brust",
    function: "Nutrição profunda e restauração do brilho",
    ingredients: ["Óleo de Macadâmia", "Extrato de Açaí", "Vitaminas A e E"],
    benefits: ["Nutre profundamente", "Restaura brilho natural", "Suaviza fios"],
    usage: "Aplique no cabelo limpo e úmido, deixe agir 10-15 minutos e enxágue",
    frequency: "1-2 vezes por semana conforme cronograma"
  },
  {
    name: "Máscara de Hidratação Martha Brust",
    function: "Hidratação intensa e controle do frizz",
    ingredients: ["Ácido Hialurônico", "Glicerina", "Óleo de Jojoba"],
    benefits: ["Hidrata intensamente", "Controla frizz", "Aumenta maciez"],
    usage: "Aplique no cabelo limpo e úmido, deixe agir 10-15 minutos e enxágue",
    frequency: "1-2 vezes por semana conforme cronograma"
  },
  {
    name: "Sérum Reparador Martha Brust",
    function: "Proteção térmica e reparação das pontas",
    ingredients: ["Silicones nobres", "Óleo de Argan", "Filtro UV"],
    benefits: ["Protege do calor", "Repara pontas duplas", "Adiciona brilho"],
    usage: "Aplique pequena quantidade nos cabelos úmidos ou secos, nas pontas",
    frequency: "Diariamente ou conforme necessidade"
  },
  {
    name: "Tônico Noturno Martha Brust",
    function: "Tratamento noturno para couro cabeludo e raiz",
    ingredients: ["Biotina", "Cafeína", "Extrato de Ginseng"],
    benefits: ["Estimula crescimento", "Fortalece raiz", "Melhora circulação"],
    usage: "Aplique no couro cabeludo limpo antes de dormir, não enxágue",
    frequency: "3-4 vezes por semana"
  }
];

export const treatmentRoutines: DayRoutine[] = [
  {
    day: 1,
    products: ["Shampoo Nutritivo", "Condicionador Hidratante"],
    steps: [
      "Molhe bem o cabelo",
      "Aplique o Shampoo Nutritivo, massageie suavemente",
      "Enxágue completamente",
      "Aplique o Condicionador do meio às pontas",
      "Deixe agir 3-5 minutos e enxágue"
    ],
    tips: "Primeiro dia do tratamento! Comece com uma limpeza suave para preparar os fios."
  },
  {
    day: 2,
    products: ["Shampoo Nutritivo", "Máscara de Hidratação", "Sérum Reparador"],
    steps: [
      "Lave com Shampoo Nutritivo",
      "Aplique a Máscara de Hidratação no cabelo úmido",
      "Deixe agir 15 minutos",
      "Enxágue bem",
      "Aplique o Sérum nas pontas do cabelo úmido"
    ],
    tips: "Dia de hidratação! Seus fios vão absorver toda a umidade necessária."
  },
  {
    day: 3,
    products: ["Tônico Noturno"],
    steps: [
      "Certifique-se que o couro cabeludo está limpo",
      "Aplique o Tônico Noturno diretamente no couro cabeludo",
      "Massageie suavemente",
      "Não enxágue - deixe agir durante a noite"
    ],
    tips: "Dia de descanso para os fios, mas tratamento para o couro cabeludo!"
  }
  // Adicione mais dias conforme necessário
];

export const faqs: FAQ[] = [
  // Cumprimentos e saudações
  {
    question: "Bom dia!",
    answer: "Bom dia, querida! ☀️ Que alegria começar o dia com você! Como está indo seu tratamento capilar hoje? Posso te ajudar com alguma dúvida sobre os produtos ou cronograma?",
    keywords: ["bom dia", "dia", "manhã"]
  },
  {
    question: "Boa tarde!",
    answer: "Boa tarde, linda! 🌞 Espero que seu dia esteja sendo maravilhoso! Como posso te ajudar com seu tratamento capilar hoje? Tem alguma dúvida sobre os produtos?",
    keywords: ["boa tarde", "tarde"]
  },
  {
    question: "Boa noite!",
    answer: "Boa noite, querida! 🌙 Que bom te ver aqui! Já aplicou o Tônico Noturno hoje? Lembre-se que ele é perfeito para usar antes de dormir. Como posso te ajudar?",
    keywords: ["boa noite", "noite"]
  },
  {
    question: "Oi!",
    answer: "Oi, linda! 💖 Que bom te ver por aqui! Sou a Marthinha e estou aqui para te ajudar com tudo sobre seu tratamento capilar. O que você gostaria de saber hoje?",
    keywords: ["oi", "olá", "hey"]
  },
  {
    question: "Oii!",
    answer: "Oii, querida! 😊 Que alegria ter você aqui! Como está seu cabelo hoje? Posso te ajudar com alguma dúvida sobre o tratamento ou produtos?",
    keywords: ["oii", "oiii"]
  },
  {
    question: "Marthinha!",
    answer: "Oi, amor! 💕 Aqui estou eu! Pronta para te ajudar com qualquer dúvida sobre seu tratamento capilar. O que você precisa saber hoje?",
    keywords: ["marthinha", "martha", "chamando"]
  },
  
  // FAQs sobre resultados
  {
    question: "Quando vou ver os primeiros resultados?",
    answer: "Os primeiros resultados começam a aparecer entre 7-10 dias de uso consistente. Você notará maior maciez e brilho. Resultados mais significativos aparecem após 21 dias de tratamento.",
    keywords: ["resultados", "quando", "tempo", "primeiros", "aparecer"]
  },
  {
    question: "Em quanto tempo meu cabelo vai estar completamente transformado?",
    answer: "A transformação completa acontece ao final dos 30 dias de tratamento! Mas você já vai notar mudanças incríveis: na primeira semana mais maciez, na segunda semana mais brilho, e na terceira semana a reconstrução fica evidente. Seja paciente, o resultado vale a pena! ✨",
    keywords: ["transformação", "completa", "30 dias", "mudanças", "semanas"]
  },
  
  // FAQs sobre produtos
  {
    question: "Posso usar outros produtos durante o tratamento?",
    answer: "Recomendo usar apenas os produtos do kit Martha Brust durante os 30 dias para obter os melhores resultados. Outros produtos podem interferir na eficácia do tratamento.",
    keywords: ["outros produtos", "usar", "interferir", "kit", "durante"]
  },
  {
    question: "Qual a diferença entre as três máscaras?",
    answer: "Cada máscara tem uma função específica: 💪 Reconstrução - reconstrói fios danificados com queratina, 💧 Hidratação - repõe água e controla frizz, 🌟 Nutrição - repõe óleos e dá brilho. O cronograma alterna entre elas para um tratamento completo!",
    keywords: ["diferença", "máscaras", "reconstrução", "hidratação", "nutrição", "função"]
  },
  {
    question: "Posso misturar os produtos?",
    answer: "Não recomendo misturar os produtos! Cada um foi formulado para agir de forma específica. Siga sempre a ordem do cronograma para obter os melhores resultados. A sequência é importante para a eficácia! 😊",
    keywords: ["misturar", "produtos", "ordem", "sequência", "cronograma"]
  },
  
  // FAQs sobre problemas capilares
  {
    question: "Meu cabelo está oleoso, o que fazer?",
    answer: "Se o cabelo estiver oleoso, reduza a quantidade de produto aplicada e certifique-se de enxaguar bem. Foque a aplicação do condicionador e máscaras do meio às pontas, evitando a raiz.",
    keywords: ["oleoso", "gorduroso", "raiz", "quantidade", "enxaguar"]
  },
  {
    question: "Meu cabelo está muito seco, é normal?",
    answer: "No início do tratamento é normal o cabelo parecer mais seco, pois estamos removendo resíduos e preparando os fios. Continue o tratamento! A partir da segunda semana você notará mais hidratação. Use sempre o sérum nas pontas! 💧",
    keywords: ["seco", "ressecado", "normal", "início", "hidratação", "sérum"]
  },
  {
    question: "Tenho muito frizz, o tratamento vai ajudar?",
    answer: "Sim! O frizz é um dos primeiros problemas que o tratamento resolve. A Máscara de Hidratação com ácido hialurônico é especial para isso. Use o Sérum Reparador diariamente nas pontas - você vai ver a diferença! ✨",
    keywords: ["frizz", "arrepiado", "hidratação", "ácido hialurônico", "sérum", "pontas"]
  },
  {
    question: "Meu cabelo está caindo muito, é normal?",
    answer: "Uma queda leve no início pode acontecer, pois estamos removendo fios já enfraquecidos. Mas se a queda for intensa, consulte um dermatologista. O Tônico Noturno ajuda a fortalecer a raiz! 💪",
    keywords: ["queda", "caindo", "cabelo", "normal", "dermatologista", "tônico", "raiz"]
  },
  
  // FAQs sobre uso e aplicação
  {
    question: "Posso usar a máscara todos os dias?",
    answer: "Não recomendo usar máscaras diariamente. Siga o cronograma do tratamento - geralmente 1-2 vezes por semana. O uso excessivo pode sobrecarregar os fios.",
    keywords: ["máscara", "todos os dias", "diariamente", "cronograma", "excessivo"]
  },
  {
    question: "Como devo lavar meu cabelo?",
    answer: "Use água morna (nunca muito quente), aplique o shampoo apenas na raiz massageando suavemente, e distribua o condicionador do meio às pontas. Enxágue sempre muito bem.",
    keywords: ["lavar", "água", "temperatura", "shampoo", "condicionador"]
  },
  {
    question: "Quanto produto devo usar?",
    answer: "Use a quantidade certa: 🧴 Shampoo - 1 colher de chá, 💧 Condicionador - 1 colher de sopa, 🎭 Máscaras - 2 colheres de sopa, 💫 Sérum - 2-3 gotas, 🌙 Tônico - aplicação direta no couro cabeludo. Menos é mais!",
    keywords: ["quantidade", "produto", "usar", "colher", "gotas", "aplicação"]
  },
  {
    question: "Posso dormir com a máscara no cabelo?",
    answer: "Não recomendo! As máscaras devem agir pelo tempo indicado (10-20 minutos) e depois ser enxaguadas. Deixar por muito tempo pode sobrecarregar os fios. Apenas o Tônico Noturno pode ficar overnight! 🌙",
    keywords: ["dormir", "máscara", "overnight", "tempo", "enxaguar", "tônico noturno"]
  },
  
  // FAQs sobre ferramentas e cuidados
  {
    question: "Posso fazer escova ou chapinha durante o tratamento?",
    answer: "Sim, mas sempre use o Sérum Reparador antes para proteção térmica. Evite temperaturas muito altas e tente reduzir a frequência de uso de ferramentas de calor.",
    keywords: ["escova", "chapinha", "calor", "proteção térmica", "sérum", "temperatura"]
  },
  {
    question: "Posso pintar o cabelo durante o tratamento?",
    answer: "Recomendo esperar terminar os 30 dias de tratamento antes de fazer química. O cabelo estará mais forte e preparado para receber a coloração. Se for urgente, consulte um profissional! 💇‍♀️",
    keywords: ["pintar", "coloração", "química", "tinta", "30 dias", "profissional"]
  },
  {
    question: "Posso fazer progressiva ou alisamento?",
    answer: "Melhor aguardar o fim do tratamento! Seu cabelo estará muito mais forte e saudável para receber procedimentos químicos. O resultado da progressiva será muito melhor em cabelos tratados! ✨",
    keywords: ["progressiva", "alisamento", "química", "procedimentos", "fim", "tratamento"]
  },
  
  // FAQs sobre problemas e reações
  {
    question: "O que fazer se aparecer coceira ou irritação?",
    answer: "Se você sentir coceira intensa, irritação ou qualquer reação alérgica, interrompa o uso imediatamente e consulte um dermatologista. Não sou um profissional de saúde e não posso dar conselhos médicos.",
    keywords: ["coceira", "irritação", "alergia", "reação", "médico", "dermatologista"]
  },
  {
    question: "Não estou vendo resultados, o que pode estar acontecendo?",
    answer: "Alguns fatores podem influenciar: uso inconsistente, não seguir a ordem correta dos produtos, ou cabelo muito danificado que precisa de mais tempo. Continue o tratamento e seja paciente - cada cabelo responde de forma diferente.",
    keywords: ["sem resultados", "não funciona", "demora", "inconsistente", "danificado"]
  },
  
  // FAQs sobre cronograma e rotina
  {
    question: "Esqueci de usar um produto, o que faço?",
    answer: "Não se preocupe! Continue normalmente no dia seguinte. O importante é manter a consistência geral. Se esqueceu o Tônico Noturno, pode aplicar na próxima noite. Não precisa compensar! 😊",
    keywords: ["esqueci", "produto", "compensar", "consistência", "próxima"]
  },
  {
    question: "Posso pular um dia do cronograma?",
    answer: "Eventualmente sim, mas tente manter a regularidade! Se precisar pular, retome no dia seguinte normalmente. O segredo está na consistência ao longo dos 30 dias! 💪",
    keywords: ["pular", "dia", "cronograma", "regularidade", "consistência"]
  },
  {
    question: "Qual a ordem correta dos produtos?",
    answer: "A ordem é sempre: 1️⃣ Shampoo (raiz), 2️⃣ Condicionador ou Máscara (meio às pontas), 3️⃣ Enxágue bem, 4️⃣ Sérum (pontas do cabelo úmido), 5️⃣ Tônico Noturno (couro cabeludo limpo). Nunca inverta!",
    keywords: ["ordem", "produtos", "sequência", "shampoo", "condicionador", "máscara", "sérum", "tônico"]
  },
  
  // FAQs motivacionais e encorajamento
  {
    question: "Estou desanimada com meu cabelo",
    answer: "Eu entendo, querida! 💕 Transformações levam tempo, mas você está no caminho certo! Cada dia de tratamento é um investimento no seu cabelo dos sonhos. Continue firme - eu acredito em você! ✨",
    keywords: ["desanimada", "triste", "desistir", "motivação", "encorajamento"]
  },
  {
    question: "Vale a pena continuar o tratamento?",
    answer: "VALE MUITO! 🌟 Você já chegou até aqui, não desista agora! Os melhores resultados aparecem nas últimas semanas. Seu cabelo está se transformando por dentro, mesmo que ainda não veja por fora. Continue! 💪",
    keywords: ["vale a pena", "continuar", "desistir", "resultados", "transformação"]
  }
];

export const assistantPersonality = {
  name: "Marthinha",
  greeting: "Olá! Eu sou a Marthinha, sua assistente especializada no tratamento capilar Martha Brust! 💫 Estou aqui para te ajudar com qualquer dúvida sobre o seu programa de 30 dias. Como posso te ajudar hoje?",
  defaultResponses: {
    outOfScope: [
      "Minha especialidade é o tratamento capilar de 30 dias Martha Brust. O que você gostaria de saber sobre ele? 😊",
      "Sou especialista em cuidados capilares! Como posso te ajudar com seu tratamento Martha Brust? ✨",
      "Estou aqui para falar sobre cabelos e tratamentos! Qual sua dúvida sobre os produtos Martha Brust? 💖"
    ],
    medical: "Não sou um profissional de saúde. Para questões médicas como alergias, coceira intensa ou problemas no couro cabeludo, por favor consulte um dermatologista. 👩‍⚕️",
    encouragement: [
      "Você está indo muito bem! Continue seguindo o cronograma! 💪",
      "Cada dia do tratamento é um passo mais perto do cabelo dos seus sonhos! ✨",
      "Lembre-se: consistência é a chave para resultados incríveis! 🌟",
      "Seu cabelo está se transformando a cada dia, mesmo que você ainda não veja! 💖",
      "Acredite no processo! Seu cabelo vai ficar lindo! 🌺",
      "Você é incrível por cuidar tão bem do seu cabelo! Continue assim! 💕",
      "Cada produto aplicado é um carinho que você dá ao seu cabelo! 🥰",
      "Transformações levam tempo, mas o resultado vale cada dia de dedicação! ⭐"
    ],
    greetings: {
      morning: [
        "Bom dia, querida! ☀️ Como está seu cabelo hoje?",
        "Bom dia, linda! 🌅 Pronta para mais um dia de cuidados capilares?",
        "Bom dia! ☀️ Que alegria começar o dia cuidando do seu cabelo!"
      ],
      afternoon: [
        "Boa tarde, amor! 🌞 Como posso te ajudar hoje?",
        "Boa tarde, querida! 🌻 Vamos falar sobre seu tratamento?",
        "Boa tarde! 🌤️ Seu cabelo está precisando de algum cuidado especial?"
      ],
      evening: [
        "Boa noite, linda! 🌙 Já aplicou o Tônico Noturno?",
        "Boa noite, querida! ⭐ Como foi seu dia de tratamento?",
        "Boa noite! 🌜 Lembre-se do Tônico Noturno antes de dormir!"
      ],
      casual: [
        "Oi, linda! 💖 Que bom te ver aqui!",
        "Oii, querida! 😊 Como posso te ajudar?",
        "Oi, amor! 💕 Pronta para cuidar do seu cabelo?",
        "Hey, linda! ✨ O que você quer saber hoje?"
      ]
    },
    compliments: [
      "Você é incrível por se dedicar tanto ao seu cabelo! 💖",
      "Que disciplina linda! Seu cabelo vai ficar maravilhoso! ✨",
      "Adoro sua dedicação ao tratamento! Continue assim! 🌟",
      "Você está sendo uma guerreira do cabelo! 💪",
      "Que orgulho de você! Cuidar do cabelo é um ato de amor próprio! 💕"
    ],
    tips: [
      "💡 Dica: Sempre penteie o cabelo de baixo para cima para evitar quebra!",
      "💡 Dica: Use uma fronha de seda para proteger seu cabelo enquanto dorme!",
      "💡 Dica: Beba bastante água - hidratação vem de dentro para fora!",
      "💡 Dica: Evite escovar o cabelo molhado - use um pente de dentes largos!",
      "💡 Dica: Proteja sempre seu cabelo do sol com produtos com filtro UV!"
    ]
  }
};

export const keywordMatcher = {
  greetings: {
    morning: ["bom dia", "dia", "manhã"],
    afternoon: ["boa tarde", "tarde"],
    evening: ["boa noite", "noite"],
    casual: ["oi", "oii", "oiii", "olá", "hey", "marthinha", "martha", "chamando"]
  },
  products: ["shampoo", "condicionador", "máscara", "sérum", "tônico", "produto", "reconstrução", "hidratação", "nutrição"],
  routine: ["cronograma", "rotina", "dia", "ordem", "passo", "como usar", "sequência", "aplicar"],
  problems: ["oleoso", "seco", "frizz", "caspa", "coceira", "irritação", "quebra", "queda", "caindo", "ressecado", "arrepiado"],
  results: ["resultado", "quando", "tempo", "funciona", "melhora", "mudança", "transformação", "primeiros", "aparecer"],
  usage: ["como", "aplicar", "usar", "quantidade", "frequência", "tempo", "colher", "gotas"],
  tools: ["escova", "chapinha", "calor", "proteção térmica", "temperatura", "progressiva", "alisamento", "pintar", "coloração"],
  motivation: ["desanimada", "triste", "desistir", "motivação", "encorajamento", "vale a pena", "continuar"],
  schedule: ["esqueci", "pular", "compensar", "consistência", "regularidade", "cronograma"],
  medical: ["coceira", "irritação", "alergia", "reação", "médico", "dermatologista"],
  encouragement: ["parabéns", "muito bem", "ótimo", "excelente", "incrível"]
};