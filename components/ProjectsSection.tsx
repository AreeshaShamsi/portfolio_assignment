'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    index: '01',
    title: 'FinTrack Dashboard',
    category: 'B2B · SaaS · FinTech',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imgAlt: 'FinTrack Dashboard',
    problem: 'Finance teams drowning in spreadsheets with no unified view of budgets, expenses, and forecasts.',
    approach: '12 user interviews, pain-point mapping, modular dashboard with role-based views and real-time alerts.',
    tools: ['Figma', 'FigJam', 'Maze', 'Zeroheight'],
    results: [
      { stat: '40%', label: 'faster reports' },
      { stat: '3×', label: 'approval speed' },
      { stat: '91%', label: 'satisfaction' },
    ],
  },
  {
    index: '02',
    title: 'MediConnect App',
    category: 'B2C · Healthcare · Mobile',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imgAlt: 'MediConnect App',
    problem: 'Patients struggling to book, access records, and communicate across fragmented hospital apps.',
    approach: 'Competitive analysis of 8 apps, empathy maps for 3 personas, unified care companion prototype.',
    tools: ['Figma', 'Principle', 'Hotjar', 'Miro'],
    results: [
      { stat: '60%', label: 'fewer missed appts' },
      { stat: '4.8★', label: 'satisfaction' },
      { stat: '2 min', label: 'booking time' },
    ],
  },
  {
    index: '03',
    title: 'Orion Design System',
    category: 'Design Systems · B2B',
    img: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80',
    imgAlt: 'Orion Design System',
    problem: '30+ person team shipping inconsistent UI — no shared components, no tokens, no documentation.',
    approach: 'Audited 200+ screens, found 47 patterns, built token-first system with Figma library and Storybook.',
    tools: ['Figma', 'Tokens Studio', 'Storybook', 'Zeroheight'],
    results: [
      { stat: '70%', label: 'faster handoff' },
      { stat: '200+', label: 'components' },
      { stat: '5', label: 'teams onboarded' },
    ],
  },
];

function useFadeUp(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function ProjectCard({
  project,
  index: cardIndex,
  expanded,
  onToggle,
}: {
  project: typeof projects[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { ref, visible } = useFadeUp(0.08);

  return (
    <div
      ref={ref}
      style={{
        background: '#FAFAF7',
        display: 'flex',
        flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${cardIndex * 120}ms, transform 0.6s ease ${cardIndex * 120}ms`,
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', background: '#ddd', flexShrink: 0 }}>
        <Image src={project.img} alt={project.imgAlt} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,26,75,0.35) 0%, transparent 60%)', zIndex: 1 }} />
        <span style={{ position: 'absolute', bottom: '10px', left: '14px', zIndex: 2, fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.85)' }}>
          {project.index}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>
          {project.category}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '16px' }}>
          <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 700, color: '#0D1A4B', lineHeight: 1.2, margin: 0 }}>
            {project.title}
          </h3>
          <button
            onClick={onToggle}
            aria-label="Toggle details"
            style={{
              flexShrink: 0,
              width: '28px', height: '28px',
              border: '1px solid rgba(13,26,75,0.3)',
              borderRadius: '50%',
              background: expanded ? '#E84D00' : 'transparent',
              borderColor: expanded ? '#E84D00' : 'rgba(13,26,75,0.3)',
              color: expanded ? '#fff' : '#0D1A4B',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'background 0.2s ease, color 0.2s ease, transform 0.3s ease, border-color 0.2s ease',
              marginTop: '2px',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(13,26,75,0.1)', paddingTop: '14px', marginTop: 'auto' }}>
          {project.results.map((r, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingRight: i < 2 ? '12px' : '0', paddingLeft: i > 0 ? '12px' : '0', borderRight: i < 2 ? '1px solid rgba(13,26,75,0.1)' : 'none' }}>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700, color: '#E84D00', lineHeight: 1 }}>{r.stat}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: '#7a7264', lineHeight: 1.3 }}>{r.label}</span>
            </div>
          ))}
        </div>

        {/* Expandable — inline maxHeight, NO class toggling */}
        <div style={{ maxHeight: expanded ? '500px' : '0px', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)' }}>
          <div style={{ paddingTop: '16px', marginTop: '14px', borderTop: '1px solid rgba(13,26,75,0.1)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <span style={{ display: 'block', fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E84D00', marginBottom: '6px' }}>Problem</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#3a3a3a', lineHeight: 1.6, margin: 0 }}>{project.problem}</p>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E84D00', marginBottom: '6px' }}>Approach</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#3a3a3a', lineHeight: 1.6, margin: 0 }}>{project.approach}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {project.tools.map((t) => (
                <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px', color: '#0D1A4B', border: '1px solid rgba(13,26,75,0.3)', padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.05em' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: hRef, visible: hVisible } = useFadeUp();

  return (
    <section id="projects" style={{ width: '100vw', overflow: 'hidden', background: '#F4F2ED', backgroundImage: 'radial-gradient(circle, #b5b0a6 1px, transparent 1px)', backgroundSize: '22px 22px', padding: 'clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #0D1A4B;
          border: 1px solid #0D1A4B;
        }
        @media (max-width: 900px) { .proj-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .proj-grid { grid-template-columns: 1fr; } }

        .proj-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .proj-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .proj-headline {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0D1A4B;
          line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 48px;
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.6s ease 80ms, transform 0.6s ease 80ms;
        }
        .proj-headline.visible { opacity: 1; transform: translateY(0); }
        .proj-headline em { font-style: italic; color: #E84D00; }
      `}</style>

      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <div ref={hRef}>
          <div className={`proj-eyebrow ${hVisible ? 'visible' : ''}`}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#E84D00' }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E84D00' }}>Selected Work</span>
          </div>
          <h2 className={`proj-headline ${hVisible ? 'visible' : ''}`}>
            Problems I&apos;ve<br /><em>solved.</em>
          </h2>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.index}
              project={p}
              index={i}
              expanded={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}