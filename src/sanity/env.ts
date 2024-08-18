export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-18';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const prodDataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROD_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROD_DATASET',
);

export const devDataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DEV_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DEV_DATASET',
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);
