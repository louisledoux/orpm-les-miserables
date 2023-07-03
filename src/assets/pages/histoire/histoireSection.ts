import { SectionData } from '@/types/Section.type';
import histoireAPropos from '@/assets/pages/histoire/images/histoireapropos.png';
import structureImg from '@/assets/pages/histoire/images/structure.png';
import histoireImg from '@/assets/pages/histoire/images/histoire.png';

export const aProposAlternativeSection: SectionData = {
  key: 'AlternativeSection APropos',
  pages: [{
    title: 'Le contexte',
    paragraphs: [
    'Nous nous sommes lancé le défi de vous transporter dans les rues de Paris en 1832, à l\'époque des barricades, et de vous faire revivre les mélodies les plus célèbres de cette comédie musicale, revisitées pour séduire le public d\'aujourd\'hui.',
    'Les Misérables est un roman qui se déroule en France au XIXe siècle, en pleine révolution industrielle et sociale. ll couvre la période allant des années 1815 à 1832, et se concentre principalement sur les vies de Jean Valjean, Fantine et leurs amis et ennemis.',
    'Les thèmes principaux abordés dans le roman, tels que la lutte pour les droits des pauvres, des opprimés mais aussi des femmes, la justice sociale, la rédemption, et l\'injustice sociale ont eu un impact significatif sur la société.',
    'Les Misérables est considéré comme l\'un des livres les plus importants de la littérature française, et son héritage est toujours vivant aujourd\'hui.',
    ],
  }],
  image: {
    image: histoireAPropos,
    alt: 'Cosette Les Miserables ORPM',
    style: { objectPosition: '50% 33%' },
  },
};

export const histoireAlternativeSection: SectionData = {
  key: 'AlternativeSection Histoire',
  pages: [{
    title: 'L\'histoire',
    paragraphs: [
    'L\'histoire met en scène la vie de Jean Valjean, un ancien bagnard qui, après avoir purgé sa peine, essaie de se réinsérer dans la société et de se racheter. Cependant, il est poursuivi par le policier Javert, qui ne croit pas en la rédemption et qui est déterminé à l\'arrêter.',
    'Dans la même ville vient s\'installer Fantine : elle a dû quitter Paris car, enceinte, elle s\'est retrouvée délaissée par le père de l\'enfant. Afin de pouvoir travailler et assurer l\'éducation de sa fille Cosette, Fantine décide de la confier à un couple d\'aubergistes, les Thénardier. Ces derniers ne cessent de réclamer de l\'argent à la pauvre malheureuse, alors qu\'ils laissent la jeune Cosette dans un état lamentable, à leur service, et devant subir de nombreuses brimades. A la mort de Fantine, Jean Valjean lui promet de prendre soin de Cosette.',
    'Devenue adulte, Cosette fait la rencontre de Marius, lors d\'une promenade dans les jardins du Luxembourg. Dès le premier regard, les deux jeunes gens tombent amoureux. Marius fréquente un groupe révolutionnaire, l\'ABC, qui se bat pour que le peuple obtienne plus de libertés. Il rencontre d\'autres révolutionnaires dont le farouche Enjolras ainsi que le jeune Gavroche, un enfant des rues, un « joyeux va-nu-pieds ».',
    'Quelque temps plus tard éclate la révolte du peuple parisien, déclenchée par la mort du Général Lamarque. Le peuple, et les amis de l\'ABC notamment, dressent des barricades où se retrouve l\'ensemble des personnages du roman. Les soldats n\'hésitent pas à ouvrir le feu, même sur le jeune Gavroche qui les brave en tentant de ramasser des munitions. Le jeune Marius échappe de peu à la mort : c\'est Jean Valjean qui le sauve alors que Javert renonce à l\'arrêter. L\'ancien forçat fuit les tirs des soldats en passant par les égouts avec Marius évanoui sur son dos ; il devra son salut à Thénardier qui lui ouvre la seule issue accessible. À la fin de l\'histoire, Jean Valjean meurt, entouré de ses « enfants », Marius et Cosette qui se sont finalement mariés.',
    ],
  }],
  image: {
    image: histoireImg,
    alt: 'Les Miserables ORPM',
  },
};
export const StructureAlternativeSection: SectionData = {
  key: 'AlternativeSection Structure',
  pages: [{
    title: 'Structure de l\'oeuvre',
    paragraphs: [
    'Le roman est divisé en cinq parties. Chacune est centrée sur un personnage principal et suit l\'histoire de ces personnages et leur évolution au fil du temps. La structure du roman comprend cinq parties principales, à savoir Fantine, Cosette, Marius, L\'Idylle rue Plumet et Jean Valjean. Chacune de ces parties comprend plusieurs chapitres qui sont liés entre eux pour former une histoire complète.',
    'FANTINE\n Ce tome commence avec une description de Jean Valjean, qui a passé 19 ans en prison pour avoir voler un morceau de pain. Bien qu\'il ait été libéré, il est toujours considéré comme un criminel. Après sa libération, il fait la connaissance de Fantine et devient son protecteur ainsi que celui de sa fille Cosette.',
    'COSETTE\n Jean Valjean et Cosette pour échapper à l\'inspecteur Javert, qui le poursuit depuis des années. Ils trouvent refuge dans un couvent, où Jean Valjean devient père de Cosette.',
    'L\'IDYLLE RUE PLUMET ET L\'ÉPOPÉE DE LA RUE SAINT-DENIS\n Jean Valjean y essaie de protéger Marius et Cosette de Javert et de sauver Marius lors de la révolution. Valjean et Javert se confrontent finalement lors d\'un affrontement dramatique.',
    'MARIUS\n Cette partie se concentre sur l\'histoire d\'amour entre Marius, un jeune étudiant révolutionnaire, et Cosette. Valjean, qui est devenu un homme riche et respecté, doit faire face à son passé et à l\'inspecteur Javert, qui a juré de l\'arrêter.',
    'JEAN VALJEAN\n Cette partie se concentre sur les derniers jours de Valjean et explore les conséquences de ses actions sur sa vie et sur celle de ceux qu\'il a aimé. Valjean meurt paisiblement, en paix avec lui-même et avec sa vie.',
    ],
  }],
  image: {
    image: structureImg,
    alt: 'Cosette Les Miserables ORPM',
    style: { objectPosition: '50% 26%' },
  },
};
