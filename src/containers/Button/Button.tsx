import Typography from '@/components/Typography/Typography';
import RoutesPathEnum from '@/routes/Routes.enum';
import Link from 'next/link';
import React from 'react';

export interface ButtonProps {
  title: string,
  url: RoutesPathEnum,
  type?: 'primary' | 'secondary',
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
  title, url, type = 'primary',
}: ButtonProps) {
  const { bgColor, titleColor } = getButtonColors(type);

  return (
    <div className={`w-fit p-button mx-auto ${bgColor}`}>
      <Link href={url} className="text-center">
        <Typography.Title level={3} className={`${titleColor} uppercase hover:text-white ease-in-out duration-150"`}>
          {title}
        </Typography.Title>
      </Link>
    </div>
  );
}

export default Button;
