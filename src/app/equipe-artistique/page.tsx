import Typography from '@/components/Typography/Typography';
import Section from '@/containers/Section/Section';
import Image from 'next/image';
import React from 'react';
import mainequipeArtistique from '@/assets/equipeArtistique-page/images/mainequipeArtistique.png';
import equipeArtistiqueSections from '@/assets/equipeArtistique-page/equipeArtistiqueSections';

export default function EquipeArtistiquePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainequipeArtistique}
          alt="Pianiste ORPM"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="m-section">
        <Typography.Title level={1}>
          L&apos;équipe artistique
        </Typography.Title>
        <div className="m-section p-section text-center text-22 font-light">
          Le coeur du projet s&apos;appuie sur une équipe artistique soudée
          et confirmée au long de nos nombreux spectacles précédents.
          Elle se rassemble autour du chef d&apos;orchestre, Hubert Gressier,
          qui pilote l&apos;ensemble du projet. L&apos;équipe artistique s&apos;articule autour
          de plusieurs pôles : la musique et le
          chant, les décors et costumes, la mise en scène ainsi que la
          chorégraphie, sans oublier la partie technique. Tous et toutes
          travaillent en synergie afin de présenter un spectacle abouti,
          pour le plus grand plaisir de chacun.
        </div>
        {equipeArtistiqueSections.map(({ key, pages, image }, index) => (
          <Section key={key} pages={pages} image={image} reverse={Boolean(index % 2)} />
        ))}
      </div>
    </>
  );
}
