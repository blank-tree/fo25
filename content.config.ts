import {defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '*.md',
            schema: z.object({
                project: z.boolean(),
                name: z.string(),
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
        })
    }
})