import NavItem from '@/components/NavItem/NavItem';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export enum RoutesPathEnum {
  HOMEPAGE = '/',
  MISERABLES = '/les-miserables',
  ORCHESTRE = '/orchestre',
  TROUPE = '/la-troupe',
  AGENDA = '/agenda',
  BILLETTERIE = '/billetterie'
}

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
  return (
    <nav className="bg-secondary">
      <div className="max-w-content mx-auto flex flex-row justify-between items-center">
        <Link href={RoutesPathEnum.HOMEPAGE}>
          <Image className="mx-6" alt="Logo de l'ORPM" src={logo} height={50} />
        </Link>
        {navList.map(({ text }) => (
          <NavItem key={text} text={text} />
        ))}
      </div>
    </nav>
  );
}

export default Nav;
