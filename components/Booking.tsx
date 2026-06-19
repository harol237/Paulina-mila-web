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