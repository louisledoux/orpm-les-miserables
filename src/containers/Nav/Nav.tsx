'use client';

import RoutesPathEnum from '@/routes/Routes.enum';
import { usePathname } from 'next/navigation';
import NavListType from '@/types/Nav.type';
import DesktopNav from '@/components/Nav/DesktopNav';
import useScroll from '@/hooks/useScroll';
import useViewport from '@/hooks/useViewport';
import MobileNav from '@/components/Nav/MobileNav';

const navList: NavListType[] = [
  { text: 'Accueil', url: RoutesPathEnum.HOMEPAGE },
  {
    text: 'Les Misérables',
    url: '#',
    dropdown: [
      { text: 'L\'histoire', url: RoutesPathEnum.HISTOIRE },
      { text: 'Les personnages', url: RoutesPathEnum.PERSONNAGES },
      { text: 'La comédie musicale', url: RoutesPathEnum.COMEDIE_MUSICALE },
      { text: 'Auteur et oeuvres', url: RoutesPathEnum.AUTEUR_ET_OEUVRES },
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
      { text: 'Nos showcases', url: RoutesPathEnum.SHOWCASES },
    ],
  },
  { text: 'Billetterie', url: '/#agenda' },
];

function Nav() {
  const pathname = usePathname();
  const { isMobileScreen } = useViewport();
  const { isScrolling } = useScroll();

  return (
    <>
      <div className={isScrolling ? 'h-[70px]' : ''} />
      <nav className={`bg-secondary z-10 ${isScrolling ? 'fixed top-0 w-full' : ''}`}>
        {isMobileScreen ? (
          <MobileNav navList={navList} pathname={pathname} />
        ) : (
          <DesktopNav navList={navList} pathname={pathname} />
        )}
      </nav>
    </>
  );
}

export default Nav;
