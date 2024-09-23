import { SectionData } from '@/types/Section.type';
import orchestreImage from '@/assets/pages/orchestre/images/aproposorchestre.jpg';
import hubert from '@/assets/pages/orchestre/images/hubert.jpg';

export const orchestreSection: SectionData = {
  key: 'Section Orchestre',
  pages: [{
    title: 'À propos',
    paragraphs: [
      'Notre équipe de 40 musiciens ambitionne de transporter son public dans un monde musical inédit à travers chaque prestation. Nous rassemblons des chanteurs, danseurs, comédiens, techniciens et partenaires pour offrir une expérience immersive pour sortir de la routine le temps d\'un spectacle. À chaque nouveau projet, nous relevons le défi de surprendre et d\'émerveiller !',
      'Les avantages à avoir un orchestre en live dans les comédies musicales sont nombreux. Notre vocation est de rendre la musique plus riche et plus expressive, de l\'ajuster en fonction des scènes, des mouvements ou des émotions des acteurs.',
      'Les instruments aident également à créer une atmosphère plus riche et plus immersive pour le public, ce contribue à améliorer l\'expérience des spectateurs. La présence sur scène d\'un orchestre en live ajoute une touche unique à la pièce par son interprétation personnelle et la qualité de ses compositions.',
    ],
  }],
  image: {
    image: orchestreImage,
    alt: 'Orchestre ORPM',
  },
};

export const directionMusicaleSection: SectionData = {
  key: 'Direction musicale',
  pages: [{
    title: 'Hubert Gressier \n Chef d\'orchestre',
    paragraphs: [
      "Après de nombreuses années passées à étudier le saxophone, l'écriture et d'autres disciplines musicales dans des conservatoires, j'ai poursuivi une formation universitaire en musicologie en parallèle. Depuis mon enfance, la musique est pour moi une véritable passion et une source infinie de plaisir.",
      "Diriger l'Orchestre Régional du Pévèle Mélantois depuis plus de 3 décennies m'a offert l'opportunité incroyable de vivre de nombreuses rencontres musicales et culturelles enrichissantes, tout en réalisant des projets ambitieux qui ont toujours été accueillis avec enthousiasme par le public.",
      "Chaque année, je suis heureux de voir de jeunes musiciens rejoindre nos pupitres et apporter une nouvelle énergie et une fraîcheur bienvenues. Au fil du temps, la direction d'orchestre est devenue une priorité pour moi, et cela a finalement pris le pas sur ma pratique de l'instrument. Le plaisir de me retrouver face aux musiciens de l'orchestre est toujours intact même après toutes ces années.",
    ],
    reverse: true,
  }],
  image: {
    image: hubert,
    alt: 'Hubert Gressier ORPM',
  },
};
