import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import localFont from 'next/font/local';
import AlternativeSection from '@/containers/AlternativeSection/AlternativeSection';
import histoireMiserablesHeroImage from '@/assets/pages/histoire/images/histoiremiserables.jpg';
import {
  aProposAlternativeSection, histoireAlternativeSection, StructureAlternativeSection,
} from '@/assets/pages/histoire/histoireSection';

const amithenFont = localFont({ src: '../../../assets/font/amithen.ttf' });

export const metadata: Metadata = {
  title: "L'histoire des Misérables",
  openGraph: {
    title: "L'histoire des Misérables",
  },
};

export default function HistoireMiserables() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={histoireMiserablesHeroImage}
          alt="Cosette les Miserables ORPM"
          style={{ objectPosition: '50% 15%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-60px lg:mb-120px">
        <Typography.Title level={1}>
          L&apos;histoire des Misérables
        </Typography.Title>
      </div>
      <div className="mb-60px text-center px-20px lg:px-120px">
        <Typography.Paragraph className="mb-2 !text-base lg:!text-22">
          Après avoir exploré différents univers à travers la métropole lilloise,
          nous vous invitons à nous rejoindre pour une aventure encore plus captivante :
        </Typography.Paragraph>
        <Typography.Paragraph className="mb-4 font-medium !text-22 lg:!text-2xl text-primary">
          &quot;Les Misérables - C&apos;est la faute à Voltaire!&quot;
          d&apos;après l&apos;oeuvre de Victor Hugo !
        </Typography.Paragraph>
        <Typography.Paragraph className="!text-base lg:!text-22">
          Nous nous sommes lancé le défi de vous transporter dans les rues de Paris en 1832,
          à l&apos;époque des barricades,
          et de vous faire découvrir des mélodies inédites en comédie musicale,
          spécialement créées pour séduire le public d&apos;aujourd&apos;hui.
        </Typography.Paragraph>
      </div>
      <AlternativeSection
        pages={aProposAlternativeSection.pages}
        image={aProposAlternativeSection.image}
      />
      <AlternativeSection
        pages={histoireAlternativeSection.pages}
        image={histoireAlternativeSection.image}
        reverse
      />
      <AlternativeSection
        pages={StructureAlternativeSection.pages}
        image={StructureAlternativeSection.image}
      />
      <div className={`mb-60px px-20px lg:px-120px bg-secondary py-30px lg:py-60px ${amithenFont.className}`}>
        <Typography.Paragraph className="!text-4xl lg:!text-h2 text-primary text-center">
          &quot;Vous voulez la misère secourue,
          <br />
          moi, je la veux supprimée.&quot;
        </Typography.Paragraph>
      </div>
    </>
  );
}
