import NavListType from '@/types/Nav.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';
import MobileNavDropdown from '@/components/NavDropdown/MobileNavDropdown';
import RoutesPathEnum from '@/routes/Routes.enum';

type MobileNavProps = {
  navList: NavListType[],
  pathname: string,
}

const amithenFont = localFont({ src: '../../assets/font/amithen.ttf' });

export default function MobileNav({
  navList, pathname,
}: MobileNavProps) {
  const [isNavMenuVisible, setIsNavMenuVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="flex flex-row justify-between items-center px-4 text-primary text-2xl py-2">
        <div className="w-full flex justify-start">
          <button
            className={`${isNavMenuVisible ? 'text-white' : 'text-primary'} focus:outline-none transition ease-in-out duration-150`}
            type="button"
            onClick={() => setIsNavMenuVisible(!isNavMenuVisible)}
          >
            {isNavMenuVisible ? (
              <FontAwesomeIcon icon={faBarsStaggered} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <div className="w-full text-center">
          <Link
            href={RoutesPathEnum.HOMEPAGE}
            className={amithenFont.className}
          >
            Les Misérables
          </Link>
        </div>
        <div className="w-full flex justify-end">
          <Image alt="Logo de l'ORPM" src={logo} height={50} />
        </div>
      </div>
      {isNavMenuVisible && (
        <div
          className="absolute left-0 z-20 flex flex-col w-full min-h-full bg-white shadow-sm focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="menuitem">
            {navList.map((navItem) => {
              const isLinkActive = navItem.url === pathname
                || navItem.dropdown?.map((subNavItem) => subNavItem.url).includes(pathname);
              return (
                <>
                  {navItem.dropdown ? (
                    <MobileNavDropdown
                      key={`${navItem.text}-${navItem.url}-c`}
                      navItem={navItem}
                      isLinkActive={isLinkActive || false}
                      setIsNavMenuVisible={setIsNavMenuVisible}
                    />
                  ) : (
                    <Link
                      className={`block px-6 py-4 text-secondary
                        ${isLinkActive ? 'underline' : ''} underline-offset-4 decoration-primary decoration-2`}
                      key={`${navItem.text}-${navItem.url}`}
                      href={navItem.url}
                      passHref={navItem.externalLink}
                      target={navItem.externalLink ? '_blank' : '_self'}
                      onClick={() => setIsNavMenuVisible(false)}
                    >
                      {navItem.text}
                    </Link>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
