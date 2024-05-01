import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import heroSlider1 from '@/assets/pages/homepage/homepage-carousel/hero_slider_1.jpg';
import heroSlider2 from '@/assets/pages/homepage/homepage-carousel/hero_slider_2.jpg';
import heroSlider3 from '@/assets/pages/homepage/homepage-carousel/hero_slider_3.jpg';
import heroSlider4 from '@/assets/pages/homepage/homepage-carousel/hero_slider_4.jpg';
import Section from '@/containers/Section/Section';
import Agenda from '@/containers/Agenda/Agenda';
import {
  newsSection,
  showcasesSection,
} from '@/assets/pages/homepage/homepageSections';
import SupportSection from '@/containers/SupportSection/SupportSection';
import RoutesPathEnum from '@/routes/Routes.enum';

const items: CarouselItemProps[] = [
  {
    imageSrc: heroSlider1,
    alt: 'Les Misérables - La culture au service de la solidarité',
  },
  {
    imageSrc: heroSlider2,
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
];

export default function Home() {
  return (
    <>
      <h1 className="hidden">ORPM Spectacle - Les Misérables</h1>
      <div className="lg:mb-120px mb-60px">
        <Carousel items={items} autoplay hero />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Section
          pages={newsSection.pages}
          image={newsSection.image}
          extra={{
            firstLink: {
              text: 'Télécharger le dossier de presse',
              url: '/dossierpressemiserables0923.pdf',
              newTab: true,
            },
            secondLink: {
              text: 'Découvrir',
              url: '/',
            },
          }}
        />
      </div>
      <Agenda />
      <div id="showcases" className="lg:mb-120px mb:60px">
        <Section
          pages={showcasesSection.pages}
          image={showcasesSection.image}
          extra={{
            firstLink: {
              text: 'Découvrez nos showcases',
              url: RoutesPathEnum.SHOWCASES,
            },
            secondLink: {
              text: 'Galerie',
              url: RoutesPathEnum.SHOWCASES,
            },
          }}
          reverse
        />
      </div>
      <SupportSection />
    </>
  );
}
