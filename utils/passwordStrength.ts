export type CrackTime = 'Instantâneo' | 'Segundos' | 'Minutos' | 'Horas' | 'Dias' | 'Meses' | 'Anos' | 'Milénios';

export interface PasswordStrengthResult {
  score: number; // 0 to 100
  timeToCrack: CrackTime;
  timeExplanation: string;
  hasLower: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  isHiveSystemsSecure: boolean; // Based on 2024 table (e.g., considered secure if it takes > 1 year)
  mascotHint: string;
}

// Approximated from Hive Systems 2024 Password Table (based on standard hash rates)
export function analyzePasswordStrength(password: string): PasswordStrengthResult {
  if (!password) {
    return {
      score: 0,
      timeToCrack: 'Instantâneo',
      timeExplanation: 'Insira uma palavra-passe.',
      hasLower: false,
      hasUpper: false,
      hasNumber: false,
      hasSymbol: false,
      isHiveSystemsSecure: false,
      mascotHint: 'Olá! Começa a escrever a tua palavra-passe para a barra começar a crescer!',
    };
  }

  const length = password.length;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  let poolSize = 0;
  if (hasNumber) poolSize += 10;
  if (hasLower) poolSize += 26;
  if (hasUpper) poolSize += 26;
  if (hasSymbol) poolSize += 33; // Approx standard symbols

  // Entropy calculation: E = L * log2(R)
  const entropy = length * Math.log2(poolSize || 1);
  
  // Hive Systems Approximate mapping for 2024 (Assumed Bcrypt or standard hash at high speed)
  // These are simplified brackets to give the user a visceral feeling of danger/safety.
  let timeToCrack: CrackTime = 'Instantâneo';
  let score = 0;

  if (length < 6) {
    timeToCrack = 'Instantâneo';
    score = 5;
  } else if (entropy < 40) {
    timeToCrack = 'Instantâneo';
    score = 15;
  } else if (entropy < 50) {
    timeToCrack = 'Segundos';
    score = 30;
  } else if (entropy < 60) {
    timeToCrack = 'Minutos';
    score = 45;
  } else if (entropy < 70) {
    timeToCrack = 'Horas';
    score = 60;
  } else if (entropy < 80) {
    timeToCrack = 'Dias';
    score = 75;
  } else if (entropy < 90) {
    timeToCrack = 'Meses';
    score = 85;
  } else if (entropy < 100) {
    timeToCrack = 'Anos';
    score = 95;
  } else {
    timeToCrack = 'Milénios';
    score = 100;
  }

  // Generate an educational explanation
  let timeExplanation = `Um pirata informático demoraria ${timeToCrack.toLowerCase()} a descobrir a sua palavra-passe numa simulação de força bruta.`;
  if (timeToCrack === 'Instantâneo') {
    timeExplanation = 'Esta palavra-passe é vulnerável e pode ser quebrada instantaneamente. Tente adicionar mais caracteres.';
  } else if (timeToCrack === 'Milénios' || timeToCrack === 'Anos') {
    timeExplanation = 'Excelente! A sua palavra-passe é altamente segura e resistente a ataques de força bruta pelos padrões atuais.';
  }

  // Mascot Hint Logic
  let mascotHint = '';
  if (score >= 85) {
      mascotHint = 'Incrível! 🏆 Esta palavra-passe é super forte! Repara como a barra ficou verde!';
  } else {
      if (!hasNumber && !hasSymbol) {
         mascotHint = 'Bom começo! Mas a barra ainda está fraca. Que tal juntares alguns números que te lembres facilmente e talvez um símbolo (como !, ?, @)?';
      } else if (!hasNumber) {
         mascotHint = 'Boa! Já tens letras e símbolos. Adiciona uns números para veres a barra de força a disparar! 🚀';
      } else if (!hasSymbol) {
         mascotHint = 'Estás quase lá! Pensa em adicionar um símbolo (tipo ponto, hífen ou !) para separar as palavras. Os robôs odeiam isso! 🤖❌';
      } else if (length < 10) {
         mascotHint = 'Já tens os ingredientes certos, mas a palavra-passe é um bocado curta. Tenta torná-la mais longa, tipo uma frase!';
      } else {
         mascotHint = 'Continua a escrever! Quanto mais longa, mais depressa a barra chega ao verde. Olha para ela a crescer! 📈';
      }
  }

  return {
    score,
    timeToCrack,
    timeExplanation,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    isHiveSystemsSecure: score >= 85, // We consider it "Hive secure" if it takes at least Months/Years
    mascotHint,
  };
}
