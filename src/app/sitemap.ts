import { MetadataRoute } from 'next';
import RoutesPathEnum from '@/routes/Routes.enum';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(RoutesPathEnum);
  return routes.map((route) => ({
    url: route,
    lastModified: new Date(),
  }));
}
