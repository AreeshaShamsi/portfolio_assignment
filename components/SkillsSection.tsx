'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    title: 'UI & Design Systems',
    points: ['Wireframing', 'Components & Tokens', 'User Interface', 'Prototyping', 'Documentation'],
  },
  {
    title: 'Ideation',
    points: ['Problem Statements', '"How Might We" Framing', 'Information Architecture', 'User Flows', 'Product Discovery'],
  },
  {
    title: 'UX Research',
    points: ['User Interviews', 'Usability Testing', 'Heuristic Evaluation', 'Competitive Analysis', 'Affinity Mapping'],
  },
];

export default function SkillsSection() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );

    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: '#F5F0EB',
        backgroundImage: 'radial-gradient(circle, #b0a89a 1px, transparent 1px)',
        backgroundSize: '18px 18px',
        width: '100vw',
        overflow: 'hidden',
        padding: '64px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: 'Libre Baskerville, Georgia, serif',
          fontSize: '36px',
          fontWeight: 700,
          color: '#0D1A4B',
          marginBottom: '48px',
          textAlign: 'center',
        }}
      >
        Key Skills
      </h2>

      <style>{`
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          max-width: 900px;
        }

        .skill-card {
          border: 1px solid #0D1A4B;
          background: #FAFAF7;
          padding: 28px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 600ms ease, transform 600ms cubic-bezier(0.34, 1.2, 0.64, 1);
        }

        .skill-card.visible {
          opacity: 1;
          transform: translateY(0px);
        }

        .skill-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0D1A4B;
          margin-bottom: 12px;
        }

        .skill-divider {
          height: 1.5px;
          width: 100%;
          background: #E84D00;
          margin-bottom: 16px;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #0D1A4B;
          line-height: 1.4;
          font-family: 'DM Sans', sans-serif;
        }

        .skill-bullet {
          color: #E84D00;
          font-size: 11px;
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .skills-grid {
            flex-direction: row;
            align-items: stretch;
          }

          .skill-card {
            flex: 1 1 0;
          }
        }
      `}</style>

      <div ref={ref} className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill.title}
            className={`skill-card${triggered ? ' visible' : ''}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="skill-title">{skill.title}</div>
            <div className="skill-divider" />
            <ul className="skill-list">
              {skill.points.map((point) => (
                <li key={point}>
                  <span className="skill-bullet">✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}