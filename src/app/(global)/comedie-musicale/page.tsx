import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import AlternativeSection from '@/containers/AlternativeSection/AlternativeSection';
import Section from '@/containers/Section/Section';
import mainComedie from '@/assets/pages/comedie-musicale/images/mainComedie.jpg';
import {
  aProposSection, sceneClefsAlternativeSection,
} from '@/assets/pages/comedie-musicale/comedieMusicaleSection';

export const metadata: Metadata = {
  title: 'La comédie musicale',
  openGraph: {
    title: 'La comédie musicale',
  },
};

export default function ComedieMusicale() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainComedie}
          alt="Cosette les Miserables ORPM"
          style={{ objectPosition: '50% 35%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-120px mb-60px">
        <Typography.Title level={1}>
          La comédie musicale
        </Typography.Title>
      </div>
      <div className="mb-60px text-center lg:px-120px px-20px">
        <Typography.Paragraph className="mb-2 !text-base lg:!text-22">
          Nous nous sommes lancé le défi de vous transporter dans les rues de Paris en 1832,
          à l&apos;époque des barricades,
          et de vous faire découvrir des mélodies inédites en comédie musicale,
          spécialement créées pour séduire le public d&apos;aujourd&apos;hui.
        </Typography.Paragraph>
      </div>
      <Section
        pages={aProposSection.pages}
        image={aProposSection.image}
      />
      <AlternativeSection
        pages={sceneClefsAlternativeSection.pages}
        image={sceneClefsAlternativeSection.image}
        reverse
      />
    </>
  );
}
