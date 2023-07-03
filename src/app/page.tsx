import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import image1 from '@/assets/pages/homepage/homepage-carousel/image1.png';
import Section from '@/containers/Section/Section';
import Agenda from '@/containers/Agenda/Agenda';
import { newsSection, playSection } from '@/assets/pages/homepage/homepageSections';
import SupportSection from '@/containers/SupportSection/SupportSection';

const items: CarouselItemProps[] = [
  {
    imageSrc: image1,
    alt: 'Cosette dans la rue',
    style: { objectPosition: '80% 80%' },
  },
];

export default function Home() {
  return (
    <>
      <div className="mb-120px">
        <Carousel items={items} />
      </div>
      <div className="mb-120px">
        <Section
          pages={newsSection.pages}
          image={newsSection.image}
          extra={{
            firstLink: {
              text: 'Télécharger le dossier de presse',
              url: '/',
              mobile: 'Téléchargez le dossier de presse'
            },
            secondLink: {
              text: 'Découvrir',
              url: '/',
            },
          }}
        />
      </div>
      <Agenda />
      <div className="mb-120px">
        <Section
          pages={playSection.pages}
          image={playSection.image}
          extra={{
            firstLink: {
              text: 'Jouez et découvrez les Misérables autrement',
              url: '/',
              mobile: 'Jouez avec nous !'
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
