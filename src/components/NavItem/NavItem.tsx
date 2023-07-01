import RoutesPathEnum from '@/routes/Routes.enum';
import Link from 'next/link';
import NavDropdown, { DropdownLinkType } from '@/components/NavDropdown/NavDropdown';

interface NavItemProps {
  /**
   * The text of the navigation item
   */
  text: string;
  /**
   * URL redirection
   */
  url: RoutesPathEnum | string;
  /**
   * Current pathname
   */
  pathname: string,
  /**
   * Optional dropdown option, with dropdown links
   */
  dropdown?: DropdownLinkType[]
  /**
   * Is link external?
   */
  externalLink?: boolean,
}

function NavItem({
  text, url, pathname, dropdown, externalLink,
}: NavItemProps) {
  const isActive = pathname === url;

  return (
    <>
      {dropdown ? (
        <NavDropdown text={text} dropdown={dropdown} />
      ) : (
        <Link
          href={url}
          passHref={externalLink}
          className={`${isActive ? 'bg-primary text-white' : 'bg-secondary text-primary'}
            uppercase font-semibold px-10 py-6
            hover:bg-primary hover:text-white ease-in-out duration-150
          `}
          type="button"
        >
          {text}
        </Link>
      )}
    </>
  );
}

export default NavItem;
