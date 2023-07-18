import { SectionImageType, SectionPageType } from '@/types/Section.type';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import Carousel from '@/containers/Carousel/Carousel';

interface SectionProps {
  /**
   * The pages composing the section
   */
  pages: SectionPageType[],
  /**
   * The section image
   */
  images: SectionImageType[],
  /**
   * Should the position of pages and image be reversed
   * Default to false
   */
  reverse?: boolean,
}
function PersonnagesSection({
  pages, images, reverse,
}: SectionProps) {
  return (
    <div className={`flex justify-between items-center px-20px lg:px-120px mb-60px ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${reverse ? 'flex-col' : 'flex-col'}`}>
      <div className={`w-full lg:max-w-33 h-353px mb-30px lg:mb-0 lg:h-full lg:${reverse ? 'ml-30px' : 'mr-30px'}`}>
        {images.length === 1 ? (
          <Image className="object-cover object-top lg:object-center h-full w-full lg:max-h-550" src={images[0].image} alt={images[0].alt} style={images[0].style} />
        ) : (
          <Carousel
            items={images.map((image) => ({
              imageSrc: image.image,
              alt: image.alt,
              style: image.style,
            }))}
          />
        )}
      </div>
      {pages.map((page) => (
        <div
          key={page.title}
          className={`flex flex-col lg:max-w-66 w-full lg:py-60px px-20px lg:px-40px ${reverse ? 'lg:mr-30px' : 'lg:ml-30px'}`}
          style={page.style}
        >
          <Typography.Title className="mb-30px lg:mb-60px text-center" level={2}>{page.title}</Typography.Title>
          {page.paragraphs.map((paragraph) => (
            <Typography.Paragraph
              className="lg:mb-30px text-justify font-light text-base"
              key={`${paragraph}-${page.title}`}
            >
              {paragraph}
            </Typography.Paragraph>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PersonnagesSection;
