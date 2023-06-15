import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface MainImgProps {
    imageSrc: StaticImageData,
    alt: string,
    style?: React.CSSProperties,
  }

function MainImgItem ({ imageSrc, alt, style = {} }: MainImgProps) {
    return (
        <div className="h-mainImg w-full">
          <Image style={style} className="w-full h-mainImg object-cover" src={imageSrc} alt={alt} />
        </div>
      );
}

export default MainImgItem;