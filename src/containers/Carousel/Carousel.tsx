'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItem, { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';

interface CarouselProps {
  items: CarouselItemProps[],
}

function CarouselContainer({ items }: CarouselProps) {
  return (
    <Carousel
      className="h-carousel"
      showArrows
      showThumbs={false}
    >
      {items.map(({ imageSrc, alt, style }, index) => (
        <CarouselItem key={`${alt}-index`} imageSrc={imageSrc} alt={alt} style={style} />
      ))}
    </Carousel>
  );
}

export default CarouselContainer;
