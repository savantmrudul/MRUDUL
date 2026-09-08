import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About',          to: 'about' },
  { label: 'Skills',         to: 'skills' },
  { label: 'Experience',     to: 'experience' },
  { label: 'Projects',       to: 'projects' },
  { label: 'Education',      to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact',        to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact,  setCompact]  = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setCompact(y > 140 && y > lastY);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={[styles.navbar, scrolled ? styles.scrolled : '', compact ? styles.compact : ''].join(' ')}>
        <div className={`container ${styles.inner}`}>

          {/* Logo */}
          <Link to="hero" smooth duration={600} className={styles.logo} onClick={close} tabIndex={0}>
            <span className={styles.logoMark}>M</span>
            <span className={styles.logoText}>rudul<span className={styles.logoDot}>.</span></span>
          </Link>

          {/* Status */}
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span className={styles.statusLabel}>Available for opportunities</span>
          </div>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} smooth duration={600} offset={-72}
                spy activeClass={styles.active} className={styles.navLink}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className={styles.controls}>
            <ThemeToggle />
            <a href={personal.resumePdf} download className={`btn-outline ${styles.cvBtn}`} aria-label="Download Resume">
              <FiDownload size={14} /> Resume
            </a>
          </div>

          {/* Hamburger */}
          <button className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}>
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`} onClick={close} aria-hidden="true" />

      {/* Mobile drawer */}
      <aside className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerBrand}>MRUDUL.SYS</span>
          <div className={styles.drawerHeaderRight}>
            <ThemeToggle />
            <button className={styles.drawerClose} onClick={close} aria-label="Close menu">
              <FiX size={20} />
            </button>
          </div>
        </div>

        <nav>
          {navLinks.map(({ label, to }, i) => (
            <Link key={to} to={to} smooth duration={600} offset={-72}
              spy activeClass={styles.drawerActive} className={styles.drawerLink}
              onClick={close} style={{ transitionDelay: menuOpen ? `${i * 0.04}s` : '0s' }}>
              <span className={styles.drawerNum}>0{i + 1}</span>
              {label}
            </Link>
          ))}
        </nav>

        <a href={personal.resumePdf} download className={`btn-primary ${styles.drawerCv}`} onClick={close}>
          <FiDownload size={15} /> Download Resume
        </a>
      </aside>
    </>
  );
}
