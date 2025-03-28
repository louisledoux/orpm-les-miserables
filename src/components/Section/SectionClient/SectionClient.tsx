'use client';

import Typography from '@/components/Typography/Typography';
import { SectionImageType, SectionPageType } from '@/types/Section.type';
import Image from 'next/image';
import {
  MutableRefObject, useEffect, useRef, useState,
} from 'react';

const { Title, Paragraph } = Typography;

type SectionClientProps = {
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
   * Should the image be adjusted?
   */
  adjustImage?: boolean,
}
function SectionClient({
  pages, image, reverse, adjustImage = true,
}: SectionClientProps) {
  const [divHeight, setDivHeight] = useState<number | undefined>();
  const observedDiv: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (!observedDiv.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv?.current?.offsetHeight !== divHeight) {
        if (window.matchMedia('(min-width: 1024px)').matches) {
          setDivHeight(observedDiv?.current?.offsetHeight);
        }
      }
    });

    resizeObserver.observe(observedDiv.current);

    // eslint-disable-next-line consistent-return
    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [divHeight, observedDiv, adjustImage]);

  return (
    <div className={`flex justify-between items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${reverse ? 'flex-col-reverse' : 'flex-col-reverse'}`}>
      <div style={{ height: divHeight }} className="lg:max-w-inSection w-full">
        <Image className={`h-full max-h-fit ${adjustImage ? 'object-cover' : 'object-scale-down'}`} src={image.image} alt={image.alt} style={image.style} />
      </div>
      {pages.map((page) => (
        <div
          key={page.title}
          className="flex flex-col justify-center lg:max-w-inSection w-full lg:py-60px lg:px-40px lg:mb-0 mb-30px"
          ref={observedDiv}
          style={page.style}
        >
          <Title className="lg:mb-60px mb-30px text-center" level={2}>{page.title}</Title>
          {page.paragraphs.map((paragraph) => (
            <Paragraph
              className="mb-20px lg:mb-30px text-justify font-light text-baseMobile lg:text-base whitespace-pre-line"
              key={`${paragraph}-${page.title}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SectionClient;
