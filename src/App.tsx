import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <main className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] selection:bg-[var(--text-accent)] selection:text-white">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
