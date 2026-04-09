'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import InfiniteCarousel from './Carousel';

const titleLine1 = ['Where', 'design', 'connects,'];
const titleLine2 = ['engineering', 'thinks,'];
const titleLine3 = ['and', 'art', 'feels'];

export default function Hero() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      let isDragging = false;
      let ox = 0, oy = 0, startX = 0, startY = 0;

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startX = e.clientX - ox;
        startY = e.clientY - oy;
        card.style.transition = 'none';
        card.style.zIndex = '20';
        e.preventDefault();
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        ox = e.clientX - startX;
        oy = e.clientY - startY;
        const base = card.dataset.rot || '0';
        card.style.transform = `translate(${ox}px, ${oy}px) rotate(${base}deg)`;
      };

      const onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        card.style.transition = 'box-shadow 0.3s ease';
        card.style.zIndex = card.dataset.z || '1';
      };

      card.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      return () => {
        card.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Caveat:wght@500&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          font-family: 'DM Sans', sans-serif;
          background-color: #F4F2ED;
          background-image: radial-gradient(circle, #b5b0a6 1px, transparent 1px);
          background-size: 22px 22px;
          width: 100%;
          min-height: calc(100svh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: clamp(40px, 6vw, 60px);
          max-width: 1100px;
          width: min(1100px, 100%);
          padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 64px);
        }

        /* LEFT */
        .hero-left {
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #c5c0b6;
          border-radius: 6px;
          padding: 7px 12px;
          width: fit-content;
          margin-bottom: 26px;
          background: rgba(255,255,255,0.55);
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.2s;
        }

        .badge-logo {
          width: 90px;
          height: auto;
        }

        .hero-title {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 48px);
          font-weight: 700;
          color: #0D1A4B;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
        }

        .title-word {
          display: inline-block;
          margin-right: 0.25em;
          opacity: 0;
          transform: translateY(14px);
          animation: wordReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-subtitle {
          font-size: clamp(16px, 1.8vw, 20px);
          line-height: 1.6;
          color: #555;
          max-width: 480px;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 1.1s;
        }

        .hero-subtitle strong {
          font-weight: 600;
          color: #111;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #E84D00;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 32px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 1.3s;
        }

        .cta-btn:hover {
          background: #001666;
          transform: translateY(-2px);
        }

        /* RIGHT */
        .hero-right {
          flex: 0 0 clamp(300px, 40vw, 420px);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .photo-stack {
          position: relative;
          width: 100%;
          height: 420px;
        }

        .photo-card {
          position: absolute;
          background: #fff;
          border-radius: 6px;
          box-shadow: 0 3px 16px rgba(0,0,0,0.1);
          padding: 10px 10px 16px;
          cursor: grab;
          user-select: none;
        }

        .photo-card .card-img {
          border-radius: 3px;
          display: block;
          object-fit: cover;
          pointer-events: none;
        }

        .card-label {
          display: block;
          text-align: center;
          font-size: 12px;
          color: #999;
          margin-top: 8px;
          font-style: italic;
        }

        /* ── Card positions: lg (default) ── */
        .card-left {
          width: 175px;
          left: 0px;
          top: 90px;
          transform: rotate(-8deg);
          z-index: 1;
          animation: cardSlideIn 0.85s ease forwards 0.5s;
          opacity: 0;
        }

        .card-main {
          width: 230px;
          left: 50%;
          transform: translateX(-30%) rotate(2deg);
          top: 30px;
          z-index: 3;
          animation: cardSlideIn 0.85s ease forwards 0.75s;
          opacity: 0;
        }

        .card-bottom {
          width: 155px;
          right: 0px;
          top: 220px;
          transform: rotate(12deg);
          z-index: 2;
          animation: cardSlideIn 0.85s ease forwards 0.95s;
          opacity: 0;
        }

        .drag-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 1.2s;
        }

        .drag-hint {
          font-family: 'Caveat', cursive;
          font-size: 28px;
          color: #777;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .avatar-stack { display: flex; align-items: center; }
        .avatar {
          width: 34px; height: 34px; border-radius: 50%; border: 2.5px solid #F4F2ED;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 600; color: #fff; margin-left: -10px;
        }
        .avatar:first-child { margin-left: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(30px) rotate(0deg); }
          to { opacity: 1; }
        }

        /* ── md: tablet / collapsed layout ── */
        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-top: 60px;
          }
          .hero-left {
            align-items: center;
            flex: none;
            width: 100%;
          }
          .badge, .cta-btn { margin-left: auto; margin-right: auto; }
          .hero-right {
            width: 100%;
            max-width: 400px;
            margin-top: 40px;
          }

          .photo-stack { height: 380px; }

          .card-main {
            width: 210px;
            left: 50%;
            transform: translateX(-40%) rotate(2deg);
            top: 20px;
          }
          .card-left {
            width: 155px;
            left: 5%;
            top: 80px;
            transform: rotate(-8deg);
          }
          .card-bottom {
            width: 140px;
            right: 5%;
            top: 210px;
            transform: rotate(12deg);
          }
        }

        /* ── sm: mobile ── */
        @media (max-width: 480px) {
          .hero-section {
            min-height: auto;
            padding-bottom: 40px;
          }
          .hero-inner {
            gap: 20px;
            padding: 40px 20px;
          }
          .hero-title {
            font-size: 32px;
          }

          .photo-stack { height: 320px; }

          .card-main {
            width: 170px;
            left: 50%;
            transform: translateX(-45%) rotate(2deg);
            top: 10px;
          }
          .card-left {
            width: 125px;
            left: 2%;
            top: 65px;
            transform: rotate(-8deg);
          }
          .card-bottom {
            width: 115px;
            right: 2%;
            top: 180px;
            transform: rotate(12deg);
          }

          .drag-hint { font-size: 22px; }
          .drag-hint svg { width: 40px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-delay: -1ms !important;
            animation-duration: 1ms !important;
            transition-duration: 1ms !important;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <h1 className="hero-title">
              <span style={{ display: 'block' }}>
                {titleLine1.map((w, i) => (
                  <span
                    key={w}
                    className="title-word"
                    style={{ animationDelay: `${0.3 + i * 0.09}s` }}
                  >{w}</span>
                ))}
              </span>
              <span style={{ display: 'block' }}>
                {titleLine2.map((w, i) => (
                  <span
                    key={w}
                    className="title-word"
                    style={{ animationDelay: `${0.3 + (i + titleLine1.length) * 0.09}s` }}
                  >{w}</span>
                ))}
              </span>
              <span style={{ display: 'block' }}>
                {titleLine3.map((w, i) => (
                  <span
                    key={w}
                    className="title-word"
                    style={{ animationDelay: `${0.3 + (i + titleLine1.length + titleLine2.length) * 0.09}s` }}
                  >{w}</span>
                ))}
              </span>
            </h1>

            <p className="hero-subtitle">
              Hi, I'm Areesha, a Full Stack Developer with <strong>1.5+ years</strong> of experience crafting impactful <strong>B2B, B2C, and SaaS</strong> applications.
            </p>

            <a
              className="cta-btn"
              href="https://www.notion.so/Smruthi-K-S-3375409ab0bd8037917cced217ed6885?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="13" x2="13" y2="3"/>
                <polyline points="6 3 13 3 13 10"/>
              </svg>
            </a>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="drag-row">
              <div className="drag-hint">
                Drag
                <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10 C12 6, 20 4, 28 10 C36 16, 40 28, 38 38" stroke="#888" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M31 34 L38 38 L42 30" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="photo-stack">
              <div
                className="photo-card card-left"
                data-rot="-8" data-z="1"
                ref={el => { cardRefs.current[0] = el; }}
              >
                <Image src="/images/work.png" alt="Work" width={150} height={140} className="card-img" />
                <span className="card-label">Work</span>
              </div>

              <div
                className="photo-card card-main"
                data-rot="2" data-z="3"
                ref={el => { cardRefs.current[1] = el; }}
              >
                <Image src="/images/me.jpg" alt="Me" width={210} height={220} className="card-img" priority />
                <span className="card-label">Me</span>
              </div>

              <div
                className="photo-card card-bottom"
                data-rot="12" data-z="2"
                ref={el => { cardRefs.current[2] = el; }}
              >
                <Image src="/images/art.jpg" alt="Art" width={135} height={120} className="card-img" />
                <span className="card-label">Art</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <InfiniteCarousel/>
    </>
  );
}