import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
