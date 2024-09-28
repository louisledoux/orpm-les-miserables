import { Metadata } from 'next';
import Image from 'next/image';
import showcaseLambersart from '@/assets/pages/showcases/images/showcaseLambersart.jpg';
import React from 'react';
import Typography from '@/components/Typography/Typography';
import Carousel from '@/containers/Carousel/Carousel';
import {
  lambersartShowcaseCarouselData,
} from '@/assets/pages/showcases/showcasesCarouselData';
import Button from '@/components/Button/Button';

export const metadata: Metadata = {
  title: 'Nos showcases',
  openGraph: {
    title: 'Nos showcases',
  },
};

export default function ShowcasesPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={showcaseLambersart}
          alt="Showcase ORPM Lambersart"
          style={{ objectPosition: '40% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-60px lg:mb-120px">
        <Typography.Title level={1}>
          Nos showcases
        </Typography.Title>
      </div>
      <div className="mb-30px lg:mb-60px text-center text-22 font-light lg:px-120px px-20px">
        Découvrez les photos de nos précédents showcases. Ils sont l&apos;occasion
        pour nous de vous présenter des extraits de notre spectacle original en cours de création,
        et de vous faire découvrir les talents de nos artistes.
        Le dernier en date s&apos;est déroulé à Wattignies le 20 septembre 2024.
      </div>
      <div className="flex flex-col items-center gap-2 mb-30px lg:mb-60px lg:px-120px px-20px">
        <Carousel items={lambersartShowcaseCarouselData} autoplay />
        <span className="italic font-light">Showcase de Lambersart - 06 avril 2024</span>
      </div>
      <div className="flex justify-center mb-60px lg:mb-120px px-20px">
        <Button type="secondary" url="/#agenda" title="Nos prochaines dates" />
      </div>
    </>
  );
}
