import { useCallback } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personal } from '../../data/portfolioData';
import styles from './Footer.module.css';

const footerLinks = ['about','skills','experience','projects','education','certifications','contact'];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <span className={styles.brandMark}>M</span>
            <span className={styles.brandName}>Mrudul<span>.</span></span>
          </div>
          <p className={styles.brandRole}>Cloud DevOps &amp; Full Stack Developer</p>
          <p className={styles.brandMono}>MCA Graduate · Londa, Belgaum, KA</p>
          <div className={styles.brandStatus}>
            <span className={styles.statusDot} />
            Available for opportunities
          </div>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          {footerLinks.map(to => (
            <Link key={to} to={to} smooth duration={600} offset={-72} className={styles.navLink}>
              {to.charAt(0).toUpperCase() + to.slice(1)}
            </Link>
          ))}
        </nav>

        <div className={styles.socials}>
          <a href={`mailto:${personal.email}`} className={styles.socialBtn} aria-label="Email">
            <FiMail size={17} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className={styles.socialBtn} aria-label="LinkedIn">
            <FiLinkedin size={17} />
          </a>
          {personal.github
            ? <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className={styles.socialBtn} aria-label="GitHub"><FiGithub size={17} /></a>
            : <span className={styles.socialBtnDisabled} title="GitHub coming soon"><FiGithub size={17} /></span>
          }
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>
          <span className={styles.copyMono}>© {year}</span> Mrudul Milind Savant · Built with React.js
        </p>
        <button className={styles.backTop} onClick={scrollTop} aria-label="Back to top">
          <FiArrowUp size={14} /> Top
        </button>
      </div>
    </footer>
  );
}
