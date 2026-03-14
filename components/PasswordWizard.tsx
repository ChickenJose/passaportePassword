'use client';

import React, { useState, useEffect, useRef } from 'react';
import { analyzePasswordStrength } from '@/utils/passwordStrength';
import { Card } from './Card';
import { Button } from './Button';

export const PasswordWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [digits, setDigits] = useState('');
  const [symbol, setSymbol] = useState('');
  const [word, setWord] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Accessibility Focus Management
  const stepContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the step container whenever the step changes to alert screen readers
    if (stepContainerRef.current) {
      stepContainerRef.current.focus();
    }
    
    // Auto-advance logic for Step 4 (Analyzing)
    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNextStep1 = () => {
    if (!/^\d{4}$/.test(digits)) {
      setErrorMsg('Por favor, introduza exatamente 4 dígitos numéricos.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (symbol.length !== 1 || /[a-zA-Z0-9\s]/.test(symbol)) {
      setErrorMsg('Por favor, introduza exatamente 1 único sinal de pontuação ou símbolo.');
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  const handleNextStep3 = () => {
    if (word !== 'Facebo') {
      setErrorMsg('Por favor, escreva "Facebo" exatamente como solicitado (F maiúsculo e o resto minúsculo).');
      return;
    }
    setErrorMsg('');
    setStep(4);
  };

  const resetWizard = () => {
    setDigits('');
    setSymbol('');
    setWord('');
    setStep(1);
    setErrorMsg('');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="wizard-step">
            <p><strong>Passo 1:</strong> Introduza quatro dígitos numéricos da sua preferência, que sejam de fácil memorização (ex: um ano ou código pin).</p>
            <input
              type="text"
              maxLength={4}
              value={digits}
              onChange={(e) => setDigits(e.target.value.replace(/\D/g, ''))} // only accept numbers
              placeholder="Ex: 1984"
              className="wizard-input input-field"
            />
            <Button onClick={handleNextStep1} className="wizard-btn-mt">Avançar</Button>
          </div>
        );
      case 2:
        return (
          <div className="wizard-step">
            <p><strong>Passo 2:</strong> Excelente. Agora, escolha e forneça <strong>um único sinal de pontuação ou símbolo</strong> (ex: !, ?, #, @).</p>
            <input
              type="text"
              maxLength={1}
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="Ex: !"
              className="wizard-input input-field"
            />
            <div className="wizard-actions">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Voltar</Button>
              <Button onClick={handleNextStep2} className="flex-1">Avançar</Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="wizard-step">
            <p><strong>Passo 3:</strong> Imagine que está a criar uma conta na plataforma Facebook. Forneça as primeiras <strong>seis letras da palavra &quot;Facebook&quot;</strong>, exigindo estritamente que a primeira letra seja maiúscula e as restantes minúsculas (Ex: Facebo).</p>
            <input
              type="text"
              maxLength={6}
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Escreva: Facebo"
              className="wizard-input input-field"
            />
            <div className="wizard-actions">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">Voltar</Button>
              <Button onClick={handleNextStep3} className="flex-1">Compor Palavra-Passe</Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="wizard-step align-center text-center">
             <div className="loader-spinner" aria-hidden="true" />
             <p className="text-muted mt-4">A analisar a complexidade e a estimar o tempo de quebra...</p>
          </div>
        );
      case 5:
        const finalPassword = `${digits}${symbol}${word}`;
        const strength = analyzePasswordStrength(finalPassword);
        return (
          <div className="wizard-step align-center text-center">
            <div className="success-banner">
              <h3 className="success-banner-title">🎉 Palavra-Passe Criada!</h3>
              <p className="success-banner-pwd">
                {finalPassword}
              </p>
            </div>
            
            <p className="final-message">
              Parabéns! A sua nova palavra-passe segura é <strong>{finalPassword}</strong>. Demoraria <strong>{strength.timeToCrack.toLowerCase()}</strong> a ser desbloqueada por um pirata informático.
            </p>

            <div className="educational-block">
              <h4 className="educational-title">Porquê que isto é mais seguro?</h4>
              <ul className="educational-list">
                <li><strong>Mistura de carateres:</strong> Ao juntar números, símbolos e letras (maiúsculas e minúsculas), aumentou exponencialmente a complexidade que um computador precisa para a &quot;adivinhar&quot;.</li>
                <li><strong>Palavras cortadas:</strong> Um erro comum é usar uma palavra de dicionário (ex: &quot;Facebook2024!&quot;). Ao cortar &quot;Facebook&quot; para &quot;Facebo&quot;, os ataques de dicionário automáticos falham.</li>
                <li><strong>Fácil para si, difícil para a máquina:</strong> Memorizou 3 blocos fáceis (número pin, símbolo especial, contexto do site) que juntos compõem uma super chave!</li>
              </ul>
            </div>

            <Button onClick={resetWizard}>Criar Nova Palavra-Passe</Button>
          </div>
        );
      default:
        return null;
    }
  };

  const getCardTitle = () => {
     if (step < 4) return `Assistente de Criação - Passo ${step} de 3`;
     if (step === 4) return 'A analisar...';
     return 'A sua Nova Palavra-Passe';
  }

  return (
    <Card className="password-wizard" title={getCardTitle()}>
      {/* ARIA Live region for screen readers to announce errors immediately */}
      <div aria-live="polite" className="sr-only">
        {errorMsg}
      </div>

      <div 
        ref={stepContainerRef} 
        tabIndex={-1} 
        style={{ outline: 'none' }}
      >
        {renderStepContent()}
        {errorMsg && step < 4 && <p className="error-message mt-2">{errorMsg}</p>}
      </div>
    </Card>
  );
};
