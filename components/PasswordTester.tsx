'use client';

import React, { useState } from 'react';
import { analyzePasswordStrength, PasswordStrengthResult } from '@/utils/passwordStrength';
import { Card } from './Card';
import { RavenMascot } from './RavenMascot';
import { Button } from './Button';

export const PasswordTester: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const result: PasswordStrengthResult = analyzePasswordStrength(password);

  const getProgressColor = () => {
    if (result.score === 0) return 'var(--c-border)';
    if (result.score < 40) return 'var(--c-error)';
    if (result.score < 80) return 'var(--c-warning)';
    if (result.score >= 80) return 'var(--c-success)';
    return 'var(--c-primary)';
  };

  const generateMagicPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let magic = '';
    // Ensure all types are included
    magic += "A"; magic += "a"; magic += "1"; magic += "!";
    for (let i = 0; i < 12; i++) {
        magic += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // Simple shuffle
    magic = magic.split('').sort(() => 0.5 - Math.random()).join('');
    setPassword(magic);
    setShowPassword(true);
  };

  const toggleTooltip = (id: number) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  return (
    <Card className="password-tester" title="Testar Força da Password">
      <div className="tester-container">
        
        <div className="mascot-section">
            <RavenMascot 
               message={result.mascotHint} 
               mood={result.score >= 80 ? 'happy' : result.score < 40 ? 'warning' : 'neutral'} 
            />
        </div>

        <div className="input-with-button mascot-mt" style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite aqui..."
            className="input-field huge-input"
            style={{ width: '100%', marginBottom: '16px' }}
          />
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="btn btn-outline"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
            <button
              onClick={generateMagicPassword}
              type="button"
              className="btn btn-outline"
            >
              Gerar Senha Magicamente ✨
            </button>
          </div>
        </div>

        <div 
           aria-label={`Força da palavra-passe: ${result.score}%`} 
           className="progress-bar-bg friendly-bar"
           aria-live="polite"
        >
          <div
            className="progress-bar-fill friendly-fill"
            style={{
              width: `${Math.max(result.score, 5)}%`,
              backgroundColor: getProgressColor(),
            }}
          />
        </div>

        <div className="result-notice" aria-live="assertive">
          <h4 className="result-notice-title" style={{ color: getProgressColor(), fontSize: '1.2rem', marginBottom: '8px' }}>
            <span>{result.score >= 80 ? '🛡️' : '⚠️'}</span>
            Estimativa Hive Systems: <strong>{result.timeToCrack}</strong>
          </h4>
          <p className="result-notice-text text-muted">
            {result.timeExplanation}
          </p>
        </div>

        <div className="educational-block mt-4">
          <h4 className="educational-title">Checklist de Segurança</h4>
          <ul className="educational-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: password.length >= 12 ? 'var(--c-success)' : 'var(--c-text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', position: 'relative' }} onClick={() => toggleTooltip(1)}>
              <span>{password.length >= 12 ? '✅' : '⚪'}</span>
              <span>Pelo menos 12 caracteres</span>
              <span title="Ajuda" style={{ background: '#e2e8f0', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#64748b' }}>?</span>
              {activeTooltip === 1 && (
                <div className="speech-bubble" style={{ position: 'absolute', top: '-60px', left: '0', zIndex: 10, width: '280px', padding: '12px', fontSize: '14px' }}>Senhas longas são a métrica principal. Cada letra extra multiplica a dificuldade de quebra.</div>
              )}
            </li>

            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: result.hasUpper ? 'var(--c-success)' : 'var(--c-text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', position: 'relative' }} onClick={() => toggleTooltip(2)}>
              <span>{result.hasUpper ? '✅' : '⚪'}</span>
              <span>Letras maiúsculas</span>
              <span title="Ajuda" style={{ background: '#e2e8f0', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#64748b' }}>?</span>
              {activeTooltip === 2 && (
                <div className="speech-bubble" style={{ position: 'absolute', top: '-60px', left: '0', zIndex: 10, width: '280px', padding: '12px', fontSize: '14px' }}>Força o uso de 2 abecedários distintos, travando ataques simples.</div>
              )}
            </li>

            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: result.hasLower ? 'var(--c-success)' : 'var(--c-text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', position: 'relative' }} onClick={() => toggleTooltip(3)}>
              <span>{result.hasLower ? '✅' : '⚪'}</span>
              <span>Letras minúsculas</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: result.hasNumber ? 'var(--c-success)' : 'var(--c-text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', position: 'relative' }} onClick={() => toggleTooltip(4)}>
              <span>{result.hasNumber ? '✅' : '⚪'}</span>
              <span>Números</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: result.hasSymbol ? 'var(--c-success)' : 'var(--c-text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', position: 'relative' }} onClick={() => toggleTooltip(5)}>
              <span>{result.hasSymbol ? '✅' : '⚪'}</span>
              <span>Símbolos especiais</span>
              <span title="Ajuda" style={{ background: '#e2e8f0', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#64748b' }}>?</span>
              {activeTooltip === 5 && (
                <div className="speech-bubble" style={{ position: 'absolute', top: '-60px', left: '0', zIndex: 10, width: '280px', padding: '12px', fontSize: '14px' }}>Símbolos !@#$% previnem ataques de dicionário automático.</div>
              )}
            </li>

          </ul>
        </div>

      </div>
    </Card>
  );
};
