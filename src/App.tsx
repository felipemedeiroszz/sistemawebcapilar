import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import { LoginForm } from './components/Auth/LoginForm';
import { RegisterForm } from './components/Auth/RegisterForm';
import { ForgotPasswordFlow } from './components/Auth/ForgotPasswordFlow';
import { Onboarding } from './components/Onboarding/Onboarding';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Calendar } from './components/Calendar/Calendar';
import { Diary } from './components/Diary/Diary';
import { Achievements } from './components/Achievements/Achievements';
import { Alerts } from './components/Alerts';
import CertificatePage from './components/Certificate/CertificatePage';
import { Products } from './components/Products/Products';
import Profile from './components/Profile/Profile';
import { Chat } from './components/Chat/Chat';
import { MarthaBrust } from './components/MarthaBrust/MarthaBrust';
import { MobileNavigation } from './components/Layout/MobileNavigation';

function AuthWrapper() {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    const handleShowForgotPassword = () => {
      setShowForgotPassword(true);
    };

    window.addEventListener('showForgotPassword', handleShowForgotPassword);
    
    return () => {
      window.removeEventListener('showForgotPassword', handleShowForgotPassword);
    };
  }, []);

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setIsLogin(true);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/fundo.png)' }}
    >
      {showForgotPassword ? (
        <ForgotPasswordFlow onBackToLogin={handleBackToLogin} />
      ) : isLogin ? (
        <LoginForm onToggleMode={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onToggleMode={() => setIsLogin(true)} />
      )}
    </div>
  );
}

function MainApp() {
  const { currentView } = useApp();

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <Calendar />;
      case 'diary':
        return <Diary />;
      case 'alerts':
        return <Alerts />;
      case 'certificate':
        return <CertificatePage />;
      case 'products':
        return <Products />;
      case 'achievements':
        return <Achievements />;
      case 'profile':
        return <Profile />;
      case 'martha-brust':
        return <MarthaBrust />;
      case 'chat':
        return <Chat />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 md:p-8 pb-32 md:pb-8">
          {renderContent()}
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
}

function AppContent() {
  const { isAuthenticated, user, completeOnboarding } = useApp();

  // Se não está autenticado, mostra tela de login
  if (!isAuthenticated) {
    return <AuthWrapper />;
  }

  // Se está autenticado mas não completou o onboarding, mostra questionário
  if (user && !user.onboardingCompleted) {
    return <Onboarding onComplete={completeOnboarding} />;
  }

  // Se está autenticado e completou onboarding, mostra app principal
  return <MainApp />;
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;