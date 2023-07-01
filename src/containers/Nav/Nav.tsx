'use client';

import React, { useState, useEffect } from 'react';
import NavItem from '@/components/NavItem/NavItem';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';
import { usePathname } from 'next/navigation';

type NavListType = {
  text: string,
  url: RoutesPathEnum,
}

const navList: NavListType[] = [
  { text: 'Accueil', url: RoutesPathEnum.HOMEPAGE },
  { text: 'Les Misérables', url: RoutesPathEnum.MISERABLES },
  { text: 'L\'orchestre', url: RoutesPathEnum.ORCHESTRE },
  { text: 'La troupe', url: RoutesPathEnum.TROUPE },
  { text: 'Agenda', url: RoutesPathEnum.AGENDA },
  { text: 'Billetterie', url: RoutesPathEnum.BILLETTERIE },
];

function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-secondary z-10 ${isScrolled ? 'fixed top-0 w-full' : ''}`}>
      <div className="max-w-content mx-auto flex flex-row justify-between items-center">
        <Link href={RoutesPathEnum.HOMEPAGE}>
          <Image className="mx-6" alt="Logo de l'ORPM" src={logo} height={50} />
        </Link>
        {navList.map(({ text, url }) => (
          <NavItem key={text} text={text} url={url} pathname={pathname} />
        ))}
      </div>
    </nav>
  );
}

export default Nav;
