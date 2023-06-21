import Image from 'next/image';
import Typography from '@/components/Typography/Typography';
import { SectionImageType, SectionPageType } from '@/types/Section.type';

const { Title, Paragraph } = Typography;

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
function Section({
  pages, image, reverse,
}: SectionProps) {
  return (
    <div className={`flex justify-between m-section p-section items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="max-w-inSection w-full h-full">
        <Image className="object-cover h-full w-full rounded-sm" src={image.image} alt={image.alt} style={image.style} />
      </div>
      {pages.map((page) => (
        <div
          key={page.title}
          className="flex flex-col justify-center max-w-inSection w-full p-sectionPage"
        >
          <Title className="m-sectionTitle" level={2}>{page.title}</Title>
          {page.paragraphs.map((paragraph) => (
            <Paragraph
              className="m-paragraph text-justify"
              key={paragraph}
            >
              {paragraph}
            </Paragraph>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Section;
