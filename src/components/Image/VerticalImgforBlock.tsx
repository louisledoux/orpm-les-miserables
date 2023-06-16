import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface VerticalImgforBlockProps {
  src: StaticImageData;
  alt: string;
  style?: React.CSSProperties;
}

function VerticalImgforBlock({ src, alt, style }: VerticalImgforBlockProps) {
  return (
    <div className="max-w-inBlock">
      <Image src={src} alt={alt} style={style} className="object-cover" />
    </div>
  );
}

export default VerticalImgforBlock;
