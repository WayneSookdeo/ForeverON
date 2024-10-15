import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import Head from 'next/head';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Countdown',
  description: 'Counting down to October 31, 2024',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Link to the favicon in the public directory */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={cormorantGaramond.className}>{children}</body>
    </html>
  );
}
