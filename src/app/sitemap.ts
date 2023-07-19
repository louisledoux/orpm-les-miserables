import { MetadataRoute } from 'next';
import RoutesPathEnum from '@/routes/Routes.enum';

const domain = 'https://www.orpm-les-miserables.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(RoutesPathEnum);
  return routes.map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
  }));
}
