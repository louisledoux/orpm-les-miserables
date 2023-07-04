import Typography from '@/components/Typography/Typography';
import Section from '@/containers/Section/Section';
import Image from 'next/image';
import React from 'react';
import mainTechnique from '@/assets/pages/equipe-technique/images/mainequipetechnique.png';
import { equipeTechnique1Section, equipeTechnique2Section } from '@/assets/pages/equipe-technique/equipeTechniqueSection';

export default function LaTroupePage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainTechnique}
          alt="Enjolras Les Misérables"
          style={{ objectPosition: '50% 25%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Typography.Title level={1} className="px-20px">
          L&apos;équipe technique
        </Typography.Title>
        <div className="mb-60px lg:mb-120px px-20px lg:px-120px">
          <Typography.Paragraph className="lg:!text-22 !text-base mb-30px lg:mb-60px text-center">
            Sans staff technique le projet ne peut être monté.
            Leur rôle est de s&apos;occuper de toute la logistique autour du spectacle.
            Après plusieurs années de comédies musicales, nous savons que le staff
            technique est tout aussi primordial que la troupe. Derrière chaque petit détail
            se cache une logistique millimétrée où rien ne doit être laissé au hasard.
          </Typography.Paragraph>
          <Typography.Paragraph className="lg:!text-22 !text-base text-center">
            En plus des membres talentueux, une troupe doit également comprendre des techniciens
            qualifiés. Un ingénieur du son et un éclairagiste sont essentiels pour assurer un
            spectacle fluide et professionnel. De même, un technicien pour gérer les accessoires
            et le décor est nécessaire pour créer un environnement scénique approprié.
            Une équipe de production compétente qui comprend des régisseurs, des costumiers et
            des maquilleurs est également essentielle pour le succès
            d&apos;un projet de comédie musicale.
          </Typography.Paragraph>
        </div>
        <div>
          <Section
            pages={equipeTechnique1Section.pages}
            image={equipeTechnique1Section.image}
          />
        </div>
        <div>
          <Section
            pages={equipeTechnique2Section.pages}
            image={equipeTechnique2Section.image}
            reverse
          />
        </div>
      </div>
    </>
  );
}
