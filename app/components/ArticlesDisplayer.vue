<template>
    <div :class="boxStyle">
        <ArticleFilters
            v-if="!lastArticles"
            v-model:search="search"
            v-model:sortByDate="sortByDate"
            v-model:resetFilters="resetFilters"
        />
        <section
            v-for="(article, index) in sortedArticles"
            class="w-full flex flex-col my-8 border rounded-xl gap-2 sm:flex-row"
        >
            <div class="sm:w-1/2">
                <img
                    :src="`imgs/${article.imgUrl}`"
                    :alt="article.imgAlt"
                    class="border-4 sm:border-8 border-black/40 rounded-xl"
                    :class="
                        index % 2 == 0
                            ? 'skew-x-3 -skew-y-3'
                            : '-skew-x-3 skew-y-2'
                    "
                />
            </div>
            <section class="sm:w-1/2">
                <h3 class="change-col-at-hovering cursor-pointer-at-hovering">
                    {{ article.title }}
                </h3>
                <p>{{ article.teaser }}</p>
                <span class="text-black/80">{{
                    formatDate(article.createdAt, $getLocale())
                }}</span>
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { ArticleType } from "~/utils/types/article";
import { DESCENDING_SORT } from "~/utils/types/global";

const { boxStyle, lastArticles } = defineProps({
    boxStyle: String,
    lastArticles: Boolean,
});

const search = ref("");
const sortByDate = ref(DESCENDING_SORT);
const resetFilters = ref(false);

const { $getLocale } = useI18n();

const articleList = lastArticles ? useArticles().slice(-3) : useArticles();

const sortedArticles = computed(() => {
    if (resetFilters.value === true) cleanUpFilters();

    let articles: ArticleType[] = articleList;
    if (search.value != "") {
        articles = sortByTitle(articleList);
    }

    if (sortByDate.value === DESCENDING_SORT) {
        articles = sortByCreationDate(articles, true);
    } else {
        articles = sortByCreationDate(articles, false);
    }

    return articles;
});

const sortByTitle = (articles: ArticleType[]) => {
    return articles.filter((article) => article.title.includes(search.value));
};

const sortByCreationDate = (articles: ArticleType[], isDesc: boolean) => {
    return articles.sort((art1, art2) => {
        const art1Date = new Date(art2.createdAt);
        const art2Date = new Date(art1.createdAt);
        if (isDesc) {
            return art2Date > art1Date ? -1 : 1;
        } else {
            return art2Date > art1Date ? 1 : -1;
        }
    });
};

const cleanUpFilters = () => {
    search.value = "";
    sortByDate.value = DESCENDING_SORT;
    resetFilters.value = false;
};
</script>
