import Image from 'next/image';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';
import React from 'react';
import Typography from '@/components/Typography/Typography';
import {
  internalGroqTypeReferenceTo,
  POST_BY_SLUG_QUERYResult, SanityImageCrop,
  SanityImageHotspot,
} from '../../../sanity.types';

type SanityImageType = {
  asset?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: 'image';
};

const { Title } = Typography;

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImageType }) => (
      <>
        {value?.asset?._ref ? (
          <Image
            src={urlFor(value?.asset?._ref).url()}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%', height: 'auto',
            }}
            alt={value.alt || ''}
          />
        ) : null}
      </>
    ),
  },

  block: {
    h3: ({ children }) => <Title level={3}>{children}</Title>,
  },

  marks: {
    link: ({ children, value }: { children: React.ReactNode, value?: { href: string } }) => {
      const rel = !value?.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value?.href} rel={rel}>
          {children}
        </a>
      );
    },

    em: ({ children }: { children: React.ReactNode }) => (
      <em className="whitespace-pre-line font-light text-baseMobile lg:text-base">
        {children}
      </em>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="whitespace-pre-line font-light text-baseMobile lg:text-base">{children}</ul>,
  },
};

export function Post({ post }: { post: POST_BY_SLUG_QUERYResult }) {
  const {
    title, mainImage, publishedAt, body,
  } = post || {};

  return (
    <article className="container mx-auto prose prose-lg p-4 pb-16">
      <div className="mb-8 font-semibold">
        {title ? <Title level={2} className="mb-4 font-light">{title}</Title> : null}
        {publishedAt ? (
          <span className="font-light italic">
            Publié le
            {' '}
            {new Date(publishedAt).toLocaleDateString('fr-FR')}
          </span>
        ) : null}
      </div>
      {mainImage?.asset?._ref ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).url()}
          width={0}
          height={0}
          sizes="100vw"
          alt={title || ''}
        />
      ) : null}
      {body ? <PortableText value={body} components={portableTextComponents} /> : null}
      <hr />
      <Link className="text-secondary hover:text-primary transition" href={RoutesPathEnum.BLOG}>&larr; Précédent</Link>
    </article>
  );
}
