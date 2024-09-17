import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import heroSlider1 from '@/assets/pages/homepage/homepage-carousel/hero_slider_1.jpg';
import heroSlider2 from '@/assets/pages/homepage/homepage-carousel/hero_slider_2.jpg';
import heroSlider3 from '@/assets/pages/homepage/homepage-carousel/hero_slider_3.jpg';
import heroSlider4 from '@/assets/pages/homepage/homepage-carousel/hero_slider_4.jpg';
import heroSlider5 from '@/assets/pages/homepage/homepage-carousel/hero_slider_5.jpg';
import mobileHeroSlider1 from '@/assets/pages/homepage/homepage-carousel/mobile/mobile_hero_slider_1.jpg';
import mobileHeroSlider2 from '@/assets/pages/homepage/homepage-carousel/mobile/mobile_hero_slider_2.jpg';
import Section from '@/containers/Section/Section';
import HomepageAgenda from '@/containers/HomepageAgenda/HomepageAgenda';
import {
  newsSection,
  showcasesSection,
} from '@/assets/pages/homepage/homepageSections';
import SupportSection from '@/containers/SupportSection/SupportSection';
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
              url: '/dossierpressemiserables0524.pdf',
              newTab: true,
            },
            secondLink: {
              text: 'Découvrir',
              url: '/',
            },
          }}
          adjustImage={false}
        />
      </div>
      <HomepageAgenda />
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
          adjustImage={false}
        />
      </div>
      <SupportSection />
    </>
  );
}
