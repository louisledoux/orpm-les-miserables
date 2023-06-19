import Typography from '@/components/Typography/Typography';
import RoutesPathEnum from '@/routes/Routes.enum';
import Link from 'next/link';
import React from 'react';

export interface ButtonProps {
    title: string,
    url: RoutesPathEnum,
    bgColor?: string,
    titleColor?: string,
}

function Button({
  title, url, bgColor, titleColor,
}: ButtonProps) {
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
