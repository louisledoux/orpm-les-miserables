import RoutesPathEnum from '@/routes/Routes.enum';
import Link from 'next/link';

interface NavItemProps {
  /**
   * The text of the navigation item
   */
  text: string;
  url: RoutesPathEnum;
}

function NavItem({ text, url }: NavItemProps) {
  return (
    <Link
      href={url}
      className="bg-secondary text-primary uppercase font-semibold px-10 py-6
        hover:bg-primary hover:text-white ease-in-out duration-150
      "
      type="button"
    >
      {text}
    </Link>
  );
}

export default NavItem;
