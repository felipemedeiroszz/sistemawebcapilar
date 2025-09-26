import React from 'react';
import { useApp } from '../../contexts/AppContext';
import './Certificate.css';

interface CertificateProps {
  onDownload?: () => void;
  downloadEnabled?: boolean;
}

const Certificate: React.FC<CertificateProps> = ({ onDownload, downloadEnabled = true }) => {
  const { user } = useApp();
  
  const userName = user?.name || 'Usuário';

  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      // Implementação padrão de download
      window.print();
    }
  };

  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <h2>🏆 Meu Certificado</h2>
        <p>{downloadEnabled ? 'Parabéns! Você completou 30 dias de cuidados capilares com 100% de sucesso!' : 'Visualize seu certificado e complete os requisitos para fazer o download!'}</p>
        <button 
          onClick={handleDownload} 
          className={`download-btn ${!downloadEnabled ? 'disabled' : ''}`}
          disabled={!downloadEnabled}
          title={!downloadEnabled ? 'Complete 30 dias com 100% das tarefas para desbloquear o download' : 'Baixar certificado'}
        >
          {downloadEnabled ? '📥 Baixar Certificado' : '🔒 Download Bloqueado'}
        </button>
      </div>
      
      <div className="certificate-page" id="certificate">
        {/* Cantos rosados */}
        <div className="corner c-tl"></div>
        <div className="corner c-tr"></div>
        <div className="corner c-bl"></div>
        <div className="corner c-br"></div>

        {/* Linhas pretas */}
        <div className="side-line side-left"></div>
        <div className="side-line side-right"></div>
        <div className="top-line"></div>

        {/* Ícone superior */}
        <img className="medal" src="/qualidade.png" alt="Ícone de qualidade" />

        <div className="content">
          <h1>CERTIFICADO</h1>
          <div className="subtitle">CRONOGRAMA DE TRATAMENTO CAPILAR</div>
          <div className="name">{userName.toUpperCase()}</div>
          <div className="paragraph">
            Certificamos que {userName}, após completar com sucesso o cronograma de Tratamento Capilar, demonstrou habilidades excepcionais e conhecimento profundo neste campo da estética e beleza.
          </div>
        </div>

        <div className="signatures">
          <div className="sig sig-left">
            <img className="scribble" src="/assinatura.png" alt="Assinatura de Martha Brust" />
            <div className="line"></div>
            <div className="who">MARTHA BRUST</div>
            <div className="role">Profissional em Tratamento Capilar</div>
          </div>
          <div className="sig sig-right">
            <div className="line" style={{ maxWidth: '420px' }}></div>
            <div className="who">{userName.toUpperCase()}</div>
            <div className="role">Aluna comprovada</div>
          </div>
        </div>

        <div className="bottom-thin"></div>
      </div>
    </div>
  );
};

export default Certificate;