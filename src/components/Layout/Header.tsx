import React, { useState } from 'react';
import { Plus, X, Package, Trophy, Sparkles, Bell } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export function Header() {
  const { user, setCurrentView } = useApp();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-4 md:px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo Mobile */}
        <div className="flex items-center space-x-3 md:hidden">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden" style={{ backgroundColor: '#E9B7C6' }}>
            <img 
              src="/MARTHA.png" 
              alt="Martha Brust Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-black">Martha Brust</h1>
          </div>
        </div>
        


        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <div className="relative md:hidden">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 relative hover:scale-105"
            >
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
            
            {showMobileMenu && (
              <>
                {/* Overlay */}
                <div 
                  className="fixed inset-0 bg-black/20 z-[99998]"
                  onClick={() => setShowMobileMenu(false)}
                />
                {/* Menu */}
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-[99999]">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-semibold text-black">Menu</h3>
                  <button 
                    onClick={() => setShowMobileMenu(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                <div className="p-2">
                  <button 
                    onClick={() => {
                      setCurrentView('products');
                      setShowMobileMenu(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <Package className="h-5 w-5 text-[#E9B7C6]" />
                    <span className="text-gray-700 font-medium">Comprar Produtos</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentView('alerts');
                      setShowMobileMenu(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <Bell className="h-5 w-5 text-[#E9B7C6]" />
                    <span className="text-gray-700 font-medium">Alertas</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentView('achievements');
                      setShowMobileMenu(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <Trophy className="h-5 w-5 text-[#E9B7C6]" />
                    <span className="text-gray-700 font-medium">Conquistas</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentView('martha-brust');
                      setShowMobileMenu(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <Sparkles className="h-5 w-5 text-[#E9B7C6]" />
                    <span className="text-gray-700 font-medium">Martha Brust</span>
                  </button>
                </div>
              </div>
              </>
            )}
          </div>

          {user && (
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-100 hidden md:flex">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md">
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt="Foto de perfil" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: '#E9B7C6' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-black">{user.name}</p>
                <p className="text-xs font-medium" style={{ color: '#E9B7C6' }}>Dia {user.currentDay}/30</p>
              </div>
            </div>
          )}
          
          {/* Mobile User Avatar */}
          {user && (
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md md:hidden">
              {user.profileImage ? (
                <img 
                  src={user.profileImage} 
                  alt="Foto de perfil" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: '#E9B7C6' }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}