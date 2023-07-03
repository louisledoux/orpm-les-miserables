import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import image1 from '@/assets/pages/homepage/homepage-carousel/image1.png';
import image2 from '@/assets/pages/homepage/homepage-carousel/image2.jpg';
import image3 from '@/assets/pages/homepage/homepage-carousel/image3.png';
import image4 from '@/assets/pages/homepage/homepage-carousel/image4.png';
import Section from '@/containers/Section/Section';
import Agenda from '@/containers/Agenda/Agenda';
import { newsSection, playSection } from '@/assets/pages/homepage/homepageSections';
import SupportSection from '@/containers/SupportSection/SupportSection';

const items: CarouselItemProps[] = [
  {
    imageSrc: image1,
    alt: 'Cosette dans la rue',
    style: { objectPosition: '50% 80%' },
  },
  {
    imageSrc: image2,
    alt: 'Cosette révolution',
    style: { objectPosition: '50% 10%' },
  },
  {
    imageSrc: image3,
    alt: 'Eponyne Révolution',
    style: { objectPosition: '50% 55%' },
  },
  {
    imageSrc: image4,
    alt: 'Fantine et Cosette',
    style: { objectPosition: '50% 0%' },
  },
];

export default function Home() {
  return (
    <>
      <div className="lg:mb-120px mb-60px">
        <Carousel items={items} autoplay />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Section
          pages={newsSection.pages}
          image={newsSection.image}
          extra={{
            firstLink: {
              text: 'Télécharger le dossier de presse',
              url: '/',
            },
            secondLink: {
              text: 'Découvrir',
              url: '/',
            },
          }}
        />
      </div>
      <Agenda />
      <div className="lg:mb-120px mb:60px">
        <Section
          pages={playSection.pages}
          image={playSection.image}
          extra={{
            firstLink: {
              text: 'Jouez et découvrez les Misérables autrement',
              url: '/',
            },
            secondLink: {
              text: 'En cours de construction',
              url: '/',
            },
          }}
          reverse
        />
      </div>
      <SupportSection />
    </>
  );
}
