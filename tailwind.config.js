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
      },
      fontSize: {

      },
    },
  },
  plugins: [],
};
