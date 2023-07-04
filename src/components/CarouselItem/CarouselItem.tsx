import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface CarouselItemProps {
  imageSrc: StaticImageData,
  alt: string,
  style?: React.CSSProperties,
}

function CarouselItem({ imageSrc, alt, style = {} }: CarouselItemProps) {
  return (
    <div className="lg:h-carousel h-headerImage">
      <Image style={style} className="w-full h-headerImage lg:h-carousel object-cover" src={imageSrc} alt={alt} />
    </div>
  );
}

export default CarouselItem;
