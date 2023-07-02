import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import carousel1 from '@/assets/pages/orchestre/images/carouselorchestre1.jpg';
import carousel2 from '@/assets/pages/orchestre/images/carouselorchestre2.jpg';
import carousel3 from '@/assets/pages/orchestre/images/carouselorchestre3.jpg';
import carousel4 from '@/assets/pages/orchestre/images/carouselorchestre4.jpg';
import carousel5 from '@/assets/pages/orchestre/images/carouselorchestre5.jpg';
import carousel6 from '@/assets/pages/orchestre/images/carouselorchestre6.jpg';
import carousel7 from '@/assets/pages/orchestre/images/carouselorchestre7.jpg';
import carousel8 from '@/assets/pages/orchestre/images/carouselorchestre8.jpeg';
import carousel9 from '@/assets/pages/orchestre/images/carouselorchestre9.jpg'

const orchestreCarouselData: CarouselItemProps[] = [
  {
    imageSrc: carousel1,
    alt: 'Cornistes de l\'ORPM',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel2,
    alt: 'Clarinettistes et Cuivres de l\'ORPM',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel3,
    alt: 'L\'Orchestre de l\'ORPM en concert',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel4,
    alt: 'Musiciennes de l\'ORPM - Clarinettiste et Cornistes',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel5,
    alt: 'Les flûtistes de l\'ORPM',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel6,
    alt: 'Basson et saxophones l\'ORPM',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel7,
    alt: 'Les bassonistes de l\'ORPM',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel8,
    alt: 'Répétitions de l\'ORPM',
    style: { objectPosition: 'center' },
  },
  {
    imageSrc: carousel9,
    alt: 'Répétitions de l\'ORPM',
    style: { objectPosition: '50% 40%' },
  },
];

export default orchestreCarouselData;
