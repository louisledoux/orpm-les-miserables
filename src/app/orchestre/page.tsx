import MainImgContainer from '@/containers/Main-Img/main-img';
import { MainImgProps } from '@/components/MainImgItem/MainImgItem'
import imagetest from '@/assets/orchestre-page/imagetest.jpg';

const items: MainImgProps[] = [
  {
    imageSrc: imagetest,
    alt: 'Foutu Test',
    style: { objectPosition: 'center' },
  },
];

export default function Home() {
  return (
    <>
      <MainImgContainer items={items} />
    </>
  );
}
