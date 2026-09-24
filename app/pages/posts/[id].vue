<template>
    <main v-if="article != ERROR_ID_NOT_FOUND && article != undefined">
        <h1
            class="change-col-at-hovering cursor-pointer-at-hovering"
            @click="copyToClipboard(currentUrl)"
        >
            {{ article.title }}
        </h1>
        <div
            class="w-full flex flex-col items-center my-4 border rounded-xl gap-2 sm:flex-row"
        >
            <div class="sm:w-1/2">
                <img
                    :src="`${config.app.baseURL}/imgs/${article.imgUrl}`"
                    :alt="article.imgAlt"
                    class="border-4 sm:border-8 border-black/40 rounded-xl"
                />
            </div>
            <section class="sm:w-1/2">
                <p class="md:font-thin md:text-3xl">{{ article.teaser }}</p>
                <div class="flex items-center gap-4">
                    <span class="text-black/80">{{
                        formatDate(article.createdAt, $getLocale())
                    }}</span>
                    <img
                        :src="circumSaveDown"
                        alt="circum save down"
                        width="32px"
                        class="cursor-pointer-at-hovering"
                        :title="$t('saveDownInPdf') as string"
                        @click="saveCurrentTab"
                    />
                </div>
            </section>
        </div>
        <section v-for="(section, i) in article.content" :key="i" class="mb-8">
            <h2 class="mb-3 border-b pb-1">
                <span>{{ section.subtitle }}</span>
                <span
                    :id="`${article.id}-${i}`"
                    @click="copyToClipboard(`${currentUrl}#${article.id}-${i}`)"
                    class="text-[2rem] font-light no-underline change-col-at-hovering cursor-pointer-at-hovering"
                >
                    {{ t("article.linkToThatQuote") }}
                </span>
            </h2>
            <div class="space-y-1 text-(--tertiary)">
                <p
                    class="md:font-thin md:text-3xl"
                    v-for="(line, j) in section.items"
                    :key="j"
                >
                    {{ line }}
                </p>
            </div>
        </section>
    </main>
    <main v-else class="h-96 flex justify-center items-center my-12">
        <section class="h-fit block text-center">
            <h1 class="text-gray-900">
                {{ t("notFound") }}
            </h1>
            <NuxtLink
                :to="ROUTES.HOME"
                class="text-xl text-(--primary) underline underline-offset-4 change-col-at-hovering"
                >{{ t("backToHome") }}</NuxtLink
            >
        </section>
    </main>
</template>

<script setup lang="ts">
import { ROUTES } from "~/utils/routes";
import circumSaveDown from "~/assets/icons/circum-save-down.png";

const { t } = useI18n();
const route = useRoute();
const config = useRuntimeConfig();
let currentUrl = "/";
const ERROR_ID_NOT_FOUND = "UNKNOW_ID";

const { articles } = useArticles();
const article = computed(() => {
    const currentId = Number(route.params.id);
    if (!Number.isInteger(currentId)) return ERROR_ID_NOT_FOUND;
    return (
        articles.value.find((a) => a.id === currentId.toString()) ??
        ERROR_ID_NOT_FOUND
    );
});

const seoTitle = (
    article.value !== ERROR_ID_NOT_FOUND ? article.value.title : t("notFound")
) as string;
const seoDesc = (
    article.value !== ERROR_ID_NOT_FOUND
        ? article.value.content[0]?.subtitle
        : t("notFound")
) as string;
const saveCurrentTab = () => {
    window.print()
}

useSeoMeta({
    title: () => seoTitle,
    description: () => seoDesc,
    ogTitle: () => seoTitle,
    ogDescription: () => seoDesc,
});
useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: seoTitle,
                description: seoDesc,
                applicationCategory: "ProductivityApplication",
                operatingSystem: "Web",
            }),
        },
    ],
});

onMounted(() => (currentUrl = window.location.href));
</script>

<style lang="css">
@import "~/assets/css/alert.css";
</style>
