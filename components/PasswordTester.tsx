'use client';

import React, { useState } from 'react';
import { analyzePasswordStrength, PasswordStrengthResult } from '@/utils/passwordStrength';
import { Card } from './Card';
import { RavenMascot } from './RavenMascot';

export const PasswordTester: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const result: PasswordStrengthResult = analyzePasswordStrength(password);

  // Bar color based on score
  const getProgressColor = () => {
    if (result.score === 0) return 'var(--c-border)';
    if (result.score < 40) return 'var(--c-error)'; // Red
    if (result.score < 80) return 'var(--c-warning)'; // Yellow
    if (result.score >= 80) return 'var(--c-success)'; // Green
    return 'var(--c-primary)';
  };

  return (
    <Card className="password-tester" title="Testar Força da Password">
      <div className="tester-container">
        
        {/* Raven Mascot Section */}
        <div className="mascot-section">
            <RavenMascot 
               message={result.mascotHint} 
               mood={result.score >= 80 ? 'happy' : result.score < 40 ? 'warning' : 'neutral'} 
            />
        </div>

        <div className="input-with-button mascot-mt">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite aqui..."
            className="input-field huge-input"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            aria-label={showPassword ? 'Ocultar palavra-passe' : 'Mostrar palavra-passe'}
            className="input-toggle-btn"
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>

        <div aria-label={`Força da palavra-passe: ${result.score}%`} className="progress-bar-bg friendly-bar">
          <div
            className="progress-bar-fill friendly-fill"
            style={{
              width: `${Math.max(result.score, 5)}%`, /* Ensure it's slightly visible even at 0 so user knows it exists */
              backgroundColor: getProgressColor(),
            }}
          />
        </div>

        <div className="result-notice">
          <h4 className="result-notice-title">
            <span>{result.score >= 80 ? '🛡️' : '⚠️'}</span>
            Estimativa Hive Systems: <strong>{result.timeToCrack}</strong>
          </h4>
          <p className="result-notice-text">
            {result.timeExplanation}
          </p>
        </div>

        {password.length > 0 && (
          <div className="badge-container">
            <span className={`badge ${result.hasLower ? 'badge-success' : 'badge-default'}`}>Minúsculas</span>
            <span className={`badge ${result.hasUpper ? 'badge-success' : 'badge-default'}`}>Maiúsculas</span>
            <span className={`badge ${result.hasNumber ? 'badge-success' : 'badge-default'}`}>Números</span>
            <span className={`badge ${result.hasSymbol ? 'badge-success' : 'badge-default'}`}>Símbolos</span>
          </div>
        )}

      </div>
    </Card>
  );
};
