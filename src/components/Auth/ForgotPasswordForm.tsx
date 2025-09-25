import React, { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
  onEmailConfirmed: (email: string) => void;
}

export function ForgotPasswordForm({ onBackToLogin, onEmailConfirmed }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { verifyEmailForPasswordReset } = useApp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Verificar se o email existe usando a função real do contexto
      const emailExists = await verifyEmailForPasswordReset(email);
      
      if (emailExists) {
        onEmailConfirmed(email);
      } else {
        setError('Email não encontrado em nossa base de dados.');
      }
    } catch (error) {
      setError('Erro ao verificar email. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="text-3xl font-bold text-black mb-2">Esqueceu a senha?</h2>
        <p className="text-gray-500 font-medium">Digite seu email para recuperar sua senha</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="Digite seu email"
              required
            />
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm font-medium">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ backgroundColor: '#E9B7C6' }}
        >
          {loading ? 'Confirmando...' : 'Confirmar Email'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={onBackToLogin}
          className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao login
        </button>
      </div>
    </div>
  );
}