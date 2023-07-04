import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import NavItem from '@/components/NavItem/NavItem';
import React from 'react';
import NavListType from '@/types/Nav.type';

type DesktopNavProps = {
  navList: NavListType[],
  pathname: string,
}
export default function DesktopNav({
  navList, pathname,
}: DesktopNavProps) {
  return (
    <div className="max-w-content mx-auto flex flex-row justify-between items-center">
      <Link href={RoutesPathEnum.HOMEPAGE}>
        <Image className="mx-6" alt="Logo de l'ORPM" src={logo} height={50} />
      </Link>
      {navList.map(({ text, url, dropdown }) => (
        <NavItem
          key={text}
          text={text}
          url={url}
          pathname={pathname}
          dropdown={dropdown}
        />
      ))}
    </div>
  );
}
