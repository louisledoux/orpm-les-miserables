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
        fadePrimary: 'rgba(235, 175, 43, 0.8)',
        secondary: '#1E2F36',
      },
      screens: {
        desktop: '1024px',
        mobile: '480px',
      },
      maxWidth: {
        content: '1440px',
        inSection: '47%',
        footer: '230px',
        mentionslegales: '105px'
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
        mobileSectionTitle: '0px 0px 30px'
      },
      padding: {
        section: '0px 120px',
        sectionPage: '60px 40px',
        button: '20px 35px',
        extra: '40px 75px',
        footer: '60px 0',
        mobileFooter: '30px 0'
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
