import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const DEFAULT_AUTHOR = "Fand Team";
const DEFAULT_AVATAR = "https://fandmc.io/assets/logo/256x.png";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: rssSchema.extend({
    date: z.coerce.date(),
    author: z.string().default(DEFAULT_AUTHOR),
    authorAvatar: z.url().default(DEFAULT_AVATAR),
    cover: z
      .object({
        src: z.url(),
        alt: z.string().optional(),
        credit: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { posts };
