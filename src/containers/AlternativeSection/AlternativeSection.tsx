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
function AlternativeSection({
  pages, image, reverse,
}: SectionProps) {
    return (
        <div className={`flex flex-col px-120px mb-60px`}>
          <div className={`w-full max-w-75 h-28 ${reverse ? 'self-end' : 'self-start'}`}>
            <Image className="object-cover h-full w-full" src={image.image} alt={image.alt} style={image.style} />
          </div>
          {pages.map((page) => (
            <div
              key={page.title}
              className={`flex flex-col max-w-75 w-full pt-60px px-40px ${reverse ? 'self-start' : 'self-end'}`}
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

export default AlternativeSection;
