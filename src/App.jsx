import { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Loader         from './components/Loader/Loader.jsx';
import CustomCursor   from './components/CustomCursor/CustomCursor.jsx';
import Background     from './components/Background/Background.jsx';
import Navbar         from './components/Navbar/Navbar.jsx';
import Hero           from './components/Hero/Hero.jsx';
import About          from './components/About/About.jsx';
import Skills         from './components/Skills/Skills.jsx';
import Experience     from './components/Experience/Experience.jsx';
import Projects       from './components/Projects/Projects.jsx';
import Education      from './components/Education/Education.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Contact        from './components/Contact/Contact.jsx';
import Footer         from './components/Footer/Footer.jsx';

function PortfolioApp() {
  const [loaded, setLoaded] = useState(false);
  const observerRef         = useRef(null);
  const spotlightRef        = useRef(null);
  const spotlightRaf        = useRef(null);
  const targetPos           = useRef({ x: -1000, y: -1000 });
  const currentPos          = useRef({ x: -1000, y: -1000 });

  /* ── Scroll progress bar ── */
  useEffect(() => {
    if (!loaded) return;
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loaded]);

  /* ── Scroll reveal ── */
  useEffect(() => {
    if (!loaded) return;
    observerRef.current = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observerRef.current?.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [loaded]);

  /* ── Mouse spotlight — smooth lerp follow ── */
  useEffect(() => {
    if (!loaded) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = e => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const LERP = 0.06;
    function animateSpotlight() {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * LERP;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * LERP;
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${currentPos.current.x}px`;
        spotlightRef.current.style.top  = `${currentPos.current.y}px`;
      }
      spotlightRaf.current = requestAnimationFrame(animateSpotlight);
    }

    spotlightRaf.current = requestAnimationFrame(animateSpotlight);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(spotlightRaf.current);
    };
  }, [loaded]);

  return (
    <>
      <div
        className="scroll-progress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-hidden="true"
      />

      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        {/* Mouse-following spotlight */}
        <div
          ref={spotlightRef}
          className="mouse-spotlight"
          aria-hidden="true"
        />

        <CustomCursor />
        <Background />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
