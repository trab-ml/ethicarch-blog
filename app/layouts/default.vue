<template>
    <div class="w-60 flex flex-col mx-auto text-sm">
        <header>
            <nav
                class="flex justify-center gap-2 mt-3 p-2 border-2 border-black/60 rounded-xl"
            >
                <NuxtLink to="/">{{ $t("header.home") }}</NuxtLink>
                <NuxtLink to="/articles">{{ $t("header.articles") }}</NuxtLink>
                <NuxtLink to="/about">{{ $t("header.about") }}</NuxtLink>
                <LanguageSwitcher />
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <ul class="flex items-center gap-2">
                <li>
                    Build by
                    <a href="https://ethicalarchitect.fr/" target="__blank"
                        >Ethicarch</a
                    >
                </li>
                <li>
                    Powered by
                    <a href="https://nuxt.com/" target="__blank">Nuxt</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
</script>
