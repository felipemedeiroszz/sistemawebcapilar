import React from 'react';
import { useApp } from '../../contexts/AppContext';
import Certificate from './Certificate';
import { Lock, Calendar, CheckCircle, Trophy } from 'lucide-react';
import './CertificatePage.css';

const CertificatePage: React.FC = () => {
  const { user, dayTasks } = useApp();

  if (!user) {
    return (
      <div className="certificate-page-container">
        <div className="certificate-locked">
          <Lock size={64} className="lock-icon" />
          <h2>Acesso Negado</h2>
          <p>Você precisa estar logado para acessar seu certificado.</p>
        </div>
      </div>
    );
  }

  // Verificar se completou 30 dias
  const hasCompleted30Days = user.currentDay >= 30;
  
  // Calcular total de tarefas e tarefas completadas
  const totalTasks = dayTasks.reduce((acc, day) => acc + day.tasks.length, 0);
  const completedTasks = dayTasks.reduce((acc, day) => 
    acc + day.tasks.filter(task => task.completed).length, 0
  );
  
  // Verificar se tem 100% de conclusão
  const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const hasFullCompletion = completionPercentage === 100;
  
  // Verificar se pode fazer download do certificado
  const canDownloadCertificate = hasCompleted30Days && hasFullCompletion;

  const handleDownloadCertificate = () => {
    if (!canDownloadCertificate) {
      alert('Você precisa completar 30 dias com 100% das tarefas para fazer o download do certificado.');
      return;
    }

    // Criar uma nova janela com o certificado para impressão
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const certificateElement = document.getElementById('certificate');
      if (certificateElement) {
        const certificateHTML = `
          <!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Certificado - ${user.name}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:wght@400;600;700;800;900&display=swap" rel="stylesheet">
            <style>
              ${getCertificateStyles()}
            </style>
          </head>
          <body>
            ${certificateElement.outerHTML}
            <script>
              window.onload = function() {
                window.print();
                window.close();
              }
            </script>
          </body>
          </html>
        `;
        
        printWindow.document.write(certificateHTML);
        printWindow.document.close();
      }
    }
  };

  // Sempre mostrar o certificado, mas com informações sobre o status do download
  return (
    <div className="certificate-page-container">
      {!canDownloadCertificate && (
        <div className="download-status-banner">
          <div className="status-content">
            <Trophy size={32} className="trophy-icon" />
            <div className="status-text">
              <h3>🏆 Certificado em Progresso</h3>
              <p>Complete os requisitos abaixo para desbloquear o download:</p>
              
              <div className="requirements-inline">
                <div className={`requirement-item ${hasCompleted30Days ? 'completed' : 'pending'}`}>
                  <Calendar size={20} />
                  <span>30 dias: {hasCompleted30Days ? '✅' : `${user.currentDay}/30`}</span>
                </div>
                
                <div className={`requirement-item ${hasFullCompletion ? 'completed' : 'pending'}`}>
                  <CheckCircle size={20} />
                  <span>100% tarefas: {hasFullCompletion ? '✅' : `${completionPercentage.toFixed(1)}%`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Certificate onDownload={handleDownloadCertificate} downloadEnabled={canDownloadCertificate} />
    </div>
  );

  // Código antigo removido - não precisamos mais da tela de bloqueio
  if (false) {
    return (
      <div className="certificate-page-container">
        <div className="certificate-locked">
          <div className="lock-content">
            <Trophy size={64} className="trophy-icon" />
            <h2>🏆 Certificado Bloqueado</h2>
            <p>Complete os requisitos abaixo para desbloquear seu certificado:</p>
            
            <div className="requirements">
              <div className={`requirement ${hasCompleted30Days ? 'completed' : 'pending'}`}>
                <Calendar size={24} />
                <span>Completar 30 dias de tratamento</span>
                <div className="status">
                  {hasCompleted30Days ? (
                    <CheckCircle size={20} className="check-icon" />
                  ) : (
                    <span className="progress">{user.currentDay}/30 dias</span>
                  )}
                </div>
              </div>
              
              <div className={`requirement ${hasFullCompletion ? 'completed' : 'pending'}`}>
                <CheckCircle size={24} />
                <span>Completar 100% das tarefas</span>
                <div className="status">
                  {hasFullCompletion ? (
                    <CheckCircle size={20} className="check-icon" />
                  ) : (
                    <span className="progress">{Math.round(completionPercentage)}%</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="motivation">
              <p>
                {!hasCompleted30Days && !hasFullCompletion 
                  ? "Continue sua jornada! Você está fazendo um ótimo trabalho." 
                  : !hasCompleted30Days 
                  ? "Parabéns pelo excelente desempenho! Continue até completar os 30 dias."
                  : "Quase lá! Complete as tarefas restantes para conquistar seu certificado."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-page-container">
      <Certificate onDownload={handleDownloadCertificate} />
    </div>
  );
};

// Função para obter os estilos CSS do certificado
const getCertificateStyles = () => {
  return `
    :root {
      --pink: #e9b8c5;
      --text: #222;
      --muted: #444;
      --line: #111;
    }

    * { box-sizing: border-box; }
    
    html, body {
      height: 100%;
      margin: 0;
      background: #fff;
      color: var(--text);
    }

    .certificate-page {
      width: 297mm;
      height: 210mm;
      background: #fff;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    .corner {
      position: absolute;
      width: 70px;
      height: 70px;
    }

    .corner:before,
    .corner:after {
      content: "";
      position: absolute;
      background: var(--pink);
    }

    .c-tl {
      top: 24px;
      left: 24px;
    }

    .c-tl:before {
      top: 0;
      left: 0;
      width: 72px;
      height: 4px;
      border-radius: 3px;
    }

    .c-tl:after {
      top: 0;
      left: 0;
      width: 4px;
      height: 72px;
      border-radius: 3px;
    }

    .c-tr {
      top: 24px;
      right: 24px;
    }

    .c-tr:before {
      top: 0;
      right: 0;
      width: 72px;
      height: 4px;
      border-radius: 3px;
    }

    .c-tr:after {
      top: 0;
      right: 0;
      width: 4px;
      height: 72px;
      border-radius: 3px;
    }

    .c-bl {
      bottom: 24px;
      left: 24px;
    }

    .c-bl:before {
      bottom: 0;
      left: 0;
      width: 4px;
      height: 72px;
      border-radius: 3px;
    }

    .c-bl:after {
      bottom: 0;
      left: 0;
      width: 72px;
      height: 4px;
      border-radius: 3px;
    }

    .c-br {
      bottom: 24px;
      right: 24px;
    }

    .c-br:before {
      bottom: 0;
      right: 0;
      width: 72px;
      height: 4px;
      border-radius: 3px;
    }

    .c-br:after {
      bottom: 0;
      right: 0;
      width: 4px;
      height: 72px;
      border-radius: 3px;
    }

    .side-line {
      position: absolute;
      top: 100px;
      bottom: 100px;
      width: 3px;
      background: var(--line);
      border-radius: 3px;
    }

    .side-left {
      left: 48px;
    }

    .side-right {
      right: 48px;
    }

    .top-line {
      position: absolute;
      top: 56px;
      left: 16%;
      right: 16%;
      height: 3px;
      background: var(--line);
      border-radius: 3px;
    }

    .bottom-thin {
      position: absolute;
      bottom: 56px;
      left: 16%;
      right: 16%;
      height: 3px;
      background: var(--line);
      opacity: 0.7;
      border-radius: 3px;
    }

    .medal {
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
      width: 72px;
      height: 72px;
      display: block;
      object-fit: contain;
    }

    .content {
      position: absolute;
      left: 0;
      right: 0;
      top: 150px;
      bottom: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
      padding: 0 96px;
    }

    .content h1 {
      font-family: "Playfair Display", serif;
      font-weight: 700;
      font-size: 76px;
      letter-spacing: 0.05em;
      margin: 0 0 6px 0;
    }

    .subtitle {
      font-family: "Lora", serif;
      text-transform: uppercase;
      letter-spacing: 0.35em;
      color: var(--pink);
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 6px;
    }

    .name {
      font-family: "Playfair Display", serif;
      font-weight: 700;
      font-size: 86px;
      margin: 8px 0 16px 0;
      text-shadow: 0 4px 0 rgba(0, 0, 0, 0.08);
    }

    .paragraph {
      font-family: "Lora", serif;
      font-style: italic;
      color: #555;
      text-align: center;
      max-width: 820px;
      line-height: 1.6;
      margin-top: 8px;
    }

    .signatures {
      position: absolute;
      left: 96px;
      right: 96px;
      bottom: 110px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: end;
    }

    .sig {
      text-align: center;
    }

    .sig .line {
      height: 2px;
      background: #b7b7b7;
      margin: 0 auto 10px auto;
      max-width: 360px;
    }

    .sig .who {
      font-family: "Playfair Display", serif;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--pink);
      font-size: 20px;
    }

    .sig .role {
      font-family: "Lora", serif;
      color: #777;
      font-size: 14px;
    }

    .scribble {
      width: 160px;
      height: 68px;
      margin: 0 auto -4px auto;
      object-fit: contain;
      display: block;
    }

    .sig-left .line {
      max-width: 420px;
    }

    @page {
      size: A4 landscape;
      margin: 0;
    }
  `;
};

export default CertificatePage;