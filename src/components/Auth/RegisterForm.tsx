import React, { useState } from 'react';
import { UserPlus, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

interface RegisterFormProps {
  onToggleMode: () => void;
}

export function RegisterForm({ onToggleMode }: RegisterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useApp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setLoading(true);
    
    try {
      const success = await register(name, email, password);
      if (!success) {
        setError('Email já cadastrado. Tente fazer login ou use outro email.');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      setError('Erro interno. Tente novamente.');
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
        <h2 className="text-3xl font-bold text-black mb-2">Criar Conta</h2>
        <p className="text-gray-500 font-medium">Junte-se à jornada capilar de 30 dias</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Nome Completo
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="Digite seu nome"
              required
            />
          </div>
        </div>

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

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="Digite sua senha"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Confirmar Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="Confirme sua senha"
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
          {loading ? 'Criando conta...' : 'Criar Conta'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Já tem uma conta?{' '}
          <button
            onClick={onToggleMode}
            className="font-semibold hover:underline transition-all duration-200"
            style={{ color: '#E9B7C6' }}
          >
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}