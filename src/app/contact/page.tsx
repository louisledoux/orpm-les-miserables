import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import orchestre from '@/assets/pages/orchestre/images/aproposorchestre.jpg'
import Link from "next/link";
import facebook from '@/assets/pages/contact/images/facebook.svg'

export default function ContactPage() {
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
        <div className="mb-60px">
          <Typography.Title level={1}>
            Contact
          </Typography.Title>
          <div className="px-120px mb-60px text-center">
            <p className="text-22 font-medium text-primary mb-4">
                Adresse mail
            </p>
            <Typography.Paragraph className="mb-30px">
                miserables.spectacle@gmail.com
            </Typography.Paragraph>
            <p className="text-22 font-medium text-primary mb-4">
                Siège social de l'Orchestre Régional Pévèle Mélantois
            </p>
            <Typography.Paragraph className="mb-30px">
                3 rue du Général de Gaulle 59551 Tourmignies
            </Typography.Paragraph>
            <p className="text-22 font-medium text-primary mb-4">
                Président de l'Orchestre Régional Pévèle Mélantois
            </p>
            <Typography.Paragraph>
                Thierry Olivier
            </Typography.Paragraph>
          </div>
          <div className="px-120px mb-60px text-center flex justify-center">
            <Link href={'https://www.facebook.com/profile.php?id=100063630728155'}>
                <Image
                src={facebook}
                alt="Page Facebook de l'ORPM"
                style={{ width: '40px'}}
                />
            </Link>
          </div>
        </div>
      </>
    );
  }