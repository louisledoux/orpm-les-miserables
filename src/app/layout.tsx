import { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Oswald } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import './globals.css';
import Header, { SocialMediasEnum } from '@/containers/Header/Header';
import Nav from '@/containers/Nav/Nav';
import Footer from '@/containers/Footer/Footer';

config.autoAddCss = false;

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | ORPM Spectacles - Les Misérables',
    default: 'ORPM Spectacles - Les Misérables', // a default is required when creating a template
  },
  openGraph: {
    title: {
      template: '%s | ORPM Spectacles - Les Misérables',
      default: 'ORPM Spectacles - Les Misérables',
    },
    description: 'Venez découvrir la prochaine comédie musicale de l\'Orchestre Régional du Pévèle Mélantois : Les Misérables, d\'après l\'oeuvre de Victor Hugo !',
  },
  description: 'Venez découvrir la prochaine comédie musicale de l\'Orchestre Régional du Pévèle Mélantois : Les Misérables, d\'après l\'oeuvre de Victor Hugo !',
  keywords: ['ORPM', 'Spectacle', 'Comédie musicale', 'Les Misérables'],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${oswald.className} tracking-2% h-full`}>
        <div className="min-h-screen h-full flex flex-col justify-between">
          <div className="w-full">
            <Header socialMediasIcons={[
              {
                icon: SocialMediasEnum.FACEBOOK,
                link: 'https://www.facebook.com/people/Les-Mis%C3%A9rables-Spectacle/100063630728155/',
              },
              {
                icon: SocialMediasEnum.INSTAGRAM,
              },
            ]}
            />
            <Nav />
            <main className="max-w-content mx-auto">
              {children}
            </main>
            <Analytics />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
