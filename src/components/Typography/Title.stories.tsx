import { Meta, StoryObj } from '@storybook/react';
import Typography from '@/components/Typography/Typography';

const { Title } = Typography;

const meta: Meta<typeof Title> = {
  title: 'Components/Typography/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>

export const Level1: Story = {
  args: {
    level: 1,
    children: 'Title',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: 'Title',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    children: 'Title',
  },
};

export const Level4: Story = {
  args: {
    level: 4,
    children: 'Title',
  },
};

export const Level5: Story = {
  args: {
    level: 5,
    children: 'Title',
  },
};
