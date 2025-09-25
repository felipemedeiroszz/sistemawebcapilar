import React from 'react';
import { Trophy, Star, Target, Calendar, Award } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const availableBadges = [
  {
    id: 'primeira-semana',
    name: 'Primeira Semana',
    description: 'Complete sua primeira semana de tratamento',
    icon: Calendar,
    color: '#3B82F6',
    requirement: 'Complete 7 dias consecutivos'
  },
  {
    id: 'hidratacao-mestre',
    name: 'Mestre da Hidratação',
    description: 'Complete 10 sessões de hidratação',
    icon: Star,
    color: '#10B981',
    requirement: 'Complete 10 tarefas de hidratação'
  },
  {
    id: 'fotografo',
    name: 'Fotógrafo Capilar',
    description: 'Registre seu progresso com fotos',
    icon: Trophy,
    color: '#F59E0B',
    requirement: 'Adicione 5 fotos ao seu progresso'
  },
  {
    id: 'comunidade-ativa',
    name: 'Membro Ativo',
    description: 'Participe ativamente da comunidade',
    icon: Award,
    color: '#8B5CF6',
    requirement: 'Faça 5 posts na comunidade'
  },
  {
    id: 'jornada-completa',
    name: 'Jornada Completa',
    description: 'Complete os 30 dias de tratamento',
    icon: Target,
    color: '#E9B7C6',
    requirement: 'Complete todos os 30 dias'
  }
];

export function Achievements() {
  const { user, dayTasks, communityPosts } = useApp();

  if (!user) return null;

  const calculateProgress = (badgeId: string) => {
    switch (badgeId) {
      case 'primeira-semana':
        return Math.min((user.currentDay / 7) * 100, 100);
      case 'hidratacao-mestre':
        const hidratacaoTasks = dayTasks
          .filter(day => day.type === 'hidratacao')
          .reduce((acc, day) => acc + day.tasks.filter(task => task.completed).length, 0);
        return Math.min((hidratacaoTasks / 10) * 100, 100);
      case 'fotografo':
        return Math.min(((user.progressPhotos || 0) / 5) * 100, 100);
      case 'comunidade-ativa':
        const userPosts = communityPosts.filter(post => post.userId === user.id).length;
        return Math.min((userPosts / 5) * 100, 100);
      case 'jornada-completa':
        return Math.min((user.currentDay / 30) * 100, 100);
      default:
        return 0;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black">Conquistas</h1>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#E9B7C6]">{user.points}</div>
          <div className="text-sm text-gray-600">Pontos Totais</div>
        </div>
      </div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-black mb-1">{user.currentDay}</div>
          <div className="text-sm text-gray-600">Dias Completados</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-black mb-1">{user.badges.length}</div>
          <div className="text-sm text-gray-600">Badges Conquistadas</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-black mb-1">{user.completedTasks.length}</div>
          <div className="text-sm text-gray-600">Tarefas Concluídas</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-black mb-1">{Math.round((user.currentDay / 30) * 100)}%</div>
          <div className="text-sm text-gray-600">Progresso Geral</div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-6">Badges e Conquistas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableBadges.map((badge) => {
            const progress = calculateProgress(badge.id);
            const isEarned = user.badges.includes(badge.id);
            const IconComponent = badge.icon;
            
            return (
              <div
                key={badge.id}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  isEarned
                    ? 'border-[#E9B7C6] bg-[#E9B7C6]/5 shadow-md'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      isEarned ? 'shadow-lg' : 'opacity-50'
                    }`}
                    style={{ backgroundColor: badge.color }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className={`font-semibold mb-1 ${isEarned ? 'text-black' : 'text-gray-500'}`}>
                    {badge.name}
                  </h3>
                  <p className={`text-sm ${isEarned ? 'text-gray-700' : 'text-gray-400'}`}>
                    {badge.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Progresso</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: isEarned ? badge.color : '#D1D5DB'
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{badge.requirement}</p>
                </div>

                {isEarned && (
                  <div className="mt-3 text-center">
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: badge.color }}
                    >
                      ✓ Conquistada!
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Próximas Conquistas */}
      <div className="bg-gradient-to-r from-[#E9B7C6]/10 to-[#E9B7C6]/5 p-6 rounded-xl border border-[#E9B7C6]/20">
        <h3 className="font-semibold text-black mb-3">🎯 Próximas Conquistas</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• Continue sua jornada para desbloquear mais badges</p>
          <p>• Participe da comunidade para ganhar pontos extras</p>
          <p>• Documente seu progresso com fotos</p>
          <p>• Complete todas as tarefas diárias para maximizar seus pontos</p>
        </div>
      </div>
    </div>
  );
}