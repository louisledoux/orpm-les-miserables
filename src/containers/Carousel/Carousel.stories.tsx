import { Meta, StoryObj } from '@storybook/react';
import Carousel from '@/containers/Carousel/Carousel';
import orchestreCarouselData from '@/assets/pages/orchestre/orchestreCarouselData';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    items: orchestreCarouselData,
  },
};
