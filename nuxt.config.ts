// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/ethicarch-blog",
        head: {
            meta: [{ name: "robots", content: "index, follow" }],
        },
    },
    compatibilityDate: "2026-08-08",
    ssr: true,
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
