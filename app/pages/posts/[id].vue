<template>
    <main v-if="article != ERROR_ID_NOT_FOUND && article != undefined">
        <h1
            class="change-col-at-hovering cursor-pointer-at-hovering"
            @click="copyToClipboard(currentFullPath)"
        >
            {{ article.title }}
        </h1>
        <div
            class="w-full flex flex-col items-center my-4 border rounded-xl gap-2 sm:flex-row"
        >
            <div class="sm:w-1/2">
                <img
                    :src="`/imgs/${article.imgUrl}`"
                    :alt="article.imgAlt"
                    class="border-4 sm:border-8 border-black/40 rounded-xl"
                />
            </div>
            <section class="sm:w-1/2">
                <p class="md:font-thin md:text-3xl">{{ article.teaser }}</p>
                <span class="text-black/80">{{
                    formatDate(article.createdAt, $getLocale())
                }}</span>
            </section>
        </div>
        <section v-for="(section, i) in article.content" :key="i" class="mb-8">
            <h2 class="mb-3 border-b pb-1">
                <span>{{ section.subtitle }}</span>
                <span
                    :id="`${article.id}-${i}`"
                    @click="
                        copyToClipboard(`${currentFullPath}#${article.id}-${i}`)
                    "
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

const { t } = useI18n();
const route = useRoute();
const currentFullPath = import.meta.env.VITE_BASE_URL + route.fullPath;
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

useSeoMeta({
    title: () => seoTitle,
    description: () => seoDesc,
    ogTitle: () => seoTitle,
    ogDescription: () => seoDesc,
});
</script>

<style lang="css">
@import "~/assets/css/alert.css";
</style>
