<template>
    <main>
        <h1>{{ $t("title") }}</h1>
        <p>
            {{ $t("description") }}
            <a
                href="https://ethicalarchitect.fr/"
                target="__blank"
                class="underline"
                >{{ $t("rootWebsite") }}</a
            >
        </p>
        <p class="flex items-center">
            <span>{{ $t("callToAction") }}</span>
            <a
                href="https://ethicalarchitect.fr/contact"
                class="hover:text-blue-600 hover:cursor"
                target="__blank"
            >
                <img
                    :src="letterBold"
                    alt="Letter bold"
                    width="32px"
                    class="ms-1"
                />
            </a>
        </p>

        <section>
            <h2>{{ $t("articleSection.title") }}</h2>
            <p>{{ $t("articleSection.description") }}</p>
        </section>

        <div class="my-4">
            <section
                v-for="(article, index) in lastArticles"
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
                    <h3
                        class="change-col-at-hovering cursor-pointer-at-hovering"
                    >
                        {{ article.title }}
                    </h3>
                    <p>{{ article.teaser }}</p>
                    <span class="text-black/80">{{
                        formatDate(article.createdAt, $getLocale())
                    }}</span>
                </section>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import "~/assets/css/styles.css";
import letterBold from "~/assets/icons/letter-bold.png";
import { useArticles } from "~/composables/useArticles";
import { formatDate } from "~/utils/formatDate";
import { useI18n } from "#imports";

const lastArticles = useArticles().slice(-3);
const { $getLocale } = useI18n();
</script>
