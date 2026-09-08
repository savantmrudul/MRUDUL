import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FiDownload, FiArrowDown, FiLinkedin } from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import styles from './Hero.module.css';

const floatingLabels = [
  { text: 'AWS',        angle: 18,  r: 1.12, speed: 13, color: 'orange' },
  { text: 'Docker',     angle: 72,  r: 1.24, speed: 17, color: 'blue'   },
  { text: 'Kubernetes', angle: 140, r: 1.13, speed: 21, color: 'blue'   },
  { text: 'React',      angle: 198, r: 1.20, speed: 15, color: 'cyan'   },
  { text: 'Node.js',    angle: 252, r: 1.10, speed: 19, color: 'green'  },
  { text: 'Python',     angle: 308, r: 1.18, speed: 14, color: 'yellow' },
  { text: 'Linux',      angle: 350, r: 1.07, speed: 18, color: 'violet' },
  { text: 'CI/CD',      angle: 112, r: 1.26, speed: 23, color: 'pink'   },
];

const words = ['Developer', 'Engineer', 'Innovator'];

export default function Hero() {
  const photoRef = useRef(null);
  const wrapRef  = useRef(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % words.length); setWordVisible(true); }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = e => {
      if (!wrapRef.current || !photoRef.current) return;
      const r  = wrapRef.current.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) / r.width;
      const dy = (e.clientY - (r.top  + r.height / 2)) / r.height;
      photoRef.current.style.transform = `translate(${dx * 12}px, ${dy * 12}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.heroVioletOrb} />
        <div className={styles.heroCyanOrb} />
        <div className={styles.heroPinkOrb} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* ══ TEXT ══ */}
        <div className={styles.textCol}>

          <div className={`${styles.eyebrow} ${styles.anim1}`}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>PORTFOLIO · 2025</span>
          </div>

          <p className={`${styles.greeting} ${styles.anim2}`}>Hi, I'm</p>

          <h1 className={`${styles.name} ${styles.anim3}`}>
            <span className={styles.nameWhite}>Mrudul</span>
            <br />
            <span className={`${styles.nameGrad} gradient-text`}>Milind</span>
            <span className={styles.nameWhite}> Savant</span>
          </h1>

          <p className={`${styles.tagline} ${styles.anim4}`}>
            MCA Graduate &amp; Cloud{' '}
            <span className={`${styles.rotWord} ${wordVisible ? styles.wordIn : styles.wordOut}`}>
              {words[wordIdx]}
            </span>
          </p>

          <p className={`${styles.subline} ${styles.anim5}`}>{personal.heroSubline}</p>

          <div className={`${styles.actions} ${styles.anim6}`}>
            <Link to="projects" smooth duration={600} offset={-72}>
              <button className={`btn-primary ${styles.ctaMain}`}>
                View My Work <span className={styles.arrow}>→</span>
              </button>
            </Link>
            <a href={personal.resumePdf} download className={`btn-outline ${styles.ctaAlt}`}
              aria-label="Download Resume PDF">
              <FiDownload size={15} /> Download Resume
            </a>
          </div>

          <div className={`${styles.socials} ${styles.anim7}`}>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <span className={styles.socialDivider} />
            <span className={styles.socialEmail}>{personal.email}</span>
          </div>
        </div>

        {/* ══ PHOTO ══ */}
        <div className={styles.photoCol} ref={wrapRef}>
          {/* Orbits */}
          <div className={styles.orbit1} aria-hidden="true" />
          <div className={styles.orbit2} aria-hidden="true" />

          {/* Floating labels */}
          {floatingLabels.map((lbl, i) => {
            const rad = (lbl.angle * Math.PI) / 180;
            const r   = 152 * lbl.r;
            return (
              <div key={lbl.text} className={`${styles.floatChip} ${styles[`chip_${lbl.color}`]}`}
                style={{
                  left: `calc(50% + ${Math.cos(rad) * r}px)`,
                  top:  `calc(50% + ${Math.sin(rad) * r}px)`,
                  animationDuration: `${lbl.speed}s`,
                  animationDelay: `${i * -2.2}s`,
                }}
                aria-hidden="true">
                {lbl.text}
              </div>
            );
          })}

          {/* Photo glow */}
          <div className={styles.photoGlow} aria-hidden="true" />

          {/* Photo ring */}
          <div className={styles.photoRing} ref={photoRef}>
            <img
              src={personal.photo}
              alt="Mrudul Milind Savant — profile photo"
              className={styles.photo}
              loading="eager"
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
                e.currentTarget.closest(`.${styles.photoRing}`)?.classList.add(styles.photoFallback);
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link to="about" smooth duration={600} offset={-72} className={styles.scrollBtn}
        aria-label="Scroll to About">
        <FiArrowDown size={16} />
      </Link>
    </section>
  );
}
