import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -200, y: -200 });
  const lagged  = useRef({ x: -200, y: -200 });
  const rafRef  = useRef(null);

  const [state, setState] = useState('idle'); // idle | hover | click

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY }; };

    const onOver = e => {
      const t = e.target.closest(
        'a, button, [role="button"], label, input, textarea, select, [data-cursor]'
      );
      setState(prev => prev === 'click' ? 'click' : (t ? 'hover' : 'idle'));
    };

    const onDown = () => setState('click');
    const onUp   = () => {
      // Briefly show ripple then settle based on current hover target
      setTimeout(() => {
        const el = document.elementFromPoint(pos.current.x, pos.current.y);
        const t  = el?.closest('a, button, [role="button"], label, input, textarea, select');
        setState(t ? 'hover' : 'idle');
      }, 150);
    };

    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '';
      if (ringRef.current) ringRef.current.style.opacity = '';
    };

    // RAF loop — ring uses lerp for smooth trail
    const LERP = 0.10;
    function tick() {
      // Dot follows immediately
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      // Ring lags
      if (ringRef.current) {
        lagged.current.x += (pos.current.x - lagged.current.x) * LERP;
        lagged.current.y += (pos.current.y - lagged.current.y) * LERP;
        ringRef.current.style.transform =
          `translate(${lagged.current.x}px, ${lagged.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    document.addEventListener('mousemove', onMove,  { passive: true });
    document.addEventListener('mouseover', onOver,  { passive: true });
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* ── Central cursor ── */}
      <div
        ref={dotRef}
        className={`${styles.dot} ${styles[`dot_${state}`]}`}
        aria-hidden="true"
      >
        {/* Crosshair arms — visible on hover */}
        <span className={styles.arm} data-dir="top"    aria-hidden="true" />
        <span className={styles.arm} data-dir="right"  aria-hidden="true" />
        <span className={styles.arm} data-dir="bottom" aria-hidden="true" />
        <span className={styles.arm} data-dir="left"   aria-hidden="true" />
      </div>

      {/* ── Lagged gradient ring ── */}
      <div
        ref={ringRef}
        className={`${styles.ring} ${styles[`ring_${state}`]}`}
        aria-hidden="true"
      >
        {/* Rotating gradient arc inside ring */}
        <span className={styles.arc} aria-hidden="true" />
        {/* Click ripple */}
        <span className={styles.ripple} aria-hidden="true" />
      </div>
    </>
  );
}
