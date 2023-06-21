import { Meta, StoryObj } from '@storybook/react';
import CallToAction from '@/components/Section/CallToAction/CallToAction';

const meta: Meta<typeof CallToAction> = {
  component: CallToAction,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CallToAction>

export const Default: Story = {};
