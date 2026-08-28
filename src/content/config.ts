import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    year: z.string(),
    services: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    coverImage: z.string(),
    coverImageAlt: z.string(),
    accent: z.enum(["ember", "moss", "slate"]).default("ember"),
    featured: z.boolean().default(false),
    isPlaceholder: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { work };
