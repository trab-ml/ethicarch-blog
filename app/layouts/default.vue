<template>
    <div class="relative w-60 min-h-screen flex flex-col mx-auto text-sm">
        <header class="fixed w-60 mx-auto">
            <nav
                class="flex justify-center gap-2 mt-3 p-2 border-2 border-black/60 rounded-xl"
            >
                <NuxtLink to="/">{{ $t("header.home") }}</NuxtLink>
                <NuxtLink to="/articles">{{ $t("header.articles") }}</NuxtLink>
                <NuxtLink to="/about">{{ $t("header.about") }}</NuxtLink>
                <LanguageSwitcher />
            </nav>
        </header>
        <main class="mt-12 text-justify sm:text-left">
            <slot />
        </main>
        <footer>
            <ul class="absolute bottom-3 flex items-center gap-1 p-1 border-2 border-black/60 rounded-xl text-[0.76rem]">
                <li>
                    <span>{{$t("footer.author.prename")}}</span>
                    <a href="https://ethicalarchitect.fr/" target="__blank"
                        >{{$t("footer.author.name")}}</a
                    >
                </li>
                <li>
                    <span>{{$t("footer.support.prename")}}</span>
                    <a href="https://nuxt.com/" target="__blank"
                        >{{$t("footer.support.name")}}</a
                    >
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
</script>

<style lang="css" scoped>
footer a {
    text-decoration: underline;
}
</style>
