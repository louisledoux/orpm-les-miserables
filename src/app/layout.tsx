import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Oswald } from 'next/font/google';
import React from 'react';
import './globals.css';

config.autoAddCss = false;

const oswald = Oswald({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${oswald.className} tracking-2% h-full`}>
        <div className="min-h-screen h-full flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
