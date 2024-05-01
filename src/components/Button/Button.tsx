import RoutesPathEnum from '@/routes/Routes.enum';
import Link from 'next/link';
import React from 'react';

export interface ButtonProps {
  /**
   * The button text
   */
  title: string,
  /**
   * Optional URL redirection
   */
  url?: RoutesPathEnum | string,
  /**
   * Is URL external?
   */
  externalUrl?: boolean,
  /**
   * Type of the button
   */
  type?: 'primary' | 'secondary',
  /**
   * Is the button disabled?
   */
  disabled?: boolean,
}

type ButtonColors = {
  bgColor: string,
  titleColor: string,
}

function getButtonColors(type: 'primary' | 'secondary'): ButtonColors {
  switch (type) {
    case 'secondary':
      return {
        bgColor: 'bg-secondary',
        titleColor: 'text-primary',
      };
    case 'primary':
    default:
      return {
        bgColor: 'bg-primary',
        titleColor: 'text-secondary',
      };
  }
}

function Button({
  title, url, externalUrl, type = 'primary', disabled,
}: ButtonProps) {
  const { bgColor, titleColor } = getButtonColors(type);

  return (
    <>
      {disabled ? (
        <div className="w-full lg:w-fit cursor-not-allowed text-center p-10px lg:p-button bg-gray-500 text-gray-700 text-base lg:text-h3 font-semibold uppercase">
          {title}
        </div>
      ) : (
        <Link
          href={url || ''}
          passHref={externalUrl}
          target={externalUrl ? '_blank' : '_self'}
          className={`w-full lg:w-fit text-center p-10px lg:p-button ${bgColor} ${titleColor} text-base lg:text-h3 font-semibold uppercase
          hover:text-white ease-in-out duration-150`}
          type="button"
        >
          {title}
        </Link>
      )}
    </>
  );
}

export default Button;
