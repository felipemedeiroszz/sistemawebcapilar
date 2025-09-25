import React from 'react';
import {
  Home,
  Calendar,
  BookOpen,
  User,
  MessageCircle,
  Bell,
  Package,
  Trophy,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const mobileMenuItems = [
  { id: 'dashboard', label: 'Início', icon: Home },
  { id: 'calendar', label: 'Calendário', icon: Calendar },
  { id: 'diary', label: 'Diário', icon: BookOpen },
  { id: 'products', label: 'Produtos', icon: Package },
  { id: 'alerts', label: 'Alertas', icon: Bell },
  { id: 'achievements', label: 'Conquistas', icon: Trophy },
  { id: 'martha-brust', label: 'Martha', icon: Sparkles },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
];

export function MobileNavigation() {
  const { currentView, setCurrentView } = useApp();

  return (
    <div className="mobile-navigation-fixed bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="grid grid-cols-4 gap-1 p-2">
        {mobileMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all duration-200 ${
              currentView === item.id
                ? 'text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: currentView === item.id ? '#E9B7C6' : 'transparent'
            }}
          >
            <item.icon className="h-4 w-4 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}