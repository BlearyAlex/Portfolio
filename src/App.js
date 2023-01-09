import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/skills/Skills';
import Services from './components/MyServices/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

Aos.init();

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
