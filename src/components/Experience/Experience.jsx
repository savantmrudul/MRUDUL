import { experience } from '../../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">

        <div className="reveal">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            Hands-on training and self-driven learning in cloud infrastructure and DevOps.
          </p>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div key={i} className={`reveal ${styles.entry}`} style={{ transitionDelay: `${i * 0.1}s` }}>

              {/* Timeline spine */}
              <div className={styles.spine}>
                <div className={styles.nodePulse} />
                <div className={styles.node} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={styles.card}>

                {/* Card top */}
                <div className={styles.cardTop}>
                  <div className={styles.roleWrap}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.meta}>
                      <span className={styles.metaType}>{exp.type}</span>
                      <span className={styles.metaSep}>·</span>
                      <span className={styles.metaPeriod}>{exp.period}</span>
                      <span className={styles.activeBadge}>
                        <span className={styles.activeDot} />
                        Active
                      </span>
                    </div>
                  </div>
                  <span className={styles.entryNum}>0{i + 1}</span>
                </div>

                {/* Bullets */}
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className={`${styles.bullet} reveal`}
                      style={{ transitionDelay: `${0.15 + j * 0.04}s` }}
                    >
                      <span className={styles.bulletArrow}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech row */}
                <div className={styles.techRow}>
                  <span className={styles.techRowLabel}>STACK</span>
                  <div className={styles.techTags}>
                    {exp.technologies.map(t => (
                      <span key={t} className={`tech-tag ${styles.techTag}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
