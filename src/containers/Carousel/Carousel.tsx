'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItem, { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';

interface CarouselProps {
  /**
   * The carousel pictures
   */
  items: CarouselItemProps[],
  /**
   * Optional autoplay
   * Default to false
   */
  autoplay?: boolean,
}

function CarouselContainer({ items, autoplay }: CarouselProps) {
  return (
    <Carousel
      autoPlay={autoplay}
      infiniteLoop={autoplay}
      interval={5000}
      showArrows
      showThumbs={false}
      showStatus={false}
    >
      {items.map(({ imageSrc, alt, style }) => (
        <CarouselItem key={`${alt}-index`} imageSrc={imageSrc} alt={alt} style={style} />
      ))}
    </Carousel>
  );
}

export default CarouselContainer;
