// ./src/sanity/lib/token.ts

// TODO: secure this token server-side when Next.js supports it
export const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_API_READ_TOKEN');
}
