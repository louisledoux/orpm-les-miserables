import { Meta, StoryObj } from '@storybook/react';
import Icon from '@/components/Icon/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    icon: ['fab', 'square-instagram'],
  },
};

export const Secondary: Story = {
  args: {
    icon: ['fab', 'facebook'],
    type: 'secondary',
  },
};

export const WithLink: Story = {
  args: {
    icon: ['fab', 'square-instagram'],
    link: 'https://instagram.com',
    type: 'secondary',
  },
};
