import { sanityFetch } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries/post.queries';
import { Posts } from '@/containers/Posts/Posts';
import { POSTS_QUERYResult } from '../../../../../sanity.types';

export default async function BlogPage() {
  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
  });

  return <Posts posts={posts} />;
}
