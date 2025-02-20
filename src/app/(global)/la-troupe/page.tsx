import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';
import Section from '@/containers/Section/Section';
import Image from 'next/image';
import React from 'react';
import mainTroupe from '@/assets/pages/laTroupe/images/latroupemain.jpg';
import laTroupeSection from '@/assets/pages/laTroupe/laTroupeSections';
import RoutesPathEnum from '@/routes/Routes.enum';
import Carousel from '@/containers/Carousel/Carousel';
import laTroupeCarouselData from '@/assets/pages/laTroupe/laTroupeCarouselData';

export const metadata: Metadata = {
  title: 'La troupe',
  openGraph: {
    title: 'La troupe',
  },
};

export default function LaTroupePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainTroupe}
          alt="Gavroche Les Misérables"
          style={{ objectPosition: '50% 70%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Typography.Title level={1}>La troupe</Typography.Title>
        <div className="lg:px-40px">
          <Section
            pages={laTroupeSection.pages}
            image={laTroupeSection.image}
            extra={{
              firstLink: {
                text: 'Les rôles incarnés par la troupe',
                url: RoutesPathEnum.PERSONNAGES,
              },
              secondLink: {
                text: 'Découvrir',
                url: RoutesPathEnum.PERSONNAGES,
              },
            }}
          />
        </div>
        <div className="lg:px-120px px-20px lg:mb-120px mb-60px">
          <Carousel items={laTroupeCarouselData} autoplay />
        </div>
      </div>
    </>
  );
}
