// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/styles/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/styles/_variables.scss" as *;',
                }
            }
        }
    },
    app: {
        head: {
            title: 'Fernando Obieta',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }
            ],
            link: [],
        }
    },
    site: {
        url: 'https://fernando-obieta.com',
        name: 'Fernando Obieta'
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxt/content',
        '@nuxt/fonts'
    ]
})