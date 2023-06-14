import Icon from '@/components/Icon/Icon';

export enum SocialMediasEnum {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'square-instagram'
}

interface HeaderProps {
  socialMediasIcons: SocialMediasEnum[]
}

function Header({
  socialMediasIcons,
}: HeaderProps) {
  return (
    <div className="flex max-w-content mx-auto justify-end gap-2 py-3 px-2">
      {socialMediasIcons.map((icon) => (
        <Icon
          key={icon}
          icon={['fab', `${icon}`]}
          type="secondary"
          size="large"
        />
      ))}
    </div>
  );
}

export default Header;
