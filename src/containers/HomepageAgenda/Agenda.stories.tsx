import { Meta, StoryObj } from '@storybook/react';
import HomepageAgenda from '@/containers/HomepageAgenda/HomepageAgenda';

const meta: Meta<typeof HomepageAgenda> = {
  component: HomepageAgenda,
};

export default meta;
type Story = StoryObj<typeof HomepageAgenda>

export const NoDate: Story = {};
