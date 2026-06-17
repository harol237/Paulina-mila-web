'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '90px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #FFD1DC',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style>{`
        .nav-links {
          display: none;
        }
        @media (min-width: 1024px) {
          .nav-links {
            display: flex;
          }
        }
      `}</style>

      {/* LOGO */}
      <a href="#" style={{ textDecoration: 'none', color: '#1A2639', fontSize: '20px', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' }}>
        SINGER<span style={{ color: '#FF1493' }}>X</span> MILÁ
      </a>

      {/* MENÚ CENTRAL (SÓLO VISIBLE EN ESCRITORIO) */}
      <div className="nav-links" style={{ gap: '35px', alignItems: 'center', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
        <div style={{ position: 'relative', height: '90px', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setOpenMenu('home')} onMouseLeave={() => setOpenMenu(null)}>
          <span style={{ color: openMenu === 'home' ? '#FF1493' : '#1A2639', cursor: 'pointer', transition: 'color 0.3s' }}>HOME ▾</span>
          {openMenu === 'home' && (
            <div style={{ position: 'absolute', top: '85px', left: 0, backgroundColor: '#ffffff', border: '1px solid #FFD1DC', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', width: '220px', boxShadow: '0px 12px 30px rgba(255,182,193,0.25)' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#1A2639', fontSize: '12px' }}>HOME (PREDETERMINADO)</a>
              <a href="#" style={{ textDecoration: 'none', color: '#555', fontSize: '12px' }}>HOME (FONDO DE VÍDEO)</a>
            </div>
          )}
        </div>

        <div style={{ position: 'relative', height: '90px', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setOpenMenu('pages')} onMouseLeave={() => setOpenMenu(null)}>
          <span style={{ color: openMenu === 'pages' ? '#FF1493' : '#1A2639', cursor: 'pointer', transition: 'color 0.3s' }}>PAGES ▾</span>
          {openMenu === 'pages' && (
            <div style={{ position: 'absolute', top: '85px', left: '-150px', backgroundColor: '#ffffff', border: '1px solid #FFD1DC', borderRadius: '12px', padding: '25px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', width: '450px', boxShadow: '0px 15px 35px rgba(255,182,193,0.3)' }}>
              <div>
                <h4 style={{ color: '#FF1493', margin: '0 0 10px 0', fontSize: '11px', fontWeight: 800 }}>SECCIONES</h4>
                <a href="#sobre-mi" style={{ display: 'block', textDecoration: 'none', color: '#555', padding: '6px 0', fontSize: '12px', fontWeight: 500 }}>SOBRE MÍ</a>
                <a href="#galeria" style={{ display: 'block', textDecoration: 'none', color: '#555', padding: '6px 0', fontSize: '12px', fontWeight: 500 }}>GALERÍA</a>
              </div>
              <div>
                <h4 style={{ color: '#87CEEB', margin: '0 0 10px 0', fontSize: '11px', fontWeight: 800 }}>MEDIA</h4>
                <a href="#videos" style={{ display: 'block', textDecoration: 'none', color: '#555', padding: '6px 0', fontSize: '12px', fontWeight: 500 }}>VÍDEOS</a>
                <a href="#contacto" style={{ display: 'block', textDecoration: 'none', color: '#555', padding: '6px 0', fontSize: '12px', fontWeight: 500 }}>CONTACTO</a>
              </div>
            </div>
          )}
        </div>

        <a href="#galeria" style={{ textDecoration: 'none', color: '#1A2639' }}>ALBUM</a>
        <a href="#eventos" style={{ textDecoration: 'none', color: '#1A2639' }}>EVENTS</a>
        <a href="#contacto" style={{ textDecoration: 'none', color: '#1A2639' }}>CONTACT US</a>
      </div>

      {/* BOTÓN LISTEN NOW */}
      <a 
        href="#videos" 
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
        style={{
          textDecoration: 'none',
          backgroundColor: isBtnHovered ? '#FF1493' : '#1A2639',
          color: '#ffffff',
          padding: '10px 20px',
          borderRadius: '50px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease'
        }}
      >
        LISTEN NOW <span style={{ backgroundColor: isBtnHovered ? '#1A2639' : '#FF1493', width: '18px', height: '18px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>▶</span>
      </a>
    </nav>
  );
}