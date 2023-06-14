import { Meta, StoryObj } from '@storybook/react';
import CarouselItem from '@/components/CarouselItem/CarouselItem';

const meta: Meta<typeof CarouselItem> = {
  component: CarouselItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselItem>

export const Default: Story = {};
