'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Música',   href: '#galeria' },
  { label: 'Eventos',  href: '#eventos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      padding: '18px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,20,147,0.15)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#inicio" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
        fontWeight: 700,
        color: 'var(--white)',
        letterSpacing: '0.04em',
      }}>
        Paulina <span style={{ color: 'var(--pink)' }}>Milá</span>
      </a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: 36, listStyle: 'none',
        alignItems: 'center',
      }} className="nav-desktop">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--gray-light)',
              transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--pink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray-light)')}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href="https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ"
            target="_blank" rel="noopener noreferrer"
            style={{
              padding: '10px 22px', borderRadius: 50,
              background: 'var(--pink)', color: '#fff',
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', transition: 'transform 0.3s, box-shadow 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 24px rgba(255,20,147,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >▶ Escuchar</a>
        </li>
      </ul>

      {/* Burger */}
      <button onClick={() => setOpen(!open)} aria-label="Menú"
        style={{ display: 'none', flexDirection: 'column', gap: 5 }}
        className="nav-burger">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 26, height: 2,
            background: 'var(--white)', borderRadius: 2,
            transition: 'all 0.3s',
            transform: open
              ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
              : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
              : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, top: 68,
          background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 36, zIndex: 999,
          animation: 'fadeIn 0.3s ease',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close} style={{
              fontSize: '1.6rem', fontFamily: 'var(--font-display)',
              color: 'var(--white)', fontWeight: 700,
            }}>{l.label}</a>
          ))}
          <a href="https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ"
            target="_blank" rel="noopener noreferrer" onClick={close}
            style={{
              padding: '14px 36px', borderRadius: 50,
              background: 'var(--pink)', color: '#fff',
              fontSize: '1rem', fontWeight: 700,
            }}>▶ Escuchar en Spotify</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger   { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}