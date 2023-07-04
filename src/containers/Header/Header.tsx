import Icon from '@/components/Icon/Icon';

export enum SocialMediasEnum {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'square-instagram'
}

type HeaderIconType = {
  icon: SocialMediasEnum,
  link?: string,
}

interface HeaderProps {
  socialMediasIcons: HeaderIconType[]
}

function Header({
  socialMediasIcons,
}: HeaderProps) {
  return (
    <div className="flex max-w-content mx-auto justify-end gap-2 py-3 px-2">
      {socialMediasIcons.map(({ icon, link }) => (
        <Icon
          key={icon}
          link={link}
          icon={['fab', `${icon}`]}
          type="secondary"
          size="large"
        />
      ))}
    </div>
  );
}

export default Header;
