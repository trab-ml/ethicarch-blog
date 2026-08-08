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
                <img :src="letterBold" alt="Letter bold" width="32px" />
            </a>
        </p>

        <section>
            <h2>{{ $t("articleSection.title") }}</h2>
            <p>{{ $t("articleSection.description") }}</p>
        </section>
    </main>
</template>

<script setup>
import "~/assets/css/styles.css";
import letterBold from "~/assets/icons/letter-bold.png";
</script>
