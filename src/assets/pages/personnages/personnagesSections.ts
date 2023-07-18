import alexandrosMoraitis from '@/assets/pages/personnages/images/alexandros_moraitis.jpg';
import vincentChoquel from '@/assets/pages/personnages/images/vincent_choquel.jpg';
import gregoryCollesson from '@/assets/pages/personnages/images/gregory_collesson.jpg';
import claireGressier from '@/assets/pages/personnages/images/claire_gressier.jpg';
import louiseDenoeux from '@/assets/pages/personnages/images/louise_denoeux.jpg';
import floreSouames from '@/assets/pages/personnages/images/flore_souames.jpg';
import laoraBrachot from '@/assets/pages/personnages/images/laora_brachot.jpg';
import emelineDenoeux from '@/assets/pages/personnages/images/emeline_denoeux.jpg';
import manonSouames from '@/assets/pages/personnages/images/manon_souames.jpg';
import sebastienDeWilde from '@/assets/pages/personnages/images/sebastien_de_wilde.jpg';
import quentinChoquel from '@/assets/pages/personnages/images/quentin_choquel.jpg';
import fredericDupont from '@/assets/pages/personnages/images/frederic_dupont.jpg';
import magaliVanhoutte from '@/assets/pages/personnages/images/magali_vanhoutte.jpg';
import samuelThaon from '@/assets/pages/personnages/images/samuel_thaon.jpg';
import { PersonnagesSectionData } from '@/types/Section.type';

