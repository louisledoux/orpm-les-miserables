import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import localFont from 'next/font/local';
import AlternativeSection from '@/containers/AlternativeSection/AlternativeSection';
import Section from '@/containers/Section/Section';
import mainComedie from '@/assets/pages/comedie-musicale/images/mainComedie.png';
import {
  aProposSection, sceneClefsAlternativeSection,
} from '@/assets/pages/comedie-musicale/comedieMusicaleSection';

const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });

export default function ComedieMusicale() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={mainComedie}
          alt="Cosette les Miserables ORPM"
          style={{ objectPosition: '50% 60%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-120px">
        <Typography.Title level={1}>
          La comédie musicale
        </Typography.Title>
      </div>
      <div className="mb-60px text-center px-120px">
        <Typography.Paragraph className="mb-2 !text-22">
          Nous nous sommes lancé le défi de vous transporter dans les rues de Paris en 1832,
          à l&apos;époque des barricades, et de vous faire revivre les mélodies les plus célèbres
          de cette comédie musicale, revisitées pour séduire le public d&apos;aujourd&apos;hui.
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
