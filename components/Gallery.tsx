'use client';

import React, { useState } from 'react';

export default function Gallery() {
  const spotifyUrl = "https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const albums = [
    { id: 1, title: "Notebooks", type: "SINGLE • 2025", img: "/images/notebooks.jpg" },
    { id: 2, title: "Old Ballet", type: "SINGLE • 2023", img: "/images/ballet.jpg" },
    { id: 3, title: "Blind date with summer", type: "SINGLE • 2022", img: "/images/blind.jpg" },
    { id: 4, title: "Hunting Time", type: "SINGLE • 2022", img: "/images/hunting.jpg" },
    { id: 5, title: "Esse vento", type: "SINGLE • 2021", img: "/images/vento.jpg" },
    { id: 6, title: "Running away for a while", type: "SINGLE • 2021", img: "/images/running.jpg" },
  ];

  return (
    <section id="galeria" style={{
      padding: '120px 24px',
      backgroundColor: '#ffffff',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* CSS Emulado Avanzado: Clonación de Comportamiento Webflow */}
      <style>{`
        .wf-album-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px 32px;
          max-width: 1240px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .wf-album-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .wf-album-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .wf-image-wrapper {
          width: 100%;
          padding-top: 100%; /* Cuadrado Perfecto de Portada */
          position: relative;
          overflow: hidden;
          background-color: #f9f9f9;
          cursor: pointer;
        }
        .wf-bg-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
        }
        /* Animación Webflow Zoom-out/in de Precisión */
        .wf-image-wrapper:hover .wf-bg-image {
          transform: scale(1.08);
        }
        /* Capa superior interactiva */
        .wf-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(191,239,255,0.92) 0%, rgba(255,20,147,0.92) 100%);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .wf-image-wrapper:hover .wf-overlay {
          opacity: 1;
        }
        /* Tipografías Webflow Estilo SingerX (Masivas y compactas) */
        .wf-heading-sub {
          font-family: system-ui, sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #FF1493;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .wf-heading-main {
          font-family: "Arial Black", "Impact", sans-serif;
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 900;
          color: #1A2639;
          text-transform: uppercase;
          letter-spacing: -2px;
          line-height: 0.95;
          margin: 0;
        }
        .wf-card-title {
          font-family: "Arial Black", "Impact", sans-serif;
          font-size: 26px;
          font-weight: 900;
          color: #1A2639;
          text-transform: uppercase;
          margin: 22px 0 4px 0;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .wf-card-meta {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #FF1493;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
      `}</style>

      {/* CABECERA EXACTA */}
      <div style={{ maxWidth: '1240px', margin: '0 auto 64px auto', padding: '0 10px' }}>
        <span className="wf-heading-sub">ALL SINGLES</span>
        <h2 className="wf-heading-main">
          MUSIC <span style={{ color: '#87CEEB' }}>ALBUMS</span>
        </h2>
      </div>

      {/* CUADRÍCULA ESTILO WEBFLOW */}
      <div className="wf-album-grid">
        {albums.map((album, index) => (
          <div key={album.id} style={{ display: 'flex', flexDirection: 'column' }}>
            
            <a 
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wf-image-wrapper"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen de fondo limpia */}
              <div 
                className="wf-bg-image" 
                style={{ backgroundImage: `url(${album.img})` }} 
              />

              {/* Capa Transparente con Botón Flotante */}
              <div className="wf-overlay">
                <span style={{
                  backgroundColor: '#ffffff',
                  color: '#1A2639',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontWeight: 800,
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
                }}>
                  LISTEN ON SPOTIFY 🎧
                </span>
              </div>
            </a>

            {/* METADATOS INFERIORES */}
            <h3 className="wf-card-title">{album.title}</h3>
            <span className="wf-card-meta">{album.type}</span>

          </div>
        ))}
      </div>
    </section>
  );
}