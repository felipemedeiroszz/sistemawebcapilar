import { 
  products, 
  treatmentRoutines, 
  faqs, 
  assistantPersonality, 
  keywordMatcher,
  Product,
  FAQ
} from '../data/chatKnowledgeBase';

class ChatAssistant {
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^\w\s]/g, ' ') // Remove pontuação
      .replace(/\s+/g, ' ') // Remove espaços extras
      .trim();
  }

  private findKeywords(text: string, keywords: string[]): string[] {
    const normalizedText = this.normalizeText(text);
    return keywords.filter(keyword => 
      normalizedText.includes(this.normalizeText(keyword))
    );
  }

  private findProductByName(text: string): Product | null {
    const normalizedText = this.normalizeText(text);
    
    return products.find(product => {
      const normalizedProductName = this.normalizeText(product.name);
      const productWords = normalizedProductName.split(' ');
      
      // Verifica se pelo menos 2 palavras do produto estão no texto
      const matchingWords = productWords.filter(word => 
        normalizedText.includes(word) && word.length > 2
      );
      
      return matchingWords.length >= 2 || 
             normalizedText.includes(normalizedProductName) ||
             (normalizedText.includes('shampoo') && product.name.includes('Shampoo')) ||
             (normalizedText.includes('condicionador') && product.name.includes('Condicionador')) ||
             (normalizedText.includes('mascara') && product.name.includes('Máscara')) ||
             (normalizedText.includes('serum') && product.name.includes('Sérum')) ||
             (normalizedText.includes('tonico') && product.name.includes('Tônico'));
    }) || null;
  }

  private findFAQByKeywords(text: string): FAQ | null {
    const normalizedText = this.normalizeText(text);
    
    let bestMatch: FAQ | null = null;
    let maxMatches = 0;

    faqs.forEach(faq => {
      const matches = faq.keywords.filter(keyword => 
        normalizedText.includes(this.normalizeText(keyword))
      ).length;

      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = faq;
      }
    });

    return maxMatches >= 1 ? bestMatch : null;
  }

  private getDayRoutine(text: string): string | null {
    const normalizedText = this.normalizeText(text);
    const dayMatch = normalizedText.match(/dia\s*(\d+)/);
    
    if (dayMatch) {
      const day = parseInt(dayMatch[1]);
      const routine = treatmentRoutines.find(r => r.day === day);
      
      if (routine) {
        return `**Dia ${routine.day} do Tratamento:**\n\n` +
               `**Produtos:** ${routine.products.join(', ')}\n\n` +
               `**Passos:**\n${routine.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n` +
               `**Dica:** ${routine.tips}`;
      }
    }

    return null;
  }

  private getProductInfo(product: Product): string {
    return `**${product.name}**\n\n` +
           `**Função:** ${product.function}\n\n` +
           `**Ingredientes principais:** ${product.ingredients.join(', ')}\n\n` +
           `**Benefícios:**\n${product.benefits.map(benefit => `• ${benefit}`).join('\n')}\n\n` +
           `**Como usar:** ${product.usage}\n\n` +
           `**Frequência:** ${product.frequency}`;
  }

  private getEncouragementMessage(): string {
    const messages = assistantPersonality.defaultResponses.encouragement;
    return messages[Math.floor(Math.random() * messages.length)];
  }

  private getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private detectGreeting(text: string): string | null {
    const normalizedText = this.normalizeText(text);
    
    // Verificar cumprimentos específicos
    if (keywordMatcher.greetings.morning.some(keyword => 
        normalizedText.includes(this.normalizeText(keyword)))) {
      return this.getRandomResponse(assistantPersonality.defaultResponses.greetings.morning);
    }
    
    if (keywordMatcher.greetings.afternoon.some(keyword => 
        normalizedText.includes(this.normalizeText(keyword)))) {
      return this.getRandomResponse(assistantPersonality.defaultResponses.greetings.afternoon);
    }
    
    if (keywordMatcher.greetings.evening.some(keyword => 
        normalizedText.includes(this.normalizeText(keyword)))) {
      return this.getRandomResponse(assistantPersonality.defaultResponses.greetings.evening);
    }
    
    if (keywordMatcher.greetings.casual.some(keyword => 
        normalizedText.includes(this.normalizeText(keyword)))) {
      return this.getRandomResponse(assistantPersonality.defaultResponses.greetings.casual);
    }
    
    return null;
  }

  private isOutOfScope(text: string): boolean {
    const normalizedText = this.normalizeText(text);
    
    // Primeiro verificar se é cumprimento
    if (this.detectGreeting(text)) {
      return false;
    }
    
    const hairRelatedKeywords = [
      'cabelo', 'shampoo', 'condicionador', 'mascara', 'serum', 'tonico',
      'tratamento', 'produto', 'martha', 'brust', 'dia', 'rotina',
      'oleoso', 'seco', 'frizz', 'hidratacao', 'nutricao', 'reconstrucao'
    ];

    return !hairRelatedKeywords.some(keyword => 
      normalizedText.includes(this.normalizeText(keyword))
    );
  }

  private isMedicalQuestion(text: string): boolean {
    const normalizedText = this.normalizeText(text);
    const medicalKeywords = [
      'alergia', 'alergico', 'coceira', 'irritacao', 'vermelhidao',
      'descamacao', 'ferida', 'machucado', 'inflamacao', 'doenca',
      'problema de saude', 'medico', 'dermatologista'
    ];

    return medicalKeywords.some(keyword => 
      normalizedText.includes(this.normalizeText(keyword))
    );
  }

  public async getResponse(userMessage: string): Promise<string> {
    const normalizedMessage = this.normalizeText(userMessage);

    // Verificar se é cumprimento ou saudação
    const greeting = this.detectGreeting(userMessage);
    if (greeting) {
      return greeting;
    }

    // Verificar se é uma questão médica
    if (this.isMedicalQuestion(userMessage)) {
      return assistantPersonality.defaultResponses.medical;
    }

    // Verificar se está fora do escopo
    if (this.isOutOfScope(userMessage)) {
      return this.getRandomResponse(assistantPersonality.defaultResponses.outOfScope);
    }

    // Buscar rotina de dia específico
    const dayRoutine = this.getDayRoutine(userMessage);
    if (dayRoutine) {
      return dayRoutine;
    }

    // Buscar produto específico
    const product = this.findProductByName(userMessage);
    if (product) {
      return this.getProductInfo(product);
    }

    // Buscar FAQ
    const faq = this.findFAQByKeywords(userMessage);
    if (faq) {
      return faq.answer;
    }

    // Verificar se é pedido de encorajamento
    const encouragementKeywords = ['desanimada', 'desistir', 'nao funciona', 'sem resultado', 'motivacao'];
    if (encouragementKeywords.some(keyword => normalizedMessage.includes(keyword))) {
      return this.getEncouragementMessage() + '\n\nSe você tem dúvidas específicas sobre o tratamento, me conte mais detalhes que posso te ajudar melhor! 😊';
    }

    // Verificar se é elogio ou parabenização
    const encouragementWords = keywordMatcher.encouragement;
    if (encouragementWords.some(keyword => normalizedMessage.includes(keyword))) {
      return this.getRandomResponse(assistantPersonality.defaultResponses.compliments) + 
             '\n\n' + this.getRandomResponse(assistantPersonality.defaultResponses.tips);
    }

    // Resposta genérica com sugestões
    return `Entendi sua pergunta! Para te ajudar melhor, você pode me perguntar sobre:\n\n` +
           `• **Produtos específicos** (ex: "Para que serve o sérum?")\n` +
           `• **Rotina diária** (ex: "O que usar no dia 5?")\n` +
           `• **Problemas comuns** (ex: "Meu cabelo está oleoso")\n` +
           `• **Dúvidas sobre aplicação** (ex: "Como aplicar a máscara?")\n\n` +
           `O que você gostaria de saber especificamente? 💫`;
  }
}

export const chatAssistant = new ChatAssistant();