import orchestreHeroImage from '@/assets/orchestre-page/images/mainorchestre.png';
import Typography from '@/components/Typography/Typography';
import orchestreImage from '@/assets/orchestre-page/images/aproposorchestre.jpg';
import hubert from '@/assets/orchestre-page/images/hubert.jpg';
import Section from '@/containers/Section/Section';
import { SectionImageType, SectionPageType } from '@/types/Section.type';
import Image from 'next/image';
import React from 'react';
import Button from '@/containers/Button/Button';
import RoutesPathEnum from '@/routes/Routes.enum';
import Carousel from '@/containers/Carousel/Carousel';
import orchestreCarouselData from '@/assets/orchestre-page/orchestreCarouselData';

const orchestreSectionImage: SectionImageType = {
  image: orchestreImage,
  alt: 'Orchestre ORPM',
  style: { width: '100%', height: '100%', borderRadius: '2px' },
};
const directionMusicaleSectionImage: SectionImageType = {
  image: hubert,
  alt: 'Hubert Gressier ORPM',
  style: { width: '100%', height: '100%', borderRadius: '2px' },
};

const orchestreSectionPages: SectionPageType[] = [{
  title: 'À propos',
  paragraphs: [
    'Notre équipe de 40 musiciens ambitionne de transporter son public dans un monde musical inédit à travers chaque prestation. Nous rassemblons des chanteurs, danseurs, comédiens, techniciens et partenaires pour offrir une expérience immersive pour sortir de la routine le temps d\'un spectacle. À chaque nouveau projet, nous relevons le défi de surprendre et d\'émerveiller !',
    'Les avantages à avoir un orchestre en live dans les comédies musicales sont nombreux. Notre vocation est de rendre la musique plus riche et plus expressive, de l\'ajuster en fonction des scènes, des mouvements ou des émotions des acteurs.',
    'Les instruments aident également à créer une atmosphère plus riche et plus immersive pour le public, ce contribue à améliorer l\'expérience des spectateurs. La présence sur scène d\'un orchestre en live ajoute une touche unique à la pièce par son interprétation personnelle et la qualité de ses arrangements.',
  ],
}];
const directionMusicaleSectionPages: SectionPageType[] = [{
  title: 'Hubert Gressier \n Chef d\'orchestre',
  paragraphs: [
    "Après de nombreuses années passées à étudier le saxophone, l'écriture et d'autres disciplines musicales dans des conservatoires, j'ai poursuivi une formation universitaire en musicologie en parallèle. Depuis mon enfance, la musique est pour moi une véritable passion et une source infinie de plaisir.",
    "Diriger l'Orchestre Régional du Pévèle Mélantois depuis plus de 3 décennies m'a offert l'opportunité incroyable de vivre de nombreuses rencontres musicales et culturelles enrichissantes, tout en réalisant des projets ambitieux qui ont toujours été accueillis avec enthousiasme par le public.",
    "Chaque année, je suis heureux de voir de jeunes musiciens rejoindre nos pupitres et apporter une nouvelle énergie et une fraîcheur bienvenues. Au fil du temps, la direction d'orchestre est devenue une priorité pour moi, et cela a finalement pris le pas sur ma pratique de l'instrument. Le plaisir de me retrouver face aux musiciens de l'orchestre est toujours intact même après toutes ces années.",
  ],
  reverse: true,
}];

export default function OrchestrePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={orchestreHeroImage}
          alt="Joueur de trompette ORPM"
          style={{ objectPosition: '50% 45%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="m-section">
        <Typography.Title level={1}>
          L&apos;orchestre
        </Typography.Title>
        <Section pages={orchestreSectionPages} image={orchestreSectionImage} />
        <div className="bg-secondary p-sectionPage m-section">
          <Typography.Title level={2} className="m-sectionTitle">
            La musique, directement chez vous
          </Typography.Title>
          <Typography.Paragraph className="text-white text-center text-22 m-paragraph">
            Écoutez-nous avant même de venir à nos représentations,
            et découvrez nos précédents spectacles !
          </Typography.Paragraph>
          <Button
            title="Découvrir"
            url={RoutesPathEnum.HOMEPAGE}
            type="primary"
          />
        </div>
        <Section
          pages={directionMusicaleSectionPages}
          image={directionMusicaleSectionImage}
          reverse
        />
        <div className="p-section m-section">
          <Carousel items={orchestreCarouselData} />
        </div>
      </div>
    </>
  );
}
