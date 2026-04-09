"use client";

const items = [
  "FULL-STACK DEVELOPMENT",
  "BACKEND SYSTEMS",
  "API DESIGN",
  "AI INTEGRATION",
  "AUTOMATION",
  "SCALABLE APPLICATIONS",
];

export default function InfiniteCarousel() {
  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      padding: '16px 0',
      position: 'relative',
    }}>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .carousel-track {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* Fade left */}
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '128px',
        background: 'linear-gradient(to right, #F4F2ED, transparent)',
        zIndex: 10,
      }} />

      {/* Fade right */}
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: '128px',
        background: 'linear-gradient(to left, #F4F2ED, transparent)',
        zIndex: 10,
      }} />

      {/* Track */}
      <div
        className="carousel-track"
        style={{
          display: 'flex',
          width: 'max-content',
        }}
      >
        {[...items, ...items, ...items].map((text, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 'clamp(14px, 2vw, 20px)',
              color: '#b5b0a6',
              margin: '0 48px',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </span>
        ))}
      </div>

    </div>
  );
}