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
                <a :href="`/posts/${article.id}`">
                    <img
                        :src="`/imgs/${article.imgUrl}`"
                        :alt="article.imgAlt"
                        class="border-4 sm:border-8 border-black/40 rounded-xl cursor-pointer-at-hovering hover:border-[--primary]"
                        :class="
                            index % 2 == 0
                                ? 'skew-x-3 -skew-y-3'
                                : '-skew-x-3 skew-y-2'
                        "
                    />
                </a>
            </div>
            <section class="sm:w-1/2">
                <a :href="`/posts/${article.id}`"
                    ><h3
                        class="change-col-at-hovering cursor-pointer-at-hovering"
                    >
                        {{ article.title }}
                    </h3></a
                >
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

const { articles } = useArticles();

const baseArticles = computed(() =>
    lastArticles ? articles.value.slice(-3) : articles.value,
);

const sortedArticles = computed(() => {
    let list: ArticleType[] = baseArticles.value;
    if (search.value != "") {
        list = sortByTitle(list);
    }
    return sortByCreationDate(list, sortByDate.value === DESCENDING_SORT);
});

watch(resetFilters, (value) => {
    if (value === true) cleanUpFilters();
});

const sortByTitle = (articles: ArticleType[]) => {
    return articles.filter((article) => article.title.includes(search.value));
};

const sortByCreationDate = (articles: ArticleType[], isDesc: boolean) => {
    return [...articles].sort((art1, art2) => {
        const art1Date = new Date(art2.createdAt);
        const art2Date = new Date(art1.createdAt);
        return isDesc
            ? art2Date > art1Date
                ? -1
                : 1
            : art2Date > art1Date
              ? 1
              : -1;
    });
};

const cleanUpFilters = () => {
    search.value = "";
    sortByDate.value = DESCENDING_SORT;
    resetFilters.value = false;
};
</script>
