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
      screens: {
        desktop: '1024px',
        mobile: '480px',
      },
      maxWidth: {
        content: '1440px',
        inBlock: '47%',
      },
      height: {
        carousel: '700px',
        mainImg: '500px',
      },
      margin: {
        titleH1Only: '60px 0px 120px',
        title:  '0px 0px 60px',
        paragraph: '0px 0px 30px',
        classicBlock: '0px 0px 120px',
      },
      padding: {
        classicBlock: '0px 120px',
        blockText: '60px 40px'
      },
      fontSize: {

      }
    },
  },
  plugins: [],
};
