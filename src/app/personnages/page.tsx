import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import React from 'react';
import mainPersonnages from '@/assets/pages/personnages/images/mainpersonnages.png';
import personnageSections from '@/assets/pages/personnages/personnagesSections';
import PersonnagesSection from '@/containers/PersonnagesSection/PersonnagesSection';

export default function EquipeArtistiquePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainPersonnages}
          alt="Pianiste ORPM"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-120px">
        <Typography.Title level={1}>
          Les personnages
        </Typography.Title>
        {personnageSections.map(({ key, pages, image }, index) => (
          <PersonnagesSection key={key} pages={pages} image={image} reverse={Boolean(index % 2)} />
        ))}
      </div>
    </>
  );
}