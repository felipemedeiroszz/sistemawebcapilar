import React from 'react';
import { Construction, ShoppingBag, Clock } from 'lucide-react';

export function Products() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Ícone de construção */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: '#E9B7C6' }}
            >
              <Construction className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Clock className="h-4 w-4 text-yellow-800" />
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Página em Construção
        </h1>

        {/* Subtítulo */}
        <div className="flex items-center justify-center mb-6">
          <ShoppingBag className="h-6 w-6 text-gray-600 mr-2" />
          <h2 className="text-xl text-gray-600 font-medium">
            Meus Produtos
          </h2>
        </div>

        {/* Descrição */}
        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Estamos trabalhando para trazer uma experiência incrível para você gerenciar 
          seus produtos capilares favoritos. Em breve você poderá:
        </p>

        {/* Lista de funcionalidades futuras */}
        <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">📦 Catálogo Pessoal</h3>
            <p className="text-gray-600 text-sm">
              Organize todos os seus produtos capilares em um só lugar
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">⭐ Avaliações</h3>
            <p className="text-gray-600 text-sm">
              Avalie e acompanhe o desempenho de cada produto
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">🔔 Lembretes</h3>
            <p className="text-gray-600 text-sm">
              Receba notificações para reaplicar seus produtos favoritos
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">📊 Relatórios</h3>
            <p className="text-gray-600 text-sm">
              Veja estatísticas sobre o uso dos seus produtos
            </p>
          </div>
        </div>

        {/* Mensagem de retorno */}
        <div 
          className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6"
        >
          <p className="text-gray-700 font-medium">
            🚀 Fique ligada! Esta funcionalidade estará disponível em breve.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Continue usando o app para acompanhar seu progresso capilar enquanto isso!
          </p>
        </div>
      </div>
    </div>
  );
}