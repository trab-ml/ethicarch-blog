// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2026-08-08",
    devtools: { enabled: true },
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
