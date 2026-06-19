/* ============================================================
   VIDEOS.TSX
   ============================================================ */
// components/Videos.tsx
'use client'
export default function Videos() {
  return (
    <section id="videos" style={{
      padding: 'clamp(80px,10vw,140px) 0',
      background: 'linear-gradient(180deg, #0a0a0a, #0d0010, #0a0a0a)',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="reveal" style={{
          fontSize: '0.8rem', letterSpacing: '0.25em',
          textTransform: 'uppercase', color: 'var(--pink)',
          marginBottom: 16, fontWeight: 500,
        }}>Videoclips</p>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem,4vw,3rem)',
          fontWeight: 900, color: 'var(--white)', marginBottom: 60,
        }}>Vídeos</h2>

        {/* Coming soon card */}
        <div className="reveal" style={{
          maxWidth: 700, margin: '0 auto',
          position: 'relative', borderRadius: 24, overflow: 'hidden',
          border: '1px solid rgba(255,20,147,0.2)',
          background: 'rgba(255,20,147,0.04)',
          padding: 'clamp(60px,10vw,100px) 40px',
        }}>
          {/* Animated ring */}
          <div style={{
            width: 120, height: 120, borderRadius: '50%',
            border: '2px solid rgba(255,20,147,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px',
            animation: 'pulse-ring 2.5s infinite',
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg,var(--pink),var(--sky))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
            }}>▶</div>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem,4vw,2.8rem)',
            fontWeight: 900, marginBottom: 16,
            background: 'linear-gradient(90deg,var(--pink),var(--sky))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Pour bientôt ✨</h3>
          <p style={{ color: 'var(--gray-light)', fontSize: '1rem', lineHeight: 1.7 }}>
            Los videoclips de Paulina Milá están en camino.<br />
            Síguenos en Instagram para ser el primero en verlos.
          </p>
          <a href="https://www.instagram.com/lapaulinamila?igsh=aTd0bnlyaTJicW1q"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: 32,
              padding: '12px 28px', borderRadius: 50,
              border: '1px solid rgba(255,20,147,0.4)',
              color: 'var(--pink)', fontSize: '0.85rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--pink)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--pink)' }}
          >📸 Seguir en Instagram</a>
        </div>
      </div>
    </section>
  )
}


/* ============================================================
   EVENTS.TSX
   ============================================================ */
// components/Events.tsx
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

        {/* Coming soon */}
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


/* ============================================================
   BOOKING.TSX
   ============================================================ */
// components/Booking.tsx
'use client'
import { useState } from 'react'

export function Booking() {
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })
  const [sent, setSent] = useState(false)
  const EMAIL = '' // ← Añade tu email aquí cuando estés listo

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!EMAIL) { alert('Configura el email de destino en Booking.tsx'); return }
    // TODO: conectar con Formspree, EmailJS, o API Route de Next.js
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '16px 20px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12, color: 'var(--white)',
    fontSize: '0.95rem', fontFamily: 'var(--font-body)',
    outline: 'none', transition: 'border-color 0.3s',
  }

  return (
    <section id="booking" style={{
      padding: 'clamp(80px,10vw,140px) 0',
      background: 'linear-gradient(180deg,#0a0a0a,#0d0010,#0a0a0a)',
    }}>
      <div className="container" style={{ maxWidth: 680 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <p className="reveal" style={{
            fontSize: '0.8rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--pink)',
            marginBottom: 16, fontWeight: 500,
          }}>Contratación</p>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem,4vw,3rem)',
            fontWeight: 900, color: 'var(--white)',
          }}>Reservar una Actuación</h2>
        </div>

        {sent ? (
          <div className="reveal" style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--pink)', marginBottom: 12 }}>¡Mensaje enviado!</h3>
            <p style={{ color: 'var(--gray-light)' }}>Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        ) : (
          <div className="reveal" style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,20,147,0.15)',
            borderRadius: 24, padding: 'clamp(32px,5vw,50px)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="booking-grid">
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Nombre *</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Tu nombre completo"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--pink)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="tu@email.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--pink)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Fecha del evento</label>
                <input name="date" type="date" value={form.date} onChange={handle}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={e => e.target.style.borderColor = 'var(--sky)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Mensaje *</label>
                <textarea name="message" value={form.message} onChange={handle}
                  placeholder="Cuéntame sobre tu evento, ubicación, aforo..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--pink)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <button onClick={submit} style={{
                padding: '16px 40px', borderRadius: 50,
                background: 'linear-gradient(90deg,var(--pink),var(--sky-dark))',
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                transition: 'all 0.3s', alignSelf: 'flex-start',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >Enviar solicitud →</button>
            </div>
          </div>
        )}
      </div>
      <style>{`@media(max-width:600px){.booking-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}


/* ============================================================
   FOOTER.TSX
   ============================================================ */
// components/Footer.tsx
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
              <a href="https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ" target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--pink)'; e.currentTarget.style.background = 'rgba(255,20,147,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}
              >🎵</a>
              <a href="https://www.instagram.com/lapaulinamila?igsh=aTd0bnlyaTJicW1q" target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--pink)'; e.currentTarget.style.background = 'rgba(255,20,147,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}
              >📸</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 20 }}>Navegación</h4>
            {['#inicio', '#sobre-mi', '#galeria', '#eventos', '#booking'].map((href, i) => {
              const labels = ['Inicio', 'Sobre mí', 'Música', 'Eventos', 'Booking']
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
            <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem', marginBottom: 12 }}>📧 <a href="mailto:" style={{ color: 'var(--sky)', transition: 'color 0.3s' }}>Tu email aquí</a></p>
            <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem', marginBottom: 24 }}>📸 <a href="https://www.instagram.com/lapaulinamila?igsh=aTd0bnlyaTJicW1q" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky)' }}>@lapaulinamila</a></p>
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