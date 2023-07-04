import Link from 'next/link';
import React from 'react';
import NavListType from '@/types/Nav.type';

type MobileNavDropdownProps = {
  navItem: NavListType,
  isLinkActive: boolean,
  setIsNavMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MobileNavDropdown({
  navItem, isLinkActive, setIsNavMenuVisible,
}: MobileNavDropdownProps) {
  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

  return (
    <>
      <button
        key={`${navItem.text}-${navItem.url}`}
        type="button"
        className={`block px-6 py-4 text-secondary
        ${isLinkActive ? 'underline' : ''} underline-offset-4 decoration-primary decoration-2`}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        {navItem.text}
      </button>
      {isDropdownVisible && (
        <div>
          {navItem.dropdown?.map((subNavItem) => (
            <Link
              className="block px-12 py-4 text-secondary
              hover:underline underline-offset-4 decoration-primary decoration-2"
              key={`${subNavItem.text}-${subNavItem.url}`}
              href={subNavItem.url}
              passHref={subNavItem.externalLink}
              target={subNavItem.externalLink ? '_blank' : '_self'}
              onClick={() => setIsNavMenuVisible(false)}
            >
              {subNavItem.text}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
