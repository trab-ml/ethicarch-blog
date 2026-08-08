<template>
    <header>
        <nav
            class="flex justify-center gap-2 mt-3 p-2 border-2 border-black/60 rounded-xl"
        >
            <NuxtLink to="/">{{ $t('header.home') }}</NuxtLink>
            <NuxtLink to="/articles">{{ $t('header.articles') }}</NuxtLink>
            <NuxtLink to="/about">{{ $t('header.about') }}</NuxtLink>
            <LanguageSwitcher />
        </nav>
    </header>
</template>

<script setup>
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
</script>
