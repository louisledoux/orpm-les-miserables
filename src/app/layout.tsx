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

export const metadata = {
  title: 'ORPM Spectacle - Les Misérables',
  description: 'Nous vous invitons à nous rejoindre pour une aventure captivante : Les Misérables d\'après l\'oeuvre de Victor Hugo ! Nous nous sommes lancés le défi de vous transporter dans les rues de Paris en 1832, à l\'époque des barricades, et de vous faire revivre les mélodies les plus célèbres de cette comédie musicale, revisitées pour séduire le public d\'aujourd\'hui.',
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
