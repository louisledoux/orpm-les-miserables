import Typography from '@/components/Typography/Typography';
import hubert from '@/assets/orchestre-page/hubert.jpg';
import Section from '@/containers/Section/Section';
import { SectionImageType, SectionPageType } from '@/types/Section.type';
import Image from 'next/image';
import React from 'react';
import mainequipeArtistique from '@/assets/equipeArtistique-page/mainequipeArtistique.png';
import eric from '@/assets/equipeArtistique-page/ericpauwels.jpg';
import magali from '@/assets/equipeArtistique-page/magali.jpg';
import celine from '@/assets/equipeArtistique-page/celine.jpg';

const directionMusicaleSectionPages: SectionPageType[] = [{
  title: 'Hubert Gressier \n Direction artistique et musicale',
  paragraphs: [
    "Après de nombreuses années passées à étudier le saxophone, l'écriture et d'autres disciplines musicales dans des conservatoires, j'ai poursuivi une formation universitaire en musicologie en parallèle. Depuis mon enfance, la musique est pour moi une véritable passion et une source infinie de plaisir.",
    "Diriger l'Orchestre Régional du Pévèle Mélantois depuis plus de 3 décennies m'a offert l'opportunité incroyable de vivre de nombreuses rencontres musicales et culturelles enrichissantes, tout en réalisant des projets ambitieux qui ont toujours été accueillis avec enthousiasme par le public.",
    "Chaque année, je suis heureux de voir de jeunes musiciens rejoindre nos pupitres et apporter une nouvelle énergie et une fraîcheur bienvenues. Au fil du temps, la direction d'orchestre est devenue une priorité pour moi, et cela a finalement pris le pas sur ma pratique de l'instrument. Le plaisir de me retrouver face aux musiciens de l'orchestre est toujours intact même après toutes ces années.",
  ],
}];
const directionMusicaleSectionImage: SectionImageType = {
  image: hubert,
  alt: 'Hubert Gressier ORPM',
  style: { width: '100%', height: '100%', borderRadius: '2px' },
};
const arrangementsMusicauxSectionPages: SectionPageType[] = [{
  title: 'Eric Pauwels \n Arrangements musicaux',
  paragraphs: [
    'Je suis un pianiste et compositeur, né en 1958 à Malo les Bains.',
    'J\'ai fait mes études au conservatoire de Lille, où j\'ai obtenu ma médaille d\'or et mon prix régional de piano dans la classe d\'Alain Raes, ainsi que ma médaille d\'or de solfège, de déchiffrage et de musique de chambre. En parallèle, je passe avec succès mon baccalauréat F11 en candidat libre.',
    "Passionné également de MAO ( Musique Assistée par Ordinateur ) je l'enseigne au Conservatoire de Lille et continue toujours à se former dans cette discipline qui n'exonère pas, bien au contraire du travail d'écriture nécessaire ( pour laquelle je travaille toujours avec Jean-Louis Fabre à Paris ) à la création musicale d'un projet.",
    "Lorsqu'Hubert Gressier m'a demandé de faire les arrangements des Misérables pour l'ORPM, c'est avec enthousiasme que je me suis lancé dans l'adaptation de cette si célèbre partition.",
  ],
}];
const arrangementsMusicauxSectionImage: SectionImageType = {
  image: eric,
  alt: 'Eric PAUWELS ORPM',
  style: { width: '100%', height: '100%', borderRadius: '2px' },
};
const costumeMagaliSectionPages: SectionPageType[] = [{
  title: 'Magali Vanhoutte \n Costumière',
  paragraphs: [
    "Sur FAME, j'ai chanté, j'ai dansé, j'ai joué la comédie, mais Ils ont décelé chez moi un don que je ne me connaissais pas, et surtout un sacré dressing 80's ! Merci Maman !",
    "Sur MEMPHIS, Ils m'ont confié un rôle différent de tous les autres, dans lequel je me suis investie avec passion, une passion que décidément, je ne me connaissais pas... Et surtout un grenier aux trésors 50's! Merci Mamy !",
    "Sur LES MISÉRABLES, Ils ont décidé de me faire confiance, à nouveau... Mais les ressources 1830 me manquent, le linge de Maman et Mamy ne me sera d'aucun secours cette fois ! Un sacré défi que je relèverai avec Céline, qui tout comme moi, est fan de vide-greniers et ressourceries en tous genres; sans omettre l'aide indispensable de nos petites mains, l'Equipe Couture",
  ],
}];
const costumeMagaliSectionImage: SectionImageType = {
  image: magali,
  alt: 'Magali costumiere',
  style: { width: '100%', height: '100%', borderRadius: '2px' },
};
const costumeCelineSectionPages: SectionPageType[] = [{
  title: 'Céline Delelis \n Costumière',
  paragraphs: [
    "Passionnée de comédies musicales anglosaxonnes (j'en ai déjà vu au moins une centaine entre Londres, New York et Paris), Les Misérables fait partie de mes préférées.",
    "Pendant longtemps, je me suis contentée d'en être spectatrice, partageant avec entrain mes impressions sur mon blog (so 2010...je sais) jusqu'à ce que je prenne des cours de claquettes et de chant et que je rejoigne l'ORPM sur son précédent projet, Memphis, en tant que choriste et membre de l'ensemble.",
    "Aujourd'hui, en plus de toujours faire partie de l'ensemble, je suis officiellement costumière aux côtés de Magali, mais la tâche s'avère cette fois-ci un peu plus compliquée dans la mesure où les redingotes, corsets et hauts-de-forme se font nettement plus rares que les colliers de perles, jupons et cravates... Mais je viens de me mettre à la couture. Peut-être cela pourra-t-il se montrer utile ?",
  ],
}];
const costumeCelineSectionImage: SectionImageType = {
  image: celine,
  alt: 'Céline costumiere',
  style: { width: '100%', height: '100%', borderRadius: '2px' },
};

export default function EquipeArtistiquePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainequipeArtistique}
          alt="Pianiste ORPM"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="m-section">
        <Typography.Title level={1}>
          L&apos;équipe artistique
        </Typography.Title>
        <div className="m-section p-section text-center text-vingtDeux font-light">
          Le coeur du projet s&apos;appuie sur une équipe artistique soudée
          et confirmée au long de nos nombreux spectacles précédents.
          Elle se rassemble autour du chef d&apos;orchestre, Hubert Gressier,
          qui pilote l&apos;ensemble du projet. L&apos;équipe artistique s&apos;articule autour
          de plusieurs pôles : la musique et le
          chant, les décors et costumes, la mise en scène ainsi que la
          chorégraphie, sans oublier la partie technique. Tous et toutes
          travaillent en synergie afin de présenter un spectacle abouti,
          pour le plus grand plaisir de chacun.
        </div>
        <Section
          pages={directionMusicaleSectionPages}
          image={directionMusicaleSectionImage}
        />
        <Section
          pages={arrangementsMusicauxSectionPages}
          image={arrangementsMusicauxSectionImage}
          reverse
        />
        <Section
          pages={costumeMagaliSectionPages}
          image={costumeMagaliSectionImage}
        />
        <Section
          pages={costumeCelineSectionPages}
          image={costumeCelineSectionImage}
          reverse
        />
      </div>
    </>
  );
}
