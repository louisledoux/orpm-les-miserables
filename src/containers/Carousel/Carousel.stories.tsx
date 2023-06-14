import { Meta, StoryObj } from '@storybook/react';
import Carousel from '@/containers/Carousel/Carousel';
import image1 from '@/assets/homepage-carousel/image1.png';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    items: [
      {
        imageSrc: image1,
        alt: 'Cosette dans la rue',
        style: { objectPosition: '80% 80%' },
      },
    ],
  },
};
