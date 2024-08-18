import {
  defineLocations,
  PresentationPluginOptions,
} from 'sanity/presentation';
import RoutesPathEnum from '@/routes/Routes.enum';

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `${RoutesPathEnum.BLOG}/${doc?.slug}`,
          },
          { title: 'Page blog', href: RoutesPathEnum.BLOG },
        ],
      }),
    }),
  },
};
