import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

export const metadata: Metadata = {
  title: 'Médias',
  openGraph: {
    title: 'Médias',
  },
};

export default function MediasPage() {
  return (
    <div className="lg:mb-60px mb-30px">
      <Title level={1}>
        Médias
      </Title>
      <div className="px-20px lg:px-120px mb-60px">
        <div className="flex flex-col gap-2">
          <Paragraph>
            <Link
              className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
              href="/dossierpressemiserables0524.pdf"
              target="_blank"
            >
              Dossier de presse
            </Link>
          </Paragraph>
          <Paragraph>
            <Link
              className="underline underline-offset-2 hover:text-primary transition ease-in-out duration-150"
              href="/logo-orpm.svg"
              target="_blank"
            >
              Logo ORPM
            </Link>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
