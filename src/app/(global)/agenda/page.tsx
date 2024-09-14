import { Metadata } from 'next';
import Image from 'next/image';
import agendaHeader from '@/assets/pages/agenda/images/agendaHeader.jpg';
import Typography from '@/components/Typography/Typography';
import React from 'react';
import Agenda from '@/containers/Agenda/Agenda';

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
          src={agendaHeader}
          alt="Cosette les Miserables ORPM"
          style={{ objectPosition: '5% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div id="dates" className="lg:mb-120px mb-60px" />
      <div>
        <Typography.Title level={1} className="lg:mb-60px">
          Nos dates
        </Typography.Title>
        <div className="mx-6 lg:mx-8">
          <Agenda />
        </div>
      </div>
    </>
  );
}
