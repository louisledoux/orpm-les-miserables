import RoutesPathEnum from '@/routes/Routes.enum';
import { DropdownLinkType } from '@/components/NavDropdown/NavDropdown';

type NavListType = {
  text: string,
  url: RoutesPathEnum | string,
  externalLink?: boolean,
  dropdown?: DropdownLinkType[],
}

export default NavListType;
