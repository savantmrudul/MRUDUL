import { personal, summary } from '../../data/portfolioData';
import styles from './About.module.css';

const identityPillars = [
  { label: 'Cloud',         mono: 'AWS / VPC / IAM' },
  { label: 'DevOps',        mono: 'Docker · K8s · CI/CD' },
  { label: 'Full Stack',    mono: 'MERN · REST APIs' },
  { label: 'Data & Analytics', mono: 'MCA Specialization' },
];

const stats = [
  { value: '7.36', label: 'MCA CGPA',      suffix: '' },
  { value: '2',    label: 'Projects Built', suffix: '+' },
  { value: '20',   label: 'Technologies',   suffix: '+' },
  { value: '4',    label: 'Languages',      suffix: '' },
];

// keywords to highlight inside summary text
const highlights = [
  'Cloud DevOps', 'Full Stack Development', 'MERN Stack',
  'AWS', 'Docker', 'Kubernetes', 'React.js', 'Node.js',
  'CI/CD', 'Data Science', 'REST API',
];

function HighlightedSummary({ text }) {
  // Build a regex from keywords, sorted longest-first to avoid partial matches
  const escaped = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(re);

  return (
    <p className={styles.summary}>
      {parts.map((part, i) =>
        highlights.some(k => k.toLowerCase() === part.toLowerCase())
          ? <mark key={i} className={styles.keyword}>{part}</mark>
          : part
      )}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">

        {/* ── Section header ── */}
        <div className={`reveal ${styles.header}`}>
          <span className={styles.sectionNum}>01</span>
          <div>
            <p className="section-eyebrow">About Me</p>
            <h2 className="section-title">Engineering Identity</h2>
            <p className="section-subtitle">
              MCA graduate turned cloud & full-stack engineer — building scalable
              software one deployment at a time.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* ── LEFT: summary + languages ── */}
          <div className={`reveal-left ${styles.left}`}>
            <HighlightedSummary text={summary} />

            <div className={styles.langRow}>
              <span className={styles.langLabel}>
                <span className={styles.langLabelMono}>LANGUAGES /</span>
              </span>
              {personal.languages.map(lang => (
                <span key={lang} className={styles.langBadge}>{lang}</span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: identity pillars + stats ── */}
          <div className={`reveal-right ${styles.right}`}>

            {/* Identity pillars */}
            <div className={styles.pillars}>
              {identityPillars.map(({ label, mono }) => (
                <div key={label} className={styles.pillar}>
                  <div className={styles.pillarDot} />
                  <div>
                    <p className={styles.pillarLabel}>{label}</p>
                    <p className={styles.pillarMono}>{mono}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div className={styles.statsGrid}>
              {stats.map(({ value, label, suffix }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>
                    {value}<span className={styles.statSuffix}>{suffix}</span>
                  </span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
