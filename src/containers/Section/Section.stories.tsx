import { Meta, StoryObj } from '@storybook/react';
import Section from '@/containers/Section/Section';
import newsImage from '@/assets/pages/homepage/news-section/newsImage.png';

const meta: Meta<typeof Section> = {
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>

export const Default: Story = {
  args: {
    pages: [{
      title: 'En ce moment',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum aucto',
      ],
    }],
    image: {
      image: newsImage,
      alt: 'Mon image',
      style: { width: '100%', height: '100%' },
    },
  },
};

export const Reversed: Story = {
  args: {
    pages: [{
      title: 'En ce moment',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum aucto',
      ],
    }],
    image: {
      image: newsImage,
      alt: 'Mon image',
      style: { width: '100%', height: '100%' },
    },
    reverse: true,
  },
};
