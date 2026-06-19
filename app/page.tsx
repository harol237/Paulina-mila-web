import Navbar  from '@/components/Navbar'
import Hero    from '@/components/Hero'
import About   from '@/components/About'
import Gallery from '@/components/Gallery'
import Videos  from '@/components/Videos'
import { Events }  from '@/components/Events'  // ← named export
import { Booking } from '@/components/Booking' // ← named export
import { Footer }  from '@/components/Footer'  // ← named export

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Videos />
        <Events />
        <Booking />
      </main>
      <Footer />
    </>
  )
}