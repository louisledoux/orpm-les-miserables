import { Meta, StoryObj } from '@storybook/react';
import Nav from '@/containers/Nav/Nav';

const meta: Meta<typeof Nav> = {
  component: Nav,
};

export default meta;
type Story = StoryObj<typeof Nav>

export const Default: Story = {};
