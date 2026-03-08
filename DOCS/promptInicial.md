*

> *Prompt Inicial de Projeto – Next.js + GitHub + Vercel*

*Contexto:*  
Vamos iniciar um novo projeto web em *Next.js 14. O código será hospedado num **repositório GitHub* e o *deploy será feito na Vercel*. O objetivo é criar uma base de trabalho organizada com documentação mínima logo desde o início.

*Instruções principais:*  
1. *Criar a estrutura base do projeto em Next.js* com TypeScript, ESLint e suporte a API routes (se necessário).  
   - *Next.js: *Framework React otimizado para desempenho, SEO e escalabilidade, com renderização híbrida e routing automático.  
   - *TypeScript: Extensão do JavaScript com *tipagem estática que previne erros e torna o código mais previsível e fácil de manter.  
   - *ESLint*: Ferramenta que impõe boas práticas de código e estilo, ajudando a manter um desenvolvimento limpo e consistente.  
   - *API Routes (opcional): Permitem criar *endpoints backend diretamente no projeto, dispensando um servidor separado.

2. *Inicializar o repositório Git* e criar a ligação ao *GitHub*.  
3. *Configurar o deploy automático na Vercel*.  
4. Criar uma pasta /DOCS com os seguintes ficheiros:
   - *PRD.md* – Documento de requisitos do produto (Product Requirements Document). Deve incluir:
     - Breve descrição do propósito e público-alvo do projeto.  
     - Objetivos principais e funcionalidades planeadas.  
     - Regras de design ou tom de comunicação (se existirem).  
     - Instruções ao agente (ex: "Seguir práticas recomendadas de Next.js; comentar código relevante; manter consistência na nomenclatura.").  
   - *TASKS.md* – Listagem hierárquica de tarefas com grandes etapas e subpassos. Este documento será atualizado à medida que o projeto evolui.  
     Exemplo inicial:  
     
     # TASKS

     ## Etapa 1 – Setup do Projeto
     - [ ] Criar app base com Next.js e TypeScript
     - [ ] Configurar ESLint e Prettier
     - [ ] Setup Git + GitHub
     - [ ] CI/CD com Vercel

     ## Etapa 2 – Estrutura Base
     - [ ] Criar layout principal
     - [ ] Implementar navegação básica
     - [ ] Criar página inicial com placeholder
     
   - *Log-[MÊS].md* – Registo de desenvolvimento. Em cada sessão, indicar:
     - Data  
     - Ações realizadas  
     - Próximos passos  
     Exemplo inicial:
     
     # Log-Março

     ## 08-03-2026
     - Criado projeto base em Next.js.
     - Push inicial para GitHub.

     Próximos passos:
     - Configurar deploy automático na Vercel.
     - Criar esqueleto do PRD.
     
5. Estudar o estilo visual em https://futuro-digital-cml.vercel.app/ e:
   - Produzir um design system inspirado nessa app (cores, tipografia, espaçamento, componentes).
   - Implementar componentes base em Next.js que sigam esse design.
   - Garantir responsividade e experiência semelhante, sem copiar texto ou imagens.

*Notas ao agente:*  
- Manter a estrutura modular e escalável.  
- Usar commits descritivos e pequenos.  
- Atualizar sempre os ficheiros TASKS.md e Log-[MÊS].md após cada sessão.  
- Garantir compatibilidade com Node.js LTS.

Cria uma app moderna, elegante, interativa e acessível para ser utilizada pelos formandos dos cursos de inclusão digital "Passaporte Competências Digitais" da Câmara Municipal de Lisboa Abaixo apresenta-se o comando principal que deve configurar no motor de Inteligência Artificial da aplicação:

O objetivo consiste em guiar o utilizador na construção de uma palavra-passe robusta, aplicando uma metodologia interativa e sequencial. 
Na primeira parte da app, apresenta uma ferramenta interativa que com base na passowrd introduzida pelo utilizador, indica numa barra de progressão a força da password e explica quanto tempo demoraria a ser "descoberta" ou "desbloqueada" por um pirata informático. Para garantir o rigor factual no cálculo do tempo de força bruta, recomenda-se a parametrização do sistema com base nas tabelas anuais de complexidade de palavras-passe publicadas pela Hive Systems ([https://www.hivesystems.com/](https://www.hivesystems.com/)), que estabelecem referenciais técnicos atualizados sobre vulnerabilidades.

Na segunda parte da app,
Passo 1: Inicie a interação solicitando ao utilizador que introduza quatro dígitos numéricos da sua preferência, que sejam de fácil memorização.
Passo 2: Após a receção dos dígitos, valide a entrada e solicite que o utilizador escolha e forneça um sinal de pontuação.
Passo 3: Após a receção do sinal de pontuação, peça ao utilizador que imagine o cenário de criação de uma conta na plataforma Facebook. Solicite que este forneça as primeiras seis letras da palavra "Facebook", exigindo estritamente que a primeira letra seja redigida em maiúscula e as restantes em minúsculas.
Passo 4: Concatene os três elementos recolhidos na ordem exata: [Dígitos] + [Sinal de pontuação] + [Letras]. Analise a complexidade da cadeia de caracteres resultante e estime o tempo aproximado que um ataque de força bruta (brute-force) demoraria a decifrar a credencial, baseando-se em métricas de segurança cibernética atualizadas.
Passo 5: Encerre a interação apresentando exclusivamente a seguinte mensagem final, substituindo as variáveis pelos dados reais obtidos: "Parabéns! A sua nova palavra-passe segura é [Dígitos][Sinal][Letras]" Demoraria [Tempo Estimado] a ser desbloqueada por um pirata informático".

A aplicação deve ser muito amigável e acessível e instigar o indivíduo a refletir sobre os motivos estruturais que tornam aquela combinação resistente a ataques, consolidando o pensamento crítico.
*
