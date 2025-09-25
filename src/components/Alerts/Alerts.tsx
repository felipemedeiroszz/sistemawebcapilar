import React, { useState, useEffect } from 'react';
import { Check, Clock, Filter, RotateCcw, Bell } from 'lucide-react';
import { alertsData, alertCategories, Alert } from '../../data/alertsData';

interface AlertStatus {
  [alertId: string]: {
    completed: boolean;
    completedAt: string;
  };
}

export function Alerts() {
  const [alertStatus, setAlertStatus] = useState<AlertStatus>({});
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [lastResetDate, setLastResetDate] = useState<string>('');

  // Carregar dados do localStorage ao inicializar
  useEffect(() => {
    const savedStatus = localStorage.getItem('alertStatus');
    const savedResetDate = localStorage.getItem('lastAlertReset');
    const today = new Date().toDateString();

    if (savedStatus) {
      setAlertStatus(JSON.parse(savedStatus));
    }

    if (savedResetDate) {
      setLastResetDate(savedResetDate);
      
      // Se passou 24h desde o último reset, resetar todos os alertas
      if (savedResetDate !== today) {
        resetAllAlerts();
      }
    } else {
      // Primeira vez usando o sistema
      setLastResetDate(today);
      localStorage.setItem('lastAlertReset', today);
    }
  }, []);

  // Salvar no localStorage sempre que o status mudar
  useEffect(() => {
    localStorage.setItem('alertStatus', JSON.stringify(alertStatus));
  }, [alertStatus]);

  const resetAllAlerts = () => {
    const today = new Date().toDateString();
    setAlertStatus({});
    setLastResetDate(today);
    localStorage.setItem('alertStatus', JSON.stringify({}));
    localStorage.setItem('lastAlertReset', today);
  };

  const toggleAlert = (alertId: string) => {
    const now = new Date().toISOString();
    setAlertStatus(prev => ({
      ...prev,
      [alertId]: {
        completed: !prev[alertId]?.completed,
        completedAt: !prev[alertId]?.completed ? now : ''
      }
    }));
  };

  const filteredAlerts = alertsData.filter(alert => 
    selectedCategory === 'todos' || alert.category === selectedCategory
  );

  const completedCount = Object.values(alertStatus).filter(status => status.completed).length;
  const totalCount = alertsData.length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'border-l-red-500 bg-red-50';
      case 'media': return 'border-l-yellow-500 bg-yellow-50';
      case 'baixa': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getTimeUntilReset = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Alertas Diários</h1>
              <p className="text-gray-600">Cuidados essenciais para seu cabelo</p>
            </div>
          </div>
          <button
            onClick={resetAllAlerts}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            title="Resetar todos os alertas"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Resetar</span>
          </button>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Concluídos</p>
                <p className="text-2xl font-bold text-green-700">{completedCount}/{totalCount}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Progresso</p>
                <p className="text-2xl font-bold text-blue-700">{completionPercentage}%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-600 border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Reset em</p>
                <p className="text-2xl font-bold text-purple-700">{getTimeUntilReset()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filtrar por categoria</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {alertCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-pink-500 text-white shadow-lg'
                  : category.color + ' hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Alertas */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => {
          const isCompleted = alertStatus[alert.id]?.completed || false;
          
          return (
            <div
              key={alert.id}
              className={`bg-white rounded-2xl shadow-lg border-l-4 transition-all duration-300 ${
                getPriorityColor(alert.priority)
              } ${isCompleted ? 'opacity-75' : ''}`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleAlert(alert.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {isCompleted && <Check className="w-4 h-4" />}
                  </button>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{alert.icon}</span>
                        <div>
                          <h3 className={`text-lg font-semibold ${
                            isCompleted ? 'line-through text-gray-500' : 'text-gray-900'
                          }`}>
                            {alert.title}
                          </h3>
                          <p className={`text-sm ${
                            isCompleted ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {alert.description}
                          </p>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          alert.priority === 'alta' ? 'bg-red-100 text-red-800' :
                          alert.priority === 'media' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)}
                        </span>
                        
                        {isCompleted && alertStatus[alert.id]?.completedAt && (
                          <span className="text-xs text-green-600 font-medium">
                            ✓ Concluído {new Date(alertStatus[alert.id].completedAt).toLocaleTimeString('pt-BR', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum alerta encontrado</h3>
          <p className="text-gray-600">Não há alertas para a categoria selecionada.</p>
        </div>
      )}
    </div>
  );
}