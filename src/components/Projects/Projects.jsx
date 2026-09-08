import { FiGithub } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

function HomzyPreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.prevGrid} />
      <div className={styles.homzySearch}>
        <span className={styles.homzySearchIcon}>⌕</span>
        <span className={styles.homzySearchText}>Search properties...</span>
      </div>
      <div className={styles.homzyCards}>
        {[1,2,3].map(n => (
          <div key={n} className={styles.homzyCard}>
            <div className={styles.homzyImg} style={{ opacity: 0.3 + n * 0.12 }} />
            <div className={styles.homzyLines}>
              <div className={styles.homzyLine} style={{ width: `${55 + n * 12}%` }} />
              <div className={styles.homzyLine} style={{ width: `${38 + n * 8}%`, opacity: 0.5 }} />
            </div>
            <div className={styles.homzyPrice} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PetHorizonPreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.prevGrid} />
      <div className={styles.petNav}>
        <div className={styles.petLogo} />
        <div className={styles.petNavLinks}>
          {[1,2,3].map(n => <div key={n} className={styles.petNavLink} />)}
        </div>
      </div>
      <div className={styles.petCards}>
        {[1,2,3,4].map(n => (
          <div key={n} className={styles.petCard}>
            <div className={styles.petAvatar} style={{ opacity: 0.28 + n * 0.08 }} />
            <div className={styles.petLine} />
            <div className={styles.petLine} style={{ width: '55%', opacity: 0.5 }} />
            <div className={styles.petBadge} />
          </div>
        ))}
      </div>
    </div>
  );
}

const projectMeta = {
  Homzy:          { cardCls: styles.cardHomzy,       visualCls: styles.visualHomzy,       glowCls: styles.visualGlowHomzy,       Preview: HomzyPreview },
  'Pet Horizon':  { cardCls: styles.cardPetHorizon,  visualCls: styles.visualPetHorizon,  glowCls: styles.visualGlowPetHorizon,  Preview: PetHorizonPreview },
};

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Built From Scratch</h2>
          <p className="section-subtitle">End-to-end applications designed, developed, and shipped solo.</p>
        </div>

        <div className={styles.list}>
          {projects.map((proj, i) => {
            const m = projectMeta[proj.title] || {};
            const Preview = m.Preview;
            return (
              <article
                key={proj.title}
                className={`reveal ${styles.card} ${m.cardCls || ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={styles.content}>
                  <div className={styles.contentTop}>
                    <span className={styles.projNum}>0{i + 1}</span>
                    <span className={styles.projContext}>{proj.context}</span>
                  </div>
                  <h3 className={styles.projTitle}>{proj.title}</h3>
                  <p className={styles.projSub}>{proj.subtitle}</p>
                  <p className={styles.projDesc}>{proj.description}</p>

                  <ul className={styles.features}>
                    {proj.features.map((f, j) => (
                      <li key={j} className={styles.feature}>
                        <span className={styles.featureArrow}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.bottom}>
                    <div className={styles.stack}>
                      {proj.stack.map(t => (
                        <span key={t} className={`tech-tag ${styles.stackTag}`}>{t}</span>
                      ))}
                    </div>
                    <div className={styles.links}>
                      {proj.github
                        ? <a href={proj.github} target="_blank" rel="noopener noreferrer"
                            className={styles.linkBtn} aria-label={`${proj.title} GitHub`}>
                            <FiGithub size={14} /> GitHub
                          </a>
                        : <span className={styles.linkDisabled} title="GitHub link coming soon">
                            <FiGithub size={14} /> Coming soon
                          </span>
                      }
                    </div>
                  </div>
                </div>

                <div className={`${styles.visual} ${m.visualCls || ''}`}>
                  {Preview && <Preview />}
                  <div className={`${styles.visualGlow} ${m.glowCls || ''}`} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
