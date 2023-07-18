import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface CarouselItemProps {
  imageSrc: StaticImageData,
  alt: string,
  style?: React.CSSProperties,
  hero?: boolean,
}

function CarouselItem({
  imageSrc, alt, hero, style = {},
}: CarouselItemProps) {
  return (
    <div className={`${hero ? 'lg:h-carousel' : ''} h-headerImage`}>
      <Image
        style={style}
        className={`w-full h-headerImage ${hero ? 'lg:h-carousel' : ''} object-cover`}
        src={imageSrc}
        alt={alt}
      />
    </div>
  );
}

export default CarouselItem;
