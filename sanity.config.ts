'use client';

/**
 * This configuration is used to for the Sanity Studio that’s
 * mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {
  apiVersion, prodDataset, projectId,
} from '@/sanity/env';
import { schema } from '@/sanity/schemaTypes';
import { prodStructure } from '@/sanity/structure';
import { resolve } from '@/sanity/presentation/resolve';
import RoutesPathEnum from '@/routes/Routes.enum';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset: prodDataset,
  apiVersion,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure: prodStructure }),
    presentationTool({
      resolve,
      previewUrl: {
        preview: RoutesPathEnum.BLOG,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
});
