import heroSlider1 from '@/assets/pages/homepage/homepage-carousel/hero_slider_1.jpg';
import heroSlider2 from '@/assets/pages/homepage/homepage-carousel/hero_slider_2.jpg';
import heroSlider3 from '@/assets/pages/homepage/homepage-carousel/hero_slider_3.jpg';
import heroSlider4 from '@/assets/pages/homepage/homepage-carousel/hero_slider_4.jpg';
import heroSlider5 from '@/assets/pages/homepage/homepage-carousel/hero_slider_5.jpg';
import mobileHeroSlider1 from '@/assets/pages/homepage/homepage-carousel/mobile/mobile_hero_slider_1.jpg';
import mobileHeroSlider2 from '@/assets/pages/homepage/homepage-carousel/mobile/mobile_hero_slider_2.jpg';
import {
  newsSection,
} from '@/assets/pages/homepage/homepageSections';
import previewCarousel1 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_1.jpg';
import previewCarousel10 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_10.jpg';
import previewCarousel11 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_11.jpg';
import previewCarousel12 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_12.jpg';
import previewCarousel13 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_13.jpg';
import previewCarousel14 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_14.jpg';
import previewCarousel15 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_15.jpg';
import previewCarousel2 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_2.jpg';
import previewCarousel3 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_3.jpg';
import previewCarousel4 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_4.jpg';
import previewCarousel5 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_5.jpg';
import previewCarousel6 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_6.jpg';
import previewCarousel7 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_7.jpg';
import previewCarousel8 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_8.jpg';
import previewCarousel9 from '@/assets/pages/homepage/renamed-preview-carousel/preview_carousel_9.jpg';
import Button from '@/components/Button/Button';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import Carousel from '@/containers/Carousel/Carousel';
import Section from '@/containers/Section/Section';
import RoutesPathEnum from '@/routes/Routes.enum';

const items: CarouselItemProps[] = [
  {
    imageSrc: heroSlider1,
    mobileImageSrc: mobileHeroSlider1,
    alt: 'Les Misérables - La culture au service de la solidarité',
  },
  {
    imageSrc: heroSlider2,
    mobileImageSrc: mobileHeroSlider2,
    alt: 'Les Misérables - Le 111 des Arts',
  },
  {
    imageSrc: heroSlider3,
    alt: 'Les Misérables - ASP Gilbert Deniselle',
  },
  {
    imageSrc: heroSlider4,
    alt: 'Les Misérables - La Pommeraie',
  },
  {
    imageSrc: heroSlider5,
    alt: 'Les Misérables - Les Restos du Coeur',
  },
];

const previewItems: CarouselItemProps[] = [
  { imageSrc: previewCarousel6, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel2, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel3, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel4, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel5, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel1, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel7, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel8, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel9, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel10, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel11, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel12, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel13, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel14, alt: 'Les Misérables - Photo du spectacle' },
  { imageSrc: previewCarousel15, alt: 'Les Misérables - Photo du spectacle' },
];

export default function Home() {
  return (
    <>
      <h1 className="hidden">ORPM Spectacle - Les Misérables</h1>
      <div className="lg:mb-120px mb-[30px]">
        <Carousel items={items} autoplay hero />
      </div>
      <div className="lg:mb-120px">
        <Section
          pages={newsSection.pages}
          image={newsSection.image}
          adjustImage={false}
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Carousel items={previewItems} autoplay />
        <div className="mb-[30px] px-20px">
          <p className="text-xs text-justify mt-2 text-neutral-600">
            <strong>Photographes:</strong>
            {' '}
            Angela Antiga, Audrey Laversin, Aurélie Marcellak, Cyril Barrière, Dimitri Croquet,
            Hervé Gaumont, Jean-Michel Grimonprez, Olivier Delmarre, Nathalie Klein,
            Nicolas Loison, Pierre Loyez, Romain Robine, Virginie Fregnac
          </p>
        </div>
        <div className="flex justify-center mb-60px lg:mb-120px px-20px">
          <Button size="small" type="secondary" url={RoutesPathEnum.GALERIE} title="Voir toutes les photos" />
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
