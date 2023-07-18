import { Meta, StoryObj } from '@storybook/react';
import CarouselItem from '@/components/CarouselItem/CarouselItem';
import image1 from '@/assets/pages/homepage/homepage-carousel/cosette.jpg';

const meta: Meta<typeof CarouselItem> = {
  component: CarouselItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselItem>

export const Default: Story = {
  args: {
    imageSrc: image1,
    alt: 'Cosette dans la rue',
    style: { objectPosition: '80% 80%' },
  },
};
