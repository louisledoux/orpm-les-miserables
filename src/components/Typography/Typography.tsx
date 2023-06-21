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
}
function Title({ children, level, className = '' }: TitleProps) {
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
        <h2 className={`${commonClassNames} ${amithenFont.className} font-medium text-primary text-h2`}>
          {children}
        </h2>
      );
    case 1:
    default:
      return (
        <h1 className={`${commonClassNames} ${amithenFont.className} font-medium text-secondary text-h1 m-pageTitle`}>
          {children}
        </h1>
      );
  }
}
Typography.Title = Title;

function Paragraph({ children, className = '' }: Props) {
  return (
    <p className={`whitespace-pre-line ${className}`}>{children}</p>
  );
}
Typography.Paragraph = Paragraph;

export default Typography;
