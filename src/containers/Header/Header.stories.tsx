import Header, { SocialMediasEnum } from '@/containers/Header/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    socialMediasIcons: [SocialMediasEnum.FACEBOOK, SocialMediasEnum.INSTAGRAM],
  },
};
