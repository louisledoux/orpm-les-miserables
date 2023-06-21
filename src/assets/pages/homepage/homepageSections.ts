import { SectionData } from '@/types/Section.type';
import newsImage from '@/assets/pages/homepage/images/newsImage.png';
import onJoueImage from '@/assets/pages/homepage/images/onJoueImage.png';

export const newsSection: SectionData = {
  key: 'Section News',
  pages: [{
    title: 'En ce moment',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum aucto',
    ],
  }],
  image: {
    image: newsImage,
    alt: 'Affiche des Misérables',
  },
};

export const playSection: SectionData = {
  key: 'Section On Joue',
  pages: [{
    title: 'On joue !',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum aucto',
    ],
  }],
  image: {
    image: onJoueImage,
    alt: 'Un homme qui joue du saxophone',
  },
};
