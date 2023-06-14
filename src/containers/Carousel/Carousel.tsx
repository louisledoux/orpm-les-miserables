'use client';

import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import CarouselItem, { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';

interface CarouselProps {
  items: CarouselItemProps[],
}

function Carousel({ items }: CarouselProps) {
  return (
    <ReactCarousel className="h-carousel">
      {items.map(({ imageSrc, alt, style }, index) => (
        <CarouselItem key={`${alt}-index`} imageSrc={imageSrc} alt={alt} style={style} />
      ))}
    </ReactCarousel>
  );
}

export default Carousel;
