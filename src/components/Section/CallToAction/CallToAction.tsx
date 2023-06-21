import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type ExtraLink = {
  text: string,
  url: string,
}

export interface CallToActionProps {
  firstLink: ExtraLink,
  secondLink?: ExtraLink,
}
function CallToAction({
  firstLink, secondLink,
}: CallToActionProps) {
  return (
    <div className="flex flex-row w-full justify-between items-center bg-secondary p-extra">
      <Link
        href={firstLink.url}
        className="flex flex-row items-center gap-5 text-white text-22 font-medium
          hover:text-primary ease-in-out duration-150"
      >
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
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
  );
}

export default CallToAction;
