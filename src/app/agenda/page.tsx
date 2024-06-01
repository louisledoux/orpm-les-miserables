import { Metadata } from 'next';
import Image from 'next/image';
import mainComedie from '@/assets/pages/comedie-musicale/images/mainComedie.jpg';
import Typography from '@/components/Typography/Typography';
import React from 'react';

export const metadata: Metadata = {
  title: 'Agenda',
  openGraph: {
    title: 'Agenda',
  },
};

export default function AgendaPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainComedie}
          alt="Cosette les Miserables ORPM"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Typography.Title level={1}>
          Nos dates
        </Typography.Title>
      </div>
    </>
  );
}
