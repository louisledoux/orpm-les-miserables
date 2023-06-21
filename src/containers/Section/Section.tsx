import Image from 'next/image';
import Typography from '@/components/Typography/Typography';
import { SectionImageType, SectionPageType } from '@/types/Section.type';
import CallToAction, { CallToActionProps } from '@/components/Section/CallToAction/CallToAction';

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
  /**
   * Optional callable CTA component
   */
  extra?: CallToActionProps,
}
function Section({
  pages, image, reverse, extra,
}: SectionProps) {
  return (
    <div className="m-section p-section">
      <div className={`flex justify-between items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="max-w-inSection w-full max-h-fit h-full">
          <Image className="object-cover" src={image.image} alt={image.alt} style={image.style} />
        </div>
        {pages.map((page) => (
          <div
            key={page.title}
            className="flex flex-col justify-center max-w-inSection w-full px-10"
          >
            <Title className="m-sectionTitle text-center" level={2}>{page.title}</Title>
            {page.paragraphs.map((paragraph) => (
              <Paragraph
                className="m-paragraph text-justify font-light text-base"
                key={paragraph}
              >
                {paragraph}
              </Paragraph>
            ))}
          </div>
        ))}
      </div>
      {extra ? <CallToAction firstLink={extra.firstLink} secondLink={extra.secondLink} /> : <></>}
    </div>
  );
}

export default Section;
