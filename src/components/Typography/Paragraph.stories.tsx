import { Meta, StoryObj } from '@storybook/react';
import Typography from '@/components/Typography/Typography';

const { Paragraph } = Typography;

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus diam ut sapien ornare, congue convallis quam auctor. In pharetra sed ex dapibus eleifend. Sed nec leo euismod nisi venenatis semper. Sed tempor ex eget bibendum auctor. Aliquam sagittis sem accumsan mi efficitur, non eleifend elit mattis.',
  },
};
