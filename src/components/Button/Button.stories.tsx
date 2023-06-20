import { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    title: 'Bouton',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Bouton',
    type: 'secondary',
  },
};
