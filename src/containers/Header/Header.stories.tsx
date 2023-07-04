import Header, { SocialMediasEnum } from '@/containers/Header/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    socialMediasIcons: [
      {
        icon: SocialMediasEnum.FACEBOOK,
        link: 'https://www.facebook.com/people/Les-Mis%C3%A9rables-Spectacle/100063630728155/',
      },
      {
        icon: SocialMediasEnum.INSTAGRAM,
      },
    ],
  },
};
