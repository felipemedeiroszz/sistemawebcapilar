import React from 'react';
import { useApp } from '../../contexts/AppContext';

export function Header() {
  const { user, setCurrentView } = useApp();

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
            <button 
              onClick={() => setCurrentView('profile')}
              className="w-10 h-10 rounded-xl overflow-hidden shadow-md md:hidden hover:scale-105 transition-transform duration-200"
            >
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
            </button>
          )}
        </div>
      </div>
    </header>
  );
}