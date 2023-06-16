import { StaticImageData } from 'next/image';
import React from 'react';

export type SectionPageType = {
  title: string,
  paragraphs: string[]
}

export type SectionImageType = {
  image: StaticImageData,
  alt: string,
  style?: React.CSSProperties,
}
