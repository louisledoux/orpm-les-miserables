import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import orchestre from '@/assets/pages/orchestre/images/aproposorchestre.jpg';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={orchestre}
          alt="L'orchestre ORPM en concert"
          style={{ objectPosition: '50% 80%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-60px mb-30px">
        <Title level={1}>
          Mentions légales
        </Title>
        <div className="px-20px lg:px-120px mb-60px">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-xl font-semibold mb-2">Orchestre Régional du Pévèle Mélantois</h2>
            <Paragraph>Siège social - 3 Rue du Général de Gaulle - 59551 Tourmignies</Paragraph>
            <Paragraph>SIRET : 381 946 540 00030</Paragraph>
            <Paragraph>
              <Link
                className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
                href="mailto:miserables.spectacle@gmail.com"
              >
                miserables.spectacle@gmail.com
              </Link>
            </Paragraph>
          </div>
          <div>
            <Title level={3} className="mt-12 mb-8">Responsable de la publication</Title>
            <Paragraph>Thierry Olivier</Paragraph>
          </div>
          <Title level={3} className="mt-12 mb-8">Hébergeur</Title>
          <div className="flex flex-col gap-2">
            <Paragraph>
              <Link
                className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
                href="https://vercel.com"
                passHref
                target="_blank"
              >
                Vercel Inc.
              </Link>
            </Paragraph>
            <Paragraph>440 N Barranca Ave #4133 - Covina, CA 91723</Paragraph>
            <Paragraph>
              <Link
                className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
                href="mailto:privacy@vercel.com"
              >
                privacy@vercel.com
              </Link>
            </Paragraph>
          </div>
          <Title level={3} className="mt-12 mb-8">Conception et réalisation</Title>
          <div className="flex flex-col gap-2">
            <Paragraph>
              <Link
                className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
                href="https://www.linkedin.com/in/louis-ledoux/"
                passHref
                target="_blank"
              >
                Louis Ledoux
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
                href="https://www.linkedin.com/in/pauline-ledoux-juste-724a69ab/"
                passHref
                target="_blank"
              >
                Pauline Ledoux-Juste
              </Link>
            </Paragraph>
          </div>
          <Title level={3} className="mt-12 mb-8">Propriété intellectuelle</Title>
          <Paragraph className="flex flex-col gap-2">
            <strong>Photos de la troupe :</strong>
            <span>Elise Lecocq</span>
            <span>Pauline Ledoux Juste</span>
            <span>Frédérique Gressier</span>
            <span>Orchestre Régional du Pévèle Mélantois</span>
          </Paragraph>
        </div>
      </div>
    </>
  );
}
