// ./app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from 'next-sanity';
import { notFound } from 'next/navigation';

import { client, sanityFetch } from '@/sanity/lib/client';

import { POST_BY_SLUG_QUERY, POSTS_QUERY } from '@/sanity/lib/queries/post.queries';
import { Post } from '@/components/Post/Post';
import { POST_BY_SLUG_QUERYResult, POSTS_QUERYResult } from '../../../../../../sanity.types';

export async function generateStaticParams() {
  const posts = await client.fetch<POSTS_QUERYResult>(
    POSTS_QUERY,
    {},
    { perspective: 'published' },
  );

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<POST_BY_SLUG_QUERYResult>({
    query: POST_BY_SLUG_QUERY,
    params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}
