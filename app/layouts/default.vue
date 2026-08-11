<template>
    <div
        class="relative w-60 min-h-screen flex flex-col mx-auto text-sm sm:text-xl sm:w-3/5"
    >
        <header class="fixed w-60 mx-auto bg-transparent sm:w-3/5 z-40">
            <nav
                ref="headerNav"
                class="flex justify-center gap-2 mt-3 p-2 border-2 border-black/60 rounded-xl"
            >
                <NuxtLink to="/">{{ $t("header.home") }}</NuxtLink>
                <NuxtLink to="/articles">{{ $t("header.articles") }}</NuxtLink>
                <LanguageSwitcher />
            </nav>
        </header>
        <main class="mt-12 mb-6 text-justify z-30 sm:text-left">
            <slot />
        </main>
        <footer class="my-3">
            <ul
                class="absolute bottom-3 w-full flex items-center gap-1 p-1 border-2 border-black/60 rounded-xl text-[0.70rem] sm:text-xl sm:justify-center"
            >
                <li>
                    <span>{{ $t("footer.author.prename") }}</span>
                    <a href="https://ethicalarchitect.fr/" target="__blank">{{
                        $t("footer.author.name")
                    }}</a>
                </li>
                <li>|</li>
                <li>
                    <span>{{ $t("footer.support.prename") }}</span>
                    <a href="https://nuxt.com/" target="__blank">{{
                        $t("footer.support.name")
                    }}</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup lang="ts">
const headerNav = ref<HTMLElement | null>(null);

const handleScroll = () => {
    if (!headerNav.value) return;

    if (window.scrollY > 90) {
        headerNav.value.style.backgroundColor = "var(--secondary)";
    } else {
        headerNav.value.style.backgroundColor = "#fff";
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
