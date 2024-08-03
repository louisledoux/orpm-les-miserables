'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import useViewport from '@/hooks/useViewport';

export interface CarouselItemProps {
  imageSrc: StaticImageData,
  mobileImageSrc?: StaticImageData,
  alt: string,
  style?: React.CSSProperties,
  hero?: boolean,
}

function CarouselItem({
  imageSrc, mobileImageSrc, alt, hero, style = {},
}: CarouselItemProps) {
  const { isMobileScreen } = useViewport();

  return (
    <div className={`${hero ? 'lg:h-carousel h-headerImage' : 'h-353px lg:h-full lg:max-h-[700px]'}`}>
      <Image
        style={style}
        className={`w-full ${hero ? 'lg:h-carousel h-headerImage lg:object-hero-desktop object-hero-mobile' : 'h-353px lg:h-full lg:max-h-[700px]'} object-cover`}
        src={isMobileScreen ? mobileImageSrc || imageSrc : imageSrc}
        alt={alt}
      />
    </div>
  );
}

export default CarouselItem;
