'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItem, { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import useViewport from '@/hooks/useViewport';

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
  hero?: boolean,
}

function CarouselContainer({ items, autoplay, hero }: CarouselProps) {
  const { isMobileScreen } = useViewport();

  function getCarouselItems() {
    if (isMobileScreen) {
      return items.filter(({ mobileImageSrc }) => mobileImageSrc);
    }
    return items;
  }

  function showIndicators() {
    if (items.length < 10) {
      return true;
    }
    return !isMobileScreen;
  }

  return (
    <Carousel
      autoPlay={autoplay}
      infiniteLoop={autoplay}
      interval={5000}
      transitionTime={1000}
      showArrows
      showIndicators={showIndicators()}
      showThumbs={false}
      showStatus={false}
    >
      {getCarouselItems().map(({
        imageSrc, mobileImageSrc, alt, style,
      }) => (
        <CarouselItem hero={hero} key={`${alt}-index`} imageSrc={imageSrc} mobileImageSrc={mobileImageSrc} alt={alt} style={style} />
      ))}
    </Carousel>
  );
}

export default CarouselContainer;
