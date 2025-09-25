import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Award, Users, Heart } from 'lucide-react';

export function MarthaBrust() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E9B7C6] via-[#E9B7C6] to-[#E9B7C6]/90 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg bg-white/20 flex items-center justify-center">
            <svg className="w-20 h-20 md:w-24 md:h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Martha Brust</h1>
            <p className="text-xl mb-4 text-white/90">Especialista em Cuidados Capilares</p>
            <p className="text-white/80 leading-relaxed">
              Transformando vidas através do cuidado capilar há mais de 15 anos
            </p>
          </div>
        </div>
      </div>

      {/* Sobre Martha */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <div className="w-2 h-6 rounded-full mr-3" style={{ backgroundColor: '#E9B7C6' }}></div>
            Sobre Martha
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Martha Brust é uma renomada especialista em cuidados capilares com mais de 15 anos de experiência 
              no mercado de beleza. Formada em Tricologia e especializada em tratamentos naturais, ela dedica 
              sua carreira a ajudar pessoas a descobrirem a beleza natural de seus cabelos.
            </p>
            <p>
              Sua abordagem única combina técnicas tradicionais com inovações modernas, sempre priorizando 
              a saúde capilar e o bem-estar de seus clientes. Martha acredita que cada cabelo é único e 
              merece um cuidado personalizado.
            </p>
            <p>
              Através de seus tratamentos e produtos, ela já transformou a vida de milhares de pessoas, 
              devolvendo autoestima e confiança através de cabelos saudáveis e bonitos.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <div className="w-2 h-6 rounded-full mr-3" style={{ backgroundColor: '#E9B7C6' }}></div>
            Conquistas
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50">
              <Award className="h-6 w-6 text-[#E9B7C6]" />
              <div>
                <h3 className="font-semibold text-black">Especialista Certificada</h3>
                <p className="text-sm text-gray-600">Tricologia e Cosmetologia Capilar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50">
              <Users className="h-6 w-6 text-[#E9B7C6]" />
              <div>
                <h3 className="font-semibold text-black">+10.000 Clientes</h3>
                <p className="text-sm text-gray-600">Atendidas com sucesso</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50">
              <Heart className="h-6 w-6 text-[#E9B7C6]" />
              <div>
                <h3 className="font-semibold text-black">98% Satisfação</h3>
                <p className="text-sm text-gray-600">Índice de aprovação dos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
          <div className="w-2 h-6 rounded-full mr-3" style={{ backgroundColor: '#E9B7C6' }}></div>
          Conecte-se com Martha
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a 
            href="https://www.instagram.com/marthinha_brust/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-100 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 hover:shadow-md group"
          >
            <Instagram className="h-6 w-6 text-pink-500 group-hover:scale-110 transition-transform" />
            <div>
              <span className="font-medium text-black">Instagram</span>
              <p className="text-sm text-gray-600">@marthinha_brust</p>
            </div>
          </a>
          
          <a 
            href="https://facebook.com/marthabrust" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 hover:shadow-md group"
          >
            <Facebook className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform" />
            <div>
              <span className="font-medium text-black">Facebook</span>
              <p className="text-sm text-gray-600">Martha Brust</p>
            </div>
          </a>
          
          <a 
            href="https://youtube.com/marthabrust" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-100 hover:border-red-300 hover:bg-red-50 transition-all duration-200 hover:shadow-md group"
          >
            <Youtube className="h-6 w-6 text-red-500 group-hover:scale-110 transition-transform" />
            <div>
              <span className="font-medium text-black">YouTube</span>
              <p className="text-sm text-gray-600">Canal Martha Brust</p>
            </div>
          </a>
          
          <a 
            href="mailto:contato@marthabrust.com" 
            className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-100 hover:border-[#E9B7C6] hover:bg-[#E9B7C6]/5 transition-all duration-200 hover:shadow-md group"
          >
            <Mail className="h-6 w-6 text-[#E9B7C6] group-hover:scale-110 transition-transform" />
            <div>
              <span className="font-medium text-black">Email</span>
              <p className="text-sm text-gray-600">Contato direto</p>
            </div>
          </a>
        </div>
      </div>



      {/* Depoimentos */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
          <div className="w-2 h-6 rounded-full mr-3" style={{ backgroundColor: '#E9B7C6' }}></div>
          O que dizem sobre Martha
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
            <p className="text-gray-700 italic mb-4">
              "Martha transformou completamente meu cabelo! Depois de anos lutando contra o ressecamento, 
              finalmente encontrei alguém que entende as necessidades do meu cabelo cacheado."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#E9B7C6] flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div>
                <h4 className="font-semibold text-black">Ana Silva</h4>
                <p className="text-sm text-gray-600">Cliente há 2 anos</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
            <p className="text-gray-700 italic mb-4">
              "Profissional excepcional! Martha não apenas cuida do meu cabelo, mas me ensina como 
              mantê-lo saudável em casa. Recomendo de olhos fechados!"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#E9B7C6] flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div>
                <h4 className="font-semibold text-black">Maria Santos</h4>
                <p className="text-sm text-gray-600">Cliente há 3 anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}