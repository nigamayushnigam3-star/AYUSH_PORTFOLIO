import './index.css';
import Aurora from './components/Aurora';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Aurora />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
