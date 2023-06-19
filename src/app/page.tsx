import Carousel from '@/containers/Carousel/Carousel';
import { CarouselItemProps } from '@/components/CarouselItem/CarouselItem';
import image1 from '@/assets/homepage-carousel/image1.png';
import Section from '@/containers/Section/Section';
import newsImage from '@/assets/news-section/newsImage.png';

const items: CarouselItemProps[] = [
  {
    imageSrc: image1,
    alt: 'Cosette dans la rue',
    style: { objectPosition: '80% 80%' },
  },
];

export default function Home() {
  return (
    <>
      <div className="m-section">
        <Carousel items={items} />
      </div>
      <div className="m-section">
        <Section
          pages={[{
            title: 'En ce moment',
            paragraphs: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum aucto',
            ],
          }]}
          image={{
            image: newsImage,
            alt: 'Mon image',
            style: { width: '100%', height: '100%' },
          }}
        />
      </div>
    </>
  );
}
