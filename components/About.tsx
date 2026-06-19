'use client'
import { useEffect } from 'react'
import Image from 'next/image'

const stats = [
  { value: '6+', label: 'Singles publicados' },
  { value: '∞',  label: 'Pasión en cada nota' },
  { value: '1',  label: 'Voz única' },
]

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre-mi" style={{
      padding: 'clamp(80px, 10vw, 140px) 0',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #120008 50%, #0a0a0a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Deco */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,20,147,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap',
      }}>
        {/* Image side */}
        <div className="reveal-left" style={{
          flex: '0 0 auto',
          width: 'clamp(260px, 30vw, 420px)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: -12,
            borderRadius: 24,
            background: 'linear-gradient(135deg, var(--pink), var(--sky))',
            opacity: 0.3, filter: 'blur(20px)',
          }} />
          <div style={{
            position: 'relative',
            aspectRatio: '3/4',
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid rgba(255,20,147,0.25)',
          }}>
            <Image
              src="/images/hunting.jpg"
              alt="Paulina Milá - Sobre mí"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            {/* Overlay tag */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '40px 24px 24px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
            }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--sky)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Origen</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>España 🇪🇸</p>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p className="reveal" style={{
            fontSize: '0.8rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--pink)',
            marginBottom: 16, fontWeight: 500,
          }}>Biografía</p>

          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900, lineHeight: 1.1,
            color: 'var(--white)', marginBottom: 28,
          }}>
            Pasión, Compás<br />
            <span style={{ color: 'var(--pink)' }}>y Voz</span>
          </h2>

          <p className="reveal" style={{
            fontSize: '1rem', color: 'var(--gray-light)',
            lineHeight: 1.8, marginBottom: 20,
          }}>
            Paulina Milá es una artista española cuya trayectoria única combina de forma magistral
            la disciplina de la danza con la sensibilidad de la música melódica.
          </p>
          <p className="reveal" style={{
            fontSize: '1rem', color: 'var(--gray-light)',
            lineHeight: 1.8, marginBottom: 40,
          }}>
            Tras años recorriendo escenarios como bailarina profesional, decidió proyectar toda su
            fuerza expresiva a través de su voz. Su propuesta musical fusiona raíces tradicionales
            con matices modernos, creando una experiencia íntima y elegante.
          </p>

          {/* Tags */}
          <div className="reveal" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            {['INDIE', 'FOLK', 'ACÚSTICO', 'BAILARINA'].map(tag => (
              <span key={tag} style={{
                padding: '8px 18px', borderRadius: 50,
                border: '1px solid rgba(255,20,147,0.35)',
                fontSize: '0.75rem', letterSpacing: '0.12em',
                color: 'var(--pink-light)', fontWeight: 600,
              }}>{tag}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="reveal" style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(90deg, var(--pink), var(--sky))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{s.value}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}