import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingQuestion {
  id: string;
  question: string;
  options: string[];
}

interface OnboardingProps {
  onComplete: (answers: Record<string, string>) => void;
}

const questions: OnboardingQuestion[] = [
  {
    id: 'hairType',
    question: 'Qual é o seu tipo capilar?',
    options: [
      'Liso (1A, 1B, 1C)',
      'Ondulado (2A, 2B, 2C)',
      'Cacheado (3A, 3B, 3C)',
      'Crespo (4A, 4B, 4C)',
      'Não sei identificar'
    ]
  },
  {
    id: 'hairNeeds',
    question: 'Qual é a sua principal necessidade capilar?',
    options: [
      'Hidratação (cabelo ressecado)',
      'Nutrição (cabelo sem brilho)',
      'Reconstrução (cabelo quebrado)',
      'Controle de oleosidade',
      'Crescimento capilar',
      'Redução de frizz'
    ]
  },
  {
    id: 'washFrequency',
    question: 'Quantas vezes você lava o cabelo por semana?',
    options: [
      'Todos os dias',
      '4-6 vezes por semana',
      '2-3 vezes por semana',
      '1 vez por semana',
      'Menos de 1 vez por semana'
    ]
  },
  {
    id: 'hairLength',
    question: 'Qual é o comprimento do seu cabelo?',
    options: [
      'Curto (até o queixo)',
      'Médio (até os ombros)',
      'Longo (até o meio das costas)',
      'Muito longo (abaixo do meio das costas)'
    ]
  },
  {
    id: 'hairDamage',
    question: 'Seu cabelo passou por algum processo químico recentemente?',
    options: [
      'Sim, coloração',
      'Sim, alisamento/relaxamento',
      'Sim, descoloração',
      'Sim, múltiplos processos',
      'Não, é natural'
    ]
  },
  {
    id: 'experience',
    question: 'Qual é a sua experiência com tratamentos capilares?',
    options: [
      'Nunca fiz tratamentos específicos',
      'Já tentei alguns produtos sem sucesso',
      'Faço tratamentos ocasionalmente',
      'Tenho uma rotina estabelecida',
      'Sou experiente em cuidados capilares'
    ]
  }
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: selectedOption
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || '');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Vamos conhecer seu cabelo! 💫
          </h1>
          <p className="text-gray-600">
            Responda algumas perguntas para personalizarmos seu tratamento
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}% concluído</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  selectedOption === option
                    ? 'border-pink-500 bg-pink-50 text-pink-700'
                    : 'border-gray-200 hover:border-pink-300 hover:bg-pink-25'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {selectedOption === option && (
                    <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Anterior</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              !selectedOption
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md hover:shadow-lg'
            }`}
          >
            <span>{currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}