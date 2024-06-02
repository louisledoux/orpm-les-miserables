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
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large',
}

type ButtonColors = {
  bgColor: string,
  titleColor: string,
}

type ButtonSize = {
  buttonSize: string,
  textSize: string,
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

function getButtonSize(size: 'small' | 'medium' | 'large'): ButtonSize {
  switch (size) {
    case 'small':
      return {
        buttonSize: 'p-10px lg:px-12 lg:py-3',
        textSize: 'text-base',
      };
    case 'medium':
      return {
        buttonSize: 'p-10px lg:px-4 lg:py-6',
        textSize: 'text-base lg:text-md',
      };
    case 'large':
    default:
      return {
        buttonSize: 'p-10px lg:p-button',
        textSize: 'text-base lg:text-h3',
      };
  }
}

function Button({
  title, url, externalUrl, type = 'primary', disabled, size = 'large',
}: ButtonProps) {
  const { bgColor, titleColor } = getButtonColors(type);
  const { buttonSize, textSize } = getButtonSize(size);

  return (
    <>
      {disabled ? (
        <div className={`w-full lg:w-fit cursor-not-allowed text-center bg-gray-500 text-gray-700 font-semibold uppercase ${buttonSize} ${textSize}`}>
          {title}
        </div>
      ) : (
        <Link
          href={url || ''}
          passHref={externalUrl}
          target={externalUrl ? '_blank' : '_self'}
          className={`w-full lg:w-fit text-center ${buttonSize} ${bgColor} ${titleColor} ${textSize} font-semibold uppercase
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
