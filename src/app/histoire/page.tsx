import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import localFont from 'next/font/local';
const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });
import AlternativeSection from '@/containers/AlternativeSection/AlternativeSection';
import histoireMiserablesHeroImage from '@/assets/pages/histoire/images/histoiremiserables.jpg';
import {
  aProposAlternativeSection, histoireAlternativeSection, StructureAlternativeSection,
} from '@/assets/pages/histoire/histoireSection';

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
        <div className="mb-120px">
          <Typography.Title level={1}>
            L&apos;histoire des Misérables
          </Typography.Title>
        </div>
        <div className='mb-60px text-center px-120px'>
          <Typography.Paragraph className='mb-2 !text-22'>
            Après avoir exploré différents univers à travers la métropole lilloise, nous vous invitons à nous rejoindre pour une aventure encore plus captivante :
          </Typography.Paragraph>
          <Typography.Paragraph className='mb-4 font-medium !text-2xl text-primary'>
            Les Misérables d'après l'oeuvre de Victor Hugo !
          </Typography.Paragraph>
          <Typography.Paragraph className='!text-22'>
            Nous nous sommes lancé le défi de vous transporter dans les rues de Paris en 1832, à l'époque des barricades, et de vous faire revivre les mélodies les plus célèbres de cette comédie musicale, revisitées pour séduire le public d'aujourd'hui.
          </Typography.Paragraph>
        </div>
        <AlternativeSection pages={aProposAlternativeSection.pages} image={aProposAlternativeSection.image} />
        <AlternativeSection pages={histoireAlternativeSection.pages} image={histoireAlternativeSection.image} reverse/>
        <AlternativeSection pages={StructureAlternativeSection.pages} image={StructureAlternativeSection.image} />
        <div className={`mb-60px px-120px bg-secondary py-60px ${amithenFont.className}`}>
          <Typography.Paragraph className='!text-h2 text-primary text-center'>
            "Il n'y a pas de petites misères ni de grandes misères,<br/>il n'y a que des misères."
          </Typography.Paragraph>
        </div>
      </>
    );
  }