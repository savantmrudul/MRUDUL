import { skills } from '../../data/portfolioData';
import styles from './Skills.module.css';

const categoryMeta = {
  'Programming':    { num: '01', icon: '</>', desc: 'Core languages',    cls: styles.catProgramming, tagCls: styles.tagCyan   },
  'Frontend':       { num: '02', icon: '◻',   desc: 'UI & interaction',  cls: styles.catFrontend,    tagCls: styles.tagBlue   },
  'Backend':        { num: '03', icon: '⚙',   desc: 'Server & APIs',     cls: styles.catBackend,     tagCls: styles.tagViolet },
  'Cloud & DevOps': { num: '04', icon: '☁',   desc: 'Infra & pipelines', cls: styles.catCloud,       tagCls: styles.tagCloud, featured: true },
};

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Technical Stack</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">Tools and platforms I use to build, deploy, and scale software.</p>
        </div>

        <div className={styles.grid}>
          {skills.map(({ category, items }, i) => {
            const m = categoryMeta[category] || {};
            return (
              <div
                key={category}
                className={`reveal ${styles.card} ${m.cls || ''} ${m.featured ? styles.cardFeatured : ''}`}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <div className={styles.cardHead}>
                  <div className={styles.cardLeft}>
                    <span className={styles.cardNum}>{m.num}</span>
                    <span className={styles.cardIcon} aria-hidden="true">{m.icon}</span>
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{category}</h3>
                    <p className={styles.cardDesc}>{m.desc}</p>
                  </div>
                  <span className={styles.cardCount}>{items.length}</span>
                </div>

                <div className={styles.sep} />

                <div className={styles.tags}>
                  {items.map(item => (
                    <span key={item} className={`${styles.tag} ${m.tagCls || ''}`}>{item}</span>
                  ))}
                </div>

                {m.featured && <div className={styles.featuredLine} aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
