// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/ethicarch-blog",
        head: {
            meta: [
                { name: "robots", content: "index, follow" },
                {
                    name: "google-site-verification",
                    content: "5hKM7mYyRjYLtipo8mCPd_1Y9ybCIBMir08xHnlD7QY",
                },
            ],
        },
        pageTransition: {
            name: "page",
        }
    },
    compatibilityDate: "2026-08-22",
    ssr: true,
    nitro: {
        preset: "github_pages",
    },
    modules: ["@nuxtjs/tailwindcss", "nuxt-i18n-micro"],
    i18n: {
        locales: [
            { code: "en", iso: "en-US", dir: "ltr" },
            { code: "fr", iso: "fr-FR", dir: "ltr" },
        ],
        defaultLocale: "fr",
        translationDir: "locales",
        meta: true,
        strategy: "no_prefix",
    },
});
