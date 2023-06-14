import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '@/assets/FontAwesome';
import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';

const iconVariants = cva('icon', {
  variants: {
    /**
     * Type of the icon
     */
    type: {
      primary: [
        'text-primary',
      ],
      secondary: [
        'text-secondary',
      ],
    },
    /**
     * Size of the icon
     */
    size: {
      small: ['text-sm'],
      medium: ['text-base'],
      large: ['text-lg'],
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'medium',
  },
});
type IconVariantProps = VariantProps<typeof iconVariants>;

interface IconProps extends IconVariantProps {
  /**
   * The Font Awesome icon we want to use
   */
  icon: IconProp,
  /**
   * Optional link redirection
   */
  link?: string,
}

function Icon({
  icon, type, size, link,
}: IconProps) {
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <FontAwesomeIcon
            className={iconVariants({ type, size })}
            icon={icon}
          />
        </Link>
      ) : (
        <FontAwesomeIcon
          className={iconVariants({ type, size })}
          icon={icon}
        />
      )}
    </>
  );
}

Icon.defaultProps = {
  link: undefined,
};

export default Icon;