const equipeArtistiqueSections: PersonnagesSectionData[] = [
  {
    key: 'Jean Valjean',
    pages: [{
      title: 'Jean Valjean',
      paragraphs: [
        'Personnage principal de l\'histoire, Jean Valjean est un ancien forçat qui tente de se racheter une conduite après avoir purgé une longue peine de prison. C\'est un personnage complexe, qui lutte pour trouver sa place dans le monde et pour trouver la paix intérieure.',
      ],
    }],
    images: [
      {
        image: vincentChoquel,
        alt: 'Vincent Choquel dans le rôle de Jean Valjean',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
      {
        image: alexandrosMoraitis,
        alt: 'Alexandrios Moraitis dans le rôle de Jean Valjean',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      }],
  },
  {
    key: 'Javert',
    pages: [{
      title: 'Javert',
      paragraphs: [
        'Personnage antagoniste de l\'histoire, Javert est un fonctionnaire zélé qui poursuit Jean Valjean sans relâche, croyant qu\'un ancien forçat ne peut jamais changer.\n C\'est un personnage rigide et inflexible, mais il finit par remettre en question ses propres convictions lorsqu\'il réalise que Jean Valjean est devenu une personne meilleure.\n Inspecteur de police obsédé par la justice, Javert est un personnage complexe et tourmenté, qui finit par se suicider lorsqu\'il réalise qu\'il s\'est trompé sur le compte de Valjean et qu\'il a été capable de se racheter.',
      ],
    }],
    images: [
      {
        image: gregoryCollesson,
        alt: 'Gregory Collesson dans le rôle de Javert',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Cosette',
    pages: [{
      title: 'Cosette',
      paragraphs: [
        'Fille de Fantine, Cosette est élevée par Jean Valjean après le décés de Fantine.\n C\'est une jeune fille innocente et attachante qui finit par tomber amoureuse de Marius, un étudiant révolutionnaire.',
      ],
    }],
    images: [
      {
        image: claireGressier,
        alt: 'Claire Gressier dans le rôle de Cosette',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
      {
        image: louiseDenoeux,
        alt: 'Louise Denoeux dans le rôle de Cosette enfant',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Eponine',
    pages: [{
      title: 'Eponine',
      paragraphs: [
        'Eponine est la fille des Thénardier, des propriétaires de l\'auberge où Valjean et Cosette s\'installent. Elle est amoureuse de Marius, un étudiant révolutionnaire, mais elle finit par accepter que ses sentiments ne seront jamais partagés et par aider Marius à retrouver Cosette.\n Eponine est un personnage très attachant qui est à la fois fort et vulnérable. Elle finit par se sacrifier pour aider les autres et meurt sur la barricade lors de la révolution de 1832.',
      ],
    }],
    images: [
      {
        image: floreSouames,
        alt: 'Flore Souames dans le rôle de Eponine',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
      {
        image: laoraBrachot,
        alt: 'Laora Brachot dans le rôle de Eponine',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Fantine',
    pages: [{
      title: 'Fantine',
      paragraphs: [
        'Jeune femme qui travaille dans une usine et qui est licenciée lorsque ses collègues découvrent qu\'elle a un enfant illégitime. Fantine est désespérée et finit par se prostituer pour survivre.\n Elle est traitée de manière injuste et cruelle par la société, mais elle reste une personne digne et courageuse jusqu\' à la fin.',
      ],
    }],
    images: [
      {
        image: emelineDenoeux,
        alt: 'Emeline Denoeux dans le rôle de Fantine',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
      {
        image: manonSouames,
        alt: 'Manon Souames dans le rôle de Fantine',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Marius',
    pages: [{
      title: 'Marius',
      paragraphs: [
        'Marius est un étudiant révolutionnaire qui tombe amoureux de Cosette, la fille adoptive de Jean Valjean. C\'est un personnage intelligent et passionné, qui se bat aux côtés d\'Enjolras et des autres membres de la barricade lors de la révolution de 1832.\n Il est prêt à donner sa vie pour la cause, mais il finit par être sauvé par Valjean et par vivre heureux avec Cosette. Marius est un personnage émouvant et inspirant, qui incarne les valeurs de l\'amour et de la révolution.',
      ],
    }],
    images: [
      {
        image: sebastienDeWilde,
        alt: 'Sebastien De Wilde dans le rôle de Marius',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Enjolras',
    pages: [{
      title: 'Enjolras',
      paragraphs: [
        'Leader révolutionnaire et un orateur charismatique qui dirige les combats de la barricade lors de la révolution de 1832. Il est déterminé à changer le monde et à lutter pour l\'égalité et la justice.\n Enjolras est un personnage très inspirant et idéaliste, qui est prêt à donner sa vie pour la cause.',
      ],
    }],
    images: [
      {
        image: quentinChoquel,
        alt: 'Quentin Choquel dans le rôle de Enjolras',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Mr Thénardier',
    pages: [{
      title: 'Mr Thénardier',
      paragraphs: [
        'Thénardier est un personnage diabolique et sans scrupules, qui exploite et vole tous ceux qu\'il peut pour s\'enrichir. Il est le propriétaire de l\'auberge où grandit Cosette dans l\'exploitation et la misère.\n Thénardier est marié à Madame Thénardier, qui est tout aussi malveillante que lui. Le couple a deux enfants, Eponine et Azelma, qui sont tous deux très attachants malgré leur éducation déplorable.\n Thénardier est un personnage complexe et ambivalent, qui finit par être révélé sous un jour nouveau à la fin de l\'histoire.',
      ],
    }],
    images: [
      {
        image: fredericDupont,
        alt: 'Frédéric Dupont dans le rôle de Mr Thénardier',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Mme Thénardier',
    pages: [{
      title: 'Mme Thénardier',
      paragraphs: [
        'Madame Thénardier est un personnage essentiel de "Les Misérables" de Victor Hugo. Elle incarne la cupidité, la cruauté et la manipulation.\n En tant que femme du propriétaire de l\'auberge de Montfermeil, elle exploite les pensionnaires et les maltraite sans scrupules. Petite, et au visage dur, elle est avide d\'argent et prête à tout pour l\'obtenir. Sa fausse gentillesse lui permet de duper les autres et de les exploiter.\n Madame Thénardier est particulièrement impliquée dans l\'histoire de Cosette, la fille de Fantine. Elle néglige et maltraite l\'enfant, la gardant dans des conditions misérables et l\'exploitant sans pitié.\n Elle est également impliquée dans des actes criminels tels que le vol et la tromperie. Son personnage représente la face sombre de la société, incarnant la noirceur et la vilenie humaine.\n Dans l\'ensemble, Madame Thénardier est un personnage complexe et malfaisant, symbole de la rapacité et de la cruauté présentes dans "Les Misérables".',
      ],
    }],
    images: [
      {
        image: magaliVanhoutte,
        alt: 'Magali Vanhoutte dans le rôle de Mme Thénardier',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
  {
    key: 'Gavroche',
    pages: [{
      title: 'Gavroche',
      paragraphs: [
        'Gavroche est un garçon orphelin qui vit dans les rues de Paris et qui est déterminé à s\'en sortir coûte que coûte. Il est connu pour sa bravoure et son esprit de rébellion, et il finit par se joindre aux combats de la barricade lors de la révolution de 1832.\n Gavroche est un personnage très attachant et courageux, et il joue un rôle important dans l\'histoire de Les Misérables.',
      ],
    }],
    images: [
      {
        image: samuelThaon,
        alt: 'Samuel Thaon dans le rôle de Gavroche',
        style: { width: '100%', height: '100%', borderRadius: '2px' },
      },
    ],
  },
];

export default equipeArtistiqueSections;
