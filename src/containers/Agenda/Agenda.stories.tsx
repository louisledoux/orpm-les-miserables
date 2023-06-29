import { Meta, StoryObj } from '@storybook/react';
import Agenda from '@/containers/Agenda/Agenda';

const meta: Meta<typeof Agenda> = {
  component: Agenda,
};

export default meta;
type Story = StoryObj<typeof Agenda>

export const NoDate: Story = {};
