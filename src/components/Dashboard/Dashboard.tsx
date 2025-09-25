import React from 'react';
import { Calendar, Star, Target, Trophy, Camera, BookOpen } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { ProgressCircle } from './ProgressCircle';
import { StatsCard } from './StatsCard';

export function Dashboard() {
  const { user, dayTasks, setCurrentView } = useApp();

  if (!user) return null;

  const completedTasks = dayTasks.reduce((acc, day) => 
    acc + day.tasks.filter(task => task.completed).length, 0
  );
  
  const totalTasks = dayTasks.reduce((acc, day) => acc + day.tasks.length, 0);
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="space-y-8 fade-in">
      {/* Cabeçalho de Boas-vindas */}
      <div className="bg-gradient-to-br from-[#E9B7C6] via-[#E9B7C6] to-[#E9B7C6]/90 rounded-3xl p-6 md:p-8 text-white shadow-xl floating-animation">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Olá, {user.name}! 👋</h1>
        <p className="text-white/90">
          Você está no dia {user.currentDay} da sua jornada capilar de 30 dias
        </p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Dia Atual"
          value={user.currentDay}
          icon={Calendar}
        />
        <StatsCard
          title="Pontos"
          value={user.points}
          icon={Star}
        />
        <StatsCard
          title="Conquistas"
          value={user.badges.length}
          icon={Trophy}
        />
        <StatsCard
          title="Progresso"
          value={`${Math.round(progressPercentage)}%`}
          icon={Target}
        />
      </div>

      {/* Progresso Principal */}
      <div className="flex justify-center">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-50 card-hover max-w-md w-full">
          <h2 className="text-xl font-bold text-black mb-6 flex items-center justify-center">
            <div className="w-2 h-6 rounded-full mr-3 pulse-slow" style={{ backgroundColor: '#E9B7C6' }}></div>
            Progresso Geral
          </h2>
          <div className="flex justify-center">
            <ProgressCircle progress={progressPercentage} size={150} />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 font-medium">
              {completedTasks} de {totalTasks} tarefas concluídas
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}