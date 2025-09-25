import React from 'react';
import {
  Home,
  Calendar,
  BookOpen,
  Trophy,
  User,
  LogOut,
  ShoppingBag,
  MessageCircle,
  Star
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'calendar', label: 'Calendário', icon: Calendar },
  { id: 'diary', label: 'Diário', icon: BookOpen },
  { id: 'products', label: 'Meus Produtos', icon: ShoppingBag },
  { id: 'achievements', label: 'Conquistas', icon: Trophy },
  { id: 'martha-brust', label: 'Martha Brust', icon: Star },
  { id: 'chat', label: 'Assistente Capilar', icon: MessageCircle },
];

export function Sidebar() {
  const { currentView, setCurrentView, user, logout } = useApp();

  return (
    <div className="bg-white/95 backdrop-blur-md w-64 h-screen shadow-xl flex flex-col hidden md:flex border-r border-gray-200/50 fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden" style={{ backgroundColor: '#E9B7C6' }}>
            <img 
              src="/MARTHA.png" 
              alt="Martha Brust Logo" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-black text-lg">Martha Brust</h1>
            <p className="text-sm text-gray-500">Acompanhamento Capilar</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  currentView === item.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:shadow-md'
                }`}
                style={{
                  backgroundColor: currentView === item.id ? '#E9B7C6' : 'transparent'
                }}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      {user && (
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold shadow-md overflow-hidden" style={{ backgroundColor: '#E9B7C6' }}>
              {user.profileImage ? (
                <img 
                  src={user.profileImage} 
                  alt={user.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-black">{user.name}</p>
              <p className="text-sm font-medium" style={{ color: '#E9B7C6' }}>{user.points} pontos</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <button
              onClick={() => setCurrentView('profile')}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-300 hover:scale-105"
            >
              <User className="h-4 w-4" />
              <span className="text-sm">Meu Perfil</span>
            </button>
            
            <button
              onClick={logout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:scale-105"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Sair</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}