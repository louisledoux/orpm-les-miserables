import React, { memo } from 'react';

interface Props {
  children: React.ReactNode
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
function Title({ children, level }: TitleProps) {
  const commonClassNames: string = 'text-primary font-semibold';

  switch (level) {
    case 5:
      return (
        <h5 className={`${commonClassNames} text-xl`}>
          {children}
        </h5>
      );
    case 4:
      return (
        <h4 className={`${commonClassNames} text-2xl`}>
          {children}
        </h4>
      );
    case 3:
      return (
        <h3 className={`${commonClassNames} text-3xl`}>
          {children}
        </h3>
      );
    case 2:
      return (
        <h2 className={`${commonClassNames} text-5xl text-center`}>
          {children}
        </h2>
      );
    case 1:
    default:
      return (
        <h1 className={`${commonClassNames} text-6xl text-center m-titleH1Only`}>
          {children}
        </h1>
      );
  }
}
Typography.Title = Title;

function Paragraph({ children }: Props) {
  return (
    <p className="font-light text-base">{children}</p>
  );
}
Typography.Paragraph = Paragraph;

export default Typography;
