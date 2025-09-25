import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Circle, Lock } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { DayTask } from '../../types';

export function Calendar() {
  const { dayTasks, completeTask, getAvailableDay, isDayAvailable, isDayCompleted } = useApp();

  const getTypeColor = (type: DayTask['type']) => {
    const colors = {
      hidratacao: '#3B82F6',
      nutricao: '#10B981',
      reconstrucao: '#F59E0B',
      limpeza: '#8B5CF6',
      descanso: '#6B7280'
    };
    return colors[type];
  };

  const getTypeLabel = (type: DayTask['type']) => {
    const labels = {
      hidratacao: 'Hidratação',
      nutricao: 'Nutrição',
      reconstrucao: 'Reconstrução',
      limpeza: 'Limpeza',
      descanso: 'Descanso'
    };
    return labels[type];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black">Calendário de 30 Dias</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded-full bg-[#E9B7C6]"></div>
            <span>Concluído</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded-full border-2 border-[#E9B7C6]"></div>
            <span>Disponível</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span>Bloqueado</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dayTasks.map((day) => {
          const completedTasks = day.tasks.filter(task => task.completed).length;
          const totalTasks = day.tasks.length;
          const isCompleted = isDayCompleted(day.day);
          const isAvailable = isDayAvailable(day.day);
          const currentAvailableDay = getAvailableDay();
          const isCurrentDay = day.day === currentAvailableDay;
          
          return (
            <div
              key={day.id}
              className={`bg-white rounded-xl p-6 shadow-sm border transition-all duration-200 ${
                !isAvailable 
                  ? 'border-gray-200 bg-gray-50 opacity-60' 
                  : isCompleted 
                    ? 'border-[#E9B7C6] bg-[#E9B7C6]/5 hover:shadow-md' 
                    : isCurrentDay
                      ? 'border-[#E9B7C6] border-2 hover:shadow-md'
                      : 'border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`text-2xl font-bold ${!isAvailable ? 'text-gray-400' : 'text-black'}`}>
                    Dia {day.day}
                  </div>
                  {!isAvailable && (
                    <Lock className="h-5 w-5 text-gray-400" />
                  )}
                  {isCompleted && isAvailable && (
                    <CheckCircle className="h-6 w-6 text-[#E9B7C6]" />
                  )}
                  {isCurrentDay && !isCompleted && (
                    <div className="px-2 py-1 bg-[#E9B7C6] text-white text-xs rounded-full font-medium">
                      HOJE
                    </div>
                  )}
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    !isAvailable ? 'text-gray-400 bg-gray-200' : 'text-white'
                  }`}
                  style={{ 
                    backgroundColor: !isAvailable ? undefined : getTypeColor(day.type) 
                  }}
                >
                  {getTypeLabel(day.type)}
                </div>
              </div>

              <h3 className={`font-semibold mb-3 ${!isAvailable ? 'text-gray-400' : 'text-black'}`}>
                {!isAvailable ? 'Bloqueado - Aguarde sua vez!' : day.title}
              </h3>

              {!isAvailable ? (
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500 mb-2">
                        Este dia será liberado em:
                      </p>
                      <p className="text-lg font-semibold text-gray-600">
                        {day.day - currentAvailableDay} dia{day.day - currentAvailableDay !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 mb-4">
                  {day.tasks.map((task) => (
                    <div key={task.id} className="flex items-start space-x-3">
                      <button
                        onClick={() => completeTask(day.day, task.id)}
                        className="mt-1 flex-shrink-0"
                        disabled={!isAvailable}
                      >
                        {task.completed ? (
                          <CheckCircle className="h-5 w-5 text-[#E9B7C6]" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                          {task.description}
                        </p>
                        <span className="text-xs text-[#E9B7C6] font-medium">
                          +{task.points} pontos
                        </span>
                      </div>
                    </div>
                   ))}
                 </div>
               )}

              <div className="border-t pt-3">
                <p className={`text-xs mb-2 ${!isAvailable ? 'text-gray-400' : 'text-gray-600'}`}>
                  💡 {!isAvailable ? 'Dica (bloqueada):' : 'Dica do dia:'}
                </p>
                <p className={`text-sm ${!isAvailable ? 'text-gray-400' : 'text-gray-700'}`}>
                  {!isAvailable ? 'Dica será revelada quando o dia for liberado.' : day.tip}
                </p>
              </div>

              {isAvailable && (
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>{completedTasks}/{totalTasks} tarefas</span>
                  <span>{Math.round((completedTasks / totalTasks) * 100)}% completo</span>
                </div>
              )}
              
              {!isAvailable && (
                <div className="mt-3 flex items-center justify-center text-xs text-gray-400">
                  <span>Aguardando liberação...</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}