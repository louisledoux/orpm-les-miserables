'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useViewport from '@/hooks/useViewport';

type ExtraLink = {
  text: string,
  url: string,
  mobile?: string,
  newTab?: boolean,
}

export interface CallToActionProps {
  firstLink: ExtraLink,
  secondLink?: ExtraLink,
}
function CallToAction({
  firstLink, secondLink,
}: CallToActionProps) {
  const { isDesktopScreen } = useViewport();

  return (
    <>
      {isDesktopScreen ? (
        <div className="flex flex-row w-full justify-between items-center bg-secondary p-extra">
          <Link
            href={firstLink.url}
            target={firstLink.newTab ? '_blank' : '_self'}
            className="flex flex-row items-center gap-5 text-white text-22 font-medium
            hover:text-primary ease-in-out duration-150"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <span>{firstLink.text}</span>
          </Link>
          {secondLink && (
          <Link
            href={secondLink.url}
            className="text-primary text-22 uppercase hover:text-white ease-in-out duration-150"
          >
            {secondLink.text}
          </Link>
          )}
        </div>
      ) : (
        <div className="flex justify-center bg-secondary px-20px py-15px rounded-sm mt-30px">
          <Link
            href={firstLink.url}
            className="flex text-primary text-base font-medium uppercase"
          >
            <span>{firstLink.mobile || firstLink.text}</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default CallToAction;
