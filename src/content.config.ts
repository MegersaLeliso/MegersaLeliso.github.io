import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['Software Engineering', 'Product & Leadership']),
      order: z.number(),
      summary: z.string(),
      role: z.string(),
      timeline: z.string(),
      stack: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
    }),
});

export const collections = { projects };
