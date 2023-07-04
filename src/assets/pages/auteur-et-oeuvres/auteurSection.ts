import { SectionData } from '@/types/Section.type';
import auteur from '@/assets/pages/auteur-et-oeuvres/images/auteur.png';

const auteurSection: SectionData = {
  key: 'Section Auteur',
  pages: [{
    title: 'Victor Hugo',
    paragraphs: [
      'Victor Hugo était un poète, dramaturge, romancier et homme politique français du XIXe siècle.',
      'Il est connu pour ses oeuvres littéraires telles que Notre-Dame de Paris (1831) et Les Misérables (1862).',
      'Il a également été impliqué dans l\'abolition de la peine de mort et dans la défense des droits de l\'Homme.',
      'Hugo a également été un fervent défenseur de la liberté et de l\'indépendance de la France et a agi comme un chef de file des progrès politiques et sociaux.\n En particulier, il était un fervent défenseur de l\'éducation pour tous, l\'égalité des sexes et de l\'éducation des femmes, thèmes qu\'il met en scène dans ses oeuvres.',
      'Il est considéré comme l\'un des plus grands écrivains français de tous les temps.',
    ],
  }],
  image: {
    image: auteur,
    alt: 'Victor Hugo',
  },
};

export default auteurSection;
