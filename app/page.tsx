import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { PasswordTester } from '@/components/PasswordTester';
import { PasswordWizard } from '@/components/PasswordWizard';

export default function Home() {
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

        {/* Core Application Grid */}
        <section className="app-grid">
          
          {/* Left Column: Password Tester */}
          <div className="column">
            <div className="column-header">
              <h2>1. Teste de Força Bruta</h2>
              <p className="text-muted">
                Esta ferramenta interativa calcula em tempo real quanto tempo um pirata informático precisaria para desvendar a sua palavra-passe, baseando-se nas tabelas rigorosas da <strong>Hive Systems</strong>.
              </p>
            </div>
            <PasswordTester />
          </div>

          {/* Right Column: Password Wizard (Step by step Guide) */}
          <div className="column">
            <div className="column-header">
              <h2>2. Método Interativo</h2>
              <p className="text-muted">
                Vamos guiá-lo passo a passo na criação de uma palavra-passe forte, construindo blocos estruturais que combinam segurança com fácil memorização humana.
              </p>
            </div>
            <PasswordWizard />
          </div>

        </section>

      </div>
    </main>
  );
}
