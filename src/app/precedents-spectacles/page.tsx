import Typography from '@/components/Typography/Typography';
import Section from '@/containers/Section/Section';
import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local';
import memphis from '@/assets/pages/precedentsSpectacles/images/Memphis.jpg';
import precedentsSpectaclesSections from '@/assets/pages/precedentsSpectacles/precedentsSpectaclesSections';

const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });

export default function EquipeArtistiquePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={memphis}
          alt="Memphis spectacle ORPM"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="m-section">
        <Typography.Title level={1}>
          Nos précédents spectacles
        </Typography.Title>
        {precedentsSpectaclesSections.map(({ key, pages, image }, index) => (
          <Section key={key} pages={pages} image={image} reverse={Boolean(index % 2)} />
        ))}
        <div className={`${amithenFont.className} m-section p-section text-center text-h2 text-primary`}>
          Nous sommes fiers de partager ces aventures,
          et nous sommes impatients de vous accueil à nos représentations des Misérables !
        </div>
        <iframe className="w-full m-section flex justify-center" height="600px" src="https://www.youtube.com/embed/exzzOJx751w" title="Memphis ORPM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </>
  );
}
