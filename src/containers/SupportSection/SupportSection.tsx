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
        <Paragraph className="font-light text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor.
          In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper.
          Sed tempor ex eget bibendum auctor.
          Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.
        </Paragraph>
      </div>
      <div className="flex flex-col items-center mb-32">
        <Image className="-mt-64 mb-60px" height={512} src={supportUsImage} alt="Une flutiste derrière un pupitre" />
        <Button title="Contribuer au projet" type="secondary" />
      </div>
    </>
  );
}

export default SupportSection;
