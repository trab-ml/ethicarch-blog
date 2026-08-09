<template>
    <div>
        <div class="flex gap-1 border">
            <button
                v-for="locale in $getLocales()"
                :key="locale.code"
                :disabled="locale.code === $getLocale()"
                @click="() => $switchLocale(locale.code)"
                class="capitalize lang-btn"
                :class="$getLocale() == locale.code ? 'current-lang' : ''"
            >
                {{ $t(locale.code) }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { useNuxtApp } from "#imports";

const { $getLocale, $switchLocale, $getLocales, $t } = useNuxtApp();
</script>

<style scoped>
button.lang-btn:first-child {
    padding-right: 2px;
    border-right: 1px solid gray;
}
button.lang-btn.current-lang {
    color: var(--primary);
    font-weight: bolder;
}
</style>