'use client';

import Image from 'next/image';
import Typography from '@/components/Typography/Typography';
import { SectionImageType, SectionPageType } from '@/types/Section.type';
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
}
function SectionClient({
  pages, image, reverse,
}: SectionClientProps) {
  const [divHeight, setDivHeight] = useState<number>();
  const observedDiv: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (!observedDiv.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv?.current?.offsetHeight !== divHeight) {
        setDivHeight(observedDiv?.current?.offsetHeight);
      }
    });

    resizeObserver.observe(observedDiv.current);

    // eslint-disable-next-line consistent-return
    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [divHeight, observedDiv]);

  return (
    <div className={`flex justify-between items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div style={{ height: divHeight }} className="max-w-inSection w-full">
        <Image className="object-cover h-full max-h-fit" src={image.image} alt={image.alt} style={image.style} />
      </div>
      {pages.map((page) => (
        <div
          key={page.title}
          className="flex flex-col justify-center max-w-inSection w-full py-60px px-40px"
          ref={observedDiv}
        >
          <Title className="mb-60px text-center" level={2}>{page.title}</Title>
          {page.paragraphs.map((paragraph) => (
            <Paragraph
              className="mb-30px text-justify font-light text-base"
              key={`${paragraph}-${page.title}`}
            >
              {paragraph}
            </Paragraph>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SectionClient;
