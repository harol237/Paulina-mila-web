'use client';

import React, { useState } from 'react';

export default function Gallery() {
  const spotifyUrl = "https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const albums = [
    { id: 1, title: "Notebooks", type: "SINGLE • 2025", img: "/images/Notebooks.jpg" },
    { id: 2, title: "Old Ballet", type: "SINGLE • 2023", img: "/images/Old Ballet.jpg" },
    { id: 3, title: "Blind date with summer", type: "SINGLE • 2022", img: "/images/Blind date with summer.jpg" },
    { id: 4, title: "Hunting Time", type: "SINGLE • 2022", img: "/images/Hunting Time.jpg" },
    { id: 5, title: "Esse vento", type: "SINGLE • 2021", img: "/images/Esse vento.jpg" },
    { id: 6, title: "Running away for a while", type: "SINGLE • 2021", img: "/images/Running away for a while.jpg" },
  ];

  return (
    <section id="galeria" style={{
      padding: '120px 24px',
      backgroundColor: '#ffffff',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style>{`
        .album-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .album-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .album-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .album-title-text {
          font-size: 26px;
          font-weight: 900;
          color: #1A2639;
          margin: 20px 0 6px 0;
          text-transform: uppercase;
          letter-spacing: -1px;
          line-height: 1.1;
          font-family: "Arial Black", "Impact", sans-serif;
        }
      `}</style>

      {/* TITULO PRINCIPAL ALINEADO EXPENDED */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 60px auto', textAlign: 'left' }}>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF1493', letterSpacing: '3px', textTransform: 'uppercase' }}>
          ALL SINGLES
        </span>
        <h2 style={{
          fontSize: '56px',
          fontWeight: 900,
          color: '#1A2639',
          margin: '8px 0 0 0',
          fontFamily: '"Arial Black", sans-serif',
          letterSpacing: '-2px',
          textTransform: 'uppercase'
        }}>
          MUSIC <span style={{ color: '#87CEEB' }}>ALBUMS</span>
        </h2>
      </div>

      {/* CUADRÍCULA ESTILO CLON PREMIUM */}
      <div className="album-grid">
        {albums.map((album, index) => (
          <div key={album.id} style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* CONTENEDOR DE LA IMAGEN (CUADRADA PERFECTA 1:1) */}
            <a 
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: '100%',
                paddingTop: '100%', /* Truco para forzar aspecto 1:1 simétrico */
                backgroundColor: '#FFF0F5',
                borderRadius: '0px', /* SingerX usa esquinas totalmente rectas y limpias */
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                border: '1px solid #FFD1DC',
                boxShadow: hoveredIndex === index ? '0 20px 40px rgba(255,20,147,0.15)' : '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'box-shadow 0.4s ease',
                display: 'block'
              }}
            >
              {/* Imagen que escala en Hover */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0, bottom: 0, left: 0,
                backgroundImage: `url(${album.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: hoveredIndex === index ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }} />

              {/* Capa de color translúcida degradada */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(135deg, rgba(135,206,235,0.9) 0%, rgba(255,20,147,0.9) 100%)',
                opacity: hoveredIndex === index ? 1 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s ease'
              }}>
                <span style={{
                  backgroundColor: '#ffffff',
                  color: '#1A2639',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  LISTEN ON SPOTIFY 🎧
                </span>
              </div>
            </a>

            {/* CONTENIDOS DE TEXTO INFERIORES */}
            <h3 className="album-title-text">
              {album.title}
            </h3>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#FF1493', letterSpacing: '1px' }}>
              {album.type}
            </span>

          </div>
        ))}
      </div>
    </section>
  );
}