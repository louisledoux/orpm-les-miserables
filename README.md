# Les Misérables - ORPM Website

This is the official website for the ORPM (Orchestre Régional du Pévèle Mélantois) production of "Les Misérables - C'est la faute à Voltaire !". Built with modern web technologies, this website serves as a comprehensive platform for audiences, cast members, and supporters to engage with our show.

## Features

- **Show Information**: Detailed information about "Les Misérables - C'est la faute à Voltaire"
- **Cast & Crew**: Profiles of our talented performers, artistic team, and technical crew
- **Orchestra**: Information about our musical ensemble
- **Performance Schedule**: Upcoming shows and events
- **Media Gallery**: Photos and content from previous performances and showcases
- **Blog**: Latest news and updates about the production
- **Contact Information**: Ways to get in touch with the production team

## Technical Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Content Management**: [Sanity CMS](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [Storybook](https://storybook.js.org/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Content Management

The website content is managed through Sanity Studio. To access the CMS:

1. Run the development server
2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

### Storybook

To view and develop UI components in isolation:

```bash
npm run storybook
```

## Deployment

The site is optimized for deployment on [Vercel](https://vercel.com). For detailed deployment instructions, refer to our [deployment documentation](https://nextjs.org/docs/deployment).

## License

All rights reserved. This project and its contents are proprietary to ORPM.
