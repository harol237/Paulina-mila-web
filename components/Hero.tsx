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
      padding: '120px 24px 80px 24px',
      /* CAMBIADO AQUÍ PARA PERMITIR EL SCROLL DOWN BELLOW */
      overflow: 'visible', 
      boxSizing: 'border-box'
    }}>
      {/* Inyección de estilos CSS nativos para manejar el diseño móvil (Responsivo) */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          width: '100%';
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        .hero-title {
          font-size: calc(2.2rem + 3vw);
          font-weight: 900;
          line-height: 0.95;
          text-transform: uppercase;
          color: #1A2639;
          margin: 0 0 25px 0;
          font-family: "Arial Black", "Impact", sans-serif;
          letter-spacing: -2px;
        }
        .hero-image-container {
          width: 100%;
          height: 400px;
        }
        .social-sidebar {
          display: none;
        }

        /* Cambios automáticos cuando la pantalla es grande (Ordenador) */
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 50px;
            padding: 0 26px;
          }
          .hero-title {
            font-size: 85px;
            letter-spacing: -3px;
          }
          .hero-image-container {
            height: 520px;
          }
          .social-sidebar {
            display: flex;
          }
        }
      `}</style>

      <div className="hero-grid">
        
        {/* TEXTO IZQUIERDO (O ARRIBA EN MÓVIL) */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF1493', marginBottom: '12px', letterSpacing: '3px' }}>
            CANTANTE Y EXBAILARINA ESPAÑOLA
          </span>
          <h1 className="hero-title">
            DISCOVER THE SOUND <br />
            OF <span style={{ color: '#FF1493' }}>PAULINA MILÁ</span>
          </h1>
          <p style={{ color: '#2C3E50', fontSize: '16px', lineHeight: '1.6', margin: '0 0 35px 0', maxWidth: '580px', fontFamily: 'sans-serif' }}>
            Experience the soulful melodies and heartfelt lyrics of Paulina Milá, where every note tells a story, perfectly blending her classical dance training with a brilliant vocal performance.
          </p>

          {/* BOTONES ADAPTADORES */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="#videos" 
              onMouseEnter={() => setHoveredBtn('music')}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                backgroundColor: '#FF1493', 
                color: '#ffffff', 
                padding: '14px 28px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '12px', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                transform: hoveredBtn === 'music' ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
                boxShadow: hoveredBtn === 'music' ? '0 8px 25px rgba(255,20,147,0.5)' : '0 4px 15px rgba(255,20,147,0.2)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span style={{ backgroundColor: '#ffffff', color: '#FF1493', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCentert: 'center', fontSize: '9px' }}>▶</span>
              LISTEN OUR MUSIC
            </a>

            <a 
              href="#spotify" 
              onMouseEnter={() => setHoveredBtn('spotify')}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                backgroundColor: hoveredBtn === 'spotify' ? '#1A2639' : 'transparent', 
                color: hoveredBtn === 'spotify' ? '#ffffff' : '#1A2639', 
                padding: '14px 28px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '12px', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                border: '2px solid #1A2639',
                transform: hoveredBtn === 'spotify' ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
                boxShadow: hoveredBtn === 'spotify' ? '0 8px 20px rgba(26,38,57,0.2)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              LISTEN ON SPOTIFY 🎧
            </a>
          </div>
        </div>

        {/* CONTENEDOR FOTO DERECHA (O ABAJO EN MÓVIL) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="hero-image-container" style={{
            backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)', borderRadius: '24px', border: '4px solid #ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', textAlign: 'center', justifyContent: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>👩‍🎤</div>
            <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 800, color: '#1A2639' }}>FOTO DE PAULINA (PNG)</h3>
            <p style={{ fontSize: '11px', color: '#FF1493', fontFamily: 'monospace', margin: '6px 0' }}>public/images/hero-paulina.png</p>
          </div>
        </div>
      </div>

      {/* REDES SOCIALES (SE OCULTAN EN MÓVIL AUTOMÁTICAMENTE) */}
      <div className="social-sidebar" style={{
        position: 'absolute', right: '25px', top: '50%', transform: 'translateY(-50%)', flexDirection: 'column', gap: '20px', backgroundColor: 'rgba(255,255,255,0.85)', padding: '20px 12px', borderRadius: '50px', border: '1px solid #FFD1DC', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', zIndex: 90
      }}>
        <a href="#" style={{ textDecoration: 'none', color: '#1A2639', fontWeight: 'bold' }}>𝅘𝅥𝅮</a>
        <a href="#" style={{ textDecoration: 'none', color: '#1A2639', fontWeight: 'bold' }}>📷</a>
        <a href="#" style={{ textDecoration: 'none', color: '#1A2639', fontWeight: 'bold' }}>▶</a>
        <a href="#" style={{ textDecoration: 'none', color: '#1A2639', fontWeight: 'bold' }}>🎧</a>
      </div>
    </section>
  );
}