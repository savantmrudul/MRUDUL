import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 500);
    let raf, start = null;
    const duration = 1100;

    function step(ts) {
      if (!start) start = ts;
      const pct = Math.min(100, Math.round(((ts - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(step);
      } else {
        setTimeout(() => { setPhase(2); setTimeout(onComplete, 480); }, 280);
      }
    }
    const t1 = setTimeout(() => { raf = requestAnimationFrame(step); }, 500);

    return () => { clearTimeout(t0); clearTimeout(t1); cancelAnimationFrame(raf); };
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${phase === 2 ? styles.exit : ''}`} aria-hidden="true">
      <div className={styles.loaderOrb} />
      <div className={styles.grid} />
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoText}>MRUDUL.SYS</span>
          <span className={styles.logoCursor} />
        </div>

        <div className={styles.bootLines}>
          <p className={`${styles.line} ${phase >= 0 ? styles.lineVisible : ''}`} style={{ transitionDelay: '0.05s' }}>
            <span className={styles.prompt}>$</span> initializing portfolio environment...
          </p>
          <p className={`${styles.line} ${phase >= 1 ? styles.lineVisible : ''}`} style={{ transitionDelay: '0.25s' }}>
            <span className={styles.prompt}>$</span> loading cloud &amp; devops modules... <span className={styles.warn}>[ violet ]</span>
          </p>
          <p className={`${styles.line} ${phase >= 1 ? styles.lineVisible : ''}`} style={{ transitionDelay: '0.45s' }}>
            <span className={styles.prompt}>$</span> mounting full-stack components... <span className={styles.ok}>OK</span>
          </p>
        </div>

        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }}>
              <div className={styles.progressDot} />
            </div>
          </div>
          <div className={styles.progressMeta}>
            <span className={styles.progressLabel}>BOOT SEQUENCE</span>
            <span className={styles.progressPct}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
