import {defineCollection, defineContentConfig, z} from '@nuxt/content'
import {asSitemapCollection} from '@nuxtjs/sitemap/content'

export default defineContentConfig({
    collections: {
        content: defineCollection(
            asSitemapCollection({
                type: 'page',
                source: '*.md',
                schema: z.object({
                    project: z.boolean(),
                    name: z.string(),
                    slug: z.string(),
                    date: z.string(),
                    video: z.string(),
                    gallery: z.array(z.string()),
                    links: z.array(z.object({
                        name: z.string(),
                        url: z.string()
                    })),
                    exhibitions: z.array(z.object({
                        text: z.string(),
                        time: z.string(),
                        link: z.string()
                    })),
                })
            }))
    }
})