import hubert from '@/assets/pages/orchestre/images/hubert.jpg';
import eric from '@/assets/pages/equipeArtistique/images/eric-pauwels.jpg';
import magali from '@/assets/pages/equipeArtistique/images/magali.jpg';
import justine from '@/assets/pages/equipeArtistique/images/justine.jpg';
import manon from '@/assets/pages/equipeArtistique/images/manon.jpg';
import claire from '@/assets/pages/equipeArtistique/images/claire.jpg';
import marie from '@/assets/pages/equipeArtistique/images/marie.jpg';
import { SectionData } from '@/types/Section.type';

const equipeArtistiqueSections: SectionData[] = [
  {
    key: 'Direction musicale',
    pages: [{
      title: 'Hubert Gressier \n Direction artistique et musicale',
      paragraphs: [
        "Après de nombreuses années passées à étudier le saxophone, l'écriture et d'autres disciplines musicales dans des conservatoires, j'ai poursuivi une formation universitaire en musicologie en parallèle. Depuis mon enfance, la musique est pour moi une véritable passion et une source infinie de plaisir.",
        "Diriger l'Orchestre Régional du Pévèle Mélantois depuis plus de 3 décennies m'a offert l'opportunité incroyable de vivre de nombreuses rencontres musicales et culturelles enrichissantes, tout en réalisant des projets ambitieux qui ont toujours été accueillis avec enthousiasme par le public.",
        "Chaque année, je suis heureux de voir de jeunes musiciens rejoindre nos pupitres et apporter une nouvelle énergie et une fraîcheur bienvenues. Au fil du temps, la direction d'orchestre est devenue une priorité pour moi, et cela a finalement pris le pas sur ma pratique de l'instrument. Le plaisir de me retrouver face aux musiciens de l'orchestre est toujours intact même après toutes ces années.",
      ],
    }],
    image: {
      image: hubert,
      alt: 'Hubert Gressier ORPM',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Arrangements musicaux',
    pages: [{
      title: 'Eric Pauwels \n Composition',
      paragraphs: [
        'Je suis un pianiste et compositeur, né en 1958 à Malo les Bains.',
        'J\'ai fait mes études au Conservatoire de Lille, où j\'ai obtenu ma médaille d\'or et mon prix régional de piano dans la classe d\'Alain Raes, ainsi que ma médaille d\'or de solfège, de déchiffrage et de musique de chambre. En parallèle, je passe avec succès mon baccalauréat F11 en candidat libre.',
        "Passionné également de MAO ( Musique Assistée par Ordinateur ) je l'enseigne au Conservatoire de Lille et continue toujours à se former dans cette discipline qui n'exonère pas, bien au contraire du travail d'écriture nécessaire ( pour laquelle je travaille toujours avec Jean-Louis Fabre à Paris ) à la création musicale d'un projet.",
        "Lorsqu'Hubert Gressier m'a demandé d'écrire la musique d'un spectacle pour l'ORPM, c'est avec enthousiasme que je me suis lancé dans la composition de la partition.",
      ],
    }],
    image: {
      image: eric,
      alt: 'Eric PAUWELS ORPM',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Costumes Magali',
    pages: [{
      title: 'Magali Vanhoutte \n Costumière',
      paragraphs: [
        "Sur FAME, j'ai chanté, j'ai dansé, j'ai joué la comédie, mais Ils ont décelé chez moi un don que je ne me connaissais pas, et surtout un sacré dressing 80's ! Merci Maman !",
        "Sur MEMPHIS, Ils m'ont confié un rôle différent de tous les autres, dans lequel je me suis investie avec passion, une passion que décidément, je ne me connaissais pas... Et surtout un grenier aux trésors 50's! Merci Mamy !",
        "Sur LES MISÉRABLES - C'EST LA FAUTE À VOLTAIRE!, Ils ont décidé de me faire confiance, à nouveau... Mais les ressources 1830 me manquent, le linge de Maman et Mamy ne me sera d'aucun secours cette fois ! Un sacré défi que je relèverai avec Carlotta, qui tout comme moi, est fan de vide-greniers et ressourceries en tous genres; sans omettre l'aide indispensable de nos petites mains, l'Equipe Couture",
      ],
    }],
    image: {
      image: magali,
      alt: 'Magali costumiere',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Costumes Justine',
    pages: [{
      title: 'Justine Lefevre \n Costumière',
      paragraphs: [
        'Passionnée par le monde du textile depuis petite (j’en ai même fait mes études), et musicienne depuis mes 7 ans, comment dire que participer à la création de costumes pour notre comédie musicale “Les Misérables - C\'est la faute à Voltaire!” est une évidence et un plaisir quotidien !',
        'La passion du partage, à l’orchestre comme lors de nos réunions couture, c’est cela qui m’anime ! Le goût du challenge aussi, car l’exigence est de rigueur, et les robes majestueuses de l’époque ne sont pas de toute simplicité à reproduire... Quelle fierté de voir prendre vie sur scène ce projet de comédie musicale, habillée des mains de Magali et des ouvrages de la team couture.',
      ],
    }],
    image: {
      image: justine,
      alt: 'Justine costumiere',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Mise en scene Manon',
    pages: [{
      title: 'Manon Souames\n Metteuse en scène',
      paragraphs: [
        "À l'âge de 7 ans, j'ai débuté la danse classique (discipline que je n'ai jamais vraiment abandonnée), puis je suis devenue choriste à 8 ans dans deux ensembles.",
        "C'est à mes 18 ans que j'ai intégré une troupe de théâtre et découvert l'importance du jeu et de la mise en scène.",
        "La comédie musicale est une révélation dès 2015 avec le projet Billy Elliot de l'ORPM : une scène, de la danse, du chant et de la comédie. Une évidence !",
        "La mise en scène d'un tel spectacle est un vrai challenge artisitique et quand on m'a proposé ce défi complètement dingue, je n'ai pas mis longtemps à me décider. vivre cette expérience dans une troupe aussi dynamique et bienveillante est une occasion en or.",
      ],
    }],
    image: {
      image: manon,
      alt: 'Manon metteuse en scèene',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Mise en scene Claire',
    pages: [{
      title: 'Claire Gressier\n Metteuse en scène',
      paragraphs: [
        "Comédienne hors pair, j'ai toujours eu une facilité naturelle pour la comédie, si si demandez à mes soeurs et mes parents... Dotée d'une imagination débordante (peut-être un peu trop d'ailleurs) et d'une créativité sans limite, j'adore inventer des histoires et des mondes imaginaires. Je peux aussi transformer n'importe quoi en une oeuvre d'art.",
        'Mes différentes expériences de comédie musicale ont su montrer et démontrer ma grande valeur ajoutée dans ces projets...',
        "Bref, je pense être la moitié complémentaire parfaite de Manon pour s'éclater sur la mise en scène des Misérables - C'est la faute à Voltaire!. Toujours en route avec un projet un peu fou, l'ORPM c'est comme une deuxième famille !",
        "C'est un nouveau défi à relever, un nouveau plaisir et surtout une nouvelle aventure musicale à partager.",
      ],
    }],
    image: {
      image: claire,
      alt: 'Claire metteuse en scène',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Chorégraphie Marie',
    pages: [{
      title: 'Marie Pioskowik\n Chorégraphe',
      paragraphs: [
        'Danseuse aguerrie',
        'Formée professionnellement à la danse sur Paris dans les années 2000, je poursuis ma carrière en enseignant la danse moderne et contemporaine dans différentes structures de la métropole lilloise.',
        "Mon style allie la gestuelle moderne dans une dynamique jazz. Auquel j'y ajoute une pédagogie d'expérience de presque 20 ans auprès des enfants et adultes.",
        "Investie dans de nombreuses associations dans divers domaines, je découvre en 2020 l'ORPM, au travers de la comédie musicale «Memphis» La richesse et les valeurs du projet me plaisent instantanément. Mais c'est pour «Les Misérables - C'est la faute à Voltaire!» que je propose ma collaboration.",
      ],
    }],
    image: {
      image: marie,
      alt: 'Marie chorégraphe',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
];

export default equipeArtistiqueSections;
