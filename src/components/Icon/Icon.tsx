import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '@/assets/FontAwesome';
import Link from 'next/link';

type IconProps = {
  icon: IconProp,
  link?: string,
}

function Icon({
  icon, link,
}: IconProps) {
  return (
    <>
      {link ? (
        <Link href={link || ''} passHref>
          <FontAwesomeIcon icon={icon} />
        </Link>
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
    </>
  );
}

Icon.defaultProps = {
  link: undefined,
};

export default Icon;
