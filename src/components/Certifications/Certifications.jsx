import { certifications } from '../../data/portfolioData';
import styles from './Certifications.module.css';

const certMeta = [
  { accentLine: styles.accentLinePython },
  { accentLine: styles.accentLineDevOps },
];

export default function Certifications() {
  return (
    <section id="certifications" className={`section ${styles.certs}`}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Certifications</p>
          <h2 className="section-title">Verified Credentials</h2>
          <p className="section-subtitle">Formal certifications that validate hands-on technical knowledge.</p>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className={`reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.inner}>
                <div className={styles.shine} aria-hidden="true" />
                <div className={`${styles.accentLine} ${certMeta[i]?.accentLine || ''}`} aria-hidden="true" />

                <div className={styles.badge} aria-hidden="true">
                  <span className={styles.badgeIcon}>{cert.icon}</span>
                  <div className={styles.badgeRing} />
                </div>

                <div className={styles.content}>
                  <p className={styles.certLabel}>Certification</p>
                  <h3 className={styles.certName}>{cert.name}</h3>
                  <p className={styles.issuer}>{cert.issuer}</p>
                </div>

                <div className={styles.verified}>
                  <span className={styles.verifiedDot} />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
