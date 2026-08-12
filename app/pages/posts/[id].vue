<template>
    <main v-if="article != 'KO'">
        <h1>{{ article?.title }}</h1>
        <p>{{ article?.teaser }}</p>
        <p>{{ article?.content }}</p>
        <p>{{ article?.createdAt }}</p>
        <p>route.params : {{ route.params }}</p>
    </main>
    <main v-else>
        {{ $t("posts.notFound") }}
    </main>
</template>

<script setup lang="ts">
const route = useRoute();
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
