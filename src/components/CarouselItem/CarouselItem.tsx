import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface CarouselItemProps {
  imageSrc: StaticImageData,
  alt: string,
  style?: React.CSSProperties,
}

function CarouselItem({ imageSrc, alt, style }: CarouselItemProps) {
  return (
    <div className="h-carousel">
      <Image style={style} className="w-full h-carousel object-cover" src={imageSrc} alt={alt} />
    </div>
  );
}

CarouselItem.defaultProps = {
  style: {},
};

export default CarouselItem;
