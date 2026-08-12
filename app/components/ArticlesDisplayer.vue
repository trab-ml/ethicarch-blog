<template>
    <div :class="boxStyle">
        <h2>{{ filtersConfig }}</h2>
        <ArticleFilters
            v-if="!lastArticles"
            v-model:search="search"
            v-model:sortByDate="sortByDate"
            v-model:resetFilters="resetFilters"
        />
        <section
            v-for="(article, index) in articleList"
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
import { ASCENDING_SORT } from "~/utils/types/global";

const { boxStyle, lastArticles } = defineProps({
    boxStyle: String,
    lastArticles: Boolean,
});

const search = ref("");
const sortByDate = ref(ASCENDING_SORT);
const resetFilters = ref(false);

const { $getLocale } = useI18n();
const articleList = lastArticles ? useArticles().slice(-3) : useArticles();

const filtersConfig = computed(() => {
    return {
        lookingFor: search.value,
        isAscSort: sortByDate.value === ASCENDING_SORT ? "yes" : "no",
        isReset: resetFilters.value === true ? "yes" : "no",
    };
});
</script>
