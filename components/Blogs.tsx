'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Blog = {
  _id: string;
  title: string;
  content: string;
  slug: string;
  ogImage: string;
  createdAt: string;
  metaDescription: string;
};

export default function BlogSection() {
  const [visible, setVisible] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  // 🔥 FETCH FROM API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('https://portfolio-backend-beta-five.vercel.app/api/blogs'); // 👈 CHANGE THIS
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Intersection animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

  const getSafeImageSrc = (src: string) => {
    if (!src) return '';
    try {
      const url = new URL(src);
      if (url.hostname === 'example.com') return '';
      return src;
    } catch {
      return '';
    }
  };

  return (
    <section
      className="w-full flex flex-col items-center gap-10 px-4 py-14 sm:py-20"
      style={{
        background: '#F5F0EB',
        backgroundImage: 'radial-gradient(circle, #c4bab0 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-[10px] uppercase tracking-[0.12em] text-[#D4703A]">
          From the desk
        </span>
        <h2 className="font-libre text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2340] leading-tight">
          Thoughts & writings
        </h2>
        <p className="text-sm text-[#767D7E] max-w-sm leading-relaxed">
          Unfiltered notes on development, systems, and real-world building.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-sm text-[#9aa0a0] animate-pulse">
          Loading posts…
        </div>
      )}

      {/* Cards */}
      {!loading && blogs.length > 0 && (
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[960px]"
        >
          {blogs.map((blog, i) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog._id}
              className="group flex flex-col bg-[#FAFAF7] border border-[#1a2340] cursor-pointer overflow-hidden hover:bg-[#F0EBE3] hover:-translate-y-1 transition-all duration-200"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 500ms ease ${i * 120}ms, transform 500ms ease ${i * 120}ms`,
              }}
            >
              {/* Image */}
              <div className="w-full aspect-video bg-[#e8e0d4] overflow-hidden relative">
                {getSafeImageSrc(blog.ogImage) ? (
                  <img
                    src={blog.ogImage}
                    alt={blog.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-libre text-5xl font-bold text-[#d0c9be]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2 p-4 flex-1">
                <div className="font-libre text-4xl font-bold text-[#e8e0d4] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="font-libre text-[15px] font-bold text-[#1a2340] leading-snug capitalize">
                  {blog.title}
                </h3>

                <div className="w-7 h-[1.5px] bg-[#D4703A]" />

                <p className="text-[12px] text-[#5a6060] leading-relaxed flex-1 line-clamp-3">
                  {blog.metaDescription}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#e0dbd2]">
                  <span className="text-[11px] text-[#9aa0a0]">
                    {formatDate(blog.createdAt)}
                  </span>

                  <div className="w-6 h-6 border border-[#1a2340] flex items-center justify-center group-hover:bg-[#1a2340] transition-colors">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="stroke-[#1a2340] group-hover:stroke-[#FAFAF7] transition-colors"
                      strokeWidth="1.5"
                    >
                      <path d="M2 10L10 2M10 2H4M10 2V8" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && blogs.length === 0 && (
        <p className="text-sm text-[#9aa0a0]">No posts found.</p>
      )}

      {/* CTA */}
      {!loading && blogs.length > 0 && (
        <Link
          href="/blog"
          className="flex items-center gap-2 font-libre text-[13px] text-[#1a2340] border-b border-[#D4703A] pb-[2px] hover:text-[#D4703A] transition-colors"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 500ms ease 800ms',
          }}
        >
          Read all posts
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            stroke="#D4703A"
            strokeWidth="1.5"
          >
            <path d="M2 12L12 2M12 2H5M12 2V9" />
          </svg>
        </Link>
      )}
    </section>
  );
}