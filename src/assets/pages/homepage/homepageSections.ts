import { SectionData } from '@/types/Section.type';
import newsImage from '@/assets/pages/homepage/images/newsImage.png';
import onJoueImage from '@/assets/pages/homepage/images/onJoueImage.png';

export const newsSection: SectionData = {
  key: 'Section News',
  pages: [{
    title: 'En ce moment',
    paragraphs: [
      'Nouveau projet, nouveaux objectifs !',
      'Nous lançons une campagne de financement participatif pour financer les costumes de notre nouveau projet : Les Misérables ! Nous avons besoin de votre aide pour donner vie à cette expérience théâtrale mémorable, et créer des costumes à la hauteur de cette œuvre intemporelle ! Avec votre soutien, nous pourrons créer des costumes de qualité pour donner vie aux personnages emblématiques de cette œuvre et vous transporter dans l\'univers du 19e siècle.',
      'Vous pouvez nous aider via le lien ci-dessous :',
      'lien en attente',
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
      'Curieux de découvrir l\'univers des Misérables autrement ? Jouez avec nous, et aventurez-vous dans les méandres des oeuvres de Victor Hugo',
      'La page de jeux est en cours de construction, nous vous invitons à revenir très bientôt !',
      'Vous serez informés de l\'ouverture de la page et des animations ludiques via nos réseaux sociaux, n\'hésitez pas à nous suivre sur nos pages Facebook et Instagram pour ne rien râter de nos actualités !',
      'En attendant, nous vous invitons à découvrir l\'histoire des Misérables ici et sa comédie musicale ici !',
      'Bonne lecture ! '
    ],
  }],
  image: {
    image: onJoueImage,
    alt: 'Un homme qui joue du saxophone',
  },
};
