import billyElliot from '@/assets/pages/precedentsSpectacles/images/billyelliot.jpg';
import fame from '@/assets/pages/precedentsSpectacles/images/fame.jpg';
import memphis2 from '@/assets/pages/precedentsSpectacles/images/memphis2.jpg';
import { SectionData } from '@/types/Section.type';

const precedentsSpectaclesSections: SectionData[] = [
  {
    key: 'Billy Elliot',
    pages: [{
      paragraphs: [
        "Au fil des années, nous avons eu l'immense privilège de partager notre passion avec un public de plus en plus large. En 2015, nous avons présenté “Billy Elliot” sur les scènes du Théâtre Sébastopol et dans toute la région, offrant à plus de 8000 personnes une expérience inoubliable.",
      ],
      style: { padding: '130px 40px' },
    }],
    image: {
      image: billyElliot,
      alt: 'Billy Elliot ORPM',
      style: {
        width: '100%', minWidth: '550px', height: '100%', borderRadius: '2px', objectPosition: '50% 10%',
      },
    },
  },
  {
    key: 'Fame',
    pages: [{
      paragraphs: [
        'En 2018-2019, nous avons continué à émerveiller les spectateurs avec notre comédie musicale “FAME”, un spectacle qui a rassemblé 11000 personnes au Colisée de Roubaix et toute l\'Euro-métropole.',
      ],
      style: { padding: '130px 40px' },
    }],
    image: {
      image: fame,
      alt: 'Fame ORPM',
      style: {
        width: '100%', minWidth: '550px', height: '100%', borderRadius: '2px',
      },
    },
  },
  {
    key: 'Memphis',
    pages: [{
      paragraphs: [
        "En 2022, nous avons relevé un nouveau défi: Emmener notre public faire un voyage à travers le temps à l'époque de la ségrégation raciale dans la ville de Memphis, Etats-Unis. Avec plus de 2 heures de spectacle, nous avons exploré le Blues, la Soul et le Rock'n Roll en compagnie des personnages de Huey Calhoun et de Felicia Farrell. Ce nouveau projet a attiré un public nombreux et enthousiaste qui a confirmé notre place dans la production de comédies musicales dans la tradition de celles de Londres ou de Broadway.",
      ],
      style: { padding: '130px 40px' },
    }],
    image: {
      image: memphis2,
      alt: 'Memphis ORPM',
      style: {
        width: '100%', minWidth: '550px', height: '100%', borderRadius: '2px',
      },
    },
  },
];

export default precedentsSpectaclesSections;
