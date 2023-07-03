import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import supportUsImage from '@/assets/images/support_us.png';
import Button from '@/components/Button/Button';

const { Title, Paragraph } = Typography;

function SupportSection() {
  return (
    <>
      <div className="flex flex-col items-center bg-fadePrimary pt-60px px-64 pb-80">
        <Title className="mb-8" level={2} color="secondary">Soutenez-nous !</Title>
        <Paragraph className="font-light text-center text-secondary">
          Vous êtes fan de la comédie musicale &quot;Les Misérables&quot; ? Nous aussi !
          <br />
          Aidez nous à créer une production exceptionnelle en finançant nos costumes.
          Votre contribution nous permettra de donner vie à cette histoire intemporelle
          avec des costumes de qualité qui feront vibrer notre public.
          <br />
          En retour, nous vous offrons des récompenses uniques et des avantages exclusifs,
          comme des invitations aux répétitions, des rencontres avec les artistes, les musiciens…
        </Paragraph>
      </div>
      <div className="flex flex-col items-center mb-32">
        <Image className="-mt-64 mb-60px object-cover h-full max-h-512px" src={supportUsImage} alt="Une flutiste derrière un pupitre" />
        <Button
          title="Contribuer au projet"
          type="secondary"
          url="https://www.helloasso.com/associations/orchestre-regional-du-pevele-melantois/collectes/aidez-nous-a-financer-les-costumes-de-notre-spectacle"
          externalUrl
        />
      </div>
    </>
  );
}

export default SupportSection;
