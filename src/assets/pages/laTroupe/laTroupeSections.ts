import { SectionData } from '@/types/Section.type';
import laTroupeImg from '@/assets/pages/laTroupe/images/latroupeimg.jpg';

const laTroupeSection: SectionData = {
  key: 'Section La Troupe',
  pages: [{
    title: 'La troupe',
    paragraphs: [
      'La troupe est une partie essentielle pour la réussite de notre projet de comédie musicale «Les Misérables». Notre troupe comprend 45 acteurs, chanteurs et danseurs ainsi que 41 musiciens, tous passionnés par l\'univers du spectacle.',
      'Notre objectif est de donner notre meilleur pour atteindre l\'objectif commun :\n vous proposer un spectacle totalement live en vous faisant voyager dans le passé à travers le célèbre roman de Victor Hugo et rendre ce moment mémorable.',
    ],
  }],
  image: {
    image: laTroupeImg,
    alt: 'La troupe en concert',
  },
};

export default laTroupeSection;
