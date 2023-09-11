import { Metadata } from 'next';
import Typography from '@/components/Typography/Typography';

const { Title, Paragraph } = Typography;

export const metadata: Metadata = {
  title: 'Page introuvable',
  openGraph: {
    title: 'Page introuvable',
  },
};

export default function NotFound() {
  return (
    <div className="lg:mb-60px mb-30px">
      <Title level={1}>Erreur 404</Title>
      <div className="px-20px lg:px-120px mb-60px text-center">
        <Paragraph>
          Malheureusement, cette page n&apos;existe pas.
          Nous vous invitons cependant à consulter nos autres pages sur le site !
        </Paragraph>
      </div>
    </div>
  );
}
