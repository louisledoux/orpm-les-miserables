import RoutesPathEnum from '@/routes/Routes.enum';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import React from 'react';
import Typography from '@/components/Typography/Typography';
import Link from 'next/link';
import { POSTS_QUERYResult } from '../../../sanity.types';

const { Title } = Typography;

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <div className="flex flex-col items-center mx-auto mt-16 w-2/3">
      <Title level={1} className="mb-8 lg:mb-16">Blog</Title>
      <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100 mb-16">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="flex items-center gap-10 p-4 hover:bg-neutral-50 text-secondary hover:text-primary transition"
              href={`${RoutesPathEnum.BLOG}/${post?.slug?.current}`}
            >
              {post?.mainImage?.asset?._ref && (
                <Image
                  src={urlFor(post.mainImage.asset._ref)
                    .url()}
                  alt={post.mainImage.alt || ''}
                  width={200}
                  height={200}
                />
              )}
              <div className="flex flex-col gap-2">
                <span className="text-2xl">{post?.title}</span>
                {post?.publishedAt && (
                  <span className="text-secondary font-light italic">
                    Publié le
                    {' '}
                    {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
