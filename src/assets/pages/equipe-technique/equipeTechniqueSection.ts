import { SectionData } from '@/types/Section.type';
import decor from '@/assets/pages/equipe-technique/images/decor.jpg';
import technique from '@/assets/pages/equipe-technique/images/technique.jpg';

export const equipeTechnique2Section: SectionData = {
  key: 'Section Décor',
  pages: [{
    title: 'Bernard Boitel\n Responsable des décors',
    paragraphs: [
      'Moi, c\'est Bernard Boitel. Je suis bénévole de l\'association depuis environ 1984.',
      'Depuis toutes ces années, mon rôle dans l\'ORPM n\'a fait qu\'accroître jusqu\'à ma nomination en tant que vice-président depuis l\'an dernier.',
      'Tous les projets ont été une nouvelle aventure. «Les Misérables» seront également passionnants et à coup sûr un merveilleux challenge au niveau des décors.',
      'Aimant le bricolage naturellement, je me suis proposé pour la préparation de ces décors et la coordination de l\'équipe en charge de ceux-ci',
    ],
  }],
  image: {
    image: decor,
    alt: 'La troupe en concert',
    style: { objectPosition: 'top' },
  },
};

export const equipeTechnique1Section: SectionData = {
  key: 'Section Direction technique',
  pages: [{
    title: 'Philippe Tiberghirn\n Direction technique',
    paragraphs: [
      'Le son c\'est mon domaine et ma passion !',
      'Avec ma base d\'ingénieur du son, j\'ai appris sur le terrain la sonorisation de spectacles, son et lumière, chorales diverses depuis plus de 40 années.',
      'J\'ai participé à des projets ambitieux comme Billy Elliot, Fame mais également Memphis avec l\'ORPM.',
      'J\'apporte mon savoir et mon expérience afin de donner un joli plus sur chaque nouveau spectacle!',
    ],
  }],
  image: {
    image: technique,
    alt: 'La troupe en concert',
  },
};
