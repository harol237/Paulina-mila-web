'use client';

import React from 'react';

export default function About() {
  return (
    <section id="sobre-mi" style={{
      position: 'relative',
      padding: '100px 50px',
      backgroundColor: '#FFF5F7',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        
        {/* LADO IZQUIERDO: CUADRO FOTO CON MEDIDA MÁXIMA CONTROLADA */}
        <div style={{
          width: '100%',
          height: '500px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          border: '2px solid #FFD1DC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📸</div>
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#FF1493', margin: 0 }}>ARCHIVO REQUERIDO:</p>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', color: '#1A2639', marginTop: '4px' }}>public/images/sobre-mi.jpg</p>
        </div>

        {/* LADO DERECHO: TEXTO DE LA BIOGRAFÍA */}
        <div style={{ textAlign: 'left' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF1493', letterSpacing: '2px', textTransform: 'uppercase' }}>
            BIOGRAFÍA
          </span>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 900,
            color: '#1A2639',
            margin: '10px 0 25px 0',
            fontFamily: '"Arial Black", sans-serif',
            lineHeight: '1.05',
            textTransform: 'uppercase'
          }}>
            PASIÓN, COMPÁS Y VOZ: <br />
            <span style={{ color: '#87CEEB' }}>LA HISTORIA DE PAULINA</span>
          </h2>
          <p style={{ color: '#2C3E50', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
            Paulina Milá es una artista española cuya trayectoria única combina de forma magistral la disciplina de la danza con la sensibilidad de la música melódica. Tras años recorriendo escenarios como bailarina profesional, decidió proyectar toda su fuerza expresiva a través de su voz.
          </p>
          <p style={{ color: '#2C3E50', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
            Su pasado en el baile infunde a sus actuaciones musicales una presencia escénica arrolladora y un sentido del ritmo innato. Hoy, su propuesta musical fusiona raíces tradicionales con matices modernos, creando una experiencia íntima y elegante.
          </p>

          {/* CUADROS INFORMATIVOS LIMPIOS */}
          <div style={{ display: 'flex', gap: '40px', borderTop: '1px solid #FFD1DC', paddingTop: '20px' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#1A2639', fontWeight: 'bold' }}>ORIGEN</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>ESPAÑA</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#1A2639', fontWeight: 'bold' }}>ESTILO</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>FUSIÓN / ACÚSTICO</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}