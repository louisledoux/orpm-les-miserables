import jeanValjean from '@/assets/pages/personnages/images/jeanvaljean.jpg';
import javert from '@/assets/pages/personnages/images/javert.jpg';
import cosette from '@/assets/pages/personnages/images/cosette.jpg';
import eponine from '@/assets/pages/personnages/images/eponine.jpg';
import fantine from '@/assets/pages/personnages/images/fantine.jpg';
import marius from '@/assets/pages/personnages/images/marius.jpg';
import enjolras from '@/assets/pages/personnages/images/enjolras.jpg';
import mrThenardier from '@/assets/pages/personnages/images/mrthenardier.jpg';
import mmeThenardier from '@/assets/pages/personnages/images/mmethenardier.jpg';
import gavroche from '@/assets/pages/personnages/images/gavroche.jpg';
import { SectionData } from '@/types/Section.type';

const equipeArtistiqueSections: SectionData[] = [
  {
    key: 'Jean Valjean',
    pages: [{
      title: 'Jean Valjean',
      paragraphs: [
        'Personnage principal de l\'histoire, Jean Valjean est un ancien forçat qui tente de se racheter une conduite après avoir purgé une longue peine de prison. C\'est un personnage complexe, qui lutte pour trouver sa place dans le monde et pour trouver la paix intérieure.',
      ],
    }],
    image: {
      image: jeanValjean,
      alt: 'Jean Valjean',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Javert',
    pages: [{
      title: 'Javert',
      paragraphs: [
        'Personnage antagoniste de l\'histoire, Javert est un fonctionnaire zélé qui poursuit Jean Valjean sans relâche, croyant qu\'un ancien forçat ne peut jamais changer.\n C\'est un personnage rigide et inflexible, mais il finit par remettre en question ses propres convictions lorsqu\'il réalise que Jean Valjean est devenue une personne meilleure.\n Inspecteur de police obsédé par la justice, Javert est un personnage complexe et tourmenté, qui finit par se suicider lorsqu\'il réalise qu\'il s\'est trompé sur le compte de Valjean et qu\'il a été capable de se racheter.',
      ],
    }],
    image: {
      image: javert,
      alt: 'Javert',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Cosette',
    pages: [{
      title: 'Cosette',
      paragraphs: [
        'Fille de Fantine, Cosette est élevée par Jean Valjean après le décés de Fantine.\n C\'est une jeune fille innocente et attachante qui finit par tomber amoureuse de Marius, un étudiant révolutionnaire.',
      ],
    }],
    image: {
      image: cosette,
      alt: 'Cosette',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Eponine',
    pages: [{
      title: 'Eponine',
      paragraphs: [
        'Eponine est la fille des Thénardier, des propriétaires de l\'auberge où Valjean et Cosette s\'installent. Elle est amoureuse de Marius, un étudiant révolutionnaire, mais elle finit par accepter que ses sentiments ne seront jamais partagés et par aider Marius à retrouver Cosette.\n Eponine est un personnage très attachant qui est à la fois forte et vulnérable. Elle finit par se sacrifier pour aider les autres et meurt sur la barricade lors de la révolution de 1832.',
      ],
    }],
    image: {
      image: eponine,
      alt: 'Eponine',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Fantine',
    pages: [{
      title: 'Fantine',
      paragraphs: [
        'Jeune femme qui travaille dans une usine et qui est licenciée lorsque ses collègues découvrent qu\'elle a un enfant illégitime. Fantine est désespérée et finit par se prostituer pour survivre.\n Elle est traitée de manière injuste et cruelle par la société, mais elle reste une personne digne et courageuse jusqu\' à la fin.',
      ],
    }],
    image: {
      image: fantine,
      alt: 'Fantine',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Marius',
    pages: [{
      title: 'Marius',
      paragraphs: [
        'Marius est un étudiant révolutionnaire qui tombe amoureux de Cosette, la fille adoptive de Jean Valjean. C\'est un personnage intelligent et passionné, qui se bat aux côtés d\'Enjolras et des autres membres de la barricade lors de la révolution de 1832.\n Il est prêt à donner sa vie pour la cause, mais il finit par être sauvé par Valjean et par vivre heureux avec Cosette. Marius est un personnage émouvant et inspirant, qui incarne les valeurs de l\'amour et de la révolution.',
      ],
    }],
    image: {
      image: marius,
      alt: 'Marius',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Enjolras',
    pages: [{
      title: 'Enjolras',
      paragraphs: [
        'Leader révolutionnaire et un orateur charismatique qui dirige les combats de la barricade lors de la révolution de 1832. Il est déterminé à changer le monde et à lutter pour l\'égalité et la justice.\n Enjolras est un personnage très inspirant et idéaliste, qui est prêt à donner sa vie pour la cause.',
      ],
    }],
    image: {
      image: enjolras,
      alt: 'Enjolras',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Mr Thénardier',
    pages: [{
      title: 'Mr Thénardier',
      paragraphs: [
        'Thénardier est un personnage diabolique et sans scrupules, qui exploite et vole tous ceux qu\'il peut pour s\'enrichir. Il est le propriétaire de l\'auberge où grandit Cosette dans l\'exploitation et la misère.\n Thénardier est marié à Madame Thénardier, qui est tout aussi malveillante que lui. Le couple a deux enfants, Eponine et Azelma, qui sont tous deux très attachants malgré leur éducation déplorable.\n Thénardier est un personnage complexe et ambivalent, qui finit par être révélé sous un jour nouveau à la fin de l\'histoire.',
      ],
    }],
    image: {
      image: mrThenardier,
      alt: 'Mr Thénardier',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Mme Thénardier',
    pages: [{
      title: 'Mme Thénardier',
      paragraphs: [
        'Thénardier est un personnage diabolique et sans scrupules, qui exploite et vole tous ceux qu\'il peut pour s\'enrichir. Il est le propriétaire de l\'auberge où grandit Cosette dans l\'exploitation et la misère.\n Thénardier est marié à Madame Thénardier, qui est tout aussi malveillante que lui. Le couple a deux enfants, Eponine et Azelma, qui sont tous deux très attachants malgré leur éducation déplorable.\n Thénardier est un personnage complexe et ambivalent, qui finit par être révélé sous un jour nouveau à la fin de l\'histoire.',
      ],
    }],
    image: {
      image: mmeThenardier,
      alt: 'Mme Thénardier',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Gavroche',
    pages: [{
      title: 'Gavroche',
      paragraphs: [
        'Gavroche est un garçon orphelin qui vit dans les rues de Paris et qui est déterminé à s\'en sortir coûte que coûte. Il est connu pour sa bravoure et son esprit de rébellion, et il finit par se joindre aux combats de la barricade lors de la révolution de 1832.\n Gavroche est un personnage très attachant et courageux, et il joue un rôle important dans l\'histoire de Les Misérables.',
      ],
    }],
    image: {
      image: gavroche,
      alt: 'Gavroche',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
];

export default equipeArtistiqueSections;
