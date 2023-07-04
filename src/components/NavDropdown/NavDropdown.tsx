'use client';

import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export type DropdownLinkType = {
  text: string,
  url: RoutesPathEnum | string,
  externalLink?: boolean,
}

interface NavDropdownProps {
  /**
   * The text of the navigation item
   */
  text: string;
  /**
   * Dropdown links
   */
  dropdown: DropdownLinkType[]
}
function NavDropdown({
  text, dropdown,
}: NavDropdownProps) {
  const pathname = usePathname();
  const isActive = dropdown.map(({ url }) => url).includes(pathname);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  return (
    <div
      className="relative inline-block"
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <button
        type="button"
        onClick={() => setIsDropdownVisible(true)}
        onMouseEnter={() => setIsDropdownVisible(true)}
        className={`${isActive ? 'bg-primary text-white' : 'bg-secondary text-primary'}
              uppercase font-semibold px-10 py-6
              hover:bg-primary hover:text-white ease-in-out duration-150
            `}
      >
        {text}
      </button>
      {isDropdownVisible ? (
        <div
          className="absolute left-0 z-10 w-64 origin-top-left bg-white shadow-sm focus:outline-none"
          aria-orientation="vertical"
          role="menu"
        >
          <div className="py-1" role="none">
            {dropdown.map((subNavItem) => (
              <Link
                className="block px-6 py-4 text-secondary
                hover:underline underline-offset-4 decoration-primary decoration-2
              "
                key={subNavItem.text}
                href={subNavItem.url}
                passHref={subNavItem.externalLink}
                target={subNavItem.externalLink ? '_blank' : '_self'}
              >
                {subNavItem.text}
              </Link>
            ))}
          </div>
        </div>
      ) : (<></>)}
    </div>
  );
}

export default NavDropdown;
