import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import React from 'react';
import Carousel from '@/containers/Carousel/Carousel';
import localFont from 'next/font/local';
import memphis from '@/assets/pages/precedentsSpectacles/images/Memphis.jpg';
import precedentsSpectaclesCarouselData1 from '@/assets/pages/precedentsSpectacles/precedentsSpectaclesCarouselData1';
import precedentsSpectaclesCarouselData2 from '@/assets/pages/precedentsSpectacles/precedentsSpectaclesCarouselData2';
import precedentsSpectaclesCarouselData3 from '@/assets/pages/precedentsSpectacles/precedentsSpectaclesCarouselData3';

const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });

export const metadata: Metadata = {
  title: 'Nos précédents spectacles',
  openGraph: {
    title: 'Nos précédents spectacles',
  },
};

export default function PrecedentsSpectaclesPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={memphis}
          alt="Memphis spectacle ORPM"
          style={{ objectPosition: '40% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-60px lg:mb-120px">
        <Typography.Title level={1}>
          Nos précédents spectacles
        </Typography.Title>
        <div className="mb-30px lg:mb-60px lg:px-120px px-20px">
          <Carousel items={precedentsSpectaclesCarouselData3} autoplay />
        </div>
        <div className="mb-30px lg:mb-60px text-center text-22 font-light lg:px-120px px-20px">
          Au fil des années, nous avons eu l&apos;immense privilège de partager notre passion
          avec un public de plus en plus large. En 2022, nous avons relevé un nouveau défi:
          Emmener notre public faire un voyage à travers le temps à l&apos;époque de la ségrégation
          raciale dans la ville de Memphis, Etats-Unis. Avec plus de 2 heures de spectacle,
          nous avons exploré le Blues, la Soul et le Rock&apos;n Roll en compagnie des personnages
          de Huey Calhoun et de Felicia Farrell. Ce nouveau projet a attiré un public nombreux
          et enthousiaste qui a confirmé notre place dans la production de comédies musicales
          dans la tradition de celles de Londres ou de Broadway.
        </div>
        <iframe className="w-full mb-60px lg:mb-120px flex justify-center h-headerImage lg:h-700px lg:px-120px px-20px" src="https://www.youtube.com/embed/exzzOJx751w" title="Memphis ORPM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <div className="lg:mb-60px mb-30px lg:px-120px px-20px">
          <Carousel items={precedentsSpectaclesCarouselData2} autoplay />
        </div>
        <div className="mb-60px lg:mb-120px text-center text-22 font-light lg:px-120px px-20px">
          En 2018-2019, nous avons continué à émerveiller les spectateurs avec notre comédie
          musicale “FAME”, un spectacle qui a rassemblé 11000 personnes au Colisée de Roubaix
          et toute l&apos;Euro-métropole.
        </div>
        <div className={`${amithenFont.className} mb-60px lg:mb-120px text-center text-4xl lg:text-h2 text-primary bg-secondary lg:px-120px px-20px lg:py-60px py-30px`}>
          Nous sommes fiers de partager ces aventures,
          et nous sommes impatients de vous accueillir à nos représentations des Misérables !
        </div>
        <div className="mb-30px lg:mb-60px lg:px-120px px-20px">
          <Carousel items={precedentsSpectaclesCarouselData1} autoplay />
        </div>
        <div className="mb-60px lg:mb-120px text-center text-22 font-light lg:px-120px px-20px">
          En 2015, nous avons présenté “Billy Elliot” sur les scènes du Théâtre Sébastopol et
          dans toute la région, offrant à plus de 8000 personnes une expérience inoubliable.
        </div>
      </div>
    </>
  );
}
