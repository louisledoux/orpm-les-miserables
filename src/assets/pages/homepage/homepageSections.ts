import newsImage from '@/assets/pages/homepage/images/newsImage.jpg';
import onJoueImage from '@/assets/pages/homepage/images/onJoueImage.jpg';
import showcaseImage from '@/assets/pages/homepage/images/showcaseImage.jpg';
import { SectionData } from '@/types/Section.type';

export const newsSection: SectionData = {
  key: 'Section News',
  pages: [{
    paragraphs: [
      'Bienvenue sur le site officiel <strong>"Les Misérables - C\'est la faute à Voltaire!"</strong>.',
      'Rejoignez-nous pour un spectacle qui inspire le changement et la solidarité. La culture a le pouvoir de nous rassembler et de nous motiver.',
      'Notre version met en lumière des causes importantes, contribuant à des projets contre la pauvreté et pour la santé. Ensemble, changeons les choses et impactons positivement le monde, à l\'image de Jean Valjean.',
      'Découvrez nos spectacles et engagez-vous pour un monde plus uni et solidaire. Nous espérons vous voir bientôt pour vivre ensemble cette expérience mémorable.',
    ],
  }],
  image: {
    image: newsImage,
    alt: 'Affiche des Misérables',
  },
};

export const showcasesSection: SectionData = {
  key: 'Section Showcases',
  pages: [{
    title: 'Showcases',
    paragraphs: [
      'Avant le spectacle musical à venir, ce sont aussi des showcases qui sont organisés pour vous faire découvrir l\'univers des Misérables.',
      'Ces événements vous permettront de vous plonger dans l\'histoire des Misérables et de découvrir les artistes qui participent à la comédie musicale.',
      'Vous pourrez également découvrir les coulisses du spectacle musical et les différentes étapes de sa création.',
      'Retrouvez sans plus attendre les photos des showcases passés !',
    ],
  }],
  image: {
    image: showcaseImage,
    alt: 'Showcase des Misérables',
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
