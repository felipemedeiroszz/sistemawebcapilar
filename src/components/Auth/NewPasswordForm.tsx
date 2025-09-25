import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Check, X, CheckCircle } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

interface NewPasswordFormProps {
  email: string;
  onPasswordChanged: () => void;
}

export function NewPasswordForm({ email, onPasswordChanged }: NewPasswordFormProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { changePassword } = useApp();

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    
    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers
    };
  };

  const passwordValidation = validatePassword(newPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (!passwordValidation.isValid) {
      setError('A senha não atende aos critérios de segurança.');
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.');
      setLoading(false);
      return;
    }
    
    try {
      // Usar a função real de alteração de senha
      const success = await changePassword(email, newPassword);
      
      if (success) {
        onPasswordChanged();
      } else {
        setError('Erro ao alterar senha. Usuário não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
      setError('Erro ao alterar senha. Tente novamente.');
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
        <h2 className="text-3xl font-bold text-black mb-2">Nova Senha</h2>
        <p className="text-gray-500 font-medium">Crie uma senha segura para sua conta</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Nova Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="Digite sua nova senha"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          
          {newPassword && (
            <div className="mt-3 space-y-2">
              <div className="text-xs text-gray-600 font-medium">Critérios de segurança:</div>
              <div className="space-y-1">
                <div className={`flex items-center gap-2 text-xs ${passwordValidation.minLength ? 'text-green-600' : 'text-gray-400'}`}>
                  <CheckCircle className={`h-3 w-3 ${passwordValidation.minLength ? 'text-green-600' : 'text-gray-300'}`} />
                  Mínimo 8 caracteres
                </div>
                <div className={`flex items-center gap-2 text-xs ${passwordValidation.hasUpperCase ? 'text-green-600' : 'text-gray-400'}`}>
                  <CheckCircle className={`h-3 w-3 ${passwordValidation.hasUpperCase ? 'text-green-600' : 'text-gray-300'}`} />
                  Pelo menos uma letra maiúscula
                </div>
                <div className={`flex items-center gap-2 text-xs ${passwordValidation.hasLowerCase ? 'text-green-600' : 'text-gray-400'}`}>
                  <CheckCircle className={`h-3 w-3 ${passwordValidation.hasLowerCase ? 'text-green-600' : 'text-gray-300'}`} />
                  Pelo menos uma letra minúscula
                </div>
                <div className={`flex items-center gap-2 text-xs ${passwordValidation.hasNumbers ? 'text-green-600' : 'text-gray-400'}`}>
                  <CheckCircle className={`h-3 w-3 ${passwordValidation.hasNumbers ? 'text-green-600' : 'text-gray-300'}`} />
                  Pelo menos um número
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Confirmar Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent bg-gray-50 transition-all duration-200"
              placeholder="Confirme sua nova senha"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          
          {confirmPassword && newPassword !== confirmPassword && (
            <div className="mt-2 text-xs text-red-600">
              As senhas não coincidem
            </div>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm font-medium">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !passwordValidation.isValid || newPassword !== confirmPassword}
          className="w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ backgroundColor: '#E9B7C6' }}
        >
          {loading ? 'Alterando Senha...' : 'Alterar Senha'}
        </button>
      </form>
    </div>
  );
}