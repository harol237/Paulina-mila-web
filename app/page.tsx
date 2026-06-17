import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Videos from '../components/Videos';
import Events from '../components/Events';
import Booking from '../components/Booking';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#FFF0F5',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Videos />
      <Events />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}