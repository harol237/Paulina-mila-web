'use client'

export function Events() {
  return (
    <section id="eventos" style={{
      padding: 'clamp(80px,10vw,140px) 0',
      background: '#0a0a0a', overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="reveal" style={{
            fontSize: '0.8rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--pink)',
            marginBottom: 16, fontWeight: 500,
          }}>Agenda</p>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem,4vw,3rem)',
            fontWeight: 900, color: 'var(--white)',
          }}>Próximos Eventos</h2>
        </div>

        <div className="reveal" style={{
          maxWidth: 640, margin: '0 auto', textAlign: 'center',
          padding: 'clamp(50px,8vw,80px) 40px',
          borderRadius: 24, border: '1px solid rgba(135,206,235,0.15)',
          background: 'rgba(135,206,235,0.03)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 24 }}>🎤</div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem,3vw,2.2rem)',
            fontWeight: 900, marginBottom: 16,
            background: 'linear-gradient(90deg,var(--sky),var(--pink))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Próximamente 🗓️</h3>
          <p style={{ color: 'var(--gray-light)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 32 }}>
            Las fechas de la gira se anunciarán muy pronto.<br />
            ¡Reserva tu plaza antes de que se agoten!
          </p>
          <a href="#contacto" style={{
            display: 'inline-block', padding: '14px 32px', borderRadius: 50,
            background: 'linear-gradient(90deg,var(--pink),var(--sky-dark))',
            color: '#fff', fontWeight: 700, fontSize: '0.9rem',
            letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >Solicitar un concierto →</a>
        </div>
      </div>
    </section>
  )
}