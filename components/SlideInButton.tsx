'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function SlideInButton({
  href,
  label,
  bg = '#FF5900',
  text = '#F8F6F3',
  hoverBg = '#001666',
  hoverText = '#F8F6F3',
  icon
}: {
  href: string;
  label: string;
  bg?: string;
  text?: string;
  hoverBg?: string;
  hoverText?: string;
  icon?: ReactNode;
}) {
  return (
    <Link href={href} className="inline-flex">
      <motion.span
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-[39px] px-[26px] py-[14px]"
        style={{ backgroundColor: bg }}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          className="absolute left-1/2 bottom-[-8px] h-[8px] w-[8px] -translate-x-1/2 rounded-full"
          style={{ backgroundColor: hoverBg }}
          variants={{
            rest: { width: 8, height: 8, top: 'auto', bottom: -8 },
            hover: { width: '108%', height: 162, top: -53, bottom: -53 }
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.span
          className="relative z-10 flex h-[19px] items-center px-[4px] font-inter text-[14px] font-semibold tracking-[-0.02em] group-hover:absolute group-hover:left-[11px] group-hover:top-[14px] group-hover:bottom-[14px]"
          style={{ color: text }}
          variants={{ rest: { color: text }, hover: { color: hoverText } }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {label}
        </motion.span>
        <motion.span
          className="absolute bottom-[14px] right-[-23px] z-10 flex h-[19px] w-[22px] items-center justify-center"
          style={{ color: hoverText }}
          variants={{ rest: { x: 0 }, hover: { x: 35 } }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {icon}
        </motion.span>
      </motion.span>
    </Link>
  );
}
