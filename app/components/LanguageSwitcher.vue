<template>
    <div>
        <div class="flex gap-1 border">
            <button
                v-for="locale in $getLocales()"
                :key="locale.code"
                :disabled="locale.code === storedLang"
                @click="
                    () => {
                        storedLang = locale.code;
                        switchLanguage();
                    }
                "
                class="px-[0.15rem] capitalize lang-btn"
                :class="locale.code === storedLang ? 'current-lang' : ''"
            >
                {{ locale.code }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $getLocale, $switchLocale, $getLocales } = useNuxtApp();

const storedLang = ref();

const switchLanguage = () => {
    $switchLocale(storedLang.value);
    localStorage.setItem("lang", storedLang.value);
};

onMounted(() => {
    storedLang.value = localStorage.getItem("lang") ?? $getLocale();
    $switchLocale(storedLang.value);
});
</script>

<style scoped>
button.lang-btn {
    padding-right: 4px;
    border-right: 1px solid gray;
}
button.lang-btn.current-lang {
    color: var(--primary);
    font-weight: bolder;
}
button.lang-btn:last-child {
    border: 0;
}
</style>
