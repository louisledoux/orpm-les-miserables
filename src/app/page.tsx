import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import cosette from '@/assets/pages/homepage/homepage-carousel/cosette.jpg';
import cosetteAdulte from '@/assets/pages/homepage/homepage-carousel/cosette2.jpg';
import eponine from '@/assets/pages/homepage/homepage-carousel/eponime.jpg';
import gavroche from '@/assets/pages/homepage/homepage-carousel/gavroche.jpg';
import jeanValjean from '@/assets/pages/homepage/homepage-carousel/jeanValjean.jpg';
// eslint-disable-next-line import/no-unresolved
import thernardier from '@/assets/pages/homepage/homepage-carousel/thernardier.jpg';
import Section from '@/containers/Section/Section';
import Agenda from '@/containers/Agenda/Agenda';
import { newsSection, playSection } from '@/assets/pages/homepage/homepageSections';
import SupportSection from '@/containers/SupportSection/SupportSection';
import RoutesPathEnum from '@/routes/Routes.enum';

const items: CarouselItemProps[] = [
  {
    imageSrc: jeanValjean,
    alt: 'Jean Valjean',
    style: { objectPosition: '50% 15%' },
  },
  {
    imageSrc: cosetteAdulte,
    alt: 'Cosette révolution',
    style: { objectPosition: '50% 15%' },
  },
  {
    imageSrc: gavroche,
    alt: 'Gavroche révolution',
    style: { objectPosition: '50% 15%' },
  },
  {
    imageSrc: eponine,
    alt: 'Eponine Révolution',
    style: { objectPosition: '50% 20%' },
  },
  {
    imageSrc: thernardier,
    alt: 'Thénardier Révolution',
    style: { objectPosition: '50% 10%' },
  },
  {
    imageSrc: cosette,
    alt: 'Cosette dans la rue',
    style: { objectPosition: '50% 80%' },
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
      <div id="jouons" className="lg:mb-120px mb:60px">
        <Section
          pages={playSection.pages}
          image={playSection.image}
          extra={{
            firstLink: {
              text: 'Jouez et découvrez les Misérables autrement',
              url: RoutesPathEnum.JOUONS,
              mobile: 'Jouez avec nous !',
            },
            secondLink: {
              text: 'Jouer',
              url: RoutesPathEnum.JOUONS,
            },
          }}
          reverse
        />
      </div>
      <SupportSection />
    </>
  );
}
