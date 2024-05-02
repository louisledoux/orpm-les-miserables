import { SectionImageType, SectionPageType } from '@/types/Section.type';
import CallToAction, { CallToActionProps } from '@/components/Section/CallToAction/CallToAction';
import SectionClient from '@/components/Section/SectionClient/SectionClient';

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
  /**
   * Should the image be adjusted?
   */
  adjustImage?: boolean,
}
function Section({
  pages, image, reverse, extra, adjustImage,
}: SectionProps) {
  return (
    <div className="mb-60px px-20px lg:mb-120px lg:px-120px">
      <SectionClient pages={pages} image={image} reverse={reverse} adjustImage={adjustImage} />
      {extra ? <CallToAction firstLink={extra.firstLink} secondLink={extra.secondLink} /> : <></>}
    </div>
  );
}

export default Section;
