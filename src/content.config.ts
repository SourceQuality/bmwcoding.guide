import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        /**
         * Where the page's claims come from. Required on any guide that documents
         * a procedure. Starlight drops frontmatter keys it does not know about, so
         * a citation added without this field would vanish at build time.
         */
        sources: z
          .array(
            z.object({
              title: z.string(),
              url: z.string().url(),
            })
          )
          .optional(),
        /** Chassis and build the source verified the procedure on, verbatim. */
        verifiedOn: z.string().optional(),
      }),
    }),
  }),
};
