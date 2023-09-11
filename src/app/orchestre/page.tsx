import { Metadata } from 'next';
import orchestreHeroImage from '@/assets/pages/orchestre/images/mainorchestre.jpg';
import Typography from '@/components/Typography/Typography';
import Section from '@/containers/Section/Section';
import Image from 'next/image';
import React from 'react';
import Button from '@/components/Button/Button';
import RoutesPathEnum from '@/routes/Routes.enum';
import Carousel from '@/containers/Carousel/Carousel';
import orchestreCarouselData from '@/assets/pages/orchestre/orchestreCarouselData';
import {
  directionMusicaleSection,
  orchestreSection,
} from '@/assets/pages/orchestre/orchestreSections';

export const metadata: Metadata = {
  title: "L'orchestre",
  openGraph: {
    title: "L'orchestre",
  },
};

export default function OrchestrePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={orchestreHeroImage}
          alt="Joueur de trompette ORPM"
          style={{ objectPosition: '50% 45%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Typography.Title level={1}>
          L&apos;orchestre
        </Typography.Title>
        <Section pages={orchestreSection.pages} image={orchestreSection.image} />
        <div className="flex flex-col items-center bg-secondary py-30px px-20px mb-60px lg:py-60px lg:px-40px lg:mb-120px">
          <Typography.Title level={2} className="lg:mb-60px mb-30px text-center">
            La musique, directement chez vous
          </Typography.Title>
          {/* TODO: revise text-22 classname to avoid CSS rule overrides */}
          <Typography.Paragraph className="text-white text-center font-normal !text-base lg:!text-22 mb-30px">
            Écoutez-nous avant même de venir à nos représentations,
            et découvrez nos précédents spectacles !
          </Typography.Paragraph>
          <Button
            title="Découvrir"
            url={RoutesPathEnum.PRECEDENTS_SPECTACLES}
            type="primary"
          />
        </div>
        <Section
          pages={directionMusicaleSection.pages}
          image={directionMusicaleSection.image}
          reverse
        />
        <div className=" px-20px mb-60px lg:px-120px lg:mb-120px">
          <Carousel items={orchestreCarouselData} autoplay hero />
        </div>
      </div>
    </>
  );
}
