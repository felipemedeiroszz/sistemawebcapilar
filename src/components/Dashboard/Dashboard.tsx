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

  const currentDayData = dayTasks.find(day => day.day === user.currentDay);
  const todayCompletedTasks = currentDayData?.tasks.filter(task => task.completed).length || 0;
  const todayTotalTasks = currentDayData?.tasks.length || 0;

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
          title="Badges"
          value={user.badges.length}
          icon={Trophy}
        />
        <StatsCard
          title="Tarefas Hoje"
          value={`${todayCompletedTasks}/${todayTotalTasks}`}
          icon={Target}
        />
      </div>

      {/* Progresso Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Círculo de Progresso */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-50 card-hover">
          <h2 className="text-xl font-bold text-black mb-6 flex items-center">
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

        {/* Tarefas de Hoje */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-50 card-hover">
          <h2 className="text-xl font-bold text-black mb-6 flex items-center">
            <div className="w-2 h-6 rounded-full mr-3 pulse-slow" style={{ backgroundColor: '#E9B7C6' }}></div>
            Tarefas de Hoje
          </h2>
          {currentDayData ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-[#E9B7C6]/20" style={{ backgroundColor: 'rgba(233, 183, 198, 0.1)' }}>
                <h3 className="font-semibold text-black mb-2">{currentDayData.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{currentDayData.tip}</p>
              </div>
              <div className="space-y-2">
                {currentDayData.tasks.map(task => (
                  <div key={task.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => {}}
                      className="rounded-md text-[#E9B7C6] focus:ring-[#E9B7C6] w-5 h-5"
                    />
                    <span className={`${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                      {task.description}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setCurrentView('calendar')}
                className="w-full mt-4 button-secondary"
              >
                Ver Detalhes
              </button>
            </div>
          ) : (
            <p className="text-gray-600">Nenhuma tarefa para hoje</p>
          )}
        </div>
      </div>


    </div>
  );
}