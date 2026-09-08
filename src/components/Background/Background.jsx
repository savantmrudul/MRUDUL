import styles from './Background.module.css';

export default function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orbViolet}`} />
      <div className={`${styles.orb} ${styles.orbCyan}`} />
      <div className={`${styles.orb} ${styles.orbBlue}`} />
      <div className={`${styles.orb} ${styles.orbPink}`} />
      <div className={styles.noise} />
    </div>
  );
}
