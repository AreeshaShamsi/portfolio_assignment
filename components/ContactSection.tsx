'use client';

import { motion } from 'framer-motion';

const contacts = [
  {
    label: 'Email',
    value: 'areeshashamsi11@gmail.com',
    href: 'mailto:areeshashamsi11@gmail.com'
  },
  {
    label: 'LinkedIn',
    value: 'Areesha Shamsi',
    href: 'https://www.linkedin.com/in/areesha-shamsi/'
  },
  {
    label: 'Instagram',
    value: '@_areesha_shamsi',
    href: 'https://www.instagram.com/_areesha_shamsi/'
  }
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        width: '100vw',
        background: '#F4F2ED',
       
        backgroundSize: '22px 22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 64px)',
        gap: '48px',
      }}
    >
      {/* ── Header ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'center',
        maxWidth: '720px',
      }}>
        <div style={{ width: '56px', height: '56px' }} aria-hidden="true">
          <svg viewBox="0 0 25 25" style={{ width: '100%', height: '100%', fill: 'none' }}>
            <path d="M3.5 2L12.8 8.6V14.8L3.5 11.5V9.7L11.1 12.5V14.3L3.5 11.5" stroke="#001666" strokeWidth="0.8" />
            <path d="M10.7 2.6L17.5 5.1V10.8L9.6 16.1L6.1 14.8" stroke="#001666" strokeWidth="0.8" />
            <path d="M8.2 20.1C8.6 18.7 9.8 18.2 10.8 17.6C11.7 17.1 11.8 16 10.9 15.7C10.4 15.5 9.8 15.5 9.2 15.6C8.3 15.7 7.5 15.9 6.7 16.2C5.5 16.6 4.4 17.2 3.2 17.7C2.2 18.1 1 18.3 0.2 17.7C-0.4 17.2 0.5 15.8 1 15.1C1.7 14.2 2.8 13.5 4 13.1C5 12.7 6.1 12.5 7.1 12.2" transform="translate(8 4)" fill="#FF5900" />
          </svg>
        </div>

        <h3 style={{
          fontFamily: 'Libre Baskerville, Georgia, serif',
          fontSize: 'clamp(22px, 3.5vw, 40px)',
          fontWeight: 700,
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
          color: '#0D1A4B',
          margin: 0,
        }}>
          Thank you for making it so far!
        </h3>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          lineHeight: 1.3,
          letterSpacing: '-0.2px',
          color: '#767D7E',
          margin: 0,
          maxWidth: '500px',
        }}>
          Here&apos;s how you can connect :)
        </p>
      </div>

      {/* ── Contact Cards ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        maxWidth: '500px',
      }}>
        {contacts.map((c, index) => (
          <motion.a
            key={c.label}
            href={c.href}
            rel="noopener"
            target="_blank"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              borderRadius: '16px',
              background: '#E2DFD9',
              padding: '18px 24px',
              textDecoration: 'none',
              color: '#0D1A4B',
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: 1.3,
              letterSpacing: '-0.1px',
              maxWidth: '50%',
              flexShrink: 0,
            }}>
              {c.label}
            </span>

            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: 1.3,
              letterSpacing: '-0.1px',
              textAlign: 'right',
              wordBreak: 'break-all',
              color: '#0D1A4B',
            }}>
              {c.value}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}