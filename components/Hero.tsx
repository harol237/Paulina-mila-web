'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const socials = [
  { icon: '🎵', label: 'Spotify',   href: 'https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ' },
  { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/lapaulinamila?igsh=aTd0bnlyaTJicW1q' },
]

const tickerText = '• PAULINA MILÁ • INDIE / FOLK • CANTANTE ESPAÑOLA • NUEVA MÚSICA • PAULINA MILÁ • INDIE / FOLK • CANTANTE ESPAÑOLA • NUEVA MÚSICA •'

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="inicio" style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0010 50%, #0a0a0a 100%)',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,20,147,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(135,206,235,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div className="container" style={{
        flex: 1, display: 'flex', alignItems: 'center',
        paddingTop: 120, paddingBottom: 60,
        gap: 60,
      }}>
        {/* Left text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="reveal" style={{
            fontSize: '0.8rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'var(--sky)',
            marginBottom: 20, fontWeight: 500,
          }}>Cantante & Exbailarina Española</p>

          <h1 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 900, lineHeight: 1.05,
            color: 'var(--white)', marginBottom: 24,
          }}>
            Descubre el<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--pink), var(--sky))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Sonido</span> de<br />
            Paulina Milá
          </h1>

          <p className="reveal" style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: 'var(--gray-light)', lineHeight: 1.7,
            maxWidth: 480, marginBottom: 40,
          }}>
            Melodías con alma e historias genuinas, donde la disciplina de la danza se funde con
            la sensibilidad de la música Indie Folk.
          </p>

          {/* CTA buttons */}
          <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#galeria" style={{
              padding: '15px 32px', borderRadius: 50,
              background: 'var(--pink)', color: '#fff',
              fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.06em',
              textTransform: 'uppercase', transition: 'all 0.3s',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              animation: 'pulse-ring 2s infinite',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >▶ Escuchar mi música</a>

            <a href="https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ"
              target="_blank" rel="noopener noreferrer"
              style={{
                padding: '15px 32px', borderRadius: 50,
                border: '2px solid rgba(135,206,235,0.4)',
                color: 'var(--sky)', fontWeight: 600, fontSize: '0.9rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--sky)'
                e.currentTarget.style.background = 'rgba(135,206,235,0.1)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(135,206,235,0.4)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >🎧 Abrir Spotify</a>
          </div>

          {/* Socials */}
          <div className="reveal" style={{ display: 'flex', gap: 16, marginTop: 40 }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                title={s.label} style={{
                  width: 44, height: 44, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--pink)'
                  e.currentTarget.style.background = 'rgba(255,20,147,0.15)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="reveal-right hero-img-wrap" style={{
          flex: '0 0 auto', position: 'relative',
          width: 'clamp(280px, 35vw, 480px)',
          height: 'clamp(380px, 50vw, 620px)',
        }}>
          {/* Glow ring */}
          <div style={{
            position: 'absolute', inset: -20, borderRadius: '40% 60% 55% 45%',
            background: 'linear-gradient(135deg, var(--pink), var(--sky))',
            opacity: 0.25, filter: 'blur(30px)',
            animation: 'float 4s ease-in-out infinite',
          }} />
          <div style={{
            position: 'relative', width: '100%', height: '100%',
            borderRadius: '40% 60% 55% 45%',
            overflow: 'hidden', border: '2px solid rgba(255,20,147,0.3)',
            animation: 'float 4s ease-in-out infinite',
          }}>
            <Image
              src="/images/notebooks.jpg"
              alt="Paulina Milá"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
          {/* Badge */}
          <div style={{
            position: 'absolute', bottom: 20, left: -20,
            background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,20,147,0.3)',
            borderRadius: 12, padding: '12px 20px',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--pink)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
            }}>🎵</div>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Último single</p>
              <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Notebooks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div style={{
        overflow: 'hidden', borderTop: '1px solid rgba(255,20,147,0.2)',
        borderBottom: '1px solid rgba(255,20,147,0.2)',
        padding: '14px 0', background: 'rgba(255,20,147,0.05)',
      }}>
        <div ref={tickerRef} style={{
          display: 'flex', whiteSpace: 'nowrap',
          animation: 'ticker 25s linear infinite',
        }}>
          {[tickerText, tickerText].map((t, i) => (
            <span key={i} style={{
              fontSize: '0.8rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--pink-light)',
              paddingRight: 60,
            }}>{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-img-wrap { display: none !important; }
        }
      `}</style>
    </section>
  )
}