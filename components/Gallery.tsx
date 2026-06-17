'use client';

import React, { useState } from 'react';

export default function Gallery() {
  const spotifyUrl = "https://open.spotify.com/artist/1FDZt1SIbSNHkDimoKd1KH?si=CUAeNfE_TKqf-QDf6mOFRQ";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const albums = [
    { id: 1, title: "Notebooks", type: "SINGLE • 2025", img: "/images/Notebooks.jpg" },
    { id: 2, title: "Old Ballet", type: "SINGLE • 2023", img: "/images/Old%20Ballet.jpg" },
    { id: 3, title: "Blind date with summer", type: "SINGLE • 2022", img: "/images/Blind%20date%20with%20summer.jpg" },
    { id: 4, title: "Hunting Time", type: "SINGLE • 2022", img: "/images/Hunting%20Time.jpg" },
    { id: 5, title: "Esse vento", type: "SINGLE • 2021", img: "/images/Esse%20vento.jpg" },
    { id: 6, title: "Running away for a while", type: "SINGLE • 2021", img: "/images/Running%20away%20for%20a%20while.jpg" },
  ];

  return (
    <section id="galeria" style={{
      padding: '80px 20px',
      backgroundColor: '#ffffff',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <style>{`
        .album-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .album-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .album-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .album-card-img-wrap {
          width: 100%;
          position: relative;
          padding-top: 100%;
          overflow: hidden;
          background-color: #f7f7f7;
          border: 1px solid #eaeaea;
        }
        .album-card-img {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .album-card-img-wrap:hover .album-card-img {
          transform: scale(1.05);
        }
        .album-meta-title {
          font-family: "Arial Black", "Impact", sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: #1A2639;
          text-transform: uppercase;
          margin: 16px 0 4px 0;
          letter-spacing: -1px;
          line-height: 1.2;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto 40px auto' }}>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF1493', letterSpacing: '2px' }}>ALL SINGLES</span>
        <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#1A2639', margin: '5px 0 0 0', fontFamily: '"Arial Black", sans-serif' }}>
          MUSIC <span style={{ color: '#87CEEB' }}>ALBUMS</span>
        </h2>
      </div>

      <div className="album-grid">
        {albums.map((album, index) => (
          <div key={album.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <a 
              href={spotifyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="album-card-img-wrap"
            >
              <div 
                className="album-card-img" 
                style={{ backgroundImage: `url(${album.img})` }} 
              />
              
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(26, 38, 57, 0.2)',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ backgroundColor: '#fff', color: '#1a2639', padding: '10px 20px', borderRadius: '50px', fontSize: '11px', fontWeight: 'bold' }}>
                  LISTEN NOW 🎧
                </span>
              </div>
            </a>
            
            <h3 className="album-meta-title">{album.title}</h3>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF1493', letterSpacing: '1px' }}>{album.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}