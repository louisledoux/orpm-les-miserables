import orchestreHeroImage from '@/assets/orchestre-page/mainorchestre.png';
import Typography from '@/components/Typography/Typography';
import orchestreImage from '@/assets/orchestre-page/imagetest.jpg';
import Section from '@/containers/Section/Section';
import { SectionImageType, SectionPageType } from '@/types/Section.type';
import Image from 'next/image';
import React from 'react';

const orchestreSectionImage: SectionImageType = {
  image: orchestreImage,
  alt: 'Orchestre ORPM',
  style: { width: '100%', height: '100%' },
};

const orchestreSectionPages: SectionPageType[] = [{
  title: 'À propos',
  paragraphs: [
    'Notre équipe de 40 musiciens ambitionne de transporter son public dans un monde musical inédit à travers chaque prestation. Nous rassemblons des chanteurs, danseurs, comédiens, techniciens et partenaires pour offrir une expérience immersive pour sortir de la routine le temps d\'un spectacle. À chaque nouveau projet, nous relevons le défi de surprendre et d\'émerveiller !',
    'Les avantages à avoir un orchestre en live dans les comédies musicales sont nombreux. Notre vocation est de rendre la musique plus riche et plus expressive, de l\'ajuster en fonction des scènes, des mouvements ou des émotions des acteurs.',
    'Les instruments aident également à créer une atmosphère plus riche et plus immersive pour le public, ce contribue à améliorer l\'expérience des spectateurs. La présence sur scène d\'un orchestre en live ajoute une touche unique à la pièce par son interprétation personnelle et la qualité de ses arrangements.',
  ],
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
      </div>
    </>
  );
}
