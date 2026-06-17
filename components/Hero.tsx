'use client';

import React, { useState } from 'react';

export default function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #BFEFFF 0%, #FFF0F5 45%, #FFB6C1 100%)',
      padding: '120px 20px 80px 20px',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: 38px;
          font-weight: 900;
          line-height: 1.0;
          text-transform: uppercase;
          color: #1A2639;
          margin: 0 0 20px 0;
          font-family: "Arial Black", sans-serif;
          letter-spacing: -1px;
          word-break: break-word;
        }
        .hero-image-container {
          width: 100%;
          height: 300px;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 50px;
          }
          .hero-title {
            font-size: 80px;
            letter-spacing: -3px;
          }
          .hero-image-container {
            height: 500px;
          }
        }
      `}</style>

      <div className="hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF1493', marginBottom: '12px', letterSpacing: '2px' }}>
            CANTANTE Y EXBAILARINA ESPAÑOLA
          </span>
          <h1 className="hero-title">
            DISCOVER THE SOUND <br />
            OF <span style={{ color: '#FF1493' }}>PAULINA MILÁ</span>
          </h1>
          <p style={{ color: '#2C3E50', fontSize: '15px', lineHeight: '1.6', margin: '0 0 30px 0', maxWidth: '550px' }}>
            Experience the soulful melodies and heartfelt lyrics of Paulina Milá, where every note tells a story, perfectly blending her classical dance training with a vocal performance.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#videos" style={{ backgroundColor: '#FF1493', color: '#fff', padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              LISTEN OUR MUSIC
            </a>
            <a href="#spotify" style={{ border: '2px solid #1A2639', color: '#1A2639', padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              LISTEN ON SPOTIFY 🎧
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="hero-image-container" style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ fontSize: '40px' }}>👩‍🎤</div>
            <h3 style={{ margin: '10px 0 0 0', fontSize: '16px', color: '#1A2639' }}>FOTO DE PAULINA</h3>
          </div>
        </div>
      </div>
    </section>
  );
}