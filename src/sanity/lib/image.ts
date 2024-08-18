import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { prodDataset, projectId } from '../env';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset: prodDataset });

// eslint-disable-next-line import/prefer-default-export
export const urlFor = (source: SanityImageSource) => builder.image(source);
