import Button from '@/components/Button/Button';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import Typography from '@/components/Typography/Typography';
import Carousel from '@/containers/Carousel/Carousel';
import RoutesPathEnum from '@/routes/Routes.enum';
import { Metadata } from 'next';
import Image from 'next/image';

// Import all gallery images
import galerie1 from '@/assets/pages/galerie/images/galerie-1.jpg';
import galerie10 from '@/assets/pages/galerie/images/galerie-10.jpg';
import galerie11 from '@/assets/pages/galerie/images/galerie-11.jpg';
import galerie12 from '@/assets/pages/galerie/images/galerie-12.jpg';
import galerie13 from '@/assets/pages/galerie/images/galerie-13.jpg';
import galerie14 from '@/assets/pages/galerie/images/galerie-14.jpg';
import galerie15 from '@/assets/pages/galerie/images/galerie-15.jpg';
import galerie16 from '@/assets/pages/galerie/images/galerie-16.jpg';
import galerie17 from '@/assets/pages/galerie/images/galerie-17.jpg';
import galerie18 from '@/assets/pages/galerie/images/galerie-18.jpg';
import galerie19 from '@/assets/pages/galerie/images/galerie-19.jpg';
import galerie2 from '@/assets/pages/galerie/images/galerie-2.jpg';
import galerie20 from '@/assets/pages/galerie/images/galerie-20.jpg';
import galerie21 from '@/assets/pages/galerie/images/galerie-21.jpg';
import galerie22 from '@/assets/pages/galerie/images/galerie-22.jpg';
import galerie23 from '@/assets/pages/galerie/images/galerie-23.jpg';
import galerie24 from '@/assets/pages/galerie/images/galerie-24.jpg';
import galerie25 from '@/assets/pages/galerie/images/galerie-25.jpg';
import galerie26 from '@/assets/pages/galerie/images/galerie-26.jpg';
import galerie27 from '@/assets/pages/galerie/images/galerie-27.jpg';
import galerie28 from '@/assets/pages/galerie/images/galerie-28.jpg';
import galerie29 from '@/assets/pages/galerie/images/galerie-29.jpg';
import galerie3 from '@/assets/pages/galerie/images/galerie-3.jpg';
import galerie30 from '@/assets/pages/galerie/images/galerie-30.jpg';
import galerie31 from '@/assets/pages/galerie/images/galerie-31.jpg';
import galerie32 from '@/assets/pages/galerie/images/galerie-32.jpg';
import galerie33 from '@/assets/pages/galerie/images/galerie-33.jpg';
import galerie34 from '@/assets/pages/galerie/images/galerie-34.jpg';
import galerie35 from '@/assets/pages/galerie/images/galerie-35.jpg';
import galerie36 from '@/assets/pages/galerie/images/galerie-36.jpg';
import galerie37 from '@/assets/pages/galerie/images/galerie-37.jpg';
import galerie38 from '@/assets/pages/galerie/images/galerie-38.jpg';
import galerie39 from '@/assets/pages/galerie/images/galerie-39.jpg';
import galerie4 from '@/assets/pages/galerie/images/galerie-4.jpg';
import galerie40 from '@/assets/pages/galerie/images/galerie-40.jpg';
import galerie41 from '@/assets/pages/galerie/images/galerie-41.jpg';
import galerie42 from '@/assets/pages/galerie/images/galerie-42.jpg';
import galerie43 from '@/assets/pages/galerie/images/galerie-43.jpg';
import galerie44 from '@/assets/pages/galerie/images/galerie-44.jpg';
import galerie45 from '@/assets/pages/galerie/images/galerie-45.jpg';
import galerie46 from '@/assets/pages/galerie/images/galerie-46.jpg';
import galerie47 from '@/assets/pages/galerie/images/galerie-47.jpg';
import galerie48 from '@/assets/pages/galerie/images/galerie-48.jpg';
import galerie49 from '@/assets/pages/galerie/images/galerie-49.jpeg';
import galerie5 from '@/assets/pages/galerie/images/galerie-5.jpg';
import galerie50 from '@/assets/pages/galerie/images/galerie-50.jpeg';
import galerie6 from '@/assets/pages/galerie/images/galerie-6.jpg';
import galerie7 from '@/assets/pages/galerie/images/galerie-7.jpg';
import galerie8 from '@/assets/pages/galerie/images/galerie-8.jpg';
import galerie9 from '@/assets/pages/galerie/images/galerie-9.jpg';

export const metadata: Metadata = {
  title: 'Galerie photo',
  openGraph: {
    title: 'Galerie photo',
  },
};

const galerieItems: CarouselItemProps[] = [
  { imageSrc: galerie1, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie2, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie3, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie4, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie5, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie6, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie7, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie8, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie9, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie10, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie11, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie12, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie13, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie14, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie15, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie16, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie17, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie18, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie19, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie20, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie21, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie22, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie23, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie24, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie25, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie26, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie27, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie28, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie29, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie30, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie31, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie32, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie33, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie34, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie35, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie36, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie37, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie38, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie39, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie40, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie41, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie42, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie43, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie44, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie45, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie46, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie47, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie48, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie49, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
  { imageSrc: galerie50, alt: 'Les Misérables - Photo du spectacle', style: { objectFit: 'scale-down' } },
];

export default function GaleriePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={galerie34}
          alt="Galerie photo ORPM Les Misérables"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-60px lg:mb-120px">
        <Typography.Title level={1}>
          Galerie photo
        </Typography.Title>
      </div>
      <div className="mb-30px lg:mb-60px text-center text-22 font-light lg:px-120px px-20px">
        Découvrez les plus beaux moments de notre spectacle à travers cette galerie photo.
        Nos artistes, nos décors, l&apos;ambiance de nos représentations... Une immersion
        visuelle dans l&apos;univers des Misérables tel que nous le mettons en scène.
      </div>
      <div className="lg:mb-120px mb-60px">
        <Carousel items={galerieItems} className="bg-gray-100" autoplay />
        <div className="px-20px">
          <p className="text-xs text-justify mt-2 text-neutral-600">
            <strong>Photographes:</strong>
            {' '}
            Angela Antiga, Audrey Laversin, Aurélie Marcellak, Cyril Barrière, Dimitri Croquet,
            Hervé Gaumont, Jean-Michel Grimonprez, Olivier Delmarre, Nathalie Klein,
            Nicolas Loison, Pierre Loyez, Romain Robine, Virginie Fregnac
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:mb-120px mb-60px px-20px">
        <Button
          title="Choisissez la date de votre spectacle"
          url={RoutesPathEnum.AGENDA}
          type="primary"
        />
      </div>
    </>
  );
}
