import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

interface EmailConfirmedFormProps {
  email: string;
  onContinue: () => void;
}

export function EmailConfirmedForm({ email, onContinue }: EmailConfirmedFormProps) {
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
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-black mb-2">Email Confirmado!</h2>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="h-6 w-6 text-green-600" />
          <h3 className="font-semibold text-green-800">Seu dispositivo foi confirmado com segurança</h3>
        </div>
        <p className="text-green-700 text-sm leading-relaxed">
          Verificamos sua identidade através do email <strong>{email}</strong>. 
          Agora você pode criar uma nova senha para sua conta.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Email verificado com sucesso</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Dispositivo autenticado</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm">Pronto para redefinir senha</span>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        style={{ backgroundColor: '#E9B7C6' }}
      >
        Continuar para Nova Senha
      </button>
    </div>
  );
}