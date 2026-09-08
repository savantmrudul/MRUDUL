import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiArrowRight } from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import styles from './Contact.module.css';

const FORMSPREE_ID       = import.meta.env.VITE_FORMSPREE_ID;
const FORMSPREE_ENDPOINT = FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID'
  ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

const contactItems = [
  { icon: FiMail,     label: 'Email',    value: personal.email,    href: `mailto:${personal.email}`,  external: false },
  { icon: FiPhone,    label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}`,     external: false },
  { icon: FiMapPin,   label: 'Location', value: personal.location, href: null,                        external: false },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'mrudul-savant',   href: personal.linkedin,           external: true  },
];

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) return;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      {/* Background glow */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">

        {/* ── Section header ── */}
        <div className={`reveal ${styles.header}`}>
          <p className="section-eyebrow">Contact</p>
          <h2 className={styles.ctaHeading}>
            Let's Build Something<br />
            <span className={styles.ctaAccent}>Great.</span>
          </h2>
          <p className={styles.ctaSub}>
            Open to Cloud DevOps and Full Stack opportunities.<br />
            Reach out — I respond fast.
          </p>
        </div>

        <div className={`reveal ${styles.grid}`}>

          {/* ── Left: contact panel ── */}
          <div className={styles.infoPanel}>
            {contactItems.map(({ icon: Icon, label, value, href, external }) => (
              href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={styles.infoItem}
                >
                  <span className={styles.infoIconWrap}><Icon size={16} /></span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{label}</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                  <FiArrowRight size={14} className={styles.infoArrow} />
                </a>
              ) : (
                <div key={label} className={`${styles.infoItem} ${styles.infoItemStatic}`}>
                  <span className={styles.infoIconWrap}><Icon size={16} /></span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{label}</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                </div>
              )
            ))}

            {/* GitHub — coming soon */}
            <div className={`${styles.infoItem} ${styles.infoItemDisabled}`}>
              <span className={styles.infoIconWrap}><FiGithub size={16} /></span>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>GitHub</span>
                <span className={styles.infoValueMuted}>Coming soon</span>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name" name="name" type="text"
                  value={form.name} onChange={handleChange}
                  placeholder="Your name" required
                  className={styles.input}
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email" name="email" type="email"
                  value={form.email} onChange={handleChange}
                  placeholder="your@email.com" required
                  className={styles.input}
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message" name="message"
                value={form.message} onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                required rows={5}
                className={styles.textarea}
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending' || !FORMSPREE_ENDPOINT}
            >
              <FiSend size={15} />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {!FORMSPREE_ENDPOINT && (
              <p className={styles.msgInfo}>
                Form not configured yet — email me at{' '}
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </p>
            )}
            {status === 'success' && (
              <p className={styles.msgSuccess}>✓ Message sent! I'll get back to you shortly.</p>
            )}
            {status === 'error' && (
              <p className={styles.msgError}>Something went wrong. Please email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
