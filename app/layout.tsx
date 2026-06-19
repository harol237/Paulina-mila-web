import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paulina Milá — Cantante',
  description: 'Cantante y exbailarina española. Indie / Folk. Escucha su música en Spotify.',
  openGraph: {
    title: 'Paulina Milá',
    description: 'Cantante y exbailarina española. Indie / Folk.',
    url: 'https://paulina-mila-web.vercel.app',
    siteName: 'Paulina Milá',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}