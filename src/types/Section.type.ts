import { StaticImageData } from 'next/image';
import React from 'react';

export type SectionPageType = {
  title?: string,
  /**
   * Array of paragraph strings that can contain HTML markup
   */
  paragraphs: string[],
  reverse?: boolean,
  style? : React.CSSProperties,
}

export type SectionImageType = {
  image: StaticImageData,
  alt: string,
  style?: React.CSSProperties,
}

export type SectionData = {
  key: string,
  pages: SectionPageType[],
  image: SectionImageType,
}

export type PersonnagesSectionData = {
  key: string,
  pages: SectionPageType[],
  images: SectionImageType[],
}
