import { SectionData } from '@/types/Section.type';
import newsImage from '@/assets/pages/homepage/images/newsImage.jpg';
import onJoueImage from '@/assets/pages/homepage/images/onJoueImage.jpg';

export const newsSection: SectionData = {
  key: 'Section News',
  pages: [{
    title: 'En ce moment',
    paragraphs: [
      'Nouveau projet, nouveaux objectifs !',
      'Nous lançons une campagne de financement participatif pour financer les costumes de notre nouveau projet : Les Misérables ! L\'ORPM besoin de votre aide pour donner vie à cette expérience théâtrale mémorable, et créer des costumes à la hauteur de cette œuvre intemporelle ! Avec votre soutien, nous pourrons créer des costumes de qualité pour donner vie aux personnages emblématiques de cette œuvre et vous transporter dans l\'univers du 19e siècle.',
      'Vous pouvez nous aider en contribuant à notre projet, nous vous invitons à scroller en bas de page pour en savoir plus !',
      'Tous les dons sont sujets à déduction fiscale comme nous sommes une association (un don de 100€ ne vous coute que 34€ après déduction).',
      'Votre soutien, qu\'il soit financier ou par le biais de partages sur les réseaux sociaux, est inestimable pour nous et nous vous en sommes reconnaissants. Ensemble, nous allons atteindre nos objectifs pour créer une nouvelle expérience artistique incroyable !',
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
      'Curieux de découvrir l\'univers des Misérables autrement ? Jouez avec nous, et aventurez-vous dans les méandres des oeuvres de Victor Hugo.',
      '4 jeux interactifs vont vous permettre de découvrir les différents éléments de l\'univers des Misérables !',
      'Nous vous invitons également à découvrir l\'histoire des Misérables et sa comédie musicale dans les sections de notre site pour enrichir votre aventure !',
      'Prêts à partir à l\'aventure ? C\'est parti !',
    ],
  }],
  image: {
    image: onJoueImage,
    alt: 'Un homme qui joue du saxophone',
  },
};
