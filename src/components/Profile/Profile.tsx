import React, { useState, useRef } from 'react';
import { useApp } from '../../contexts/AppContext';
import { User, Camera, Edit2, Lock, Save, X, Eye, EyeOff } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, updateUserProfile } = useApp();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newName, setNewName] = useState(user?.name || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profileImage || '');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        showMessage('A imagem deve ter no máximo 5MB', 'error');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setProfileImage(imageUrl);
        updateUserProfile({ profileImage: imageUrl });
        showMessage('Foto de perfil atualizada com sucesso!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameSave = () => {
    if (newName.trim().length < 2) {
      showMessage('O nome deve ter pelo menos 2 caracteres', 'error');
      return;
    }

    updateUserProfile({ name: newName.trim() });
    setIsEditingName(false);
    showMessage('Nome atualizado com sucesso!', 'success');
  };

  const handlePasswordChange = () => {
    if (!currentPassword) {
      showMessage('Digite sua senha atual', 'error');
      return;
    }

    if (currentPassword !== user?.password) {
      showMessage('Senha atual incorreta', 'error');
      return;
    }

    if (newPassword.length < 6) {
      showMessage('A nova senha deve ter pelo menos 6 caracteres', 'error');
      return;
    }

    if (newPassword !== confirmPassword) {
      showMessage('As senhas não coincidem', 'error');
      return;
    }

    updateUserProfile({ password: newPassword });
    setIsChangingPassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    showMessage('Senha alterada com sucesso!', 'success');
  };

  const cancelNameEdit = () => {
    setNewName(user?.name || '');
    setIsEditingName(false);
  };

  const cancelPasswordChange = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsChangingPassword(false);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Carregando perfil...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-pink-500 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Meu Perfil</h1>
          <p className="text-pink-100">Gerencie suas informações pessoais</p>
        </div>

        {/* Message */}
        {message && (
          <div className={`mx-6 mt-6 p-4 rounded-lg ${
            messageType === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        <div className="p-8">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Foto de perfil" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-pink-500">
                    <User className="w-16 h-16 text-white" />
                  </div>
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full shadow-lg transition-colors"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-sm text-gray-500 text-center">
              Clique no ícone da câmera para alterar sua foto
              <br />
              <span className="text-xs">Máximo 5MB - JPG, PNG ou GIF</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Name Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <User className="w-5 h-5 text-pink-500" />
                Nome
              </h3>
              
              {isEditingName ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Digite seu nome"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleNameSave}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Salvar
                    </button>
                    <button
                      onClick={cancelNameEdit}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-800">{user.name}</span>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="flex items-center gap-2 px-3 py-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Editar
                  </button>
                </div>
              )}
            </div>

            {/* Password Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-500" />
                Senha
              </h3>
              
              {isChangingPassword ? (
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Senha atual"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Nova senha (mín. 6 caracteres)"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Confirmar nova senha"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handlePasswordChange}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Salvar
                    </button>
                    <button
                      onClick={cancelPasswordChange}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-800">••••••••</span>
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className="flex items-center gap-2 px-3 py-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Alterar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* User Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações da Conta</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-lg text-gray-800">{user.email}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Pontos</label>
                <p className="text-lg text-gray-800">{user.points} pontos</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Tipo de Cabelo</label>
                <p className="text-lg text-gray-800 capitalize">{user.hairType.replace('-', ' ')}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Dia Atual</label>
                <p className="text-lg text-gray-800">Dia {user.currentDay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;