import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tulisan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tulisan' }),
  schema: z.object({
    title: z.string().max(60, 'Title >60 karakter kepotong di hasil Google'),
    heading: z.string().optional(),
    description: z.string().min(50, 'Description kependekan, kurang informatif untuk SEO').max(160, 'Description >160 karakter kepotong di hasil Google'),
    tag: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { tulisan };
