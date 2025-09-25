import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface PasswordChangedSuccessProps {
  onBackToLogin: () => void;
}

export function PasswordChangedSuccess({ onBackToLogin }: PasswordChangedSuccessProps) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-gray-50">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <img 
            src="/MARTHA.png" 
            alt="Martha Brust Logo" 
            className="h-20 w-20 object-contain"
          />
        </div>
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-black mb-2">Senha Alterada!</h2>
        <p className="text-gray-500 font-medium">Sua senha foi alterada com sucesso</p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
        <div className="text-center">
          <h3 className="font-semibold text-green-800 mb-2">Tudo pronto!</h3>
          <p className="text-green-700 text-sm leading-relaxed">
            Sua senha foi alterada com segurança. Agora você pode fazer login 
            com sua nova senha e continuar usando o sistema Martha Brust.
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Senha alterada com sucesso</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Conta protegida</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Pronto para fazer login</span>
        </div>
      </div>

      <button
        onClick={onBackToLogin}
        className="w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
        style={{ backgroundColor: '#E9B7C6' }}
      >
        Fazer Login
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}