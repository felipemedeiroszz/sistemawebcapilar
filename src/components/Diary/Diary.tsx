import React, { useState } from 'react';
import { Plus, Calendar, Heart, Meh, Frown, Smile, Camera, X } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { imageUtils } from '../../utils/imageUtils';

export function Diary() {
  const { diaryEntries, addDiaryEntry, addProgressPhoto } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState('');
  const [mood, setMood] = useState<'excelente' | 'bom' | 'regular' | 'ruim'>('bom');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addDiaryEntry({
        date: new Date().toISOString(),
        content: content.trim(),
        mood,
        images: selectedImages.length > 0 ? selectedImages : undefined
      });
      
      // Contar fotos para conquistas
      if (selectedImages.length > 0) {
        for (let i = 0; i < selectedImages.length; i++) {
          addProgressPhoto();
        }
      }
      
      setContent('');
      setSelectedImages([]);
      setShowForm(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsUploadingImage(true);
    
    try {
      const newImageIds: string[] = [];
      
      for (let i = 0; i < Math.min(files.length, 3); i++) {
        const file = files[i];
        try {
          const imageId = await imageUtils.saveImageToStorage(file);
          newImageIds.push(imageId);
        } catch (error) {
          console.error('Erro ao processar imagem:', error);
          alert(`Erro ao processar a imagem ${file.name}. Verifique se é um arquivo de imagem válido.`);
        }
      }
      
      setSelectedImages(prev => [...prev, ...newImageIds].slice(0, 3));
    } catch (error) {
      console.error('Erro no upload:', error);
      alert('Erro ao fazer upload das imagens');
    } finally {
      setIsUploadingImage(false);
      // Limpar o input
      e.target.value = '';
    }
  };

  const removeImage = (imageId: string) => {
    setSelectedImages(prev => prev.filter(id => id !== imageId));
    imageUtils.removeImageFromStorage(imageId);
  };

  const getMoodIcon = (mood: string) => {
    const icons = {
      excelente: <Smile className="h-5 w-5 text-green-500" />,
      bom: <Heart className="h-5 w-5 text-[#E9B7C6]" />,
      regular: <Meh className="h-5 w-5 text-yellow-500" />,
      ruim: <Frown className="h-5 w-5 text-red-500" />
    };
    return icons[mood as keyof typeof icons];
  };

  const getMoodBg = (mood: string) => {
    const colors = {
      excelente: 'bg-green-50 border-green-200',
      bom: 'bg-pink-50 border-pink-200',
      regular: 'bg-yellow-50 border-yellow-200',
      ruim: 'bg-red-50 border-red-200'
    };
    return colors[mood as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black">Meu Diário Capilar</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
          style={{ backgroundColor: '#E9B7C6' }}
        >
          <Plus className="h-5 w-5" />
          <span>Nova Entrada</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-black mb-4">Nova Entrada do Diário</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Como está se sentindo sobre seu cabelo hoje?
              </label>
              <div className="flex space-x-4">
                {[
                  { value: 'excelente', label: 'Excelente' },
                  { value: 'bom', label: 'Bom' },
                  { value: 'regular', label: 'Regular' },
                  { value: 'ruim', label: 'Ruim' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setMood(option.value as any)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors duration-200 ${
                      mood === option.value
                        ? 'border-[#E9B7C6] bg-[#E9B7C6]/10 text-[#E9B7C6]'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {getMoodIcon(option.value)}
                    <span className="text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Conte-nos sobre sua experiência hoje
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Como seu cabelo estava hoje? Notou alguma mudança? Que produtos usou?"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E9B7C6] focus:border-transparent resize-none"
                rows={4}
                required
              />
            </div>

            {/* Upload de Imagens */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Adicionar fotos (opcional)
              </label>
              
              {/* Botão de Upload */}
              <div className="mb-3">
                <label className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#E9B7C6] hover:bg-[#E9B7C6]/5 transition-colors duration-200">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={isUploadingImage || selectedImages.length >= 3}
                  />
                  <div className="text-center">
                    <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-600">
                      {isUploadingImage ? 'Processando...' : 
                       selectedImages.length >= 3 ? 'Máximo de 3 fotos' : 
                       'Clique para adicionar fotos'}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">
                      PNG, JPG, GIF até 5MB
                    </p>
                  </div>
                </label>
              </div>

              {/* Preview das Imagens Selecionadas */}
              {selectedImages.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {selectedImages.map((imageId) => {
                    const imageSrc = imageUtils.getImageFromStorage(imageId);
                    return (
                      <div key={imageId} className="relative group">
                        <img
                          src={imageSrc || ''}
                          alt="Preview"
                          className="w-full h-20 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(imageId)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-white font-medium transition-colors duration-200"
                style={{ backgroundColor: '#E9B7C6' }}
              >
                Salvar Entrada
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {diaryEntries.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">Nenhuma entrada ainda</h3>
            <p className="text-gray-400">Comece a documentar sua jornada capilar!</p>
          </div>
        ) : (
          diaryEntries.map((entry) => (
            <div
              key={entry.id}
              className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-sm ${getMoodBg(entry.mood)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getMoodIcon(entry.mood)}
                  <span className="font-medium text-black capitalize">{entry.mood}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{entry.content}</p>
              
              {/* Exibir imagens se existirem */}
              {entry.images && entry.images.length > 0 && (
                <div className="mt-4">
                  <div className={`grid gap-2 ${
                    entry.images.length === 1 ? 'grid-cols-1' :
                    entry.images.length === 2 ? 'grid-cols-2' :
                    'grid-cols-3'
                  }`}>
                    {entry.images.map((imageId, index) => {
                      const imageSrc = imageUtils.getImageFromStorage(imageId);
                      return imageSrc ? (
                        <div key={imageId} className="relative group">
                          <img
                            src={imageSrc}
                            alt={`Foto ${index + 1} da entrada`}
                            className={`w-full object-cover rounded-lg border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity duration-200 ${
                              entry.images!.length === 1 ? 'h-64' : 'h-32'
                            }`}
                            onClick={() => {
                              // Abrir modal ou visualização ampliada (implementação futura)
                              const newWindow = window.open();
                              if (newWindow) {
                                newWindow.document.write(`
                                  <html>
                                    <head><title>Foto do Diário</title></head>
                                    <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#000;">
                                      <img src="${imageSrc}" style="max-width:100%;max-height:100%;object-fit:contain;" />
                                    </body>
                                  </html>
                                `);
                              }
                            }}
                          />
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}