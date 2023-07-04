'use client';

import React, { useEffect, useState } from 'react';
import NavItem from '@/components/NavItem/NavItem';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';
import { usePathname } from 'next/navigation';
import { DropdownLinkType } from '@/components/NavDropdown/NavDropdown';

type NavListType = {
  text: string,
  url: RoutesPathEnum | string,
  externalLink?: boolean,
  dropdown?: DropdownLinkType[],
}

const navList: NavListType[] = [
  { text: 'Accueil', url: RoutesPathEnum.HOMEPAGE },
  {
    text: 'Les Misérables',
    url: '#',
    dropdown: [
      { text: 'L\'histoire', url: RoutesPathEnum.HISTOIRE },
      { text: 'Les personnages', url: RoutesPathEnum.PERSONNAGES },
      { text: 'La comédie musicale', url: RoutesPathEnum.COMEDIE_MUSICALE },
    ],
  },
  {
    text: 'L\'orchestre',
    url: '#',
    dropdown: [
      { text: 'L\'orchestre', url: RoutesPathEnum.ORCHESTRE },
      { text: 'L\'équipe artistique', url: RoutesPathEnum.EQUIPE_ARTISTIQUE },
      { text: 'Nos précédents spectacles', url: RoutesPathEnum.PRECEDENTS_SPECTACLES },
    ],
  },
  {
    text: 'La troupe',
    url: '#',
    dropdown: [
      { text: 'La troupe', url: RoutesPathEnum.TROUPE },
      { text: 'L\'équipe technique', url: RoutesPathEnum.EQUIPE_TECHNIQUE },
    ],
  },
  {
    text: 'Agenda',
    url: '#',
    dropdown: [
      { text: 'Toutes nos dates', url: '/#agenda' },
      { text: 'Nos précédentes représentations', url: RoutesPathEnum.PRECEDENTS_SPECTACLES },
    ],
  },
  { text: 'Billetterie', url: '/#agenda' },
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
          <Image className="mx-6" alt="Logo de l'ORPM" src={logo} height={70} />
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
    </nav>
  );
}

export default Nav;
