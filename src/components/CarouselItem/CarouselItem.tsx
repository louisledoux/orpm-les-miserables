'use client';

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
    <div className={`${hero ? 'lg:h-carousel h-headerImage' : 'h-353px lg:h-full lg:max-h-[700px]'}`}>
      <Image
        style={style}
        className={`w-full ${hero ? 'lg:h-carousel h-headerImage lg:object-hero-desktop object-hero-mobile' : 'h-353px lg:h-full lg:max-h-[700px]'} object-cover`}
        src={imageSrc}
        alt={alt}
      />
    </div>
  );
}

export default CarouselItem;
