'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const albums = [
  { title: 'Notebooks',              year: 2025, img: '/images/notebooks.jpg' },
  { title: 'Old Ballet',             year: 2023, img: '/images/ballet.jpg' },
  { title: 'Blind Date with Summer', year: 2022, img: '/images/blind.jpg' },
  { title: 'Hunting Time',           year: 2022, img: '/images/hunting.jpg' },
  { title: 'Esse Vento',             year: 2021, img: '/images/esse.jpg' },
  { title: 'Running Away for a While',year: 2021, img: '/images/running.jpg' },
]

const SPOTIFY = 'https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ'

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeria" style={{
      padding: 'clamp(80px, 10vw, 140px) 0',
      background: '#0a0a0a', overflow: 'hidden',
    }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{
              fontSize: '0.8rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'var(--pink)',
              marginBottom: 12, fontWeight: 500,
            }}>Discografía</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900, color: 'var(--white)',
            }}>Últimos Lanzamientos</h2>
          </div>
          <a href={SPOTIFY} target="_blank" rel="noopener noreferrer" style={{
            padding: '12px 28px', borderRadius: 50,
            border: '1px solid rgba(255,20,147,0.4)',
            color: 'var(--pink)', fontSize: '0.85rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--pink)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--pink)'
            }}
          >Ver todo en Spotify →</a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {albums.map((album, i) => (
            <a key={album.title} href={SPOTIFY} target="_blank" rel="noopener noreferrer"
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                position: 'relative', borderRadius: 16, overflow: 'hidden',
                aspectRatio: '1/1',
                border: hovered === i ? '1px solid rgba(255,20,147,0.6)' : '1px solid rgba(255,255,255,0.06)',
                transform: hovered === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s var(--transition)',
                boxShadow: hovered === i ? '0 20px 60px rgba(255,20,147,0.25)' : '0 4px 20px rgba(0,0,0,0.4)',
              }}>
                {/* Image */}
                <Image
                  src={album.img}
                  alt={album.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    filter: hovered === i ? 'brightness(0.5)' : 'brightness(0.7)',
                    transition: 'filter 0.4s ease',
                  }}
                />
                {/* Year badge */}
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  padding: '4px 12px', borderRadius: 50,
                  background: 'rgba(255,20,147,0.85)',
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                }}>SINGLE · {album.year}</div>

                {/* Info overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '60px 20px 20px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                  transform: hovered === i ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'transform 0.4s ease',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--white)', marginBottom: 8,
                  }}>{album.title}</h3>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    opacity: hovered === i ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}>
                    <span style={{
                      padding: '6px 14px', borderRadius: 50,
                      background: 'var(--pink)', fontSize: '0.75rem', fontWeight: 700,
                    }}>🎧 Escuchar en Spotify</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}