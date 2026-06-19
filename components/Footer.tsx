'use client'

export function Footer() {
  return (
    <footer id="contacto" style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,20,147,0.12)',
      padding: 'clamp(60px,8vw,100px) 0 40px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48, marginBottom: 60,
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.8rem',
              fontWeight: 900, marginBottom: 16,
            }}>Paulina <span style={{ color: 'var(--pink)' }}>Milá</span></h3>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 240 }}>
              Cantante y exbailarina española. Indie / Folk.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <a href="https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ"
                target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--pink)'; e.currentTarget.style.background = 'rgba(255,20,147,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}
              >🎵</a>
              <a href="https://www.instagram.com/lapaulinamila?igsh=aTd0bnlyaTJicW1q"
                target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--pink)'; e.currentTarget.style.background = 'rgba(255,20,147,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}
              >📸</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 20 }}>Navegación</h4>
            {(['#inicio','#sobre-mi','#galeria','#eventos','#booking'] as const).map((href, i) => {
              const labels = ['Inicio','Sobre mí','Música','Eventos','Booking']
              return (
                <a key={href} href={href} style={{
                  display: 'block', color: 'var(--gray-light)',
                  fontSize: '0.95rem', marginBottom: 12, transition: 'color 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--pink)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--gray-light)'}
                >{labels[i]}</a>
              )
            })}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 20 }}>Contacto</h4>
            <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem', marginBottom: 12 }}>
              📧 <a href="mailto:" style={{ color: 'var(--sky)', transition: 'color 0.3s' }}>Tu email aquí</a>
            </p>
            <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem', marginBottom: 24 }}>
              📸 <a href="https://www.instagram.com/lapaulinamila?igsh=aTd0bnlyaTJicW1q" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky)' }}>@lapaulinamila</a>
            </p>
            <a href="#booking" style={{
              display: 'inline-block', padding: '12px 24px', borderRadius: 50,
              background: 'var(--pink)', color: '#fff',
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', transition: 'all 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >Reservar actuación</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 28, display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Paulina Milá · Todos los derechos reservados
          </p>
          <p style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>
            Hecho con <span style={{ color: 'var(--pink)' }}>♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}