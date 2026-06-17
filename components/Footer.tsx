'use client';

import React from 'react';

export default function Footer() {
  return (
    <div 
      className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between h-16 border-t overflow-hidden"
      style={{ 
        backgroundColor: '#FF1493', /* Rosa intenso súper vivo */
        borderColor: '#FF69B4',
        boxShadow: '0 -4px 20px rgba(255, 20, 147, 0.2)'
      }}
    >
      {/* SECCIÓN IZQUIERDA: DISCO GIRATORIO Y CANCIÓN */}
      <div className="flex items-center gap-3 px-6 bg-black/10 h-full z-10 border-r border-white/10">
        <div 
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-lg shadow-inner"
          style={{ animation: 'spin 4s linear infinite' }}
        >
          💿
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-white text-xs font-black uppercase tracking-wider m-0 leading-none">En Reproducción</p>
          <p className="text-pink-100 text-[10px] font-medium uppercase tracking-tight m-0 mt-1">Ecos de compás</p>
        </div>
      </div>

      {/* SECCIÓN CENTRAL: TEXTO INFINITO EN MOVIMIENTO (MARQUEE) */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        {/* Inyectamos estilos CSS nativos para la animación infinita en bucle */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .marquee-content {
            display: flex;
            white-space: nowrap;
            animation: marquee 25s linear infinite;
          }
        `}</style>
        
        <div className="marquee-content gap-12 text-white font-black uppercase text-xs tracking-[0.2em]">
          <span>• REFLEJOS DE MEDIANOCHE • PAULINA MILÁ EN CONCIERTO • NUEVO ÁLBUM DISPONIBLE • ONDAS DE EMOCIÓN </span>
          <span>• REFLEJOS DE MEDIANOCHE • PAULINA MILÁ EN CONCIERTO • NUEVO ÁLBUM DISPONIBLE • ONDAS DE EMOCIÓN </span>
          <span>• REFLEJOS DE MEDIANOCHE • PAULINA MILÁ EN CONCIERTO • NUEVO ÁLBUM DISPONIBLE • ONDAS DE EMOCIÓN </span>
          <span>• REFLEJOS DE MEDIANOCHE • PAULINA MILÁ EN CONCIERTO • NUEVO ÁLBUM DISPONIBLE • ONDAS DE EMOCIÓN </span>
        </div>
      </div>

      {/* SECCIÓN DERECHA: BOTÓN FIJO COMPRAR COMPATIBLE CON TU DISEÑO */}
      <div className="px-6 h-full flex items-center bg-white z-10 shadow-2xl">
        <a 
          href="#reservas" 
          className="px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest text-white transition-transform hover:scale-105"
          style={{ backgroundColor: '#1A2639' }}
        >
          Reservar Ticket
        </a>
      </div>
    </div>
  );
}