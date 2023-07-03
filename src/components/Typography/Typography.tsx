import React from 'react';
import localFont from 'next/font/local';

const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });

interface Props {
  children: React.ReactNode,
  // eslint-disable-next-line react/no-unused-prop-types
  className?: string,
}

function Typography({ children }: Props) {
  return (
    <>{children}</>
  );
}

interface TitleProps extends Props {
  /**
   * The level of the title
   */
  level: number,
  /**
   * Color of the title
   */
  color?: 'primary' | 'secondary',
}
function Title({
  children,
  level,
  color = 'primary',
  className = '',
}: TitleProps) {
  const commonClassNames = `whitespace-pre-line ${className}`;

  switch (level) {
    case 5:
      return (
        <h5 className={`${commonClassNames} text-primary font-semibold text-xl`}>
          {children}
        </h5>
      );
    case 4:
      return (
        <h4 className={`${commonClassNames} text-primary font-semibold text-h4`}>
          {children}
        </h4>
      );
    case 3:
      return (
        <h3 className={`${commonClassNames} text-primary font-semibold text-h3`}>
          {children}
        </h3>
      );
    case 2:
      return (
        <h2 className={`${commonClassNames} ${amithenFont.className} text-${color} lg:text-h2 text-h2Mobile`}>
          {children}
        </h2>
      );
    case 1:
    default:
      return (
        <h1 className={`${commonClassNames} ${amithenFont.className} ${color === 'primary' ? 'text-secondary' : 'text-primary'} text-center text-h1Mobile lg:text-h1 lg:mt-60px lg:mb-120px mt-30px mb-60px`}>
          {children}
        </h1>
      );
  }
}
Typography.Title = Title;

function Paragraph({ children, className = '' }: Props) {
  return (
    <p className={`whitespace-pre-line font-light text-baseMobile lg:text-base ${className}`}>{children}</p>
  );
}
Typography.Paragraph = Paragraph;

export default Typography;
