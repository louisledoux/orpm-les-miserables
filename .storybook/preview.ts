import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      document.documentElement.style.font = oswald.style.fontFamily;
      document.body.style.font = oswald.style.fontFamily;
      return Story();
    },
  ],
};

export default preview;
