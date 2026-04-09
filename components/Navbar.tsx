'use client';

import { useState } from 'react';

const scrollTo = (id: string, closeFn?: () => void) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  closeFn?.();
};

const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'art-gallery', label: 'Art Gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile (tablet breakpoint ~768px)
  if (typeof window !== 'undefined') {
    // handled via inline style display toggle below
  }

  return (
    <nav style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <style>{`
        .nav-desktop { display: none; }
        .nav-mobile  { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-mobile  { display: none; }
        }
        .nav-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.3;
          color: #767D7E;
          padding: 20px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }
        .nav-link-btn:hover { color: #0D1A4B; }
        .mobile-link-btn {
          background: none;
          border: none;
          border-bottom: 1px solid #F0F0F0;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.3;
          color: #767D7E;
          padding: 14px 0;
          text-align: left;
          width: 100%;
          transition: color 0.2s ease;
        }
        .mobile-link-btn:last-child { border-bottom: none; }
        .mobile-link-btn:hover { color: #0D1A4B; }
      `}</style>

      {/* ── Desktop ── */}
      <div
        className="nav-desktop"
        style={{ alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        <button className="nav-link-btn" onClick={() => scrollTo('projects')}>
          Projects
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Libre Baskerville, Georgia, serif',
            fontSize: '24px',
            lineHeight: 1.1,
            color: '#E84D00',
            padding: '0 24px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          Areesha Shamsi
        </button>

        <button className="nav-link-btn" onClick={() => scrollTo('art-gallery')}>
          About
        </button>
      </div>

      {/* ── Mobile ── */}
      <div
        className="nav-mobile"
        style={{ width: '100%', flexDirection: 'column' }}
      >
        {/* Top bar */}
        <div style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
        }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Libre Baskerville, Georgia, serif',
              fontSize: '22px',
              lineHeight: 1.1,
              color: '#E84D00',
              whiteSpace: 'nowrap',
              padding: 0,
            }}
          >
            Areesha Shamsi
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              width: '28px',
              height: '28px',
              padding: 0,
            }}
          >
            <span style={{
              display: 'block',
              height: '1.5px',
              width: '22px',
              background: '#767D7E',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              height: '1.5px',
              width: '22px',
              background: '#767D7E',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }} />
            <span style={{
              display: 'block',
              height: '1.5px',
              width: '22px',
              background: '#767D7E',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease',
              transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
            }} />
          </button>
        </div>

        {/* Dropdown */}
        <div style={{
          overflow: 'hidden',
          maxHeight: open ? '300px' : '0px',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid #E5E5E5',
            padding: '8px 20px',
          }}>
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                className="mobile-link-btn"
                onClick={() => scrollTo(id, () => setOpen(false))}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
}