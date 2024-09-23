import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import supportUsImage from '@/assets/images/support_us2.jpg';
import Button from '@/components/Button/Button';

const { Title, Paragraph } = Typography;

function SupportSection() {
  return (
    <>
      <div className="flex flex-col items-center bg-fadePrimary pt-30px px-20px pb-44 lg:pt-60px lg:px-64 lg:pb-80">
        <Title className="mb-30px lg:mb-8" level={2} color="secondary">Soutenez-nous !</Title>
        <Paragraph className="font-normal text-center text-secondary">
          {/* eslint-disable-next-line max-len */}
          Vous êtes fan de la comédie musicale &quot;Les Misérables&quot; - C&apos;est la faute à Voltaire!&quot; ? Nous aussi !
          <br />
          <br />
          Soutenez-nous pour promouvoir l&apos;art et la culture, tout en
          bénéficiant d&apos;avantages fiscaux.
          <br />
          Cliquez sur le bouton ci-dessous pour contribuer et en
          savoir plus sur la déduction fiscale.
          <br />
          <br />
          Votre soutien est précieux, merci !
        </Paragraph>
      </div>
      <div className="flex flex-col items-center mb-60px lg:mb-32 p-20px lg:p-0">
        <Image className="-mt-40 lg:-mt-64 mb-30px lg:mb-60px object-cover h-353px lg:h-full lg:max-h-512px lg:w-2/3" src={supportUsImage} alt="Photo de l'orchestre en représentation" />
        <Button
          title="Contribuer au projet"
          type="secondary"
          url="https://www.helloasso.com/associations/orchestre-regional-du-pevele-melantois/formulaires/2"
          externalUrl
        />
      </div>
    </>
  );
}

export default SupportSection;
