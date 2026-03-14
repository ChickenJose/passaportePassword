'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { PasswordTester } from '@/components/PasswordTester';
import { PasswordWizard } from '@/components/PasswordWizard';

export default function Home() {
  const [currentView, setCurrentView] = useState<'home' | 'tester' | 'wizard'>('home');

  return (
    <main className="section-spacing">
      <div className="container app-container">
        
        <header className="app-header">
          <h1 className="hero-title">
            Passaporte Competências Digitais
          </h1>
          <p className="hero-subtitle">
            Câmara Municipal de Lisboa
          </p>
          <p className="hero-description">
            Aprenda a construir uma palavra-passe robusta e descubra quão seguras são as suas credenciais atuais contra piratas informáticos.
          </p>
        </header>

        {currentView === 'home' && (
           <div className="home-menu">
              <button className="giant-menu-btn" onClick={() => setCurrentView('tester')}>
                 <span className="giant-btn-icon">🕵️</span>
                 <h3>Testar a Força da Password</h3>
                 <p>Descubra quanto tempo um pirata informático precisaria para desvendar a sua palavra-passe.</p>
              </button>
              
              <button className="giant-menu-btn" onClick={() => setCurrentView('wizard')}>
                 <span className="giant-btn-icon">✨</span>
                 <h3>Método Interativo</h3>
                 <p>Siga o nosso guia passo a passo para criar uma palavra-passe forte e fácil de memorizar.</p>
              </button>
           </div>
        )}

        {currentView !== 'home' && (
           <div className="view-container">
             <div className="back-btn-container">
                 <Button variant="outline" onClick={() => setCurrentView('home')}>
                    &larr; Voltar ao Menu
                 </Button>
             </div>
             {currentView === 'tester' && <PasswordTester />}
             {currentView === 'wizard' && <PasswordWizard />}
           </div>
        )}

      </div>
    </main>
  );
}
