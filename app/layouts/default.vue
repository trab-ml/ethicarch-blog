<template>
    <div
        class="relative w-60 min-h-screen flex flex-col mx-auto text-sm sm:text-xl sm:w-3/5"
    >
        <header class="fixed w-60 mx-auto sm:w-3/5 z-40">
            <nav
                ref="headerNav"
                class="flex justify-center gap-2 mt-3 p-2 bg-transparent border-2 border-black/60 rounded-xl"
            >
                <NuxtLink :to="ROUTES.HOME">{{ $t("header.home") }}</NuxtLink>
                <NuxtLink :to="ROUTES.ARTICLES">{{
                    $t("header.articles")
                }}</NuxtLink>
                <LanguageSwitcher />
            </nav>
        </header>
        <main class="mt-12 mb-6 text-justify z-30 sm:text-left">
            <slot />
        </main>
        <footer class="my-3">
            <ul
                class="absolute bottom-3 w-full flex items-center gap-1 p-1 border-2 border-black/60 rounded-xl text-[0.70rem] sm:text-xl sm:justify-center"
            >
                <li>
                    <span>{{ $t("footer.author.prename") }}</span>
                    <a :href="REDIRECTIONS.ethicarch.home" target="__blank">{{
                        REDIRECTIONS.ethicarch.name
                    }}</a>
                </li>
                <li>|</li>
                <li>
                    <span>{{ $t("footer.support.prename") }}</span>
                    <a :href="REDIRECTIONS.nuxt.home" target="__blank">{{
                        REDIRECTIONS.nuxt.name
                    }}</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ROUTES } from "~/utils/routes";

const headerNav = ref<HTMLElement | null>(null);
const { $t } = useI18n();
const seoTitle = () => $t("seo.title") as string;
const seoDescription = () => $t("seo.description") as string;
// const route = useRoute();
// const siteUrl = useRuntimeConfig().public.siteUrl;
// const canonical = new URL(route.fullPath || "/seo-demo", siteUrl).toString();

useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogType: "website",
    ogImage: "DOMAIN_NAME/ethicarch-homepage.png",
    twitterCard: "summary_large_image",
});

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: seoTitle,
      description: seoDescription,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web'
    })
  }]
})

const handleScroll = () => {
    if (!headerNav.value) return;

    if (window.scrollY > 90) {
        headerNav.value.style.backgroundColor = "var(--secondary)";
    } else {
        headerNav.value.style.backgroundColor = "#fff";
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
