/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EBAF2B',
        fadePrimary: 'hsla(41, 83%, 55%, 0.8)',
        secondary: '#1E2F36',
      },
      screens: {
        desktop: '1024px',
        mobile: '480px',
      },
      spacing: {
        '30px': '30px',
        '40px': '40px',
        '60px': '60px',
        '120px': '120px',
        '512px': '512px',
      },
      maxWidth: {
        content: '1440px',
        inSection: '47%',
        footer: '230px',
        mentionslegales: '105px',
        75: '75%',
      },
      height: {
        carousel: '700px',
        headerImage: '500px',
      },
      padding: {
        button: '20px 35px',
        extra: '40px 75px',
      },
      fontSize: {
        22: ['22px', '30px'],
        h1: ['90px', '95px'],
        h2: ['60px', '70px'],
        h3: ['35px', '40px'],
        h4: ['30px', '35px'],
        base: ['18px', '22px'],
      },
      letterSpacing: {
        '2%': '2%',
      },
    },
  },
  plugins: [],
};
