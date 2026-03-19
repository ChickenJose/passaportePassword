'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { PasswordTester } from '@/components/PasswordTester';
import { PasswordWizard } from '@/components/PasswordWizard';

export default function Home() {
  const [currentView, setCurrentView] = useState<'home' | 'tester' | 'wizard'>('home');

  return (
    <main className="section-spacing">
      <div className="container app-container">
        
        <header className="app-header fade-in-up">
          <div className="logo-container">
            <div className="logo-image-wrapper horizontal">
              <Image 
                src="/logo-horizontal.png" 
                alt="Passaporte Competências Digitais" 
                width={300}
                height={80}
                className="main-logo-horizontal"
                priority
              />
            </div>
          </div>
          
          <div className="hero-text-container mt-4">
            <div className="badge">Ferramenta Educacional</div>
            <h1 className="hero-title">
              A sua jornada de segurança <br/><span>começa aqui.</span>
            </h1>
            <p className="hero-description">
              Aprenda a construir uma palavra-passe robusta e descubra quão seguras são as suas credenciais atuais contra piratas informáticos.
            </p>
          </div>
        </header>

        {currentView === 'home' && (
           <div className="cards-grid fade-in-up" style={{ animationDelay: '0.1s' }}>
              <button className="card action-card" onClick={() => setCurrentView('tester')}>
                 <div className="card-icon-wrapper">
                   <span className="card-icon">🔐</span>
                 </div>
                 <h3>Testar Password</h3>
                 <p>Descubra em tempo real quanto tempo um pirata informático precisaria para desvendar a sua palavra-passe.</p>
                 <div className="card-action">Começar Teste <span>&rarr;</span></div>
              </button>
              
              <button className="card action-card" onClick={() => setCurrentView('wizard')}>
                 <div className="card-icon-wrapper">
                   <span className="card-icon">✨</span>
                 </div>
                 <h3>Método Interativo</h3>
                 <p>Siga o nosso guia passo a passo dinâmico para criar uma palavra-passe forte e incrivelmente fácil de memorizar.</p>
                 <div className="card-action">Criar Senha Segura <span>&rarr;</span></div>
              </button>
           </div>
        )}

        {currentView !== 'home' && (
           <div className="view-container fade-in-up">
             <div className="back-btn-container mb-4">
                 <Button variant="outline" onClick={() => setCurrentView('home')}>
                    &larr; Voltar ao Menu
                 </Button>
             </div>
             <div style={{ display: currentView === 'tester' ? 'block' : 'none', width: '100%' }}>
                 <PasswordTester />
             </div>
             <div style={{ display: currentView === 'wizard' ? 'block' : 'none', width: '100%' }}>
                 <PasswordWizard />
             </div>
           </div>
        )}

      </div>
    </main>
  );
}
