// Utilitários para manipulação de imagens no localStorage

export const imageUtils = {
  // Converte um arquivo de imagem para base64
  fileToBase64: (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Erro ao converter arquivo para base64'));
        }
      };
      reader.onerror = () => reject(new Error('Erro ao ler arquivo'));
      reader.readAsDataURL(file);
    });
  },

  // Valida se o arquivo é uma imagem válida
  validateImageFile: (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      return false;
    }

    if (file.size > maxSize) {
      return false;
    }

    return true;
  },

  // Redimensiona uma imagem para otimizar o armazenamento
  resizeImage: (base64: string, maxWidth: number = 800, maxHeight: number = 600, quality: number = 0.8): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(base64);
          return;
        }

        // Calcula as novas dimensões mantendo a proporção
        let { width, height } = img;
        
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Desenha a imagem redimensionada
        ctx.drawImage(img, 0, 0, width, height);

        // Converte para base64 com qualidade especificada
        const resizedBase64 = canvas.toDataURL('image/jpeg', quality);
        resolve(resizedBase64);
      };
      img.src = base64;
    });
  },

  // Gera um ID único para a imagem
  generateImageId: (): string => {
    return `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },

  // Salva imagem no localStorage com compressão
  saveImageToStorage: async (file: File): Promise<string> => {
    if (!imageUtils.validateImageFile(file)) {
      throw new Error('Arquivo de imagem inválido');
    }

    try {
      const base64 = await imageUtils.fileToBase64(file);
      const resizedBase64 = await imageUtils.resizeImage(base64);
      
      // Gera um ID único para a imagem
      const imageId = imageUtils.generateImageId();
      
      // Salva no localStorage
      localStorage.setItem(`diary_image_${imageId}`, resizedBase64);
      
      return imageId;
    } catch (error) {
      throw new Error('Erro ao processar imagem');
    }
  },

  // Recupera imagem do localStorage
  getImageFromStorage: (imageId: string): string | null => {
    return localStorage.getItem(`diary_image_${imageId}`);
  },

  // Remove imagem do localStorage
  removeImageFromStorage: (imageId: string): void => {
    localStorage.removeItem(`diary_image_${imageId}`);
  },

  // Remove todas as imagens órfãs (não referenciadas em entradas do diário)
  cleanupOrphanedImages: (usedImageIds: string[]): void => {
    const allKeys = Object.keys(localStorage);
    const imageKeys = allKeys.filter(key => key.startsWith('diary_image_'));
    
    imageKeys.forEach(key => {
      const imageId = key.replace('diary_image_', '');
      if (!usedImageIds.includes(imageId)) {
        localStorage.removeItem(key);
      }
    });
  }
};