'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  { n: '1', h: 'Understand the problem', p: 'I first try to understand what the real issue is instead of jumping to solutions.' },
  { n: '2', h: 'Break it into parts', p: 'I divide the problem into smaller modules so it becomes easier to build.' },
  { n: '3', h: 'Build step by step', p: 'I start building each part one by one so the overall structure takes shape.' },
  { n: '4', h: 'Integrate everything', p: 'Once the parts are ready, I connect them to form a complete system.' },
  { n: '5', h: 'Handle edge cases', p: 'I test different scenarios to make sure the system works reliably.' },
  { n: '6', h: 'Improve continuously', p: 'I learn from mistakes, take feedback, and keep improving over time.' },
];

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeUp();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function ThinkingSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStepsVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        overflow: 'hidden',
        background: '#F4F2ED',
        backgroundImage: 'radial-gradient(circle, #b5b0a6 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1100px',
          padding: 'clamp(48px, 8vw, 112px) clamp(20px, 5vw, 64px)',
        }}
      >

        {/* ── Eyebrow ── */}
        <FadeUp>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ display: 'block', width: '32px', height: '1px', background: '#E84D00' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#E84D00',
            }}>
              How I Think
            </span>
          </div>
        </FadeUp>

        {/* ── Headline ── */}
        <FadeUp delay={60}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 62px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#0D1A4B',
            marginBottom: '48px',
          }}>
            My mind is my<br />
            <em style={{ fontStyle: 'italic', color: '#E84D00' }}>real toolkit.</em>
          </h2>
        </FadeUp>

        {/* ── Steps subheading ── */}
        <FadeUp>
          <h3 style={{
            fontFamily: 'Libre Baskerville, Georgia, serif',
            fontSize: '20px',
            fontWeight: 700,
            color: '#0D1A4B',
            marginBottom: '32px',
          }}>
            How I approach any problem
          </h3>
        </FadeUp>

        {/* ── Steps Grid ── */}
        <div
          ref={stepsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
            gap: '0 32px',
            marginBottom: '80px',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '24px 0',
                borderBottom: i < steps.length - (isMd ? 2 : 1) ? '1px solid #d4cfc8' : 'none',
                opacity: stepsVisible ? 1 : 0,
                transform: stepsVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              {/* Number circle */}
              <div style={{
                flexShrink: 0,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #E84D00',
                color: '#E84D00',
                background: '#FAFAF7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Libre Baskerville, serif',
                fontSize: '14px',
                fontWeight: 700,
              }}>
                {step.n}
              </div>

              <div>
                <h4 style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#0D1A4B',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}>
                  {step.h}
                </h4>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13.5px',
                  color: '#7a7264',
                  lineHeight: 1.65,
                  fontWeight: 300,
                  margin: 0,
                }}>
                  {step.p}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Closing Quote ── */}
        <FadeUp>
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <span style={{ display: 'block', width: '56px', height: '1px', background: '#E84D00', margin: '0 auto 32px' }} />
            <blockquote style={{
              fontFamily: 'Libre Baskerville, Georgia, serif',
              fontSize: 'clamp(18px, 2.8vw, 30px)',
              fontStyle: 'italic',
              color: '#0D1A4B',
              lineHeight: 1.5,
              maxWidth: '680px',
              margin: '0 auto',
            }}>
              "Design isn't what it looks like. It's how{' '}
              <em style={{ fontStyle: 'normal', color: '#E84D00' }}>well it works</em>{' '}
              for the person who can't afford for it to fail."
            </blockquote>
            <span style={{ display: 'block', width: '56px', height: '1px', background: '#E84D00', margin: '32px auto 0' }} />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}