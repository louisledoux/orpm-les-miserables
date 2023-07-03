import { SectionImageType, SectionPageType } from '@/types/Section.type';
import Typography from '@/components/Typography/Typography';
import Image from 'next/image';

interface SectionProps {
  /**
   * The pages composing the section
   */
  pages: SectionPageType[],
  /**
   * The section image
   */
  image: SectionImageType,
  /**
   * Should the position of pages and image be reversed
   * Default to false
   */
  reverse?: boolean,
}
function PersonnagesSection({
  pages, image, reverse,
}: SectionProps) {
  return (
    <div className={`flex flex-row px-120px mb-60px items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className={`w-full max-w-33 h-full ${reverse ? 'ml-30px' : 'mr-30px'}`}>
        <Image className="object-cover h-full w-full max-h-550" src={image.image} alt={image.alt} style={image.style} />
      </div>
      {pages.map((page) => (
        <div
          key={page.title}
          className={`flex flex-col max-w-66 w-full py-60px px-40px ${reverse ? 'mr-30px' : 'ml-30px'}`}
          style={page.style}
        >
          <Typography.Title className="mb-60px text-center" level={2}>{page.title}</Typography.Title>
          {page.paragraphs.map((paragraph) => (
            <Typography.Paragraph
              className="mb-30px text-justify font-light text-base"
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
