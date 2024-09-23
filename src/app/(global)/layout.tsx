import { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import Header, { SocialMediasEnum } from '@/containers/Header/Header';
import Nav from '@/containers/Nav/Nav';
import Footer from '@/containers/Footer/Footer';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity';

config.autoAddCss = false;

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
    description: 'Venez découvrir la prochaine comédie musicale de l\'Orchestre Régional du Pévèle Mélantois : Les Misérables - C\'est la faute à Voltaire!, d\'après l\'oeuvre de Victor Hugo !',
  },
  description: 'Venez découvrir la prochaine comédie musicale de l\'Orchestre Régional du Pévèle Mélantois : Les Misérables - C\'est la faute à Voltaire!, d\'après l\'oeuvre de Victor Hugo !',
  keywords: ['ORPM', 'Spectacle', 'Comédie musicale', 'Les Misérables', 'Voltaire'],
  applicationName: 'ORPM Spectacles - Les Misérables',
};
export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
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
          {draftMode().isEnabled && (
            <a
              className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
              href="/api/draft-mode/disable"
            >
              Disable preview mode
            </a>
          )}
          {children}
          {draftMode().isEnabled && <VisualEditing />}
        </main>
        <Analytics />
      </div>
      <Footer />
    </>
  );
}
