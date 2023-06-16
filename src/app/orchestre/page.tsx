import MainImgContainer from '@/containers/Main-Img/main-img';
import { MainImgProps } from '@/components/MainImgItem/MainImgItem'
import dessinorchestre from '@/assets/orchestre-page/mainorchestre.png'
import Typography from '@/components/Typography/Typography';
import ImgAndTextBlock from '@/containers/StandardBlock/ImgAndTextBlock';
import imageOrchestre1 from '@/assets/orchestre-page/imagetest.jpg'

const items: MainImgProps[] = [
  {
    imageSrc: dessinorchestre,
    alt: `Joueur de trompette ORPM`,
    style: { objectPosition: '50% 45%' },
  },
];

export default function Home() {
  return (
    <>
      <MainImgContainer items={items} />
      <div className='m-classicBlock'>
        <Typography.Title level={1}>
          L'orchestre
        </Typography.Title>
        <ImgAndTextBlock
          imgSrc= {imageOrchestre1}
          imgAlt="Orchestre ORPM"
          imgStyle={{ width: '100%', height: '100%' }}
          title="A propos"
          text1="Notre équipe de 40 musiciens ambitionne de transporter son public dans un monde musical inédit à travers chaque prestation. Nous rassemblons des chanteurs, danseurs, comédiens, techniciens et partenaires pour offrir une expérience immersive pour sortir de la routine
          le temps d'un spectacle. À chaque nouveau projet, nous relevons le défi de surprendre et d'émerveiller !"
          text2="Les avantages à avoir un orchestre en live dans les comédies musicales sont nombreux. Notre vocation est de rendre la musique plus riche et plus expressive, de l'ajuster en fonction des scènes, des mouvements ou des émotions des acteurs."
          text3="Les instruments aident également à créer une atmosphère plus riche et plus immersive pour le
          public, ce contribue à améliorer l'expérience des spectateurs.
          La présence sur scène d'un orchestre en live ajoute une touche unique à la pièce par son interprétation personnelle et la qualité de ses arrangements."
        />
      </div>
    </>
  );
}
