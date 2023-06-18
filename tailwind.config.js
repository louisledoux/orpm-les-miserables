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
        secondary: '#1E2F36',
      },
      backgroundColor: {
        fadeYellowSection: 'rgba(235, 175, 43, 0.8)',
        greySection: '#1E2F36',
        yellowSection: '#EBAF2B',
      },
      screens: {
        desktop: '1024px',
        mobile: '480px',
      },
      maxWidth: {
        content: '1440px',
        inSection: '47%',
      },
      height: {
        carousel: '700px',
        headerImage: '500px',
      },
      margin: {
        pageTitle: '60px 0px 120px',
        sectionTitle: '0px 0px 60px',
        paragraph: '0px 0px 30px',
        section: '0px 0px 120px',
      },
      padding: {
        section: '0px 120px',
        sectionPage: '60px 40px',
        button: '20px 35px',
      },
      fontSize: {
        vingtDeux: ['22px', '30px'],
        h1: ['70px', '85px'],
        h2: ['50px', '60px'],
        h3: ['35px', '40px'],
        h4: ['30px', '35px'],
        textBase: ['18px', '22px'],
      },
    },
  },
  plugins: [],
};
