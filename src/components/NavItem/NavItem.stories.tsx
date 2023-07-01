import { Meta, StoryObj } from '@storybook/react';
import NavItem from '@/components/NavItem/NavItem';
import RoutesPathEnum from '@/routes/Routes.enum';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavItem>

export const Button: Story = {
  args: {
    text: 'Accueil',
    url: RoutesPathEnum.HOMEPAGE,
  },
};

export const Dropdown: Story = {
  args: {
    text: 'Agenda',
    url: '#',
    pathname: '#',
    dropdown: [
      { text: 'Toutes nos dates', url: '#' },
      { text: 'Nos précédentes représentations', url: '#' },
    ],
  },
};
