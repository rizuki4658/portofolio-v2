import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    type: z.string(),
    status: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    featured: z.boolean().default(false),
    publishedAt: z.string(),
    demoUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
