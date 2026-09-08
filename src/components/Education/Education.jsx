import { education } from '../../data/portfolioData';
import styles from './Education.module.css';

const nodeClasses = [styles.nodeMCA, styles.nodeBCA, styles.nodePUC, styles.nodeSSLC];

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">A foundation built progressively — from school to post-graduation.</p>
        </div>

        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={`reveal ${styles.entry}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.spine}>
                <div className={`${styles.node} ${nodeClasses[i] || ''}`}>
                  <span className={styles.nodeIcon}>{edu.icon}</span>
                </div>
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.card}>
                <div className={styles.cardMain}>
                  <div className={styles.cardLeft}>
                    <span className={styles.entryNum}>0{i + 1}</span>
                    <div>
                      <h3 className={styles.degree}>{edu.degree}</h3>
                      <p className={styles.institution}>
                        {edu.institution}
                        <span className={styles.location}> · {edu.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.grade}>
                    <span className={styles.gradeValue}>{edu.grade}</span>
                    <span className={styles.gradeLabel}>Grade</span>
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
