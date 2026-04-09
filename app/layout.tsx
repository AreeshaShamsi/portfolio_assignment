import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Libre_Baskerville, Inter, Just_Me_Again_Down_Here, Domine, Space_Grotesk } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-libre'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
});

const justMe = Just_Me_Again_Down_Here({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-just-me'
});

const domine = Domine({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-domine'
});

const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-space'
});

const socialImage = '/images/me.jpg';

export const metadata: Metadata = {
  title: 'Areesha Shamsi',
  description:
    "Hello! I'm Smruthi, A product designer and artist blending creativity and research to craft thoughtful, user-centered experiences.",
  icons: {
    icon: socialImage,
    apple: socialImage
  },
  openGraph: {
    title: 'Product Designer',
    description:
      "Hello! I'm Smruthi, A product designer and artist blending creativity and research to craft thoughtful, user-centered experiences.",
    images: [socialImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Designer',
    description:
      "Hello! I'm Smruthi, A product designer and artist blending creativity and research to craft thoughtful, user-centered experiences.",
    images: [socialImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libre.variable} ${inter.variable} ${justMe.variable} ${domine.variable} ${space.variable}`}>
      <body className="font-dm">
        {children}
      </body>
    </html>
  );
}
