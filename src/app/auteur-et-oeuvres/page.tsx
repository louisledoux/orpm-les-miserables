import Typography from '@/components/Typography/Typography';
import Section from '@/containers/Section/Section';
import Image from 'next/image';
import React from 'react';
import mainAuteur from '@/assets/pages/auteur-et-oeuvres/images/mainAuteur.png';
import auteurSection from '@/assets/pages/auteur-et-oeuvres/auteurSection';
import localFont from 'next/font/local';

const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });

export default function AuteurEtOeuvresPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainAuteur}
          alt="Victor Hugo"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Typography.Title level={1}>
          L&apos;auteur et l&apos;oeuvre
        </Typography.Title>
        <div className={`mb-60px px-20px lg:px-120px bg-secondary py-30px lg:py-60px ${amithenFont.className}`}>
          <Typography.Paragraph className="!text-4xl lg:!text-h2 text-primary lg:text-white text-center">
            &quot; Tant qu&apos;il existera, par le fait des lois et des murs,
            une damnation sociale créant artificiellement, en pleine civilisation,
            des enfers et compliquant d&apos;une fatalité humaine, la destinée
            qui est divine tant qu&apos; il y aura sur la terre
            ignorance et misère, des livres comme celui-ci ne pourront pas être inutiles. &quot;
          </Typography.Paragraph>
        </div>
        <div className="lg:px-40px">
          <Section
            pages={auteurSection.pages}
            image={auteurSection.image}
          />
        </div>
        <div className={`mb-60px px-20px lg:px-120px bg-secondary py-30px lg:py-60px ${amithenFont.className}`}>
          <Typography.Paragraph className="!text-4xl lg:!text-h2 text-primary lg:text-white text-center">
            &quot; Je ne suis pas, messieurs, de ceux qui croient qu&apos;on peut supprimer
            la souffrance en ce monde ; la souffrance est une loi divine ; mais je suis de ceux
            qui pensent et qui affirment qu&apos;on peut détruire la misère.
            <br />
            Tant que les trois problèmes du siècle, la dégradation de l&apos;homme par le
            prolétariat, la déchéance de la femme par la faim, l&apos;atrophie de l&apos;enfant
            par la nuit, ne seront pas résolus ; en d&apos;autres termes, et à un point de vue plus
            étendu encore, tant qu&apos;il y aura sur la terre ignorance et misère,
            des livres de la nature de celui-ci pourront ne pas être inutiles. &quot;
          </Typography.Paragraph>
        </div>
      </div>
    </>
  );
}
