<template>
    <main v-if="article != 'KO' && article != undefined">
        <section
            class="w-full flex flex-col my-8 border rounded-xl gap-2 sm:flex-row"
        >
            <div class="sm:w-1/2">
                <img
                    :src="`/imgs/${article.imgUrl}`"
                    :alt="article.imgAlt"
                    class="border-4 sm:border-8 border-black/40 rounded-xl"
                />
            </div>
            <section class="sm:w-1/2">
                <h1
                    class="change-col-at-hovering cursor-pointer-at-hovering"
                    @click="copyToClipboard(currentFullPath)"
                >
                    {{ article.title }}
                </h1>
                <p>{{ article.teaser }}</p>
                <span class="text-black/80">{{
                    formatDate(article.createdAt, $getLocale())
                }}</span>
            </section>
        </section>
        <section v-for="(section, i) in article.content" :key="i" class="mb-8">
            <h2 class="font-semibold mb-3 border-b pb-1">
                {{ section.subtitle }}
            </h2>
            <div class="space-y-1 text-(--tertiary)">
                <p v-for="(line, j) in section.items" :key="j">
                    {{ line }}
                </p>
            </div>
        </section>
    </main>
    <main v-else>
        {{ $t("notFound") }}
    </main>
</template>

<script setup lang="ts">
const { $t } = useI18n();
const route = useRoute();
const currentFullPath = import.meta.env.VITE_BASE_URL + route.fullPath;

const findById = () => {
    try {
        if (!route.params.id) return "KO";
        const currentId: number = parseInt(route.params.id as string);
        return useArticles()[currentId - 1];
    } catch (parsingErr) {
        return "KO";
    }
};
const article = findById();
</script>

<style lang="css">
@import "~/assets/css/alert.css";
</style>
