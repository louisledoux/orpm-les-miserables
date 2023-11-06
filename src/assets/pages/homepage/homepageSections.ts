import { SectionData } from '@/types/Section.type';
import newsImage from '@/assets/pages/homepage/images/newsImage.jpg';
import onJoueImage from '@/assets/pages/homepage/images/onJoueImage.jpg';

export const newsSection: SectionData = {
  key: 'Section News',
  pages: [{
    title: 'En ce moment',
    paragraphs: [
      'Nous offrons une opportunité unique aux collectivités, entreprises et associations caritatives qui partagent notre passion pour le théâtre, la musique et la danse. Nous sommes prêts à apporter l\'univers captivant des "Misérables" dans une salle de votre choix, dans le but louable de collecter des fonds pour des causes qui en ont besoin.',
      'Depuis sa première représentation, "Les Misérables" a conquis les cœurs du public mondial. Basée sur le roman de Victor Hugo, cette comédie musicale vous plonge dans le 19e siècle en France avec des personnages inoubliables, une musique envoûtante et une histoire chargée d\'émotion, offrant une expérience théâtrale extraordinaire.',
      'En collaborant avec nous pour organiser une représentation des "Misérables" dans votre salle, vous permettez à votre communauté de partager une expérience unique, tout en renforçant les liens de votre territoire ou de votre entreprise.',
      'Mieux encore, les recettes de ces spectacles ne serviront pas seulement à couvrir les coûts de production, mais aussi à soutenir des causes caritatives qui vous tiennent à cœur, que ce soit pour aider les plus démunis, financer des projets communautaires ou soutenir des associations caritatives.',
      'Pour vous impliquer, contactez-nous pour discuter des détails, y compris les coûts, les dates disponibles et les modalités d\'organisation. Avec "Les Misérables", offrez à votre public une soirée mémorable et contribuez à un changement positif pour votre collectivité, entreprise ou association caritative. Rejoignez-nous dans cette noble quête de solidarité et d\'émotion !',
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
