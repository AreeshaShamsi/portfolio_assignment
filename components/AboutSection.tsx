'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const tags = ['B2B', 'B2C', 'SaaS', 'Design Systems', 'Figma', 'Prototyping'];

  return (
    <section
      ref={ref}
      style={{
        background: '#F4F2ED',
        backgroundImage: 'radial-gradient(circle, #b5b0a6 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        width: '100vw',
        overflow: 'hidden',
        padding: '80px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        .about-inner {
          width: min(1100px, 100%);
          padding: 0 clamp(20px, 5vw, 64px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* ── LEFT COLUMN ── */
        .about-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .about-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E84D00;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .about-eyebrow.visible { opacity: 1; transform: translateY(0); transition-delay: 0ms; }

        .about-headline {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: #0D1A4B;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .about-headline.visible { opacity: 1; transform: translateY(0); transition-delay: 100ms; }

        .about-headline em {
          font-style: italic;
          color: #E84D00;
        }

        /* big ruled line */
        .about-rule {
          width: 100%;
          height: 1.5px;
          background: #0D1A4B;
          margin: 32px 0;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 600ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1);
        }
        .about-rule.visible { opacity: 1; transform: scaleX(1); transition-delay: 200ms; }

        .about-body {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: #3a3a3a;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .about-body.visible { opacity: 1; transform: translateY(0); transition-delay: 300ms; }

        .about-body strong {
          color: #0D1A4B;
          font-weight: 500;
        }

        /* tag pills */
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 32px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .about-tags.visible { opacity: 1; transform: translateY(0); transition-delay: 420ms; }

        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0D1A4B;
          border: 1px solid #0D1A4B;
          padding: 6px 14px;
          border-radius: 100px;
          transition: background 0.25s ease, color 0.25s ease;
          cursor: default;
        }
        .tag:hover {
          background: #0D1A4B;
          color: #F4F2ED;
        }

        /* ── RIGHT COLUMN ── */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* big stat block */
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid #0D1A4B;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .stat-grid.visible { opacity: 1; transform: translateY(0); transition-delay: 150ms; }

        .stat-cell {
          padding: 28px 24px;
          border-right: 1px solid #0D1A4B;
          border-bottom: 1px solid #0D1A4B;
          background: #FAFAF7;
          transition: background 0.25s ease;
        }
        .stat-cell:hover { background: #0D1A4B; }
        .stat-cell:hover .stat-num,
        .stat-cell:hover .stat-label { color: #F4F2ED; }
        .stat-cell:nth-child(2n) { border-right: none; }
        .stat-cell:nth-child(3),
        .stat-cell:nth-child(4) { border-bottom: none; }

        .stat-num {
          font-family: 'Libre Baskerville', serif;
          font-size: 40px;
          font-weight: 700;
          color: #E84D00;
          line-height: 1;
          margin-bottom: 6px;
          transition: color 0.25s ease;
        }
        .stat-cell:hover .stat-num { color: #ffaa80; }

        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #666;
          line-height: 1.4;
          transition: color 0.25s ease;
        }

        /* currently block */
        .about-currently {
          margin-top: 28px;
          border: 1px solid #0D1A4B;
          background: #FAFAF7;
          padding: 24px 28px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .about-currently.visible { opacity: 1; transform: translateY(0); transition-delay: 300ms; }

        .currently-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E84D00;
          margin-bottom: 16px;
        }

        .currently-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(13,26,75,0.1);
        }
        .currently-row:last-child { border-bottom: none; padding-bottom: 0; }

        .currently-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E84D00;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .currently-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #0D1A4B;
          line-height: 1.5;
        }

        .currently-text span {
          font-weight: 500;
        }

        /* availability badge */
        .avail-badge {
          margin-top: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0D1A4B;
          color: #F4F2ED;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 10px 20px;
          border-radius: 100px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 600ms ease, transform 600ms ease, background 0.25s ease;
        }
        .avail-badge.visible { opacity: 1; transform: translateY(0); transition-delay: 440ms; }
        .avail-badge:hover { background: #E84D00; }

       
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .stat-grid { margin-top: 0; }
        }
      `}</style>

      <div className="about-inner">

        {/* LEFT */}
        <div className="about-left">
          <div className={`about-eyebrow${triggered ? ' visible' : ''}`}>
            About me
          </div>
          <h2 className={`about-headline${triggered ? ' visible' : ''}`}>
            Developing with<br /><em>intent,</em><br />not assumption.
          </h2>
          <div className={`about-rule${triggered ? ' visible' : ''}`} />
          <p className={`about-body${triggered ? ' visible' : ''}`}>
            Hi, I&apos;m <strong>Areesha </strong> — a full-stack developer with{' '}
            <strong>1.5+ years</strong> of experience crafting digital experiences
            across different domains. I sit at the
            intersection of  systems thinking and human-centred research —
            translating complex problems into clean, purposeful code.
            <br /><br />
           I believe great products feel effortless because the engineering behind them is solid. I focus on building systems that are fast, scalable, and actually work in real-world conditions. Whether it's backend architecture or frontend experience, I bring the same attention to detail to everything I ship.
          </p>
         
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className={`stat-grid${triggered ? ' visible' : ''}`}>
            <div className="stat-cell">
              <div className="stat-num">1.5+</div>
              <div className="stat-label">Years of experience</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">5++</div>
              <div className="stat-label">Products shipped</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">3</div>
              <div className="stat-label">Domains mastered</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">∞</div>
              <div className="stat-label">Iterations before done</div>
            </div>
          </div>

          <div className={`about-currently${triggered ? ' visible' : ''}`}>
            <div className="currently-label">Currently</div>
            <div className="currently-row">
              <div className="currently-dot" />
              <div className="currently-text"><span>Open to opportunities</span> — full-time &amp; freelance</div>
            </div>
            <div className="currently-row">
              <div className="currently-dot" />
              <div className="currently-text">Exploring <span>motion design</span> &amp; design engineering</div>
            </div>
            <div className="currently-row">
              <div className="currently-dot" />
              <div className="currently-text">Building a <span>personal design system</span> from scratch</div>
            </div>
          </div>

          
           
          
       
        </div>

      </div>
    </section>
  );
}