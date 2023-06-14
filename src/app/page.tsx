import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import image1 from '@/assets/homepage-carousel/image1.png';

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
      <Carousel items={items} />
    </>
  );
}
