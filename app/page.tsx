import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function Home() {
  return (
    <main style={{ padding: 'var(--space-6) 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center', textAlign: 'center' }}>
        
        <header style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }}>
            A sua jornada digital começa aqui
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--c-text-muted)', marginBottom: 'var(--space-5)' }}>
            Bem-vindo ao Passaporte Password. Uma plataforma de capacitação centralizada para modernizar o seu acesso e as suas ferramentas de identidade.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center' }}>
            <Button variant="primary">Começar Agora</Button>
            <a href="/DOCS/PRD.md" className="btn" style={{ backgroundColor: 'var(--c-border)', color: 'var(--c-text-main)' }}>Ler Documentação</a>
          </div>
        </header>

        <section style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
          <Card title="Experiência CML Inspirada">
            <p style={{ color: 'var(--c-text-muted)' }}>
              Design limpo, responsivo e projetado para facilidade de uso diário, com semelhanças à iniciativa Futuro Digital.
            </p>
          </Card>
          <Card title="Vanilla CSS Flexível">
            <p style={{ color: 'var(--c-text-muted)' }}>
              Todo o design system é controlável deitando mão aos CSS variables implementados, dispensando layouts difíceis de alterar.
            </p>
          </Card>
          <Card title="Estrutura Next.js 14">
            <p style={{ color: 'var(--c-text-muted)' }}>
              Arquitetura sólida com o App Router para escalabilidade máxima, mantendo a performance e boas práticas de SEO.
            </p>
          </Card>
        </section>

      </div>
    </main>
  );
}
