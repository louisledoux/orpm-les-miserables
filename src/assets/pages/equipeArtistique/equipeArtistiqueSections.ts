import hubert from '@/assets/pages/orchestre/images/hubert.jpg';
import eric from '@/assets/pages/equipeArtistique/images/ericpauwels.jpg';
import magali from '@/assets/pages/equipeArtistique/images/magali.jpg';
import celine from '@/assets/pages/equipeArtistique/images/celine.jpg';
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
      title: 'Eric Pauwels \n Arrangements musicaux',
      paragraphs: [
        'Je suis un pianiste et compositeur, né en 1958 à Malo les Bains.',
        'J\'ai fait mes é́tudes au Conservatoire de Lille, où j\'ai obtenu ma mé́daille d\'or et mon prix ré́gional de piano dans la classe d\'Alain Raes, ainsi que ma mé́daille d\'or de solfè̀ge, de dé́chiffrage et de musique de chambre. En parallèle, je passe avec succès mon baccalauréat F11 en candidat libre.',
        "Passionné également de MAO ( Musique Assistée par Ordinateur ) je l'enseigne au Conservatoire de Lille et continue toujours à se former dans cette discipline qui n'exonère pas, bien au contraire du travail d'écriture nécessaire ( pour laquelle je travaille toujours avec Jean-Louis Fabre à Paris ) à la création musicale d'un projet.",
        "Lorsqu'Hubert Gressier m'a demandé de faire les arrangements des Misérables pour l'ORPM, c'est avec enthousiasme que je me suis lancé dans l'adaptation de cette si célèbre partition.",
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
        "Sur LES MISÉRABLES, Ils ont décidé de me faire confiance, à nouveau... Mais les ressources 1830 me manquent, le linge de Maman et Mamy ne me sera d'aucun secours cette fois ! Un sacré défi que je relèverai avec Céline, qui tout comme moi, est fan de vide-greniers et ressourceries en tous genres; sans omettre l'aide indispensable de nos petites mains, l'Equipe Couture",
      ],
    }],
    image: {
      image: magali,
      alt: 'Magali costumiere',
      style: { width: '100%', height: '100%', borderRadius: '2px' },
    },
  },
  {
    key: 'Costumes Celine',
    pages: [{
      title: 'Céline Delelis \n Costumière',
      paragraphs: [
        "Passionnée de comédies musicales anglosaxonnes (j'en ai déjà vu au moins une centaine entre Londres, New York et Paris), Les Misérables fait partie de mes préférées.",
        "Pendant longtemps, je me suis contentée d'en être spectatrice, partageant avec entrain mes impressions sur mon blog (so 2010...je sais) jusqu'à ce que je prenne des cours de claquettes et de chant et que je rejoigne l'ORPM sur son précédent projet, Memphis, en tant que choriste et membre de l'ensemble.",
        "Aujourd'hui, en plus de toujours faire partie de l'ensemble, je suis officiellement costumière aux côtés de Magali, mais la tâche s'avère cette fois-ci un peu plus compliquée dans la mesure où les redingotes, corsets et hauts-de-forme se font nettement plus rares que les colliers de perles, jupons et cravates... Mais je viens de me mettre à la couture. Peut-être cela pourra-t-il se montrer utile ?",
      ],
    }],
    image: {
      image: celine,
      alt: 'Céline costumiere',
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
        "Bref, je pense être la moitié complémentaire parfaite de Manon pour s'éclater sur la mise en scène des Misérables. Toujours en route avec un projet un peu fou, l'ORPM c'est comme une deuxième famille !",
        "C'est un nouveau défi à relever, un nouveau plaisir et surtout une nouvelle aventure musicale à partager. La comédie musicale Les Misérables est une oeuvre musicale iconique, avec des chansons emblématiques et des arrangements orchestraux incroyables.",
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
        "Investie dans de nombreuses associations dans divers domaines, je découvre en 2020 l'ORPM, au travers de la comédie musicale «Memphis» La richesse et les valeurs du projet me plaisent instantanément. Mais c'est pour «Les Misérables» que je propose ma collaboration.",
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
